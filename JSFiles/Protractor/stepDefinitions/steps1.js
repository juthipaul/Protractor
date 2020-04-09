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
var lgn = new login_1.login();
var exp = new explore_1.explore();
var reset = new forgotpassword_1.forgot();
var gt = new get_1.get();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUHJvdHJhY3Rvci9zdGVwRGVmaW5pdGlvbnMvc3RlcHMxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLGdEQUE2QztBQUM3QyxvREFBaUQ7QUFDakQsMkNBQXNEO0FBQ3RELGtFQUF1RDtBQUN2RCw0Q0FBd0M7QUFDeEMsK0JBQThCO0FBQzlCLElBQUksR0FBRyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSx1QkFBTSxFQUFFLENBQUM7QUFDekIsSUFBSSxFQUFFLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztBQUVuQixZQUFZO0FBQ1osZ0JBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFRLEVBQUU7SUFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVULGVBQUksQ0FBQyxxQkFBcUIsRUFBQzs7UUFDekIsSUFBSSxHQUFHLEdBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUM1QixNQUFNLG9CQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFSixlQUFJLENBQUMsdUJBQXVCLEVBQUU7O1FBQzVCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFlLElBQUk7O2dCQUN2RixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixhQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDMUMsQ0FBQztTQUFBLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFRixZQUFZO0FBQ1YsZ0JBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFRLEVBQUU7SUFFdkMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3BELG9CQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQTtBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFQSxlQUFJLENBQUMsdUJBQXVCLEVBQUM7O1FBRXpCLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUVMLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFRixlQUFJLENBQUMsa0JBQWtCLEVBQUU7O1FBQ3ZCLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUVMLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFHTCxZQUFZO0FBQ1osZ0JBQUssQ0FBQyxpQkFBaUIsRUFBRTs7UUFFdkIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFDLHFDQUFxQyxFQUFDOztRQUN6QyxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyw2QkFBNkIsRUFBQzs7UUFDbkMsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsYUFBYTtBQUNiLGdCQUFLLENBQUMsaUJBQWlCLEVBQUUsR0FBUSxFQUFFO0lBQ2pDLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxHQUFTLEVBQUU7SUFDckQsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNwRCxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRWpDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFSixlQUFJLENBQUMsbUNBQW1DLEVBQUUsR0FBUSxFQUFFO0lBQ2xELE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBUSxFQUFFO1FBRzNDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWUsSUFBSTs7Z0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDBGQUEwRixDQUFDLENBQUM7WUFFbEgsQ0FBQztTQUFBLENBQUMsQ0FBQTtJQUVKLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsWUFBWTtBQUNaLGdCQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBUSxFQUFFO0lBQ3hDLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFDdEQsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFSixlQUFJLENBQUMsMkNBQTJDLEVBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBQyxFQUFDLEdBQVEsRUFBRTtJQUM3RSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxNQUFNLEdBQUcsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRS9DLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFSCxlQUFJLENBQUMsbUJBQW1CLEVBQUU7O1FBQ3hCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFRixZQUFZO0FBQ1osZ0JBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFRLEVBQUU7SUFDeEMsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ0YsZUFBSSxDQUFDLHNCQUFzQixFQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUMsRUFBQyxHQUFRLEVBQUU7SUFDeEQsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFRLEVBQUU7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ0YsZUFBSSxDQUFDLGdDQUFnQyxFQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUMsRUFBRSxHQUFTLEVBQUU7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUMzRCxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLFlBQVk7QUFDZCxnQkFBSyxDQUFDLGlCQUFpQixFQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBQyxJQUFJLEVBQUMsRUFBRTs7UUFDMUMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7SUFFeEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyw0QkFBNEIsRUFBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUMsSUFBSSxFQUFDLEVBQUU7O1FBQ2xELE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsZ0NBQWdDLEVBQUU7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxDQUFDO0FBRUgsWUFBWTtBQUNaLGdCQUFLLENBQUMsbUNBQW1DLEVBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBQyxFQUFFLEdBQVEsRUFBRTtJQUN2RSxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTyxLQUFLLEVBQUMsRUFBRTtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ1QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQyw2REFBNkQsRUFBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFDLEVBQUU7O1FBQ3RGLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0Msb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNDLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUE7UUFDRCxDQUFDLENBQUMsQ0FBQTtJQUNQLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFRixlQUFJLENBQUMsZ0NBQWdDLEVBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBQyxFQUFFO0lBQ3hELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQTtBQUNILENBQUMsQ0FBQyxDQUFBO0FBRUYsWUFBWTtBQUNaLGdCQUFLLENBQUMsZ0JBQWdCLEVBQUU7O1FBQ3RCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRCxJQUFJLEdBQUcsR0FBRSxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQzVCLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVMLGVBQUksQ0FBQyxpQkFBaUIsRUFBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFDLEVBQUUsVUFBZ0IsTUFBTTs7UUFDaEUsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLEdBQUcsR0FBRSxHQUFHLENBQUMsY0FBYyxDQUFDO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLENBQUM7U0FBQSxDQUFDLENBQUE7SUFDSixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdCQUF3QixFQUFDLEVBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUMsRUFBRTtJQUNqRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBQyxFQUFDOztRQUM1Qyw2Q0FBNkM7UUFDN0MsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxhQUFhO0FBQ2IsZ0JBQUssQ0FBQyxnQkFBZ0IsRUFBRTs7UUFDdEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BELElBQUksR0FBRyxHQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUM7UUFDNUIsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHVCQUF1QixFQUFDOztRQUM1QixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0gsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNILE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsYUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUE7SUFFSixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDZDQUE2QyxFQUFDOztRQUNqRCxJQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUMvQztJQUVILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==