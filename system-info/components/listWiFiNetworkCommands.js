/**
 * @module listWiFiNetworkCommands
 * @description This module provides functionality to list available WiFi networks.
 */

const wifi = require("node-wifi");
const { program } = require("commander");

// Initialize the wifi module
wifi.init({
  iface: null, // You can specify a network interface if needed, e.g., 'wlan0'
});

/**
 * Registers a new command 'wifi' with Commander.js.
 * When executed, it scans and displays available WiFi networks with their SSIDs and signal levels.
 * @function showWifiInformation
 */
function showWifiInformation() {
  program
    .command("wifi")
    .description("Show available WiFi networks")
    .action(async () => {
      try {
        // Scan for WiFi networks
        const networks = await wifi.scan();
        console.log("\nAvailable WiFi Networks:");
        networks.forEach((network) => {
          console.log(
            `SSID: ${network.ssid}, Signal Level: ${network.signal_level}\n`
          );
        });
      } catch (error) {
        console.error("Error scanning WiFi networks:", error, "\n");
      }
    });
}

module.exports = showWifiInformation;
