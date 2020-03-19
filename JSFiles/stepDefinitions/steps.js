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
const library_1 = require("../pageObjects/library");
const workspace_1 = require("../pageObjects/workspace");
const testdata_1 = require("../pageObjects/testdata");
var lgn = new login_1.login();
var exp = new explore_1.explore();
var reset = new forgotpassword_1.forgot();
var gt = new get_1.get();
var lib = new library_1.library();
var wrksp = new workspace_1.workspace();
var testdata = new testdata_1.testData();
cucumber_1.Given('Content creator user logged in', { timeout: 2 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get(testdata.url + "/learn");
        protractor_1.browser.refresh;
        protractor_1.browser.sleep(2000);
        var el1 = protractor_1.element(protractor_1.by.css("button.sb-btn"));
        yield protractor_1.browser.executeScript('arguments[0].click();', el1);
        yield lgn.uname.sendKeys(testdata.contentCreator);
        yield lgn.password.sendKeys(testdata.contentCreatorPassword);
        yield lgn.loginbutton.click();
    });
});
cucumber_1.When('Check if the user can create course and save it', { timeout: 2 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.get(testdata.url + "/workspace/content/create");
        protractor_1.browser.sleep(1000);
        var el1 = lgn.locationSubmit;
        yield protractor_1.browser.executeScript('arguments[0].click();', el1);
        yield protractor_1.browser.sleep(2000);
        yield protractor_1.element(protractor_1.by.className("content")).click().then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(2000);
                yield protractor_1.element(protractor_1.by.css("input.sb-form-control")).sendKeys("test 100");
                yield protractor_1.element(protractor_1.by.buttonText("Start creating")).click().then(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield protractor_1.browser.sleep(2000);
                        yield protractor_1.element(protractor_1.by.xpath("header-title")).getText().then(function (test6) {
                            console.log(test6);
                        });
                        //await element(by.id("closeButton")).click();
                    });
                });
            });
        });
    });
});
cucumber_1.Then('Create can send the these contents for send for review', function () {
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsZ0RBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCwyQ0FBc0Q7QUFDdEQsa0VBQXVEO0FBQ3ZELDRDQUF3QztBQUV4QyxvREFBaUQ7QUFFakQsd0RBQXFEO0FBQ3JELHNEQUFtRDtBQUNuRCxJQUFJLEdBQUcsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBQ3RCLElBQUksR0FBRyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksdUJBQU0sRUFBRSxDQUFDO0FBQ3pCLElBQUksRUFBRSxHQUFHLElBQUksU0FBRyxFQUFFLENBQUM7QUFDbkIsSUFBSSxHQUFHLEdBQUUsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFDdkIsSUFBSSxLQUFLLEdBQUUsSUFBSSxxQkFBUyxFQUFFLENBQUM7QUFDM0IsSUFBSSxRQUFRLEdBQUMsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFFNUIsZ0JBQUssQ0FBQyxnQ0FBZ0MsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEdBQUMsSUFBSSxFQUFDLEVBQUU7O1FBQ3ZELE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUcsR0FBRyxHQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLG9CQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksR0FBRyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUQsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM3RCxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFaEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxpREFBaUQsRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEdBQUMsSUFBSSxFQUFDLEVBQUM7O1FBRWxFLG9CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUN2RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRSxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQzVCLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQzs7Z0JBQ3BELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7O3dCQUM1RCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMxQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7NEJBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLENBQUMsQ0FBQyxDQUFBO3dCQUNILDhDQUE4QztvQkFDL0MsQ0FBQztpQkFBQSxDQUFDLENBQUE7WUFDRixDQUFDO1NBQUEsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3REFBd0QsRUFBRTtBQUUvRCxDQUFDLENBQUMsQ0FBQyJ9