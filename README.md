# setup-eclipse

This actions sets up a ECliPSe environment for use in workflows.

![](https://github.com/logtalk-actions/setup-eclipse/workflows/Test/badge.svg)
![](https://github.com/logtalk-actions/setup-eclipse/workflows/Logtalk/badge.svg)

# Usage

See [action.yml](action.yml).

# Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: logtalk-actions/setup-eclipse@master
        with:
          eclipse-version: latest
      - uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - uses: actions/checkout@v1
```

# License

The scripts and documentation in this project are released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development. This action only supports Linux at this time.
