Feature: Automation Exercise Website Testing

  @smoke @regression @tc1
  Scenario: Verify that home page is visible successfully
    Given User navigates to "https://automationexercise.com"
    Then User should see the home page is visible successfully

  @regression @tc2
  Scenario: Verify that user can navigate to 'Contact Us' page
    Given User navigates to "https://automationexercise.com"
    When User clicks on 'Contact Us' button
    Then User should be navigated to 'Contact Us' page successfully
