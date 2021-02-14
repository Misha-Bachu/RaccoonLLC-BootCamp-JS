# RaccoonLLC Boot camp

## Install the project

To install the project follow next commands:
1. Clone repository
2. Run `npm i` to install NPM packages

## Developing
Start application:

```
npm run start
```
Start application in develop mode:
```
npm run watch
```
Check lint errors:
```
npm run lint
```

## Working with git
* Main rule is following git-flow:
* Main branch is master
* Develop brand is `develop`
* Work only in develop branch
* For each new feature/bugfix use separate branch
* Merge code only throught Pull Requests

### Branch naming

For branches use the next format: `[feature/bugfix]/[code]_[branch_name]`

- `feature` - for new features
- `bugfix` - for bug fixes
- `code` is lessons code e.g. LSN-001 for lessons 1
- `branch_name` - short separated by `_` name of branch in lowercase

**Examples**
- `feature/LSN-001_workspace_setup`
- `bugfix/LSN-001_fix_lint_errors`

### Commit namings
For commits use next format: `[code]:[commit_type]: [description]`
- `code` is lessons code e.g. LSN-001 for lessons 1
- `commit_type` - type of commit
    - use `ADD` for commits with features
    - use `FIX` for commits with bugfixes
- `description` should be short and clear. Try to put information about what was done/fixed in this comment

**Examples**
- LSN-001:ADD: Init Express.js server
- LSN-001:FIX: Fix ESlint errors

### For pull request
- PR naming - the same as first commit it the PR
