import { PROPS_KEY } from './Inject';

export class Container {
  bindMap = new Map();

  // regitster @Provide class to container
  bind = (identifier: string, clazz: any, constructorArgs?: Array<any>) => {
    this.bindMap.set(identifier, {
      clazz,
      constructorArgs: constructorArgs || [],
    });
  };

  get = <T>(identifier: string): T => {
    const target = this.bindMap.get(identifier);
    const { clazz, constructorArgs } = target;

    // everytime get function called, instance are recreated
    const props = Reflect.getMetadata(PROPS_KEY, clazz);
    const inst = Reflect.construct(clazz, constructorArgs);

    // TODO Not support cyclic reference
    // Check class metadata[PROPS_KEY] for existance of any known references within container, then initialize them.
    for (let prop in props) {
      const identifier = props[prop].value;
      inst[prop] = this.get(identifier);
    }

    return inst;
  };
}
