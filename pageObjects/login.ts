import { ElementFinder,element,by } from "protractor";

export class login {
//Properties
    uname: ElementFinder;
    pass: ElementFinder;
    loginbutton: ElementFinder;
    errMessage1: ElementFinder; 
    registerLink: ElementFinder; 
    fullName: ElementFinder;
    emailSelect: ElementFinder;
    emailEntry:ElementFinder;
    phoneEntry:ElementFinder;
    password:ElementFinder;
    confirmPassword:ElementFinder;
    register: ElementFinder;
    forgotLink: ElementFinder;
    googleLink: ElementFinder;
    stateSystem: ElementFinder;
    selectStateLabel: ElementFinder;
    selectState: ElementFinder;
    nextButton:ElementFinder;
    locationSubmit: ElementFinder;


//Constructor
constructor(){
    this.locationSubmit=element(by.buttonText("Submit"));
    this.uname=element(by.name("username"));
    this.pass=element(by.name("password"));
    this.loginbutton=element(by.id("login"));
    this.errMessage1=element(by.id("error-summary"));
    this.registerLink=element(by.id("signup"));
    this.fullName=element(by.name("name"));
    this.emailSelect=element.all(by.id("email")).first();
    this.emailEntry=element(by.name("email"));
    this.phoneEntry=element(by.name("phone"));
    this.password=element(by.name("password"));
    this.confirmPassword=element(by.name("confirmPassword"));
    this.register=element(by.buttonText("Register"));
    this.forgotLink=element(by.id("fgtPortalFlow"));
    this.googleLink=element(by.className("signInWithGoogle"));
    this.stateSystem=element(by.id("stateButton"));
    this.selectState=element(by.name("state"));
    this.nextButton=element(by.buttonText("Submit"));

   }
//Methods

}