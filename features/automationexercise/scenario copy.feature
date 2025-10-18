Feature: xyz Automation Exercise Website Testing

  @tc3
  Scenario: Verify that home page is visible successfully
    Given User navigates to "https://automationexercise.com"
    Then User should see the home page is visible successfully

  @tc4
  Scenario: Verify that user can navigate to 'Contact Us' page
    Given User navigates to "https://automationexercise.com"
    When User clicks on 'Contact Us' button
    Then User should be navigated to 'Contact Us' page successfully
