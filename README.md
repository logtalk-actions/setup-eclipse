# `setup-eclipse`

This actions sets up an ECliPSe environment for use in workflows.

![](https://github.com/logtalk-actions/setup-eclipse/workflows/Test/badge.svg)

## Usage

See [action.yml](action.yml) for the action metadata. The required `eclipse-version` input parameter specifies the version to be installed (e.g. `'7.0_54'`; no default). If you choose a specific version, make sure that it is still available for downloading from the ECliPSe website.

## Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install ECliPSe backend
        uses: logtalk-actions/setup-eclipse@master
        with:
          eclipse-version: '7.0_54'
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p eclipse
```

## Contributing

Contributions are most welcome. Contributors are expected to uphold the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is released under the [Apache License 2.0](LICENSE).

## Current Status

This action is in active development. This action only supports Linux at this time. The exact version must be specified (i.e. `latest` cannot currently be used).
