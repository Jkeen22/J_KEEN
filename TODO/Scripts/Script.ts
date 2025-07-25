// TODO/Script.TS
// string variable declaration and initialization
var P: string = "Hello, World!";
console.log(P);
// string variable declaration and initialization with a different value
var Q: string = "TypeScript is awesome!";
console.log(Q);
// string variable declaration and initialization with a number converted to string
var R: string = (42).toString();
console.log(R);
// string variable declaration and initialization with a boolean converted to string
var S: string = true.toString();
console.log(S);
// string variable declaration and initialization with a template literal
var T: string = `The answer is ${R}`;
console.log(T);
// string variable declaration and initialization with a multi-line string
var U: string = `This is a multi-line string.
It can span multiple lines.
And it can include special characters like \n and \t.`;
console.log(U);
// string variable declaration and initialization with an empty string
var V: string = "";
console.log(V);
// string variable declaration and initialization with a string containing special characters
var W: string = "Special characters: \n\t\"Hello\" and 'World'";
console.log(W);
// string variable declaration and initialization with a string containing unicode characters
var X: string = "Unicode characters: \u00A9 \u00AE \u20AC";
console.log(X);
// string variable declaration and initialization with a string containing escape sequences
var Y: string = "Escape sequences: \\n \\t \\\\";
console.log(Y);
// string variable declaration and initialization with a string containing a URL
var Z: string = "Visit us at https://www.example.com";
console.log(Z);
// string variable declaration and initialization with a string containing HTML
var A1: string = "<div>Hello, <strong>World</strong>!</div>";
console.log(A1);
// string variable declaration and initialization with a string containing JSON
var A2: string = '{"name": "John", "age": 30, "city": "New York"}';
console.log(A2);
// string variable declaration and initialization with a string containing a date
var A3: string = "Today's date is " + new Date().toLocaleDateString();
console.log(A3);
// string variable declaration and initialization with a string containing a function
var A4: string = "function greet() { return 'Hello!'; }";
console.log(A4);
// string variable declaration and initialization with a string containing a regular expression
var A5: string = "/^[a-zA-Z0-9]+$/";
console.log(A5);
// string variable declaration and initialization with a string containing a file path
var A6: string = "C:\\Users\\User\\Documents\\file.txt";
console.log(A6);
// string variable declaration and initialization with a string containing a command
var A7: string = "git commit -m 'Initial commit'";
console.log(A7);
// string variable declaration and initialization with a string containing a code snippet
var A8: string = "const x = 10;\nconsole.log(x);";
console.log(A8);
// string variable declaration and initialization with a string containing a mathematical expression
var A9: string = "The result of 5 + 3 is " + (5 + 3).toString();
console.log(A9);
// string variable declaration and initialization with a string containing a quote
var A10: string = "Albert Einstein once said, \"Life is like riding a bicycle. To keep your balance, you must keep moving.\"";
console.log(A10);

// -------------------------------------------------------------------------------------------------------

// tipo de int
var B1: number = 42;
console.log(B1);
// tipo de float
var B2: number = 3.14;
console.log(B2);
// tipo de boolean
var B3: boolean = true;
console.log(B3);
// tipo de array
var B4: number[] = [1, 2, 3, 4, 5];
console.log(B4);
// tipo de tuple
var B5: [string, number] = ["Alice", 30];
console.log(B5);
// tipo de enum
enum Color {
    Red,
    Green,
    Blue
}
var B6: Color = Color.Green;
console.log(B6);
// tipo de any
var B7: any = "This can be anything";
console.log(B7);
// tipo de void
function B8(): void {
    console.log("This function does not return anything");
}
B8();
// tipo de null
var B9: null = null;
console.log(B9);
// tipo de undefined
var B10: undefined = undefined;
console.log(B10);
// tipo de object
var B11: object = { name: "John", age: 30 };
console.log(B11);
// tipo de bigint
var B12: bigint = 1234567890123456789012345678901234567890n;
console.log(B12);
// tipo de string literal
var B13: "Hello" = "Hello";
console.log(B13);
// tipo de union   
var B14: string | number = "This can be a string or a number";
console.log(B14);
// tipo de intersection
interface Person {
    name: string;
    age: number;
}
interface Employee {
    id: number;
    department: string;
}
var B15: Person & Employee = {
    name: "John",
    age: 30,
    id: 123,
    department: "Engineering"
};
console.log(B15);
// tipo de never
function B16(): never {
    throw new Error("This function never returns");
}
B16();
// tipo de unknown
var B17: unknown = "This could be anything";
if (typeof B17 === "string") {
    console.log("B17 is a string: " + B17);
}
// tipo de literal type
var B18: "success" | "error" = "success";
console.log(B18);
// tipo de template literal
var B19: `Hello, ${string}` = `Hello, World!`;
console.log(B19);
// tipo de mapped type
type MappedType<T> = { [P in keyof T]: T[P];
}
var B20: MappedType<{ a: number; b: string }> = { a: 1, b: "two" };
console.log(B20);
// tipo de conditional type
type ConditionalType<T> = T extends string ? "It's a string" : "It's not a string";
var B21: ConditionalType<string> = "It's a string";
console.log(B21);
// tipo de keyof type operator
type KeyOfType<T> = keyof T;
var B22: KeyOfType<{ a: number; b: string }> = "a";
console.log(B22);
// tipo de infer type operator
type InferType<T> = T extends infer U ? U : never;
var B23: InferType<string> = "This is inferred as a string";
console.log(B23);
// tipo de utility type
type UtilityType<T> = Partial<T>;
var B24: UtilityType<{ a: number; b: string }> = { a: 1 };
console.log(B24);
// tipo de readonly type
type ReadonlyType<T> = Readonly<T>;
var B25: ReadonlyType<{ a: number; b: string }> = { a: 1, b: "two" };
console.log(B25);
// tipo de tuple type
type TupleType = [number, string];
var B26: TupleType = [42, "Hello"];
console.log(B26);
// tipo de function type
type FunctionType = (x: number, y: number) => number;
var B27: FunctionType = (x, y) => x + y;
console.log(B27(5, 10));
// tipo de class type
class PersonClass {
    constructor(public name: string, public age: number) {}
}
var B28: PersonClass = new PersonClass("Alice", 25);
console.log(B28);
// tipo de interface type
interface Animal {
    species: string;
    sound: () => string;
}
var B29: Animal = {
    species: "Dog",
    sound: () => "Woof!"
};
console.log(B29.species + " makes sound: " + B29.sound());
// tipo de namespace type
namespace MyNamespace {
    export class MyClass {
        constructor(public value: string) {}
    }
}
var B30: MyNamespace.MyClass = new MyNamespace.MyClass("Hello from namespace");
console.log(B30.value);
// tipo de module type
import { MyModule } from "./MyModule"; // Assuming MyModule exports a class or function
var B31: MyModule.MyClass = new MyModule.MyClass("Hello from module");
console.log(B31.value);
// tipo de global type
declare global {
    interface Window {
        myGlobalVar: string;
    }
}
window.myGlobalVar = "This is a global variable";
console.log(window.myGlobalVar);