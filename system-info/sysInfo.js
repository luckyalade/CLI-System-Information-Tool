#!/usr/bin/env node

/**
 * @module systemInfoTool
 * @description System Information Tool CLI
 * @author Lucky Alade
 */

const os = require("os");
const osUtils = require("os-utils");
const batteryLevel = require("battery-level");
const { program } = require("commander");

// Importing required components
const showOSInformation = require("./components/osCommands");
const showCPUInformation = require("./components/cpuCommands");
const showMemoryInformation = require("./components/memoryCommands");
const showDiskInformation = require("./components/diskCommands");
const showNetworkInformation = require("./components/networkCommands");
const showBatteryInformation = require("./components/batteryCommands");
const showUserInformation = require("./components/userCommands");
const showWifiInformation = require("./components/listWiFiNetworkCommands");

/**
 * Asynchronous function to start the CLI tool
 * @function start
 * @returns {Promise<void>}
 */
async function start() {
  try {
    // Define a custom command 'sysInfo' to trigger the CLI tool
    program.version("v1.0.0").description("System Information Tool");
    program
      .command("info")
      .description("Run the System Information Tool")
      .action(async () => {
        console.log(
          "\nHi, I am Lucky Alade.\nThanks for using this tool. \nFeel free to reach out to me on my social media.\n@luckyalade on all platforms.\n"
        );
      });

    // Invoke and Register the custom command
    showOSInformation();
    showCPUInformation();
    showMemoryInformation();
    showDiskInformation();
    showNetworkInformation();
    showBatteryInformation();
    showUserInformation();
    showWifiInformation();

    program.parse(process.argv);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Call the async function to start the CLI tool
start();
