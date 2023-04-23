
// ----------------------------------------------------------

const sum = (a: number, b: number) => a + b;

const s1 = sum(3, 5);

const s2 = sum(2, "33");

console.log("expected result ", s1);

console.log("Unexpected result and error, even then code works", s2);


// ----------------------------------------------------------

// ------------ explicit types ---------------------------

// declaration:type = assignmet; (assignment is optional for let, var)
// const someConst: string = 'some const';
// let someNumber:number = 44;
// examples:
// here the type of num varialbe is number, you cannot assign other types to the variable num.
let num: number = 44;
// valid
num = 8595;
// invalid
num = "333";
// valid
num = 3445.88;

// One more example
let str: string = "hello, I can only be a string";
// valid
str = "Just another string";
// invalid
str = 22;

// one more exaple with only declaration but no assignmet
let someNumber: number;
// valid
someNumber = 55;
// invalid
someNumber = "I am not a number";
// invalid
someNumber = "333";
// valid
someNumber = Infinity;
console.log(num);

// ------------- implicit types -------------------

// following line declares a variable implicitNum, type of number and assigns 44 to it. The value assigned to it is a number, so typescript automatically determines the type of the variable. This is the type inference.
let implicitNum = 44;
// valid
implicitNum = 66;
// invalid
implicitNum = "Not allowed";

// -------------- Basic types ------------------------

// Boolean -------------------

const alwaysTrue: boolean = true;
let onlyBool: boolean = true;
// valid
onlyBool = false;
// invalid
onlyBool = "true";
// Following operation is invalid because + operator is only defined for string and numbers
const addition = alwaysTrue + onlyBool;

// Number --------------------

const againSomeNum = 55;
let someNumberAgain = 66;
// invalid
someNumberAgain = "44";
// valid
someNumberAgain = 365;

// invalid, not allowed
// someNumberAgain.slice();

// String ---------------------

let someStrAgain = "Yes, this is a string";
// valid
someStrAgain = "ok, valid";
// invalid
someStrAgain = 4345;
someStrAgain = true;

// Array ---------------------

// There are two ways to declare an array
// normal array syntax --
const someArray: number[] = [1, 2, 3, 4, 5];
// valid
someArray.push(34546);
// invalid
someArray.push("ok");
someArray.push(true);
// Generic array syntax (More about generics later) --
const oneMoreArray: Array<number> = [34, 35, 23, 21];
// valid
oneMoreArray.push(4354);
oneMoreArray.push(34.234);
// invalid
oneMoreArray.push("not valid!");

// ------------------------------------------------------

// Some more types

// ----------------------------------------------------

// Any  ----------------
let assignAnything: any = 44;
assignAnything = "Assign string";
assignAnything = true;
assignAnything = false;
assignAnything = [35, 45, 44];
let arrayOfAnyType: any[] = [454, 435, "string also", false];
// You can even access properties on an non object variable
// Even the code below fails, typescript doesn't complain
// uncomment the line below
// assignAnything.sayHello();
// Assin to any type of variable Quite risky, right?
let strictlyNumber: number = 66;
const anAnyTypeOfVariable: any = "Not a number, but can be assigned to number";
// valid
strictlyNumber = anAnyTypeOfVariable;

// Unknown  ----------------
let unknownVariable: unknown = 44;
assignAnything = "Assign string";
assignAnything = true;
assignAnything = false;
assignAnything = [35, 45, 44];
let unknownArray: unknown[] = [454, 435, "string also", false];

// You cannot access properties on an unknown type of vlaue
// invalid
// uncomment the line below
// unknownVariable.sayHello();
// Cannot assign to other types
let someStrictNumber: number = 66;
const unknownValueAgain: unknown =
  "Not a number, but can be assigned to number";
// invalid
someStrictNumber = unknownValueAgain;

// but can assign to any type

let someAnyTypeVariable: any = [34, 5];
let someUnknownVariable: unknown = "unknown value";
// valid
someAnyTypeVariable = someUnknownVariable;

// Null ------------------------------

let nullValue: null = null;

// ivalid
nullValue = 33;
let someNumberA: number = 333;
someNumberA = nullValue;

// valid
let anyValueA: any = 354;
anyValueA = nullValue;
let unknowValueA: unknown = 3543;
unknowValueA = nullValue;

// Undefined -------------------------

let undefinedValueA: undefined = undefined;

// invalid
undefinedValueA = 33;
let someNumberB: number = 333;
someNumberB = undefinedValueA;

// valid
let anyValueB: any = 354;
anyValueA = undefinedValueA;
let unknowValueB: unknown = 3543;
unknowValueA = undefinedValueA;

let someVoidVariable: void = void 33;
// undefined is assinable to void type
someVoidVariable = undefinedValueA;

// Void ----------------------------------

// The example will be more clear once we learn type function. Here, the function greets return type is void. In simple its return value doesn't matter.
function greet(name: string): void {
  console.log(`hello ${name}`);
  // even this function is returning nothing explicitly, it is returning undefined implicityly. We already know undefined is assignable to void. So, this is valid
}

// void keyword in javascript discards the value returned. so the following declaration is totaly valid

function discardTheReturnValue(name: string): void {
  console.log(`hello ${name}`);
  return void 333;
}

// Never -----------------------------------
// Both functions below never returns
function throwSomeError(): never {
  throw new Error("I am only throwing error");
}

function neverReturn(): never {
  while (true) {}
}

// Enum ------------------------------------

enum Fruit {
  Apple,
  Orange,
  Melon
}
let f: Fruit = Fruit.Apple;
console.log(f === 0); // true
console.log(f === Fruit.Apple); // true
console.log(f === Fruit.Orange); // false

// ------------------------------------------------------

// More complex types and typecasting in typescript

// ----------------------------------------------------

// Object ----------------------------------------

// 1. object type

// can be used to type anything except number, string, boolean, symbol, null, or undefined.

let someObj: object;

someObj = {
  someNo: 123,
  someString: "hi there!",
  sayHi: () => {
    console.log("Hi");
  }
};

someObj = [];
someObj = () => {
  console.log("another function");
};

// invalid
someObj = 2354;

// 2. An actual object like structure describing properties and methods

let anotherObject: { someNo: number; someString: string; sayHi: () => void } = {
  someNo: 345,
  someString: "hi",
  sayHi: () => {
    console.log("hi");
  }
};

// invalid
anotherObject = [];

anotherObject = () => {
  console.log("this is also invalid");
};

anotherObject.somethingNotInType =
  "Invalid, because the property is not in type";
anotherObject.someNo = "Invalid, someNo is of type number";

// Function ----------------------------------

// 1. Function type (doesn't care about args and return types)

let someTypedFunction: Function = () => {
  console.log("Any function could have been assigned to this variable");
};

someTypedFunction = (a: number, b: number) => {
  const sum: number = a + b;
  return sum;
};

// valid, because the type doesn't care about the args and return types.
someTypedFunction();

// invalid

someTypedFunction = 3545;

// 2. Explicit (Adhoc) function type declaration

// Here, we declare the arguments inside the function declaration parenthesis
// Name of the arguments in the declaration and in the types does not have to match
// Return type is declared after the fat arrow (=>)
// eg: function below takes two argument, both of type number
// Returns a number
// You can only assign a function which matches this signature

let someAnotherTypeFunction: (arg1: number, arg2: number) => number = (
  a,
  b
) => {
  return a + b;
};

// valid
someAnotherTypeFunction(44, 22);

// invalid
someAnotherTypeFunction(34, "345");
const returnedValue: string = someAnotherTypeFunction(345, 346);

someAnotherTypeFunction = () => {
  console.log("Invalid, this does not match the type declaration");
};

// valid

// You can always use less parameters then decalared
someAnotherTypeFunction = () => {
  return 3545;
};

// Invalid

// You cannot use more parameters than declared in the type
someAnotherTypeFunction = (a, b, c) => {
  return a + b + c;
};

// valid

someAnotherTypeFunction = (nameDoesNotMatter1, nameDoesNotMatter2) => {
  return nameDoesNotMatter1 * nameDoesNotMatter1;
};

// Class -----------------------------------------------------

class Person {
  // property type declaration
  name: string;
  age: number = 0;
  // just like a simple function declaration right?
  // But it implicitly returns the instance of the class -- type of class
  // the Person in this case
  constructor(name: string, age: number) {
    // valid
    this.name = name;
    this.age = age;

    // invalid, the property type is not declared
    this.wow = "wow!";
  }

  // just like a normal function again
  setAge: (age: number) => void = age => {
    this.age = age;
  };

  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

// user2 is a type of Person
let user2: Person = new Person("User 2", 34);
// user1 is also of type Person, implicitly set by the compiler
let user1 = new Person("User 1", 35);

// invalid
user1 = "invalid, users type is Person";

// Typecasting or assertions ----------------------------------------------------

const someUnknownType: unknown = "I am of type unknown";

// inside some block you know that the type of the variable is string
// Now even if you know the type complier is still unaware of this
// so accessing string methods on the variable is still invalid

someUnknownType.toLowerCase();

// Don't worry, You can still typecast or tell the compiler that I know what I am doing
// type of the varialbe is actually a string
// and then you are allowed to access string methods

(someUnknownType as string).toLowerCase();

// Here is the syntax for typecasting

// 1. as keyword

// someTypeA as someTypeB
// example
const unknownTypeA: unknown = 354;
const someNumberC: number = unknownTypeA as number;

// 2. angular brackets - <someTypeB>someTypeA
// the syntax above changes the type of someTypeA to someTypeB

const unknowTypeB: unknown = [35, 345];
const someArrayType: number[] = <number[]>unknowTypeB;

// Remember all this casting is only happening on the type and not on the actual value.
// Let's clear with an example

let someNumberType: number = 34546;
const someUnknownValue: unknown = "This is unknown";
// vlaue of someUnknownValue is not converted to number, only the type has changed here.
someNumberType = someUnknownValue as number;
console.log("typeof stil returns string -", typeof someNumberType);

// This may lead to bugs. This is why assertions are not recommended.

// ---------------------------------------------------------

// Reuse and compose types with Type, Interface, union and Intersection

// ---------------------------------------------------------

// Type --------------------------------------------

// simplest types

type JustNumber = number;
// Now JustNumber can be used as a type
// anywhere we refer to JustNumber it will refer to a type assigned to it
// number in this example
let someNumberConst: JustNumber = 98798;
someNumberConst = 3498;

// invalid
someNumberConst = "Invalid, string cannot be assigned to type of JustNumber";

// type doesn't has to be this simple. Remember the object declarations
// Now the type declaration can be re-used

type SomePerson = {
  name: string;
  age: number;
  favColors: string[];
  sayHi: () => void;
};

const person1: SomePerson = {
  name: "Person 1",
  age: 45,
  favColors: ["blue", "pink", "purple", "red", "black", "white"],
  sayHi: () => console.log("hi")
};

const person2: SomePerson = {
  name: "Person 1",
  age: 78,
  favColors: ["blue", "pink", "purple", "red", "black", "white"],
  sayHi: () => console.log("hi")
};

// It is not restricted to only objects. Look at the function declaration below

type BinaryOperatorOnNumber = (a: number, b: number) => number;

const add: BinaryOperatorOnNumber = (a, b) => a * b;
// argument name does not needs to be exact only the type and sequence matters
const multiply: BinaryOperatorOnNumber = (num1, num2) => num1 * num2;

// Interface --------------------------------------------

// basic syntax
// interface interfaceName {
// ... properties
// }
interface DifferentPerson {
  name: string;
  age: number;
}

const p3: DifferentPerson = {
  name: "p3",
  age: 23
};

// interfaces can be extended
// the new interface will have new properties defined as well as
// properties from the old declarations

interface Teacher extends DifferentPerson {
  teaches: string;
}

// Now Teacher has all of the DifferentPersons fields as well as new fields defined

const t1: Teacher = {
  name: "Some teacher",
  age: 325,
  teaches: "typescript"
};

// interface can also be used to define function types
// The earlier sum function declaration can be done with intefaces

interface Sum {
  (a: number, b: number): number;
}

const addNumbers: Sum = (a, b) => a + b;



// Intersection -------------------------------

// syntax
// typeA & typeB & typeC
// '&' symbol is used to combine two types which creates a new type
// with all the types of typeA, typeB and typeC combined.

type SomeA = {
  a: string;
};

type SomeB = {
  b: string;
};

// Now only a value having all the fields declared in SomeA
// and SomeB combined can be assigned to following declaration
type SomeTypeAAndB = SomeA & SomeB;

const SomeAAndBValue: SomeTypeAAndB = {
  a: "This comes from the first declaration",
  b: "This comes from the second declaration"
};

// invalid
const oneMore: SomeTypeAAndB = {
  // invalid
  d: "d is not defined in any of two types combined"
};
