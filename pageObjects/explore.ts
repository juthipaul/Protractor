import { ElementFinder, element, by } from "protractor";

export class explore{

//Properties

submitButton:ElementFinder;
libraryLink:ElementFinder;
trainingsLink:ElementFinder;
featureViewAll:ElementFinder;
textbookViewAll:ElementFinder;
learningViewAll:ElementFinder;
loginLink:ElementFinder;


//Constructor
constructor(){
    this.libraryLink=element(by.partialLinkText("Library"));
    this.trainingsLink=element(by.partialLinkText("Trainings"));
    this.submitButton=element(by.buttonText("Submit"));
    //this.featureViewAll=element(by.css("button[class='sb-btn sb-btn-xs sb-btn-secondary ml-auto']")).element(by.css("th:nth-child(1)"))
    this.featureViewAll=element(by.css("button[class='sb-btn sb-btn-xs sb-btn-secondary ml-auto']"));
    this.loginLink=element(by.partialLinkText("Login"));


}

}