Feature: Anonymous scenarios

@sanityTesting
Scenario: Open explore page 
Given Open anonymous Library page
When Submit the location
Then Pop up getting closed 

@sanityTesting
Scenario: Click on the view link for featured content
 Given Click on ViewAll link
 When Click on content card
 Then Play the content

 @sanityTesting
Scenario: Check login funstionality with valid credential
 Given Open login page
 When Enter correct username and password
 Then User successfully logged in

 @sanityTesting
Scenario: Check login functionality with invalid credential
 Given Open login page
 When Enter incorrect username and password
 Then User notified with proper message

 @sanityTesting
Scenario: New user registration works fine
 Given Open Registration form 
 When Enter all valid data on registration form
 Then Click on register 

 @sanityTesting
Scenario: Check forget password flow
 Given Open Registration form 
 When Click on Forgot link
 Then Validate the fields and labels

 @sanityTesting
Scenario: Check if google sign is clickable or not
 Given Open login link
 When Click on GoogleLink button
 Then Check that button is clickable

 @sanityTesting
Scenario: Check if State System is clickable or not
 Given Click on stateSystem login button
 When Select the state from the dropdown and click on next button
 Then Check that button is clickable

 @sanityTesting
Scenario Outline: Get page functionality testing
 Given Go to GET page 
 When Search '<QRCodes>'
 Then Click on Submit button
 And Check the results
 Examples:
 | QRCodes | 
 | 4P6WIA  | 
 
 @sanityTesting
Scenario: Check the Library page filter post login
 Given User logged in to state account 
 When Check available filters
 Then Board,Class,Subject,Medium filtersddd