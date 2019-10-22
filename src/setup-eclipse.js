const core = require('@actions/core')
const {installECLiPSe} = require('./installer')

main().catch(err => {
  core.setFailed(err.message)
})

async function main() {
  checkPlatform()

  const eclipseSpec = core.getInput('eclipse-version', {required: true})

  console.log(`##[group]Installing ECLiPSe ${eclipseSpec}`)
  await installECLiPSe(eclipseSpec)
  console.log(`##[endgroup]`)
}

function checkPlatform() {
  if (process.platform !== 'linux')
    throw new Error(
      '@logtalk-actions/setup-eclipse only supports Ubuntu Linux at this time'
    )
}
