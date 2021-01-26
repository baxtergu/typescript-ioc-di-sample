import { load } from './load';
import { container } from './global';

load(container);

let a1: any = container.get('a');
let a2: any = container.get('a');

console.log(a1);
console.log(a2);

// check if two instance are the same
console.log(a1 === a2);

console.log(a1.b === a2.b);

console.log(a1.b === a2.b);
