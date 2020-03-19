import { ElementFinder, element,by, ElementArrayFinder } from "protractor";

export class library {
    filterHeader:ElementFinder;
    board:ElementFinder;
    cls:ElementFinder;
    medium: ElementArrayFinder;
    subject: ElementArrayFinder;
    allLabels:ElementArrayFinder;
    submitButton:ElementFinder;
    workspaceLinks: ElementFinder;
    workspace= ElementFinder;
    constructor(){
        this.filterHeader=element(by.tagName("h5"));
        this.allLabels=element.all(by.className("sb-prominent-filter-field"));
        this.board=element(by.className("text"));
        this.cls=element(by.id("gradeLevel"));
        this.medium=element.all(by.id("medium"));
        this.subject=element.all(by.id("subject"));
        this.submitButton=element(by.buttonText("Submit"));
        this.workspaceLinks=element(by.className("item")).element(".a:nth-child(1)");
       // this.workspace=this.workspaceAllLinks.element(".a:nth-child(1)");
        
        //driver.findElement(By.cssSelector(".title:nth-child(0)"));
        
        //this.medium=element(by.name("sb-prominent-filter-field")).element(by.css("div:nth-child(1)"));

    }
}