Feature: Para Bank Login Feature

  Scenario Outline: As a user, I can log into the Parabank Accounts Service Page
    Given I am on the login page
    When I login with <username> and <password>

    Examples: 
      | username          | password | message           |
      | invalidUsername   | password | Error!            |
      | john        | demo | Accounts Overview |