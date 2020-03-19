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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290cGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9mb3Jnb3RwYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLE1BQU07SUFRZjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUMvRCwyR0FBMkc7UUFDM0csaUZBQWlGO1FBQ2pGLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRW5ELENBQUM7Q0FDSjtBQWpCRCx3QkFpQkMifQ==