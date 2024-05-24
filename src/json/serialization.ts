// run with: ts-node src/json/serialization.ts
export {};

// #region filter-array
const book = {
  title: "Professional JavaScript",
  edition: 4,
  read: true,
};

const bookStr = JSON.stringify(book, ["title", "edition"]);
console.log(bookStr); // {"title":"Professional JavaScript","edition":4}
// #endregion filter-array

// #region filter-function
const mobile = {
  brand: "Samsung",
  model: "Galaxy",
  year: 2021,
};

const mobileStr = JSON.stringify(mobile, (key, value) => {
  switch (key) {
    case "brand":
      return value.toUpperCase();
    case "year":
      return `Y${value}`;
    default:
      return value;
  }
});

console.log(mobileStr); // {"brand":"SAMSUNG","model":"Galaxy","year":"Y2021"}
// #endregion filter-function

// #region retract-number
const cup = {
  color: "red",
  size: "small",
  material: "ceramic",
};

const cupStr = JSON.stringify(cup, null, 2);
console.log(cupStr);
/*
{
  "color": "red",
  "size": "small",
  "material": "ceramic"
}
*/
// #endregion retract-number

// #region retract-string
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

const carStr = JSON.stringify(car, null, "---");
console.log(carStr);

/*
{
---"brand": "Toyota",
---"model": "Corolla",
---"year": 2020
}
*/
// #endregion retract-string

// #region custom-toJSON
class Person {
  name = "Alice";
  age = 25;

  toJSON() {
    return {
      name: this.name.toUpperCase(),
      age: this.age,
    };
  }
}

const alice = new Person();
const aliceStr = JSON.stringify(alice);
console.log(aliceStr); // {"name":"ALICE","age":25}
// #endregion custom-toJSON
