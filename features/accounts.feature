Feature: Accounts Management

    Background:
        Given I am on the login page
        When I login with john and demo

    Scenario: View my accounts
        When I navigate to the accounts page
    
    Scenario Outline: View account details
        When I navigate to the accounts page
        And I click on the account <accountNumber>

    Examples:
        | accountNumber |
        | 12345    |
    
    
    