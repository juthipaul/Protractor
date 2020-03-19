import { by,ElementFinder, element } from "protractor";

export class workspace {
    firstCreate:ElementFinder;
    tocTitle:ElementFinder;

    constructor()
    {
        this.firstCreate=element(by.buttonText("Start creating"));
        this.tocTitle=element(by.className("header-title"));
        this.tocTitle=element(by.className("header-title"));
        

    }
   
}