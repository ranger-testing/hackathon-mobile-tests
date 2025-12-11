# Hackathon Mobile Tests

Mobile app test suite using WebdriverIO + Appium for AWS Device Farm.

## Overview

This repository contains sample mobile tests that can be run on AWS Device Farm. The tests are written using WebdriverIO with Appium for cross-platform mobile testing.

## Prerequisites

- Node.js 18+
- npm or yarn
- For local testing: Appium server and iOS Simulator / Android Emulator

## Installation

```bash
npm install
```

## Running Tests

### On AWS Device Farm

Tests are automatically configured to use Device Farm environment variables when running in the Device Farm environment.

```bash
npm test
```

### Locally

1. Start Appium server: `npx appium`
2. Start your simulator/emulator
3. Set the `APP_PATH` environment variable to your .ipa or .apk file
4. Run tests:

```bash
APP_PATH=./apps/sample.ipa npm run test:local
```

## Project Structure

```
├── test/
│   ├── specs/          # Test specifications
│   └── pageobjects/    # Page object models
├── apps/               # Place app builds here for local testing
├── wdio.conf.js        # WebdriverIO config for Device Farm
├── wdio.local.conf.js  # WebdriverIO config for local development
└── package.json
```

## Configuration

### Device Farm Environment Variables

When running on AWS Device Farm, the following environment variables are automatically set:

- `APPIUM_SERVER_HOST` - Appium server hostname
- `APPIUM_SERVER_PORT` - Appium server port
- `DEVICEFARM_APP_PATH` - Path to the uploaded app
- `DEVICEFARM_DEVICE_NAME` - Device name
- `DEVICEFARM_DEVICE_PLATFORM_NAME` - Platform (iOS/Android)
- `DEVICEFARM_DEVICE_OS_VERSION` - OS version

## License

MIT
