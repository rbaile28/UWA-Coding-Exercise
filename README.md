# UWA-Coding-Exercise

This repo contains a code test for Universal Weather and Aviation.

Further information regarding running the application can be found in the uwa-exercise readme.

## Issues and further development

As this application was completed under timed circumstances, the following considerations and remaining items need to be completed before considering the project v1.

* Incorporate blank states
* Loading animations
* Game count display (8) and warning
* Error message toasts 
* Save message toasts
* Drop down styling
* Delete weeks/teams/pools
* Improved navigation (back buttons)
* Removing rule violating games when reassigning pool
* Teams can be scheduled as both Team 1 and Team 2


## Unit Tests

Unit tests were not completed under the time considerations but are stubbed in as part of the Angular CLI project creation.

The following is a sample of tests to be written:
* Create new team and show up on pool list
* Schedule team and view schedule
* Add new week and schedule team
* Save cross division and schedule wrong team, expect alert


## App Requirements 
Scheduling APP

App where you can plan weekend schedule for a 4 pools(Pool A, Pool B, Pool C and Pool D) of teams.

Each Pool has 8 teams and Pools will be assigned by the user.

Each team has to play a min of 8 games.

7 opponents from the same pool and 1 opponent from any Pool, exception being 8th opponent for any Pool can be only from the same Pool. example: If Pool A Team 1 opponent is from Pool B, every team from the Pool A should have opponent from Pool B. 

Only 5 games per weekend, meaning 5 time slots per weekend 3 on Saturday and 2 on Sunday. 

App should display the Games for every weekend,(Randomly). Sample Below

Day 1 Game 1: Pool A Team 1 vs Team 2
Day 1Game 2: Pool B Team 1 vs Team 2
Day 1 Game 3: Pool C Team 1  vs Team 2
Day 2 Game 4: Pool D Team 1 vs Team 2
Day 2 Game 5: Pool A Team 3 Vs Team 4

Basic Flow of the APP

User Should be able to enter the teams and select the Pools manually.

UI Should display 

A text box to enter team name.
Drop down to select the Pool of the entered team name.
User Should be able to edit the teams entered or Pools selected.
UI should display 4 Pools(pools should expand/collapse) including the teams with button schedule
On Tapping the button Schedule, UI should display the schedule.

Requirements
Architecture: MVVM
App should be scalable, Example: Ability to add more Pools or more teams
Test Cases. 
