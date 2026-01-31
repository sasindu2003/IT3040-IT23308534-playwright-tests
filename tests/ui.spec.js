const { test, expect } = require('@playwright/test');

test.describe('Positive UI Test Cases', () => {

  test('Pos_UI_0001 - UI handles multiple spaces correctly', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('adha           api           sellam          kalaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();

    // UI validation
    expect(output).not.toContain(' අද           අපි          සෙල්ලම්           කලා  ');
    expect(output.length).toBeGreaterThan(0);
  });

});