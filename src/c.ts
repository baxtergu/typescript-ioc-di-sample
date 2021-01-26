import { Provider } from './Provider';

@Provider('c', [20])
class B {
  p: number;

  constructor(p: number) {
    this.p = p;
  }
}

export default B;
