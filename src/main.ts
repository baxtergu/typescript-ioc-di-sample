import { load } from './load';
import { container } from './global';

load(container);

console.log(container.get('a'));
console.log(container.get('a'));
