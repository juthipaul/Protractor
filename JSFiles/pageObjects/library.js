"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class library {
    constructor() {
        this.workspace = protractor_1.ElementFinder;
        this.filterHeader = protractor_1.element(protractor_1.by.tagName("h5"));
        this.allLabels = protractor_1.element.all(protractor_1.by.className("sb-prominent-filter-field"));
        this.board = protractor_1.element(protractor_1.by.className("text"));
        this.cls = protractor_1.element(protractor_1.by.id("gradeLevel"));
        this.medium = protractor_1.element.all(protractor_1.by.id("medium"));
        this.subject = protractor_1.element.all(protractor_1.by.id("subject"));
        this.submitButton = protractor_1.element(protractor_1.by.buttonText("Submit"));
        this.workspaceLinks = protractor_1.element(protractor_1.by.className("item")).element(".a:nth-child(1)");
        // this.workspace=this.workspaceAllLinks.element(".a:nth-child(1)");
        //driver.findElement(By.cssSelector(".title:nth-child(0)"));
        //this.medium=element(by.name("sb-prominent-filter-field")).element(by.css("div:nth-child(1)"));
    }
}
exports.library = library;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2xpYnJhcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMkU7QUFFM0UsTUFBYSxPQUFPO0lBVWhCO1FBREEsY0FBUyxHQUFFLDBCQUFhLENBQUM7UUFFckIsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxLQUFLLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUUsb0VBQW9FO1FBRW5FLDREQUE0RDtRQUU1RCxnR0FBZ0c7SUFFcEcsQ0FBQztDQUNKO0FBMUJELDBCQTBCQyJ9