/**
 * @module cpuCommands
 * @description This module provides functionality to display CPU information.
 */

const os = require("os");
const { program } = require("commander");

/**
 * Registers a new command 'cpu' with Commander.js.
 * When executed, it displays CPU information such as model, number of cores, and speed.
 * @function showCPUInformation
 */
function showCPUInformation() {
  program
    .command("cpu")
    .description("Show CPU information")
    .action(() => {
      console.log("\nCPU Information:");
      console.log(` Model: ${os.cpus()[0].model}`);
      console.log(` Cores: ${os.cpus().length}`);
      console.log(` Speed: ${os.cpus()[0].speed} MHz\n`);
    });
}

module.exports = showCPUInformation;
