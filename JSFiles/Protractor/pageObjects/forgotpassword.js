"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class forgot {
    constructor() {
        this.logo = protractor_1.element(protractor_1.by.className("sb-account-recoverpage-logo"));
        //this.label1=element(by.className(".sb-account-recover-page-section")).element(by.css("th:nth-child(0)"));
        //this.emailLabel=element(by.className("sb-account-recoverpage-label required"));
        this.identifier = protractor_1.element(protractor_1.by.name("identifier"));
        this.fname = protractor_1.element(protractor_1.by.name("name"));
        this.nextButton = protractor_1.element(protractor_1.by.buttonText("Next"));
    }
}
exports.forgot = forgot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290cGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9Qcm90cmFjdG9yL3BhZ2VPYmplY3RzL2ZvcmdvdHBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsTUFBTTtJQVFmO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELDJHQUEyRztRQUMzRyxpRkFBaUY7UUFDakYsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFbkQsQ0FBQztDQUNKO0FBakJELHdCQWlCQyJ9