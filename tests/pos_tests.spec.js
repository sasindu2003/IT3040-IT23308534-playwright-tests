const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Test Cases - Singlish to Sinhala', () => {

  test('Pos_Fun_0001 - Simple sentence conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama pansal yanavaa');

    await expect(outputBox).not.toHaveValue('', { timeout: 20000 });

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0002 - Greeting conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama bath kaalaa,beheth bonnm');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0003 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('vaessa nisaa mama pansal giyee naehae');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  // 👉 SAME PATTERN USE
  // Add remaining Pos_Fun_004 → Pos_Fun_024 
  
  test('Pos_Fun_0004 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama me prashnaya teacher ta kiynnda dha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0005 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oya meese methanata genna');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

  test('Pos_Fun_0006 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama kohomahari meka karanavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

   

  test('Pos_Fun_0007 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama bath kanne nae');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0008 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill(' suba rathriyak!');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0009 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mata podi udhavvak karanna puLuvandha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0010 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('hari ehenam, mama ennam');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0011 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0012 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('hari machan, balamu');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0013 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('samavenna');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0014 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('bohoma hondai');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0015 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill(' mama udheema iskolee yanavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0017 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('podda podda');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0018 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama iiyee pansal giyaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0019 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama dhaen vaeda karanavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0020 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama heta pansal yanavaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0021 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama ehema karannee naehae');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0022 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('mama gedhara yanvaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0023 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('api gamanak yamu');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });




  test('Pos_Fun_0024 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('karuNaakaralaa mata udhavvak karanna puLuvandha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });



  test('Pos_Fun_0025 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('oya facebook pavichchi karanvadha?');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });


  test('Pos_Fun_0026 - Interrogative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');

    const inputBox = page.locator('textarea').first();
    const outputBox = page.locator('textarea').last();

    await inputBox.fill('maatharata loku vassak avaa');

    await expect(outputBox).not.toHaveValue('');

    const output = await outputBox.inputValue();
    expect(output.length).toBeGreaterThan(0);
  });

});


