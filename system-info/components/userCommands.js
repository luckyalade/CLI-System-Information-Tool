/**
 * Shows user information using the 'os' module and Commander.js.
 * @module showUserInfo
 */

const os = require("os");
const { program } = require("commander");

/**
 * Registers a new command 'userinfo' with Commander.js.
 * When executed, it displays the current user's username and user ID.
 * @function showUserInfo
 */
function showUserInfo() {
  console.log("\nUser Information:");

  program
    .command("userinfo")
    .description("Show user information")
    .action(() => {
      console.log("\nUser Information: ");
      const userInfo = os.userInfo();
      console.log(
        `\nUsername: ${userInfo.username} \nUser ID: ${userInfo.uid}\n`
      );
    });
}

module.exports = showUserInfo;
