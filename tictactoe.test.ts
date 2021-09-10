import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});
test('I can place an x in the upper right square', async () => {

    // let button = await (await driver).findElement(By.id('start-game'));
    // await button.click();
    let cell = await driver.findElement(By.id('cell-0'))
    cell.click()
    let cellText = await driver.findElement(By.id('cell-0')).getText()
    expect(cellText).toBe('X')
    await driver.sleep(2000)
    
});
test('The computer will place an o after an x is placed', async () => {

    // let button = await (await driver).findElement(By.id('start-game'));
    // await button.click();
    let cell = await driver.findElement(By.id('cell-2'))
    cell.click()
    let cellText = await driver.findElement(By.id('cell-3')).getText()
    expect(cellText).toBe('o')
    await driver.sleep(2000)
    
});
test('I can place an x in the lower right square', async () => {

    // let button = await (await driver).findElement(By.id('start-game'));
    // await button.click();
    let cell = await driver.findElement(By.id('cell-8'))
    cell.click()
    let cellText = await driver.findElement(By.id('cell-8')).getText()
    expect(cellText).toBe('X')
    await driver.sleep(2000)
    
});
