/**
 * Sample test spec for AWS Device Farm Sample App
 *
 * These tests are designed to work with the AWS Device Farm Android Sample App
 * or any app that has basic navigation and input elements.
 */

describe('Sample App Tests', () => {
    it('should launch the app successfully', async () => {
        // Wait for the app to be ready
        await browser.pause(3000);

        // Verify the app launched by checking we have a context
        const contexts = await browser.getContexts();
        expect(contexts).toBeDefined();
        expect(contexts.length).toBeGreaterThan(0);

        console.log('App launched successfully with contexts:', contexts);
    });

    it('should find and interact with a button', async () => {
        // Generic test - find any clickable element
        // This will need to be customized based on the actual app
        const buttons = await $$('//XCUIElementTypeButton | //android.widget.Button');

        if (buttons.length > 0) {
            console.log(`Found ${buttons.length} buttons`);
            const firstButton = buttons[0];
            const isDisplayed = await firstButton.isDisplayed();
            expect(isDisplayed).toBe(true);
        } else {
            console.log('No buttons found - app may have different UI structure');
        }
    });

    it('should take a screenshot', async () => {
        const screenshot = await browser.takeScreenshot();
        expect(screenshot).toBeDefined();
        expect(screenshot.length).toBeGreaterThan(0);
        console.log('Screenshot captured successfully');
    });
});
