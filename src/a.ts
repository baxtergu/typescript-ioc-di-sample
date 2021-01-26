// import B from './b';
// import { container } from './global';

import { Inject } from './Inject';
import { Provider } from './Provider';
// just for ts type check
import B from './b';
import C from './c';

@Provider('a')
class A {
  @Inject()
  private b: B;

  @Inject()
  private c: C;

  constructor(b: B, c: C) {
    this.b = b;
    this.c = c;
  }
}

export default A;
