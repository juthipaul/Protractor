"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class explore {
    //Constructor
    constructor() {
        this.libraryLink = protractor_1.element(protractor_1.by.partialLinkText("Library"));
        this.trainingsLink = protractor_1.element(protractor_1.by.partialLinkText("Trainings"));
        this.submitButton = protractor_1.element(protractor_1.by.buttonText("Submit"));
        //this.featureViewAll=element(by.css("button[class='sb-btn sb-btn-xs sb-btn-secondary ml-auto']")).element(by.css("th:nth-child(1)"))
        this.featureViewAll = protractor_1.element(protractor_1.by.css("button[class='sb-btn sb-btn-xs sb-btn-secondary ml-auto']"));
        this.loginLink = protractor_1.element(protractor_1.by.partialLinkText("Login"));
    }
}
exports.explore = explore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2V4cGxvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxPQUFPO0lBYXBCLGFBQWE7SUFDYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25ELHFJQUFxSTtRQUNySSxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUd4RCxDQUFDO0NBRUE7QUF6QkQsMEJBeUJDIn0=