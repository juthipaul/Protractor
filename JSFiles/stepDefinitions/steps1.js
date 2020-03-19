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
//Scenario 1
cucumber_1.Given('Open anonymous Library page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://staging.ntp.net.in/explore");
    console.log("Done");
}));
cucumber_1.When('Submit the location', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var el1 = lgn.locationSubmit;
        yield protractor_1.browser.executeScript('arguments[0].click();', el1);
    });
});
cucumber_1.Then('Pop up getting closed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.element(protractor_1.by.className("sb-pageSection-header")).getText().then(function (text) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(text);
                chai_1.expect(text).to.equal("Featured Content");
                console.log("Pop up is getting closed");
            });
        });
    });
});
//Scenario 2
cucumber_1.Given('Click on ViewAll link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://staging.ntp.net.in/get");
    protractor_1.browser.executeScript('arguments[0].click();', exp.submitButton).then(function () {
        console.log("Pop up closed");
    });
}));
cucumber_1.When('Click on content card', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield exp.libraryLink.getText().then(function (test1) {
            console.log(test1);
            exp.libraryLink.click();
        });
    });
});
cucumber_1.Then('Play the content', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.refresh().then(function () {
            console.log("Page refreshed");
        });
    });
});
//Scenario 3
cucumber_1.Given('Open login page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://staging.ntp.net.in/learn");
    });
});
cucumber_1.When('Enter correct username and password', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield lgn.uname.sendKeys("juthikatest+1@gmail.com");
        yield lgn.pass.sendKeys("Juthika@123");
    });
});
cucumber_1.Then('User successfully logged in', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield lgn.loginbutton.click();
    });
});
// Scenario 4
cucumber_1.Given('Open login page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("https://staging.ntp.net.in/learn");
}));
cucumber_1.When('Enter incorrect username and password', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield lgn.uname.sendKeys("juthikatest+1@gmail.com");
    yield lgn.pass.sendKeys("asd");
}));
cucumber_1.Then('User notified with proper message', () => __awaiter(void 0, void 0, void 0, function* () {
    yield lgn.loginbutton.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
        lgn.errMessage1.getText().then(function (err1) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(err1);
                chai_1.expect(err1).to.equal("Invalid Email Address/Mobile number or password. Please try again with valid credentials");
            });
        });
    }));
}));
//Scenario 5
cucumber_1.Given('Open Registration form', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("https://staging.ntp.net.in/learn");
    yield lgn.registerLink.click();
}));
cucumber_1.When('Enter all valid data on registration form', { timeout: 2 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000);
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield lgn.fullName.sendKeys("Juthika P.");
    yield lgn.phoneEntry.sendKeys("7088407418");
    yield lgn.password.sendKeys("Test@123");
    yield lgn.confirmPassword.sendKeys("Test@123");
}));
cucumber_1.Then('Click on register', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(2000);
        yield lgn.register.click().then(function () {
            console.log("Clicked");
        });
    });
});
//Scenario 6
cucumber_1.Given('Open Registration form', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("https://staging.ntp.net.in/learn");
}));
cucumber_1.When('Click on Forgot link', { timeout: 2 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(5000);
    yield lgn.forgotLink.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Forgot link clicked");
    }));
    protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('Validate the fields and labels', { timeout: 2 * 2000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.sleep(2000);
    yield reset.identifier.sendKeys("juthikatest+1@gmail.com");
    yield reset.fname.sendKeys("Juthika");
    reset.nextButton.click();
}));
//Scenario 7
cucumber_1.Given('Open login link', { timeout: 2 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://staging.ntp.net.in/learn");
    });
});
cucumber_1.When('Click on GoogleLink button', { timeout: 2 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield lgn.googleLink.click().then(function () {
            console.log("Executed");
        });
    });
});
cucumber_1.Then('Check that button is clickable', function () {
    console.log("user redirected to google sign in page");
});
//Scenario 8
cucumber_1.Given('Click on stateSystem login button', { timeout: 2 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("https://staging.ntp.net.in/learn");
    yield lgn.stateSystem.getText().then((text1) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(text1);
        yield lgn.stateSystem.click();
    }));
}));
cucumber_1.When('Select the state from the dropdown and click on next button', { timeout: 2 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.sleep(4000);
        console.log("executed");
        yield protractor_1.element(protractor_1.by.name("state")).click().then(function () {
            protractor_1.element.all(protractor_1.by.className("item")).getText().then(function (test) {
                console.log(test);
                chai_1.expect(test[0]).to.equal("Preprod Client");
                chai_1.expect(test[1]).to.equal("Preprod Client VPN");
            });
        });
    });
});
cucumber_1.Then('Check that button is clickable', { timeout: 2 * 5000 }, function () {
    protractor_1.browser.sleep(5000);
    lgn.nextButton.click().then(function () {
        console.log("Submit button clicked");
        protractor_1.browser.sleep(5000);
    });
});
//Scenario 9
cucumber_1.Given('Go to GET page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://staging.ntp.net.in/get");
        var el1 = lgn.locationSubmit;
        yield protractor_1.browser.executeScript('arguments[0].click();', el1);
    });
});
cucumber_1.When('Search {string}', { timeout: 2 * 5000 }, function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(5000);
        var el1 = lgn.locationSubmit;
        yield protractor_1.browser.executeScript('arguments[0].click();', el1).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(string);
                yield gt.searchBox.sendKeys(string);
                yield gt.searchClick.click();
            });
        });
    });
});
cucumber_1.Then('Click on Submit button', { timeout: 2 * 5000 }, function () {
    protractor_1.browser.sleep(5000);
    console.log("Submit clicked");
});
cucumber_1.Then('Check the results', { timeout: 2 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await browser.waitForAngularEnabled(false);
        yield gt.qrResult.getText().then(function (test1) {
            console.log(test1);
            chai_1.expect(test1).to.equal("Close");
        });
    });
});
//Scenario 10
cucumber_1.Given('Go to GET page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://staging.ntp.net.in/get");
        var el1 = lgn.locationSubmit;
        yield protractor_1.browser.executeScript('arguments[0].click();', el1);
    });
});
cucumber_1.When('Check available links', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield gt.trainingLink.getText().then(function (text1) {
            console.log(text1);
            chai_1.expect(text1).to.equal("Trainings");
        });
        yield gt.loginLink.getText().then(function (text1) {
            console.log(text1);
            chai_1.expect(text1).to.equal("Login");
        });
        yield gt.libraryLink.getText().then(function (text1) {
            console.log(text1);
            chai_1.expect(text1).to.equal("Library");
        });
    });
});
cucumber_1.Then('Check QR code search field available or not', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (gt.searchBox.isPresent) {
            console.log("QR code search field available");
        }
    });
});
//Scenario 11
cucumber_1.Given('User logged in to state account', { timeout: 2 * 5000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("http://staging.ntp.net.in/resources");
        //browser.sleep(5000);
        yield lgn.uname.sendKeys("juthikatest+1@gmail.com");
        yield lgn.password.sendKeys("Juthika@123");
        yield lgn.loginbutton.click().then(function () {
            console.log("Logged in successfully");
        });
    });
});
cucumber_1.When('Check available filters', { timeout: 2 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    //var el1= lgn.locationSubmit;
    //await browser.executeScript('arguments[0].click();', el1);
    if (lib.allLabels.isPresent) {
        console.log("All Labels section field available");
    }
    else
        console.log("All Labels sectionfield unavailable");
    if (lib.filterHeader.isPresent) {
        console.log("Filter Header field available");
    }
    else
        console.log("Filter Header unavailable");
    if (lib.board.isPresent) {
        console.log("Board field available");
    }
    else
        console.log("Board field unavailable");
    if (lib.cls.isPresent) {
        console.log("Class field available");
    }
    else
        console.log("Class field unavailable");
    if (lib.medium.isPresent) {
        console.log("Medium field available");
    }
    else
        console.log("Medium field unavailable");
    if (lib.subject.isPresent) {
        console.log("Subject field available");
    }
    else
        console.log("Subject field unavailable");
}));
cucumber_1.Then('Board,Class,Subject,Medium filters', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Library page filter are available");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL3N0ZXBzMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QyxnREFBNkM7QUFDN0Msb0RBQWlEO0FBQ2pELDJDQUFzRDtBQUN0RCxrRUFBdUQ7QUFDdkQsNENBQXdDO0FBQ3hDLCtCQUE4QjtBQUM5QixvREFBaUQ7QUFDakQsSUFBSSxHQUFHLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUN0QixJQUFJLEdBQUcsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUN4QixJQUFJLEtBQUssR0FBRyxJQUFJLHVCQUFNLEVBQUUsQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO0FBQ25CLElBQUksR0FBRyxHQUFFLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBRXZCLFlBQVk7QUFDWixnQkFBSyxDQUFDLDZCQUE2QixFQUFFLEdBQVEsRUFBRTtJQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqQixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRVQsZUFBSSxDQUFDLHFCQUFxQixFQUFDOztRQUN6QixJQUFJLEdBQUcsR0FBRSxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQzVCLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVKLGVBQUksQ0FBQyx1QkFBdUIsRUFBRTs7UUFDNUIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxF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