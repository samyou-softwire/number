import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Browser, Builder, By, WebDriver } from "selenium-webdriver"

describe("app", () => {
    let driver: WebDriver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser(Browser.CHROME).build();

        await driver.manage().setTimeouts({ implicit: 2000 });
    });

    it('loads', async () => {
        await driver.get('http://localhost:5173/');

        const title = await driver.getTitle();

        expect(title).to.equal("Random Numbers");
    });

    it('shows some random facts', async () => {
        await driver.get('http://localhost:5173/');

        const addButtonField = await driver.findElement(By.id('add-number'));
        await addButtonField.sendKeys('5');
        
        const submitButton = await driver.findElement(By.id('add-button'));
        await submitButton.click();

        const numberSubtitle = await driver.findElement(By.id('number-subtitle-5'));
        expect(await numberSubtitle.getText()).to.equal('5');
    });

    afterAll(async () => {
        await driver.close();
    });
})