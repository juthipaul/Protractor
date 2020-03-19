import { getMaxListeners } from "cluster";

export class testData{

url:any;
contentCreator:any;
contentCreatorPassword:any;
contentReviewer:any;
contentReviewerPassword:any;


constructor()
{
    this.url="http://staging.ntp.net.in/";
    this.contentCreator="juthikatest+1@gmail.com";    
    this.contentCreatorPassword="Juthika@123"; 
    this.contentReviewer="juthikatest+2@gmail.com";
    this.contentReviewerPassword="password";

   /* this.url="http://preprod.ntp.net.in/";
    this.contentCreator="ContentCreatorTN@yopmail.com";    
    this.contentCreatorPassword="test@123"; 
    this.contentReviewer="ContentReviewerTN@yopmail.com";
    this.contentReviewerPassword="test@123";*/
}

}