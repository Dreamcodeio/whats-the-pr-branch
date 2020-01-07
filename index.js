const core = require("@actions/core");

const github = require("@actions/github");

const branchName = core
  .getInput("prefix")
  .split(",")
  .map(prefix => prefix.trim())
  .reduce((acc, curr) => acc.replace(curr, ""), process.env.GITHUB_HEAD_REF);

core.setOutput("branchName", branchName);

console.log(
  `What's the branch name without prefix (if provided)?: ${branchName}`
);
console.log(`You can use this output as 'steps.<step id>.outputs.branchName'`);
