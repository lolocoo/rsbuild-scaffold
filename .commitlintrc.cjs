const automaticCommitPattern = /^chore\(release\):.*\[skip ci]/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    (commit) => commit === '',
    (commitMsg) => automaticCommitPattern.test(commitMsg),
  ],
}
