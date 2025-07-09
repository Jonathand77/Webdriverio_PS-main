Feature: Make a payment

    Background:
        Given I am on the login page
        When I login with john and demo

    Scenario: As a user, I want to make a payment
        Given I am on the payment page
        When I fill in the payment form with <payeeName> and <address> and <city> and <state> and <zipCode> and <phone> and <account> and <verifyAccount> and <amount> and <fromAccount>
        Then I should see the payment result including <payeeName> and <amount> and <fromAccount>

    Examples:
        | payeeName | address       | city     | state | zipCode | phone     | account | verifyAccount | amount | fromAccount |
        | Jonathan  | 123 Elm St.   | Springfield | IL    | 62701   | 555-1234 | 12456   | 12456          | 100    | 12345       |
