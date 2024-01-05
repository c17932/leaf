# Leaf
Leaf is the solution to all of my personal dev
problems, in a quite petite 3 lines of code.

It's a `$` function, but all it does is call
`$.mode` with the given arguments. As such, it
makes quite the perfect framework for building
just about anything.

## Usage
`leaf.js` exports `leaf` as default (I import as
`$`).

```
// import leaf
import $ from "./leaf.js";

// *maybe* I have something like $.modes, to store my different modes
$.modes = {
  add: (
    a,
    b
  ) => a + b,
  multiply: (
    a,
    b
  ) => a * b,
  multi: (
    a,
    b
  ) => $.modes.multiply(
    $.modes.add(
      a,
      b
    ),
    b
  )
};

// I set the mode (this is the only part required for leaf to work)
$.mode = $.modes.multi;

// I execute 
$(
  5,
  3
); // Expected output: 24
```

From there the sky is the limit!

## Leaf is under development!
I'm working on the ecosystem/documentation, as
it is a *very* small thing and can be hard to
grasp at first.

Check back soon!
