const {exec} = require('@actions/exec')
const path = require('path')

module.exports = {installECLiPSe}

/**
 * Install ECLiPSe.
 *
 * @param {string} version
 */
async function installECLiPSe(version) {
  await exec(path.join(__dirname, 'install-eclipse-ubuntu'), [version])
}
