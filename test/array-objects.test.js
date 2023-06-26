const { getUniqueKeysFromArrayOfObjets } = require("../src/libs/array-objects");

describe("getUniqueKeysFromArrayOfObjects", () => {
  test("should return an empty array if the input array is empty", () => {
    // Test case setup
    const input = [];
    const expected = [];

    // Execute the function
    const output = getUniqueKeysFromArrayOfObjets(input);

    // Perform assertion
    expect(output).toEqual(expected);
  });

  test("should return an empty array if the input array is empty object", () => {
    // Test case setup
    const input = [{}, {}];
    const expected = [];

    // Execute the function
    const output = getUniqueKeysFromArrayOfObjets(input);

    // Perform assertion
    expect(output).toEqual(expected);
  });

  test("should return the keys of an object when there is only one object in the array", () => {
    // Test case setup
    const singleObject = { name: "Damian", surname: "Sire", age: 25 };
    const input = [singleObject];
    const expected = ["name", "surname", "age"];

    // Execute the function
    const output = getUniqueKeysFromArrayOfObjets(input);

    // Perform assertion
    expect(output).toEqual(expected);
  });

  test("should return the unique keys of multiple objects in the array", () => {
    // Test case setup
    const input = [{ name: "Damian" }, { surname: "apple" }, { age: 25 }];
    const expected = ["name", "surname", "age"];

    // Execute the function
    const output = getUniqueKeysFromArrayOfObjets(input);

    // Perform assertion
    expect(output).toEqual(expected);
  });

  test("should return the unique keys of multiple objects, including duplicates, in the array", () => {
    // Test case setup
    const input = [
      { name: "Damian", surname: "Sire", age: 25 },
      { food: "apple", name: "Damian", surname: "Sire" },
    ];
    const expected = ["name", "surname", "age", "food"];

    // Execute the function
    const output = getUniqueKeysFromArrayOfObjets(input);

    // Perform assertion
    expect(output).toEqual(expected);
  });
});
