---
title: JavaScript - Arrays and Objects
---

# JavaScript

### Arrays and Objects

<aside class="notes">
 N/A
</aside>

---

## Overview

- Arrays
- Objects

<aside class="notes">
 N/A
</aside>

---

## Objectives

- Initialise and use arrays
- Add and remove items from arrays
- Perform array operations like concatenation
- Loop over elements in an array
- Initialise and use objects
- Access keys and values of objects
- Add and remove items from objects

<aside class="notes">
 N/A
</aside>

---

## Arrays

Arrays are lists of values. A JavaScript array looks like:

```js
// This is an empty array
const emptyArray = []

// This is an array of numbers
let position = [0, 1]

// This is an array of strings
const myFavouriteFruit = ["banana", 'apple', `kiwi`]

// This is an array of a bunch of different things
const mixedBag = ["banana", 12, false]
```

<aside class="notes">
  show how to access elements here, before bringing up next slide
  zero indexing
</aside>

---

### Accessing data in arrays

We can access an _element_ in an array with square brackets:

```js
// The scores variable now references an array
let scores = [10, 23, 4, 105]

// We can get element 3 out of the array like this
console.log(scores[2])
```

<aside class="notes">
 on next slide there's going to be a quiz question, this is what I want you to do...
</aside>

---

### JavaScript array indexes

What's the result of running this code?

```js

const myFavouriteSnacks = ["crisps", "chocolate", "apples"]
console.log(myFavouriteSnacks[1])
```

1. crisps
1. chocolate
1. apples

<span>Answer: `chocolate` because arrays are zero-based.</span><!-- .element: class="fragment" -->

<span>The first index is `0` then we count up.</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

Arrays start at zero (in many languages):

```js
const myFavouriteSnacks = ["crisps", "chocolate", "apples"]

console.log(myFavouriteSnacks[0]) // "crisps"
console.log(myFavouriteSnacks[1]) // "chocolate"
console.log(myFavouriteSnacks[2]) // "apples"
console.log(myFavouriteSnacks[3]) // undefined
```

<span>...if you go too low or too high, you get `undefined` as the answer.</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

We can modify values in an array in the same way:

```js
const myFavouriteSnacks = ["crisps", "chocolate", "apples"]
myFavouriteSnacks[1] = "celery"

console.log(myFavouriteSnacks)
```

What will that code log?

<span>The array is now `["crisps", "celery", "apples"]`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

What is the result of running this code?

```js
const farm = ["🐄","🐖","🐑","🦆"]

const farmButTheDuckDied = farm
farmButTheDuckDied[3] = "🍗"

console.log(farm)
```

1. `["🐄","🐖","🐑","🍗"]`
1. `["🐄","🐖","🐑","🦆"]`
1. `["", "", "", "🍗"]`

<span>Answer: `["🐄","🐖","🐑","🍗"]`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

### Initialising arrays

JavaScript creates a brand new array only when we write `[...]`

```js
// The farm variable references this array:
const farm = ["🐄","🐖","🐑","🦆"]

// We create a new variable, which references the
// *same* array as farm
const farmButTheDuckDied = farm

// We modify the array referenced by farmButTheDuckDied
// (which is the same array referenced by farm)
farmButTheDuckDied[3] = "🍗"

console.log(farm)
```

<span>...these arrays are **references** to the same data in memory</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

### Emoji Check:

Do you understand what an array is, how to create them, and how to access array elements?

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

## Adding and removing data

<aside class="notes">
 N/A
</aside>

---

### Adding items

Arrays have many _methods_ which perform complex operations on them. One is `push`. We use it like this:

```js
const farm = ["🐄","🐖","🐑","🦆"]
farm.push("🦄")

console.log(farm)
```

<span>This logs `["🐄","🐖","🐑","🦆", "🦄"]`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

### Removing items from the end

Another useful array method is `pop`. We use it like this:

```js
const farm = ["🐄","🐖","🐑","🦆", "🦄"]
const lastAnimalAdded = farm.pop()

console.log(farm)
console.log(lastAnimalAdded)
```

<span>Logging `farm` prints `["🐄","🐖","🐑","🦆"]`</span><!-- .element: class="fragment" -->

<span>Logging `lastAnimalAdded` prints `"🦄"`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

### Removing items from the start

Another useful array method is `shift`. We use it like this:

```js
const farm = ["🐄","🐖","🐑","🦆", "🦄"]
const firstAnimalShifted = farm.shift()

console.log(farm)
console.log(firstAnimalShifted)
```

<span>Logging `farm` prints `["🐖","🐑","🦆","🦄"]`</span><!-- .element: class="fragment" -->

<span>Logging `firstAnimalShifted` prints `"🐄"`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

### Emoji Check:

Do you understand how to add and remove elements from an array?

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

### Task: More interesting methods

What sort of other methods might be useful? <Discuss>

> Everyone throw out some suggestions!

<aside class="notes">
 N/A
</aside>

---

### More interesting methods

- `concat`
- `includes`
- `indexOf` and `lastIndexOf`
- `join`
- `reverse`
- `slice`
- `sort`
- `splice`

<aside class="notes">
 const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const citrus = fruits.slice(3);

 const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 const citrus = fruits.slice(1, 3);

 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.sort();

 const points = [40, 100, 1, 5, 25, 10];
 points.sort();
 points.sort(function(a, b){return a - b});

 const fruits = ["Banana", "Orange", "Apple", "Mango"];
 const splicedFruits = fruits.splice(2, 2, "Lemon", "Kiwi");

 const moreFruits = ["Banana", "Orange", "Apple", "Mango"];
 first argument where to start, second argument how many
 moreFruits.splice(0, 1);

 https://www.w3schools.com/js/js_array_methods.asp
 https://www.w3schools.com/js/js_array_sort.asp
</aside>

---

### More interesting methods

- `concat` -- joins two arrays together
- `includes` -- returns true if the array contains the given value
- `indexOf` -- returns the position of the element in the array
- `join` -- joins all elements of an array into a string
- `reverse` -- reverses the order of elements in an array
- `slice` -- selects and returns part of an array
- `sort` -- sorts the elements of an array
- `splice` -- deletes and adds elements to the array in a single operation

<aside class="notes">
 N/A
</aside>

---

I would like this code to return `["pizza", "chips", "lobster"]`
This code doesn't work. Why not?

```js
const menu = ["pizza", "chips"]
const saturdayMenu = menu.push("lobster")

console.log(saturdayMenu)
```

<span>The `push` method modifies the original array _and returns the new length of the array_. The second line says: take the return value of `menu.push()` and store that in `saturdayMenu`. So `saturdayMenu` will equal `3`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

The working solution looks like this:

```js
const menu = ["pizza", "chips"]
const saturdayMenu = menu.slice()
saturdayMenu.push("lobster")

console.log(menu)
console.log(saturdayMenu)
```

<span>Now `menu` is still `["pizza", "chips"]`</span><!-- .element: class="fragment" -->

<span>And `saturdayMenu` is `["pizza", "chips", "lobster"]`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

## Looping over arrays

We can loop over an array using `for`, as all arrays have a `.length` property:

```js
const workingDays = ["Mon", "Tues", "Wed", "Thurs", "Fri"]
for(let i = 0; i < workingDays.length; i++) {
    console.log(workingDays[i])
}
```

<span>Note the zero-based indexing</span><!-- .element: class="fragment" -->

<span>Note that `length` is the actual length of the array, _not_ the last index number</span><!-- .element: class="fragment" -->

<span>So we use indexes `0` to `x.length - 1`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

## Better looping over arrays

But, there are nicer ways when we don't want to manage the index ourselves:

```js
const workingDays = ["Mon", "Tues", "Wed", "Thurs", "Fri"]

// this gives us the element directly
for (const day of workingDays) {
  console.log(day);
}

// this gives us each index in turn
for (const index in workingDays) {
  console.log(workingDays[index]);
}
```

<aside class="notes">
   These loop are easier than the "i++" form of "for"

   The "of" syntax gives us the element directly

   The "in" syntax gives us each index in turn (but as a string - watch out for this)
</aside>

---

### Emoji Check:

How do you feel about array methods and using loops with arrays?

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

## Objects

Objects are a collection of related data, with keys and values.

<aside class="notes">
 N/A
</aside>

---

## Object examples

Objects in JavaScript look like this:

```js
const favouriteColours = {
    Emily: "Grey",
    Edward: 'Teal',
    Mike: `Purple`
}

const mixedBag = {banana: true, apple: 1, kiwi: "orange"}

const temperatures = {Monday: 21, Tuesday: 22, Wednesday: 20}
```

<aside class="notes">
 N/A
</aside>

---

## Object keys and values

Information in objects is made up of _keys_ and _values_. A key-value pair in an object is called an _entry_.

```js
const favouriteColours = {
    Emily: "Grey",
    Edward: 'Teal',
    Mike: `Purple`
}
```

In the example above, `Emily`, `Edward`, and `Mike` are all examples of _keys_. Each key then has a corresponding _value_.

<aside class="notes">
 N/A
</aside>

---

## Accessing data in objects

We can access _entries_ in an object with square brackets. It's like an array, except with a string in the square brackets

```js
const results = {maths: 85, science: 62, history: 34}

console.log(results["science"])
```

<span>This logs `62`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

Objects also support a second way of accessing their entries using a dot.

> If we know what the key is when we're writing our code, we normally use dot.

```js
const results = {maths: 85, science: 62, history: 34}

console.log(results.maths)
```

<span>This logs `85`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

We can modify objects with a similar syntax

```js
const results = {maths: 85, science: 62, history: 34}

results.history = 43

console.log(results)
```

<span>This logs `{maths: 85, science: 62, history: 43}`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

What is the result of running this code?

```js
const feelings = {
    happy: "😀",
    sad: "😢",
}
const summerFeelings = feelings
feelings.happy = "😎"

console.log(summerFeelings)
```

1. `{ happy: "😀", sad: "😢" }`
1. `{ happy: "😎", sad: "😢" }`
1. `{ happy: "😎" }`

<span>Answer: `{ happy: "😎", sad: "😢" }`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

### Object key example

This code doesn't work. Why not?

```js
const capitals = {
    England: "London",
    France: "Paris",
    Germany: "Berlin",
}

// I want this to log "London". It logs 'undefined'
console.log(capitals[England])
```

<aside class="notes">
 N/A
</aside>

---

### Solution

```js
console.log(capitals["England"])
// or
console.log(capitals.England)
```

<aside class="notes">
 N/A
</aside>

---

### Adding items

Adding entries to an object is done by setting a key that doesn't exist yet.

```js
const livesInYorkshire = {
    Emily: true,
    Edward: true,
    Mike: true,
}
livesInYorkshire.Boris = false

console.log(livesInYorkshire)
```

<span>This logs `{ Emily: true, Edward: true, Mike: true, Boris: false }`</span><!-- .element: class="fragment" -->
<aside class="notes">
 N/A
</aside>

---

### Removing items

We can remove entries from an object using the _delete_ operator.

```js
const prices = {
    "t-shirt": 3.99,
    jeans: 35.00,
    hat: 4.20,
}

delete prices.hat
delete prices["t-shirt"]

console.log(prices)
```

<span>This logs `{ jeans: 35 }`</span><!-- .element: class="fragment" -->

<aside class="notes">
 N/A
</aside>

---

### Emoji Check:

Do you understand how to define an object, change its values, and add and remove key-value pairs?

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

## Overview - recap

- Arrays
- Objects

<aside class="notes">
 N/A
</aside>

---

## Objectives - recap

- Learned that we initialise arrays with = []
- Were introduced to the methods - push, pop, shift, unshift
- Saw that arrays have many methods available in JS
- Were shown that `for` loops are great for iterating over an array
- Learned that we initialise objects with = {}
- Saw that we can access values with dot or bracket notation
- Were shown that we add object entries by assigning a value to a new key
- Saw that we can remove entries using the `delete` keyword

<aside class="notes">
 N/A
</aside>

---

<!-- .slide: data-only="njacademy" -->
## Exercises

1. You should have the `exercises.zip` in Slack or email
1. Unzip the exercises
1. Open `problems.html` with your browser (you don't need to edit this file)
1. Open the problem JavaScript files in your text editor
1. Read and complete the exercises in the JavaScript file
1. Each time you complete an exercise refresh your browser to check your solution

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
