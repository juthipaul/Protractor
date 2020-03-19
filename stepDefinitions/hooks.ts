
import {After,Before, Status} from "cucumber";
import { browser, element, by } from "protractor";
import { Stats } from "fs";
import { login } from "../pageObjects/login";
let lg = new login();

Before({tags: "@sanityTesting"}, async function () {
    await browser.manage().window().maximize();
     });

After( async function (scenario) {
  console.log("Test completed");
  if (scenario.result.status===Status.FAILED)
  {
    //code to take screnshot.
   const screenshot = await browser.takeScreenshot();
   this.attach(screenshot,"image/png");
  }
});