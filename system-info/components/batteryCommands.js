/**
 * @module batteryCommands
 * @description This module provides functionality to display battery information.
 */

const batteryLevel = require("battery-level");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { program } = require("commander");

/**
 * Registers a new command 'battery' with Commander.js.
 * When executed, it displays battery level percentage and detailed battery information using PowerShell.
 * @function showBatteryInformation
 * @async
 */
async function showBatteryInformation() {
  program
    .command("battery")
    .description("Show battery information")
    .action(async () => {
      try {
        const battery = await batteryLevel();
        console.log(`\nBattery Level: ${(battery * 100).toFixed(2)}%`);

        const { stdout, stderr } = await exec(
          "powershell Get-WmiObject -Class Win32_Battery"
        );
        if (stderr) {
          console.error("Error retrieving battery information:", stderr);
          return;
        }
        console.log(stdout); // Print detailed battery information from PowerShell
      } catch (error) {
        console.error("Error retrieving battery information:", error);
      }
    });
}

module.exports = showBatteryInformation;
