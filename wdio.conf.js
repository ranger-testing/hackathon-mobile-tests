/**
 * WebdriverIO configuration for AWS Device Farm
 *
 * This config is used when running tests on AWS Device Farm.
 * The Device Farm service injects the APPIUM_* environment variables.
 */

exports.config = {
    // Use the Device Farm Appium endpoint
    hostname: process.env.APPIUM_SERVER_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_SERVER_PORT || '4723', 10),
    path: '/wd/hub',

    specs: ['./test/specs/**/*.js'],
    exclude: [],

    maxInstances: 1,

    capabilities: [{
        platformName: process.env.DEVICEFARM_DEVICE_PLATFORM_NAME || 'iOS',
        'appium:automationName': process.env.DEVICEFARM_DEVICE_PLATFORM_NAME === 'Android'
            ? 'UiAutomator2'
            : 'XCUITest',
        'appium:app': process.env.DEVICEFARM_APP_PATH || process.env.APP_PATH,
        'appium:deviceName': process.env.DEVICEFARM_DEVICE_NAME || 'iPhone',
        'appium:platformVersion': process.env.DEVICEFARM_DEVICE_OS_VERSION || '17.0',
        'appium:noReset': true,
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
