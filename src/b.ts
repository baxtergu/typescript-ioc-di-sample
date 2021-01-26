import { Provider } from './Provider';

@Provider('b', [10])
class B {
  p: number;

  constructor(p: number) {
    this.p = p;
  }
}

export default B;
