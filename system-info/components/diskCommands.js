/**
 * @module diskCommands
 * @description This module provides functionality to display disk information.
 */

const osUtils = require("os-utils");
const { program } = require("commander");

/**
 * Registers a new command 'disk' with Commander.js.
 * When executed, it displays disk information such as total size, free space, and used space.
 * @function showDiskInformation
 */
function showDiskInformation() {
  program
    .command("disk")
    .description("Show disk information")
    .action(() => {
      console.log("\nDisk Information:");
      osUtils.harddrive((error, diskInfo) => {
        if (error) {
          console.log("Error:", error, "\n");
          return;
        }

        const { total, free, used } = diskInfo;
        if (!isNaN(total) && !isNaN(free) && !isNaN(used)) {
          console.log(
            ` Total Size: ${(total / (1024 * 1024 * 1024)).toFixed(2)} GB`
          );
          console.log(
            ` Free Space: ${(free / (1024 * 1024 * 1024)).toFixed(2)} GB`
          );
          console.log(
            ` Used Space: ${(used / (1024 * 1024 * 1024)).toFixed(2)} GB`
          );
        } else {
          console.log("Error: Invalid disk space values.\n");
        }
      });
    });
}

module.exports = showDiskInformation;
