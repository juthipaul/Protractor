import { ElementFinder, element, by } from "protractor";
export class get{
    searchBox: ElementFinder;
    searchClick: ElementFinder;
    qrResult:ElementFinder;
    libraryLink:ElementFinder;
    trainingLink: ElementFinder;
    loginLink: ElementFinder;

    constructor(){
        this.searchBox=element(by.name("search"));
        this.searchClick=element(by.buttonText("Search"));
        this.qrResult=element(by.buttonText("Close"));
        this.libraryLink=element(by.partialLinkText("Library"));
        this.trainingLink=element(by.partialLinkText("Trainings"));
        this.loginLink=element(by.partialLinkText("Login"));
    }
}