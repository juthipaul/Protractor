import { ElementFinder, element, by } from "protractor";

export class forgot {
    logo:ElementFinder;
    label1:ElementFinder;
    emailLabel:ElementFinder;
    nameLabel:ElementFinder;
    identifier:ElementFinder;
    fname:ElementFinder;
    nextButton
    constructor() {
        this.logo=element(by.className("sb-account-recoverpage-logo"));
        //this.label1=element(by.className(".sb-account-recover-page-section")).element(by.css("th:nth-child(0)"));
        //this.emailLabel=element(by.className("sb-account-recoverpage-label required"));
        this.identifier=element(by.name("identifier"));
        this.fname=element(by.name("name"));
        this.nextButton=element(by.buttonText("Next"));
        
    }
}