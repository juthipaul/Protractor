Feature: Creation scenarios

@sanityTesting
Scenario: Check that content creator can create contents
 Given Content creator user logged in
 When Check if the user can create course and save it
 Then Create can send the these contents for send for review
