# What is the PR branch name?

Do you need the branch name without a prefix like `feature` or `hotfix`? Use this action to remove the prefix and get the result as output

Example:

```yaml
name: CI

on: 
  pull_request:
    types: [opened, labeled]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: Dreamcodeio/whats-the-pr-branch@master
      id: branchName
      with:
        prefix: feature/,hotfix/
    - name: What's the PR branch name? 
      run: echo "${{ steps.branchName.outputs.branchName }}" 
```
