// @flow

// https://flow.org/en/docs/usage/
// https://flow.org/en/docs/lang/
// https://flow.org/en/docs/lang/types-and-expressions/
function square(n: number): number {
  return n * n;
}

function foo(x: ?number): string {
  if (x) {
    return x;
  }
  return "default string";
}

//square("2"); // Error!
square(2); // pass
