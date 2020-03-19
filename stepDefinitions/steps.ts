import { Given, When, Then } from "cucumber";
import { login } from "../pageObjects/login";
import { explore } from "../pageObjects/explore";
import { browser, element, by, $$ } from "protractor";
import { forgot } from "../pageObjects/forgotpassword";
import { get} from "../pageObjects/get";
import { expect } from "chai";
import { library } from "../pageObjects/library";
import { connect } from "http2";
import { workspace } from "../pageObjects/workspace";
import { testData } from "../pageObjects/testdata";
var lgn = new login();
var exp = new explore();
var reset = new forgot();
var gt = new get();
var lib =new library();
var wrksp =new workspace();
var testdata=new testData();

Given('Content creator user logged in',{timeout:2*5000}, async function () {
  await browser.waitForAngularEnabled(false);
  browser.get(testdata  .url +"/learn");
  browser.refresh;
  browser.sleep(2000);
  var el1= element(by.css("button.sb-btn"));
  await browser.executeScript('arguments[0].click();', el1);
  await lgn.uname.sendKeys(testdata.contentCreator);
  await lgn.password.sendKeys(testdata.contentCreatorPassword);
  await lgn.loginbutton.click();
  
});
When('Check if the user can create course and save it',{timeout:2*5000},async function () {

      browser.get(testdata.url+ "/workspace/content/create");
      browser.sleep(1000);
      var el1= lgn.locationSubmit;
      await browser.executeScript('arguments[0].click();', el1);
      await browser.sleep(2000);
      await element(by.className("content")).click().then(async function(){
      await browser.sleep(2000);
      await element(by.css("input.sb-form-control")).sendKeys("test 100");
      await element(by.buttonText("Start creating")).click().then(async function(){
      await browser.sleep(2000);
      await element(by.xpath("header-title")).getText().then(function(test6){
        console.log(test6);
      })
     //await element(by.id("closeButton")).click();
    })
    })
});

Then('Create can send the these contents for send for review', function () {
  
});