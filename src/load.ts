import 'reflect-metadata';
import * as fs from 'fs';
import { Container } from './Container';
import { CLASS_KEY } from './Provider';

export function load(container: Container) {
  const list = fs.readdirSync('./src');

  // TODO Not Support Nested Folder Structure Yet
  for (const file of list) {
    /**
     * 1 Scan all ts files within folder
     * 2 Filter out all exported class decorated with @Provider by using reflect-metadata [extension] and [CLASS_KEY] ioc:tagged_class
     * 3 bind the class instance to the container singleton instance
     */
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
