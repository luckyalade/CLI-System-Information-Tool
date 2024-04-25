/**
 * @module osCommands
 * @description This module provides functionality to display operating system information.
 */

const os = require("os");
const { program } = require("commander");

/**
 * Registers a new command 'os' with Commander.js.
 * When executed, it displays various operating system information.
 * @function showOSInformation
 */
function showOSInformation() {
  program
    .command("os")
    .description("Show OS information")
    .action(() => {
      console.log("\nOS Information:");
      console.log(`\n Name: ${os.type()}`);
      console.log(` Version: ${os.release()}`);
      console.log(` Architecture: ${os.arch()}`);
      console.log(` Platform: ${os.platform()}`);
      console.log(` Hostname: ${os.hostname()}`);
      console.log(` Uptime: ${os.uptime()} seconds`);
      console.log(` Load Average: ${os.loadavg().join(" ")}\n`);
    });
}

module.exports = showOSInformation;
