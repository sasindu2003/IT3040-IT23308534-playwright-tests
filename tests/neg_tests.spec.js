const { test, expect } = require('@playwright/test');

test.describe('Negative Functional Test Cases - Singlish to Sinhala', () => {

  test('Neg_Fun_0001 - Empty input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('sinhalakathaakaramu');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('සින්හලකතාකරමු');
  });

  test('Neg_Fun_0002 - Only spaces input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('Thx machan');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('thanks මචන්');
  });

  test('Neg_Fun_0003 - Numbers only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mata rs 5000 dhenna');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('mata rupi 5000 dhenna');
  });

  test('Neg_Fun_0004 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('velava 5.00 a.m');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('වේලාව ප.ව. 5.00');
  });

  
  test('Neg_Fun_0005 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('niwasak          kuliyata deemata aetha');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('නිවසක් කුලියට ඩේමට ඇත');
  });



  test('Neg_Fun_0006 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('iiye api gedhara enakota                      ballek hitiyaa');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('ඊයෙ අපි ගෙදර එනකොට බල්ලෙක් හිටියා');
  });


  test('Neg_Fun_0007 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('');
  });


  test('Neg_Fun_0008 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('$$maage gama malabe$$');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('මගේ ගම මාලඹේ');
  });


  test('Neg_Fun_0009 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oya mkda karane');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('ඔය මොකද කරනෙ');
  });


  test('Neg_Fun_0010 - Symbols only', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama heta kadeeta giyaa');
    await page.waitForTimeout(2000);

    const output = await outputBox.inputValue();
    expect(output).toBe('මම හෙට කඩේට යනවා');
  });

});