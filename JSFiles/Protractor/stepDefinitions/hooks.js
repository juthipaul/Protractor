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
const protractor_1 = require("protractor");
const login_1 = require("../pageObjects/login");
let lg = new login_1.login();
cucumber_1.Before({ tags: "@sanityTesting" }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().window().maximize();
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Test completed");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //code to take screnshot.
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9Qcm90cmFjdG9yL3N0ZXBEZWZpbml0aW9ucy9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUE4QztBQUM5QywyQ0FBa0Q7QUFFbEQsZ0RBQTZDO0FBQzdDLElBQUksRUFBRSxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFFckIsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxFQUFFOztRQUM3QixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVSLGdCQUFLLENBQUUsVUFBZ0IsUUFBUTs7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUcsaUJBQU0sQ0FBQyxNQUFNLEVBQzFDO1lBQ0UseUJBQXlCO1lBQzFCLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FBQSxDQUFDLENBQUMifQ==