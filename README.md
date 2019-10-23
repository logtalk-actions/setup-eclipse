# setup-eclipse

This actions sets up a ECliPSe environment for use in workflows.

![](https://github.com/logtalk-actions/setup-eclipse/workflows/Test/badge.svg)

# Usage

See [action.yml](action.yml).

# Example

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install ECliPSe backend
        uses: logtalk-actions/setup-eclipse@master
        with:
          eclipse-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
```

# License

This project is released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development. This action only supports Linux at this time.
