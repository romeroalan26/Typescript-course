// ENUM

// const enum Size {
// 	Small = 1,
// 	Medium,
// 	Large,
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

// FUNCTIONS

// function calcTax(income: number, taxYear = 2022): number {
// 	if (taxYear < 2022) return income * 1.2;
// 	return income * 1.3;
// }

// calcTax(10_000);

// OBJECTS

// let employee: {
// 	readonly id: number;
// 	name: string;
// 	retire: (date: Date) => void;
// } = {
// 	id: 1,
// 	name: "Mosh",
// 	retire: (date: Date) => {
// 		console.log(date);
// 	},
// };

// ADVANCED TYPES - ALIAS TYPE
// type Employee = {
// 	readonly id: number;
// 	name: string;
// 	retire: (date: Date) => void;
// };

// let employee: Employee = {
// 	id: 1,
// 	name: "Mosh",
// 	retire: (date: Date) => {
// 		console.log(date);
// 	},
// };

// UNION TYPES
// function kgToLbs(weight: number | string): number {
// 	// Narrowing
// 	if (typeof weight === "number") return weight * 2.2;
// 	else return parseInt(weight) * 2.2;
// }
// kgToLbs(10);
// kgToLbs("10kg");

// Intersection Types
// type Draggable = {
// 	drag: () => void;
// };

// type Resizable = {
// 	resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
// 	drag: () => {},
// 	resize: () => {},
// };

// Literal Types

// Literal (exact, specific)
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = 'cm' | 'm';

// Nullable types
// function greet(name: string | null | undefined) {
// 	if (name) console.log(name.toUpperCase());
// 	else console.log("Hola!");
// }

// greet(null);

// Optional chaining
// type Customer = {
// 	birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
// 	return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);
// // if (customer !== null && customer !== undefined)
// // Optional property access operator
// console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if(customers !== null && customers !== undefined)
// customers?.[0]

// Optional call
// let log: any = null;
// log?.('a');
