Feature: Make a transfer

    Background:
        Given I am on the login page
        When I login with john and demo
    
    Scenario Outline: As a user, I want to make a transfer
        Given I am on the transfer page
        When I fill in the transfer form with <amount> and <fromAccount> and <toAccount>
        Then I should see the transfer result saying <amount> from <fromAccount> to <toAccount>

    Examples:
        | amount | fromAccount | toAccount |
        | 10    | 12345       | 13011     |