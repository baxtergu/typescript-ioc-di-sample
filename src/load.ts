import 'reflect-metadata';
import * as fs from 'fs';
import { Container } from './Container';
import { CLASS_KEY } from './Provider';

export function load(container: Container) {
  const list = fs.readdirSync('./src');

  for (const file of list) {
    if (/\.ts$/.test(file)) {
      const exports = require(`./${file}`);
      for (const m in exports) {
        const module = exports[m];
        if (typeof module === 'function') {
          const metadata = Reflect.getMetadata(CLASS_KEY, module);
          if (metadata) {
            container.bind(metadata.id, module, metadata.args);
          }
        }
      }
    }
  }
}
