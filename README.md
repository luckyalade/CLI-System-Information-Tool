# CLI System Information Tool in NodeJS and JavaScript

This project introduces a sophisticated Command Line Interface (CLI) tool designed with Node.js and JavaScript. The tool is meticulously crafted to parse user inputs efficiently and execute commands seamlessly, thereby elevating user engagement and overall experience.

## Overview

The CLI tool is engineered utilizing the robust capabilities of the Node.js framework, complemented by the versatility of the JavaScript programming language. It leverages key libraries such as the Commander Library, renowned for streamlining the development of Command-Line Interfaces within Node.js environments. Additionally, the Chalk Library is integrated to provide comprehensive formatting and aesthetic enhancements to the output generated within the CLI interface.

## Features

- **Node.js and JavaScript Integration:** Harnessing the power of Node.js and JavaScript, the CLI tool ensures robust functionality and flexibility in command execution.
- **Commander Library Utilization:** By incorporating the Commander Library, the tool facilitates seamless parsing of user inputs and streamlined command execution, enhancing overall user experience.
- **Chalk Library for Enhanced Output:** The integration of the Chalk Library enriches the CLI output with advanced formatting options, improving readability and visual appeal.

## Installation

Before running the CLI tool, ensure you have Node.js installed on your system. You can download Node.js from [nodejs.org](https://nodejs.org/).

After installing Node.js, follow these steps to install the required packages:


## Dependencies

1. **Commander Library**: Used for building the CLI tool and defining commands.

   ```bash
   npm install commander
   ```

2. **Chalk Library**: Used for colorizing CLI output.

   ```bash
   npm install chalk
   ```

3. **Battery-Level Library**: Used for retrieving battery information.

   ```bash
   npm install battery-level
   ```

4. **Node-WiFi Library**: Used for WiFi network scanning.

   ```bash
   npm install node-wifi
   ```

5. **OS-Utils Library**: Used for disk information retrieval.

   ```bash
   npm install os-utils
   ```
# CLI System Information Tool

## Modules

### CLI Tool Initialization Module

Responsible for setting up the CLI tool and defining commands. Dependencies: commander library.

#### Components

- `start()` function: Asynchronously starts the CLI tool.

#### Commands
The following commands are defined using the Commander module, which allows us to create command line interfaces in the terminal.

Use either node/npx or as the executable ./filename command followed by `"sysInfo.js"` and the commands below: 

1. `-v, --version`: Displays the version of the software in use.

2. `-a, --all`: Runs all available system information functions.

3. `-b, --battery`: Retrieves battery level information using the Battery Level library.

4. `-n, --networks`: Scans available networks using the Node-WiFi library.

5. `-d, --disk`: Gets disk usage information using the OS-Utils library.

6. `_unknownCommand(cmd)` function: Handles unknown command errors by displaying an error message to the user.

- `sysInfo`: Runs the System Information Tool.
- `os`: Shows OS information.
- `cpu`: Shows CPU information.
- `memory`: Shows memory information.
- `disk`: Shows disk information.
- `network`: Shows network information.
- `battery`: Shows battery information.
- `wifi`: Shows available WiFi networks.
- `userinfo`: Shows user information.

### OS Information Module

Displays information about the operating system. Dependencies: os module.

#### Components

- `osInformation()` function: Displays various OS-related information.

### CPU Information Module

Displays information about the CPU.

#### Components

- `cpuInformation()` function: Displays CPU-related information.

### Memory Information Module

Displays information about system memory (RAM and Swap).

#### Components

- `memoryInformation()` function: Displays memory-related information.

### Disk Information Module

Displays information about disk usage and partitions. Dependencies: os-utils library.

#### Components

- `diskInformation()` function: Displays disk-related information.

### Network Information Module

Displays information about network interfaces.

#### Components

- `networkInformation()` function: Displays network-related information.

### Battery Information Module

Displays detailed information about battery level and status. Dependencies: battery-level library, PowerShell (for Windows).

#### Components

- `showBatteryInformation()` function: Shows battery-related information including battery level and detailed information retrieved using PowerShell on Windows.

### WiFi Information Module

Displays information about available WiFi networks. Dependencies: node-wifi library.

#### Components

- `showWifiInformation()` function: Shows available WiFi networks and their signal levels.

### User Information Module

Displays information about the current user.

#### Components

- `userInfo()` function: Displays user-related information.

## Conclusion

Through the fusion of Node.js, JavaScript, and key libraries like Commander and Chalk, this CLI tool represents a pinnacle of modern command-line interface development. Its meticulous design and feature-rich functionality ensure a superior user experience and heightened engagement, making it a valuable asset for various applications and development environments.
