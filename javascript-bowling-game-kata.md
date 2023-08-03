---
title: TDD Kata (JS)
---

# TDD Kata (JS)

<aside class="notes">
  This is a direct use of the standard Bowling Game TDD Kata
</aside>

---

### Overview

- Do some real TDD on a basic app
- Write tests before app code
- Feel good (or, at least better) about TDD

<aside class="notes">
    N/A
</aside>

---

### Objectives

- Use Jest in Node
- We use ES6 syntax today (no `module.exports`)
- Write tests before app code
- Run Tests and see them fail
- Fill in the _minimum_ code to make the test pass
- Repeat - with refactors!
- Don't break previous tests

<aside class="notes">
  N/A
</aside>

---

## Bowling Game Kata

This is a "kata" or fixed set of moves to practice in a given order. To be perfect, a Kata should be performed many times.

> A _Kata_ is a sequence of moves practiced many time until it becomes instinct

<aside class="notes">
  N/A
</aside>

---

### A great intro

Lets all read the start of the description here:

> The Kata: https://codingdojo.org/kata/Bowling/

<aside class="notes">
  N/A
</aside>

---

### A good resource

This video is what our session is based on - well worth a look offline:

> Great JS example: https://dev.to/joerter/bowling-game-kata-in-javascript-gi6

When (not if!) you repeat this Kata in the future, you can do worse than code along to the above!

<aside class="notes">
  N/A
</aside>

---

### Scoring Bowling

A super-short summary of 10 pin bowling:

- Each game consists of 10 _frames_ of 2 bowls/rolls each
- In each _frame_, the bowler tries to knock down all 10 pins
- Knocking down all 10 pins gives you bonus scores
- A _spare_ is when the bowler knocks down all the pins in 2 rolls
    - The score for that frame is 10 plus the number of pins knocked down on the next roll
- A _strike_ is when the bowler knocks down all 10 pins on the first roll of the frame
    - The score for that frame is 10 plus the number of pins knocked down in the next two rolls
- If there is a spare or strike on the last frame, the bowler gets one or two extra rolls, respectively

<aside class="notes">
  N/A
</aside>

---

### Implementation

- We are creating a new feature for a Bowling Game that will calculate the score for a player
- We are going to use a TDD approach to develop this feature

<aside class="notes">
  N/A
</aside>

---

### Our coding Kata

> A _Kata_ is a sequence of moves practiced many time until it becomes instinct

- We'll write a unit test for each scoring scenario
- We'll implement **only** enough logic to get the current test to past
- There are 5 scenarios - so 5 tests to write

<aside class="notes">
  N/A
</aside>

---

### Baby Steps

What is the simplest test we can write to make a start?

- "Gutter" game - all 20 rolls miss the pins<!-- .element: class="fragment" -->
- all ones - all 20 rolls knock down a single pin<!-- .element: class="fragment" -->
- spares and bonus<!-- .element: class="fragment" -->
- strikes and bonus<!-- .element: class="fragment" -->
- perfect game<!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Test Scenarios

- (1) Bowler has a _Gutter_ game of all misses
    - `-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0`
- (2) Bowler throws _All ones_
    - `1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20`
- (3) Bowler gets a _Spare_
    - `5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16`
- (4) Bowler gets a _Strike_
    - `10/ 3/4 -/- -/- -/- -/- -/- -/- -/- -/- = 24`
- (5) Bowler gets a _Perfect Game_
    - `10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ = 300`

_Notes on (5) on next slide_

<aside class="notes">
  Discuss why these scores add up as they do!

  Notes on (5) on next slide
</aside>

---

### Test Scenarios - Errata

Consider this scenario:

- (5) Bowler gets a _Perfect Game_
    - `10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ 10/ = 300`

So: `10/` is a strike so the second ball is not thrown in a real bowling alley (as there are no pins left up!).

You can also represent this as `10/-` in the code if it helps. Technically the last frame can be shown as `10/10/10` or extra frames.

<aside class="notes">
  Discuss why these scores add up as they do!
</aside>

---

### Task - Bowling Game Kata - 60 mins

> We will now go into breakout rooms, with an Instructor per room, and live code the whole Kata of 5 exercises in each group

Each group starts with an empty app and test file from the `exercises.zip` and works through the scenarios with one test per scenario.

<aside class="notes">
  Live Code is optional but works very well here

  Get everyone to have a turn coding something

  Small groups works much better than big ones
</aside>

---

### Task - Discussion - 10 mins

> How did we all get on?
>
> What learnings did we take away from the coding?

_Some suggestions on next slide..._

<aside class="notes">
  N/A
</aside>

---

### Some possible learnings

- Red, Green, Refactor (What does this mean?)
- Writing only the code you need _right now_ is hard
- Don't predict the future
- Previously working tests should not be broken to make new ones work
- Ideally, previously working tests should not need to be be updated to make new ones work
- KISS, YAGNI, WYSIWYG and other relevant terms apply

See [Worked solution](https://github.com/IW-Academy/bowling-kata-solution) that covers the missing edge cases

<aside class="notes">
  N/A
</aside>

---

### Overview - recap

- Do some real TDD on a basic app
- Write tests before app code
- Feel good (or, at least better) about TDD

<aside class="notes">
  N/A
</aside>

---

### Objectives - recap

- Use Jest in Node
- We use ES6 syntax today (no `module.exports`)
- Write tests before app code
- Run Tests and see them fail
- Fill in the _minimum_ code to make the test pass
- Repeat - with refactors!
- Don't break previous tests

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

On a high level, do you think you understand the main concepts of this session? Say so if not!

1. 😢 Haven't a clue, please help!
2. 🙁 I'm starting to get it but need to go over some of it please
3. 😐 Ok. With a bit of help and practice, yes
4. 🙂 Yes, with team collaboration could try it
5. 😀 Yes, enough to start working on it collaboratively

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>
