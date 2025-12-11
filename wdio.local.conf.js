/**
 * WebdriverIO configuration for local development
 *
 * This config is used when running tests locally with a simulator/emulator.
 * Requires Appium to be running locally.
 */

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',

    specs: ['./test/specs/**/*.js'],
    exclude: [],

    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:app': process.env.APP_PATH || './apps/sample.ipa',
        'appium:deviceName': 'iPhone 15 Pro',
        'appium:platformVersion': '17.0',
        'appium:noReset': true,
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};
