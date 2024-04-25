/**
 * @module networkCommands
 * @description This module provides functionality to display network information.
 */

const os = require("os");
const { program } = require("commander");

/**
 * Registers a new command 'network' with Commander.js.
 * When executed, it displays network information such as interface names, IP addresses, MAC addresses, netmasks, and families.
 * @function showNetworkInformation
 */
function showNetworkInformation() {
  program
    .command("network")
    .description("Show network information")
    .action(() => {
      console.log("\nNetwork Information:");
      const networkInterfaces = os.networkInterfaces();

      Object.keys(networkInterfaces).forEach((iface) => {
        console.log(` Interface: ${iface}`);
        networkInterfaces[iface].forEach((info) => {
          console.log(` IP Address: ${info.address}`);
          console.log(` MAC Address: ${info.mac}`);
          console.log(` Netmask: ${info.netmask}`);
          console.log(` Family: ${info.family}\n`);
        });
      });
    });
}

module.exports = showNetworkInformation;
