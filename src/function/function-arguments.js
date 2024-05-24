// run with: node src/function/function-arguments.js

// #region arguments
function displayArguments() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}

displayArguments(1, 2, 3, 4);
// #endregion arguments

// #region rest
function displayRest(a, b, ...args) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
  console.log(args); // [ 3, 4 ]
}

displayRest(1, 2, 3, 4);
// #endregion rest