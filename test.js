import {$} from "./Leaf.js";
$.modes = {
  sum: (
    a,
    b,
  ) => a + b,
};
$.mode = $.modes.sum;
console.log($(
  4,
  6,
));
