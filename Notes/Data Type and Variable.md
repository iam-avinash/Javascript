## Agenda

* Data Types
* Variables 

-------

JavaScript is a dynamically typed, high-level programming language commonly used in web development. It employs the V8 engine, written in C++, for high-performance execution. Despite its name, `JavaScript is distinct from Java. Its dynamic nature allows variables to change types during runtime, offering flexibility in coding.

## Data Types 
**Primitive Data Types:**
1. Number
2. String
3. Null
4. Undefined
5. Boolean

**New Primitive Types:**
1. BigInt
2. Symbol

**Non-Primitive Types (Reference Types):**
1. Object
2. Functions
3. Arrays

**New Non-Primitive Types:**
1. Map
2. Set
3. WeakMap
4. WeakSet

----
JavaScript primarily operates with two types of data:

1. **Primitive Data Types**
These are immutable values directly stored in memory.

Number: Represents numeric values, including integers and floating-point numbers.
JavaScript
let age = 30;
let price = 9.99;


String: Represents textual data enclosed in single or double quotes.
```JavaScript
let name = "Alice";
let greeting = 'Hello, world!';


Boolean: Represents logical values, either true or false.
```JavaScript
let isStudent = true;
let isOnline = false;


Null: Represents the intentional absence of any object value.
```JavaScript
let emptyValue = null;


Undefined: Represents a variable that has been declared but not assigned a value.
```JavaScript
let x; // x is undefined


Symbol: Represents a unique and immutable value, often used as object property keys.
```JavaScript
let id = Symbol("uniqueID");
Use code with caution.

Non-Primitive (Complex) Data Type
Object: A collection of key-value pairs, providing a flexible way to store and organize data.
```JavaScript
let person = {
    name: "Bob",
    age: 25,
    city: "New York"
};


Note: Arrays and functions are special types of objects inJavaScript.