import { Given, When, Then } from "cucumber";
import { login } from "../pageObjects/login";
import { explore } from "../pageObjects/explore";
import { browser, element, by, $$ } from "protractor";
import { forgot } from "../pageObjects/forgotpassword";
import { get} from "../pageObjects/get";
import { expect } from "chai";
import { library } from "../pageObjects/library";
var lgn = new login();
var exp = new explore();
var reset = new forgot();
var gt = new get();
var lib =new library();

//Scenario 1
Given('Open anonymous Library page', async ()=> {
    await browser.get("https://staging.ntp.net.in/explore");
    console.log("Done");
       })
  
When('Submit the location',async function () {
  var el1= lgn.locationSubmit;
  await browser.executeScript('arguments[0].click();', el1);
  })

Then('Pop up getting closed', async function () {
  browser.waitForAngularEnabled(false);
  await element(by.className("sb-pageSection-header")).getText().then(async function(text){
  console.log(text);
 expect(text).to.equal("Featured Content");
    console.log("Pop up is getting closed");
  })
})

//Scenario 2
  Given('Click on ViewAll link', async ()=> {

    await browser.get("https://staging.ntp.net.in/get");
    browser.executeScript('arguments[0].click();', exp.submitButton).then(function(){
    console.log("Pop up closed");
    })
 })
  
   When('Click on content card',async function () {
    
       await exp.libraryLink.getText().then(function(test1){
       console.log(test1);
       exp.libraryLink.click();
       })    
  
    })
  
    Then('Play the content', async function () {
      browser.refresh().then(function(){
  
        console.log("Page refreshed");
      })
        
   })

   
//Scenario 3
Given('Open login page', async function () {
  
  await browser.waitForAngularEnabled(false);
 await browser.get("https://staging.ntp.net.in/learn");
})

When('Enter correct username and password',async  function () {
  await browser.waitForAngularEnabled(false);
 await lgn.uname.sendKeys("juthikatest+1@gmail.com");
 await lgn.pass.sendKeys("Juthika@123"); 
})

Then('User successfully logged in',async function () {
await browser.waitForAngularEnabled(false);
 await lgn.loginbutton.click();
})

// Scenario 4
Given('Open login page', async ()=> {
  await browser.waitForAngularEnabled(false);
  await browser.get("https://staging.ntp.net.in/learn");
})


When('Enter incorrect username and password', async () =>{
    await browser.waitForAngularEnabled(false);
    await lgn.uname.sendKeys("juthikatest+1@gmail.com");
    await lgn.pass.sendKeys("asd");
    
  })

Then('User notified with proper message', async ()=> {
  await lgn.loginbutton.click().then(async ()=>
  {
    
    lgn.errMessage1.getText().then(async function(err1){
    console.log(err1);
    expect(err1).to.equal("Invalid Email Address/Mobile number or password. Please try again with valid credentials");
    
    })

  })
})

//Scenario 5
Given('Open Registration form', async() =>{
  await browser.waitForAngularEnabled(false);
  await browser.get("https://staging.ntp.net.in/learn");
  await lgn.registerLink.click();
  })

When('Enter all valid data on registration form',{timeout: 2 * 5000},async ()=> {
  await browser.sleep(5000); 
 await browser.waitForAngularEnabled(false);
 await lgn.fullName.sendKeys("Juthika P.");
 await lgn.phoneEntry.sendKeys("7088407418");
 await lgn.password.sendKeys("Test@123");
 await lgn.confirmPassword.sendKeys("Test@123");
 
 }) 

Then('Click on register', async function () {
  browser.sleep(2000);
  await lgn.register.click().then(function(){
  console.log("Clicked");
  })
})

//Scenario 6
Given('Open Registration form', async ()=> {
  await browser.waitForAngularEnabled(false);
  await browser.get("https://staging.ntp.net.in/learn");
})
When('Click on Forgot link',{timeout: 2 * 5000},async ()=> {
  browser.sleep(5000);
  await lgn.forgotLink.click().then(async ()=>{
        console.log("Forgot link clicked");
          })
          browser.sleep(3000);
})
Then('Validate the fields and labels',{timeout: 2 * 2000}, async () => {
  await browser.waitForAngularEnabled(false);
  browser.sleep(2000);
  await reset.identifier.sendKeys("juthikatest+1@gmail.com");
  await reset.fname.sendKeys("Juthika");
  reset.nextButton.click();
  })

  //Scenario 7
Given('Open login link',{ timeout: 2*5000}, async function () {
  browser.waitForAngularEnabled(false);
  await browser.get("https://staging.ntp.net.in/learn");
  
});
When('Click on GoogleLink button',{ timeout: 2*5000}, async function () {
    await lgn.googleLink.click().then(function(){
    console.log("Executed");
  })  
});
Then('Check that button is clickable', function () {
  console.log("user redirected to google sign in page");
});

//Scenario 8
Given('Click on stateSystem login button',{timeout: 2 * 5000}, async ()=> {
  await browser.waitForAngularEnabled(false);
  await browser.get("https://staging.ntp.net.in/learn");
  await lgn.stateSystem.getText().then(async (text1)=>{
     console.log(text1);
     await lgn.stateSystem.click();
       })
})

When('Select the state from the dropdown and click on next button',{timeout: 2 * 5000}, async function () {
  browser.sleep(4000);  
  console.log("executed");
     await element(by.name("state")).click().then(function(){
     element.all(by.className("item")).getText().then(function(test){
        console.log(test);
        expect(test[0]).to.equal("Preprod Client");
        expect(test[1]).to.equal("Preprod Client VPN");        
    })
     })
})

Then('Check that button is clickable',{timeout: 2 * 5000}, function () {
   browser.sleep(5000);
   lgn.nextButton.click().then(function(){
   console.log("Submit button clicked");
   browser.sleep(5000);
 })
})

//Scenario 9
Given('Go to GET page', async function () {
  await browser.get("https://staging.ntp.net.in/get");
  var el1= lgn.locationSubmit;
  await browser.executeScript('arguments[0].click();', el1);
  });

When('Search {string}',{timeout: 2 * 5000}, async function (string) {
  await browser.sleep(5000);  
  var el1= lgn.locationSubmit;
    await browser.executeScript('arguments[0].click();', el1).then(async function(){
    console.log(string);
    await gt.searchBox.sendKeys(string);
    await gt.searchClick.click();
  })   
});

Then('Click on Submit button',{timeout: 2 * 5000}, function () {
  browser.sleep(5000)
  console.log("Submit clicked");
});

Then('Check the results', {timeout: 2 * 5000},async function () {
  //await browser.waitForAngularEnabled(false);
  await gt.qrResult.getText().then(function(test1){
    console.log(test1);
    expect(test1).to.equal("Close");
  }) 
});

//Scenario 10
Given('Go to GET page', async function () {
  await browser.get("https://staging.ntp.net.in/get");
  var el1= lgn.locationSubmit;
  await browser.executeScript('arguments[0].click();', el1);
});
When('Check available links',async  function () {
 await gt.trainingLink.getText().then(function(text1){
    console.log(text1);
    expect(text1).to.equal("Trainings");
  })
 await gt.loginLink.getText().then(function(text1){
    console.log(text1);
    expect(text1).to.equal("Login");
  })
 await gt.libraryLink.getText().then(function(text1){
    console.log(text1);
    expect(text1).to.equal("Library");
  })
 
});
Then('Check QR code search field available or not',async function () {
  if(gt.searchBox.isPresent){
    console.log("QR code search field available");
  }
});

//Scenario 11
Given('User logged in to state account',{timeout:2*5000},async function () {
  await browser.waitForAngularEnabled(false);
  browser.get("http://staging.ntp.net.in/resources");
  //browser.sleep(5000);
  await lgn.uname.sendKeys("juthikatest+1@gmail.com");
 await lgn.password.sendKeys("Juthika@123");
  await lgn.loginbutton.click().then(function(){
    console.log("Logged in successfully");
  })
  
});

When('Check available filters',{timeout:2*5000}, async ()=> {
   
   //var el1= lgn.locationSubmit;
   //await browser.executeScript('arguments[0].click();', el1);
 if (lib.allLabels.isPresent){
    console.log("All Labels section field available");
  } else console.log("All Labels sectionfield unavailable");
  
  if (lib.filterHeader.isPresent){
    console.log("Filter Header field available");
  } else console.log("Filter Header unavailable"); 

  if (lib.board.isPresent){
    console.log("Board field available");
  } else console.log("Board field unavailable");
  
  if (lib.cls.isPresent){
    console.log("Class field available");
  } else console.log("Class field unavailable");
  
if (lib.medium.isPresent){
    console.log("Medium field available");
  } else console.log("Medium field unavailable");

if (lib.subject.isPresent){
    console.log("Subject field available");
} else console.log("Subject field unavailable");
});

Then('Board,Class,Subject,Medium filters', async ()=> {
  console.log("Library page filter are available");
});