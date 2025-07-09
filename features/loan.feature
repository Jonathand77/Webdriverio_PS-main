Feature: Request a loan

    Background:
        Given I am on the login page
        When I login with john and demo
    
    Scenario Outline: As a user, I want to request a loan
        Given I am on the loan request page
        When I fill in the loan request form with <amount> and <downPayment> and <account>

    Examples:
        | amount | downPayment | account | message                |
        | 100   | 2         | 12345  | Congratulations, your loan has been approved. |
        | 10000 | 500000   | 13011  | You do not have sufficient funds for the given down payment.|