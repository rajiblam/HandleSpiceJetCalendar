import {test,expect} from "@playwright/test"

test('Handle Hidden Dropdown',async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const usernameTextBox=await page.getByPlaceholder('Username');
    await usernameTextBox.fill('Admin')
    //Verify username text box contains value Admin
    await expect(usernameTextBox).toHaveValue('Admin')
    
    const passwordTextBox=await page.getByPlaceholder('Password')
    await passwordTextBox.fill('admin123')

    //Verify password text box containa admin123
    await expect(passwordTextBox).toHaveValue('admin123')

    
    const loginButton=await page.locator("//button[normalize-space()='Login']")

    //Verify Login button is enabled
    await expect(loginButton).toBeEnabled()


    await loginButton.click()
    await page.click("//span[text()='PIM']")
    await page.locator("//input[@placeholder='Type for hints...']").nth(0).fill('Rajib')
    await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("A001")
    
    //======================================================================================
    //await page.waitForTimeout(3000)
    await page.click("//label[text()='Employment Status']//parent::div//parent::div//div[@class='oxd-select-text--after']")
    await page.waitForTimeout(1000)
    const allEmployeeStatus=await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//div//span")

    for(let empStatus of allEmployeeStatus)
    {
        const empStatusName=await empStatus.textContent()
        if(empStatusName.includes('Part-Time Internship'))
        {
            await empStatus.click()
            break;
        }
    }

    //======================================================================================

    await page.click("//label[text()='Include']//parent::div//parent::div//div[@class='oxd-select-text--after']")
    await page.waitForTimeout(1000)
    const allIncludeOptions=await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//div//span")

    for(let include of allIncludeOptions)
    {
        const nameInclude=await include.textContent()
        if(nameInclude.includes('Past Employees Only'))
        {
            await include.click()
            break;
        }
    }

     //======================================================================================

     await page.fill("//label[text()='Supervisor Name']//parent::div//parent::div//input","Ravi")
     await page.click("//span[text()='Ravi M B']")

    await page.click("//label[text()='Sub Unit']//parent::div//parent::div//div[@class='oxd-select-text--after']")
     const allSubUnitOptions=await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//div//span")

     for(let subUnit of allSubUnitOptions)
     {
        const nameSubUnit=await subUnit.textContent()
        if(nameSubUnit.includes('Engineering'))
        {
            await subUnit.click()
            break;
        }
     }

     //======================================================================================

    await page.click("//label[text()='Job Title']//parent::div//parent::div//div[@class='oxd-select-text--after']")
    //await page.waitForSelector("//label[text()='Job Title']//parent::div//parent::div//div[@class='oxd-select-text--after']")
   await page.waitForTimeout(1000)
    const allJobTitleOptions=await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//div//span")

    for(let option of allJobTitleOptions)
    {
        const jobTitle=await option.textContent()
        //console.log("Job Title name : ",jobTitle)
        if(jobTitle.includes('Software Engineer'))
        {
            await option.click()
            break;
        }
    }

    await page.click("//button[normalize-space()='Search']")
//======================================================================================
    await page.waitForTimeout(5000)
})