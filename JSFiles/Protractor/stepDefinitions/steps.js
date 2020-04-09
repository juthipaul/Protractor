"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const login_1 = require("../pageObjects/login");
const explore_1 = require("../pageObjects/explore");
const protractor_1 = require("protractor");
const forgotpassword_1 = require("../pageObjects/forgotpassword");
const get_1 = require("../pageObjects/get");
const chai_1 = require("chai");
const library_1 = require("../pageObjects/library");
var lgn = new login_1.login();
var exp = new explore_1.explore();
var reset = new forgotpassword_1.forgot();
var gt = new get_1.get();
var lib = new library_1.library();
cucumber_1.Given('User logged in to state account', { timeout: 2 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("https://staging.ntp.net.in/resources");
        yield lgn.uname.sendKeys("juthikatest+1@gmail.com");
        yield lgn.password.sendKeys("Juthika@123");
        lgn.loginbutton.click();
        protractor_1.browser.sleep(5000);
        var el1 = lgn.locationSubmit;
        yield protractor_1.browser.executeScript('arguments[0].click();', el1);
        protractor_1.browser.sleep(2000);
    });
});
cucumber_1.When('Check available filters', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield lib.filterHeader.getText().then(function (text2) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(text2);
                chai_1.expect(text2).to.equal("Explore content from");
            });
        });
        yield protractor_1.element.all(protractor_1.by.className("sb-prominent-filter-field")).getText().then(function (text3) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(text3);
            });
        });
    });
});
cucumber_1.Then('Board,Class,Subject,Medium filters', function () {
    //Checking the filters labels and dropdown labels
    //browser.refresh();
    //expect(text3[0]).to.equal("Board/Syllabus\nselect board/syllabus");
    //expect(text3[1]).to.equal("Class\nselect class");
    // await expect(text3[2]).to.equal("Subject\nselect subject");
    //await expect(text3[3]).to.equal("Medium\nselect medium");
    //await expect(text3[4]).to.equal("Content Types\nselect content types");
    //await expect(text3[5]).to.equal("Concepts");
    //await expect(text3[6]).to.equal("Reset Submit");
    //browser.sleep(5000);
    protractor_1.element.all(protractor_1.by.className("text")).each(function (item) {
        return __awaiter(this, void 0, void 0, function* () {
            item.getText().then(function (text23) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(text23);
                });
            });
        });
    });
    //if(text4=="State (Rajasthan)"){
    //lib.board.click();
    //}
    // })
    /* lib.cls.getText().then(function(text){
       if(text=="Class 9"){
         lib.cls.click();
       }
     })
 
     lib.subject.getText().then(function(text){
       if(text=="Science"){
         lib.subject.click();
       }
     })
 
     lib.medium.getText().then(function(text){
       if(text=="Hindi"){
         lib.medium.click();
       }
     })*/
    //browser.sleep(5000);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9Qcm90cmFjdG9yL3N0ZXBEZWZpbml0aW9ucy9zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QyxnREFBNkM7QUFDN0Msb0RBQWlEO0FBQ2pELDJDQUFzRDtBQUN0RCxrRUFBdUQ7QUFDdkQsNENBQXdDO0FBQ3hDLCtCQUE4QjtBQUM5QixvREFBaUQ7QUFFakQsSUFBSSxHQUFHLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUN0QixJQUFJLEdBQUcsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLHVCQUFNLEVBQUUsQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO0FBQ25CLElBQUksR0FBRyxHQUFFLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBRXZCLGdCQUFLLENBQUMsaUNBQWlDLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxHQUFDLElBQUksRUFBQyxFQUFFOztRQUN4RCxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0Msb0JBQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNwRCxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDcEQsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlCQUF5QixFQUFDOztRQUM3QixNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsS0FBSzs7Z0JBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDakQsQ0FBQztTQUFBLENBQUMsQ0FBQTtRQUNGLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsS0FBSzs7Z0JBQzlGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsQ0FBQztTQUFBLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0NBQW9DLEVBQUU7SUFDekMsaURBQWlEO0lBQ2pELG9CQUFvQjtJQUNwQixxRUFBcUU7SUFDckUsbURBQW1EO0lBQ3BELDhEQUE4RDtJQUM3RCwyREFBMkQ7SUFDM0QseUVBQXlFO0lBQ3pFLDhDQUE4QztJQUM5QyxrREFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBZSxJQUFJOztZQUN0RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsTUFBTTs7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7YUFBQSxDQUFDLENBQUE7UUFDSixDQUFDO0tBQUEsQ0FBQyxDQUFBO0lBQ0YsaUNBQWlDO0lBQy9CLG9CQUFvQjtJQUN0QixHQUFHO0lBQ04sS0FBSztJQUVMOzs7Ozs7Ozs7Ozs7Ozs7O1NBZ0JLO0lBQ0osc0JBQXNCO0FBQ3hCLENBQUMsQ0FBQyxDQUFDIn0=