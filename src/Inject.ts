import 'reflect-metadata';

export const PROPS_KEY = 'ioc:inject_props';

export function Inject() {
  return function (target: any, targetKey: string) {
    const annotationTarget = target.constructor;
    let props: { [key: string]: Object } = {};

    if (Reflect.hasOwnMetadata(PROPS_KEY, annotationTarget)) {
      props = Reflect.getMetadata(PROPS_KEY, annotationTarget);
    }

    props[targetKey] = { value: targetKey };

    Reflect.defineMetadata(PROPS_KEY, props, annotationTarget);
  };
}

export default { PROPS_KEY, Inject };
