# setup-protoc

[![Check npm Dependencies status](https://github.com/step-security/setup-protoc/actions/workflows/check-npm-dependencies-task.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/check-npm-dependencies-task.yml)
![test](https://github.com/step-security/setup-protoc/workflows/test/badge.svg)
[![Check Markdown status](https://github.com/step-security/setup-protoc/actions/workflows/check-markdown-task.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/check-markdown-task.yml)
[![Check License status](https://github.com/step-security/setup-protoc/actions/workflows/check-license.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/check-license.yml)
[![Check Taskfiles status](https://github.com/step-security/setup-protoc/actions/workflows/check-taskfiles.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/check-taskfiles.yml)
[![Integration Tests status](https://github.com/step-security/setup-protoc/actions/workflows/test-integration.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/test-integration.yml)
[![Check npm status](https://github.com/step-security/setup-protoc/actions/workflows/check-npm-task.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/check-npm-task.yml)
[![Check TypeScript status](https://github.com/step-security/setup-protoc/actions/workflows/check-typescript-task.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/check-typescript-task.yml)
[![Check tsconfig status](https://github.com/step-security/setup-protoc/actions/workflows/check-tsconfig-task.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/check-tsconfig-task.yml)
[![Check Packaging status](https://github.com/step-security/setup-protoc/actions/workflows/check-packaging-ncc-typescript-task.yml/badge.svg)](https://github.com/step-security/setup-protoc/actions/workflows/check-packaging-ncc-typescript-task.yml)

This action makes the `protoc` compiler available to Workflows.

## Usage

To get the latest stable version of `protoc` just add this step:

```yaml
- name: Install Protoc
  uses: step-security/setup-protoc@v3
```

If you want to pin a major or minor version you can use the `.x` wildcard:

```yaml
- name: Install Protoc
  uses: step-security/setup-protoc@v3
  with:
    version: "23.x"
```

You can also require to include releases marked as `pre-release` in Github using the `include-pre-releases` flag (the dafault value for this flag is `false`)

```yaml
- name: Install Protoc
  uses: step-security/setup-protoc@v3
  with:
    version: "23.x"
    include-pre-releases: true
```

To pin the exact version:

```yaml
- name: Install Protoc
  uses: step-security/setup-protoc@v3
  with:
    version: "23.2"
```

The action queries the GitHub API to fetch releases data, to avoid rate limiting,
pass the default token with the `repo-token` variable:

```yaml
- name: Install Protoc
  uses: step-security/setup-protoc@v3
  with:
    repo-token: ${{ secrets.GITHUB_TOKEN }}
```

## Enable verbose logging for a pipeline

Additional log events with the prefix ::debug:: can be enabled by setting the secret `ACTIONS_STEP_DEBUG` to `true`.

See [step-debug-logs](https://github.com/actions/toolkit/blob/master/docs/action-debugging.md#step-debug-logs) for reference.

