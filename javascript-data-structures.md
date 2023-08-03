---
title: JavaScript - Data Structures
---

# JavaScript - Data Structures

<aside class="notes">
  This session only needs about an hour.
  The end is a Q&A session in groups (no JS exercises)
  The start of the Mini Project follows on with array/object handling exercises.
</aside>

---

## Overview

- Arrays
- Objects
- Combining arrays and objects
- Using these in JavaScript
- The end is a Q&A session in groups (no JS exercises)

<aside class="notes">
  This session only needs about an hour.
  The end is a Q&A session in groups (no JS exercises)
  The start of the Mini Project follows on wit Array/Object handling exercises.
</aside>

---

## Objectives

- Recognise that arrays can contain objects, objects can contain arrays, and so on
- Explain what multidimensional arrays are useful for
- Explain what nested objects are useful for
- Compare and contrast two different ways of structuring the same data
- Design data structures to model a problem space

<aside class="notes">
  N/A
</aside>

---
> (Inexperienced) programmers worry about the code. (Experienced) programmers worry about data structures and their relationships.
>
> _-- Linus Torvalds_

<aside class="notes">
    N/A
</aside>

---

## An array of objects

Arrays can contain objects.

```js
const users = [
    { name: "Emily", age: 26 },
    { name: "Edward", age: 29 },
    {
        name: "Mike",
        age: 27
    },
]
```

<span>The layout only matters for the readability... but choose one and be consistent!</span><!-- .element: class="fragment" -->

<span>We can access data in this structure in the same way as with normal arrays and objects</span><!-- .element: class="fragment" -->

<span>What does that mean?</span><!-- .element: class="fragment" -->

<aside class="notes">
  Ask what "the same as with normal arrays and objects" might mean

  Describe how we have a list of people objects.

  Note the valid trailing comma, which is valid in JS but not in a pure JSON structure
</aside>

---

That is, we can refer to the layers in consistent ways, peeling them like an onion:

```js
const users = [
    { name: "Emily", age: 26 },
    { name: "Edward", age: 29 },
    { name: "Mike", age: 27},
]
```

```js
console.log(users[0])
console.log(users[2].name)
```

<span>`users[0]` is the 0th object i.e. `{name: "Emily", age: 26}`</span><!-- .element: class="fragment" -->

<span>So `users[2].name` is `Mike`, as `users[2] === { name: "Mike", age: 27 }`</span><!-- .element: class="fragment" -->

<aside class="notes">
  Go through this
</aside>

---

And we can nest things as much as we like, making a deeper tree:

```js
const users = [
    {
        name: "Emily",
        skills: ["coding", "baking", "piano"]
    },
    {
        name: "Edward",
        skills: ["coding", "woodworking", "ukulele"]
    },
    {
        name: "Mike",
        skills: ["coding", "dungeon master"]
    },
]

console.log(users[1].skills[2]);
```

<span>This will log Edward's third skill: "ukulele"</span><!-- .element: class="fragment" -->

<aside class="notes">
  Third skill being index 2
</aside>

---

## Nested objects

We can put objects in other objects.

<aside class="notes">
  N/A
</aside>

---

As we saw, objects can contain arrays. They can also contain other objects

```js
const pokemon = {
    pikachu: {
        type: "electric",
        attacks: ["thunder shock", "tackle" ],
    },
    bulbasaur: {
        type: "grass",
        attacks: [ "vine whip", "tackle" ],
    },
}
```

<aside class="notes">
  Pokemon contains named objects with a type and attacks.
</aside>

---
<!-- spell-checker: disable-next-line -->
How would we get the type of pikachu from this structure?

```js
const pokemon = {
    pikachu: {
        type: "electric",
        attacks: ["thunder shock", "tackle" ],
    },
    bulbasaur: {
        type: "grass",
        attacks: [ "vine whip", "tackle" ],
    },
}
```

1. `pokemon[0].type`
1. `pokemon["pikachu"][0]`
1. `pokemon.pikachu.type`

<span>Answer: `pokemon.pikachu.type`</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---
<!-- spell-checker: disable-next-line -->
How would we get the second attack of bulbasaur?

```js
const pokemon = {
    pikachu: {
        type: "electric",
        attacks: ["thunder shock", "tackle" ],
    },
    bulbasaur: {
        type: "grass",
        attacks: [ "vine whip", "tackle" ],
    },
}
```

1. `pokemon[1].attacks[1]`
1. `bulbasaur.attacks[1]`
1. `pokemon.bulbasaur.attacks[1]`
1. `pokemon["bulbasaur"]["attacks"].tackle`

<span>Answer: `pokemon.bulbasaur.attacks[1]`</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

### Emoji Check:

How do you feel about navigating nested objects and arrays?

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

---

## Multidimensional arrays

Arrays can contain arrays. We call this a _multidimensional array_.

They are often used to store grids of data:

```js
const map = [
    [0, 0, 0],
    [0, 0, 0],
    [0,"x",0]
]
```

<aside class="notes">
  N/A
</aside>

---

How do we replace the "x" with a "💰️" in our treasure map?

```js
const treasureMap = [
    [0, 0, 0],
    [0, 0, 0],
    [0,"x",0]
]
```

<span>We need to find the `x` first:</span><!-- .element: class="fragment" -->

<aside class="notes">
  N/A
</aside>

---

Finding `x`:

```js
console.log(treasureMap[2]) // '[0, "x", 0]'
console.log(treasureMap[2][1]) // "x"
```

<aside class="notes">
  N/A
</aside>

---

Then reassign it:

```js
treasureMap[2][1] = "💰️"
console.log(treasureMap[2][1]) // "💰️"
```

<aside class="notes">
  Walk through
</aside>

---

## Looping over multidimensional arrays

How do we programmatically loop over multidimensional arrays?

```js
const lotsOfTreasure = [
    [0, "x", 0],
    ["x", 0, "x"],
    [0, "x", 0]
]
```

<aside class="notes">
  Ask the Academites, move to next slide
</aside>

---

With some fun `for` loops we'll find all the loot!

```js
for (let i=0; i<lotsOfTreasure.length; i++) {
    for (let j=0; j<lotsOfTreasure[i].length; j++) {
        if (lotsOfTreasure[i][j] === "x") {
            lotsOfTreasure[i][j] = "💰️"
        }
    }
}
```

```js
const lotsOfTreasure = [
    [0, "💰️", 0],
    ["💰️", 0, "💰️"],
    [0, "💰️", 0]
]
```

<aside class="notes">
  Walk through the nested looping

  Mention the variable assignment
</aside>

---

### Better looping over arrays

If we want to update elements we'll need to use the indexes. But, we can use the slicker syntax:

```js
for (const rowIndex of lotsOfTreasure) {
  for (const columnIndex in rowIndex) {
      if (rowIndex[columnIndex] === "x") {
          rowIndex[columnIndex] = "💰️"
      }
  }
}
```

<aside class="notes">
  If we use the "in" syntax we get the element indexes still, but neater, so in this example do have a reference to the array, so can update it.

  Note this "in" syntax gives us the index as a String i.e. "2".
</aside>

---

### Better looping over arrays

We can also use an intermediate variable to reduce the noise:

```js
for (const rowIndex in lotsOfTreasure) {
    const row = lotsOfTreasure[rowIndex]
    for (const columnIndex in row) {
        if (row[columnIndex] === "x") {
            row[columnIndex] = "💰️"
        }
    }
}
```

<aside class="notes">
  If we use the "in" syntax we get the element indexes still, but neater, so in this example do have a reference to the array, so can update it.
</aside>

---

### Better looping over arrays

If we want to reference the values and not update, we can use the `of` syntax:

```js
for (const row of lotsOfTreasure) {
    for (const columnCell of row) {
        console.log(columnCell)
    }
}
```

<aside class="notes">
  That applies mostly to the inner "for" loop - we cold mix and match, but that will be a bit complex at this stage for many of the learners.

  If we use the "of" syntax we ge the element in our hand, so in this example do not have a reference to the array member, only a copy of the string value.
</aside>

---

### Emoji Check:

Do you understand how to use loops with nested arrays?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Problem discussion

How would you go about modelling a chessboard, including the positions of all of its game pieces?

After showing you some options, we'll head off into your breakout rooms to discuss.

<aside class="notes">
  Mention we will show some possible answers to seed the discussions
</aside>

---

### Option A:

Represent board with a multidimensional array and coded cells:

```js
const board = [
    ["WR", "WN", "WB", "WK", "WQ", "WB", "WN", "WR"],
    ["WP", "WP", "WP", "WP", "WP", "WP", "WP", "WP"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["BP", "BP", "BP", "BP", "BP", "BP", "BP", "BP"],
    ["BR", "BN", "BB", "BK", "BQ", "BB", "BN", "BR"],
]
```

<aside class="notes">
  Just show briefly
</aside>

---

Or we might use objects rather than strings to represent our pieces:

```js
// Instead of "WK"
{
    colour: "white",
    piece: "king",
    hasMoved: false,
}
```

<aside class="notes">
  Just show briefly
</aside>

---

### Option B:

Store a list of all the piece positions:

```js
const pieces = {
    white: [
        { piece: "king", x: 1, y: 6 },
        { piece: "pawn", x: 1, y: 7 },
    ],
    black: [
        { piece: "king", x: 3, y: 5 },
    ],
};
```

<aside class="notes">
  Just show briefly
</aside>

---

### Option C:

Store a list of moves

```js
const moves = [
    "Kh2",
    "Rh6",
    "Bh3",
    "Bxh3",
    "Rf4",
    "Rxf4",
    "gxf4",
    "Bf2",
    "Qxb2",
    "Bf1",
]
```

<aside class="notes">
  Just show briefly
</aside>

---

### Emoji Check:

Do you have an idea about how to go about selecting a data structure to solve a specific problem?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Discussion scenarios - 15 mins

Which option **A/B/C** is best for each of...

1. Saving and loading chess games?
2. Determining what piece is on a given square?
3. Determining what pieces white has left?
4. Moving a pawn forward one square?
5. Checking that there is nothing blocking a bishop from moving to the other side of the board?

**Given the above options we showed, discuss which one is best for each of the 5 scenarios**

<aside class="notes">
  Leave on screen and help organise the breakouts
</aside>

---

## Scenario answers

Which option is best for...

1. Saving and loading chess games? => _**C**_
1. Determining what piece is on a given square? => _**A**_
1. Determining what pieces white has left? => _**B**_
1. Moving a pawn forward one square? => _**B**_
1. Checking that there is nothing blocking a bishop from moving to the other side of the board? => _**A**_

<aside class="notes">
  Discuss why each is best
</aside>

---

They all contain the same information, but which we choose determines how easy it will be to work with.

If we need to, we might store the same data in multiple ways, or we might temporarily generate one view from another.

<aside class="notes">
  Get each Breakout Group to discuss what they thought with the class
</aside>

---

### Emoji Check:

How do you feel about the progress so far?

1. 😢 Haven't a clue, please help!<br/>
2. 🙁 I'm starting to get it but need to go over some of it please<br/>
3. 😐 Ok. With a bit of help and practice, yes<br/>
4. 🙂 Yes, with team collaboration could try it<br/>
5. 😀 Yes, enough to start working on it collaboratively<br/>

<aside class="notes">
    The phrasing is such that all answers invite collaborative effort, none require solo knowledge.

    The 1-5 are looking at (a) understanding of content and (b) readiness to practice the thing being covered, so:

    1. 😢 Haven't a clue what's being discussed, so I certainly can't start practising it (play MC Hammer song)
    2. 🙁 I'm starting to get it but need more clarity before I'm ready to begin practising it with others
    3. 😐 I understand enough to begin practising it with others in a really basic way
    4. 🙂 I understand a majority of what's being discussed, and I feel ready to practice this with others and begin to deepen the practice
    5. 😀 I understand all (or at the majority) of what's being discussed, and I feel ready to practice this in depth with others and explore more advanced areas of the content
</aside>

---

## Overview - recap

- What are arrays?
- What is a multidimensional array?
- How could we programmatically loop over arrays?
- In JavaScript, what are objects?
- How can we combine arrays and objects?
- How do we access the data in arrays and objects?

<aside class="notes">
  N/A
</aside>

---

## Objectives - recap

In this session you have...

- seen that arrays can contain objects, objects can contain arrays, and so on
- been shown what multidimensional arrays are useful for
- looked at what nested objects are useful for
- compared and contrasted two different ways of structuring the same data
- designed data structures to model a problem space

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
