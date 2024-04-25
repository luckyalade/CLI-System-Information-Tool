/**
 * @module memoryCommands
 * @description This module provides functionality to display memory information.
 */

const os = require("os");
const { program } = require("commander");

/**
 * Registers a new command 'memory' with Commander.js.
 * When executed, it displays memory information such as total RAM, free RAM, used RAM, total swap, free swap, and used swap.
 * @function showMemoryInformation
 */
function showMemoryInformation() {
  program
    .command("memory")
    .description("Show memory information")
    .action(() => {
      console.log("\nMemory Information:");
      console.log(
        ` Total RAM: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
      );
      console.log(
        ` Free RAM: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
      );
      console.log(
        ` Used RAM: ${(
          (os.totalmem() - os.freemem()) /
          (1024 * 1024 * 1024)
        ).toFixed(2)} GB`
      );
      console.log(
        ` Total Swap: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
      );
      console.log(
        ` Free Swap: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
      );
      console.log(
        ` Used Swap: ${(
          (os.totalmem() - os.freemem()) /
          (1024 * 1024 * 1024)
        ).toFixed(2)} GB\n`
      );
    });
}

module.exports = showMemoryInformation;
