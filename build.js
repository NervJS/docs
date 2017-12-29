const cp = require("child_process");
const ghPages = require("gh-pages");
const ora = require("ora");
const spinner = ora("Publishing gitbooks...").start();

cp.exec("npm run book", err => {
  if (!err) {
    ghPages.publish("./_book", err => {
      if (!err) {
        spinner.succeed("Publish successfully.");
      } else {
        spinner.fail(err);
      }
    });
  } else {
    spinner.fail(err);
  }
});
