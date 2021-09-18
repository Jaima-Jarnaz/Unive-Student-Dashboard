import { paramCase } from 'change-case';

type MapModifiersModifier = string | false | null | undefined | (string | false | null | undefined)[];

function generateModifierClassNameArray(baseClassName: string, ...modifiers: MapModifiersModifier[]): string[] {
  let classNameArray: string[] = [];

  for (const modifier of modifiers) {
    if (Array.isArray(modifier)) {
      classNameArray = classNameArray.concat(generateModifierClassNameArray(baseClassName, ...modifier));
    } else if (typeof modifier === 'string' && modifier.length > 0) {
      classNameArray.push(baseClassName + '--' + modifier);
    }
  }

  return classNameArray;
}

/**
 * Generate `className` from base class name and modifiers, based on MindBEMing.
 */
export function mapModifiers(baseClassName: string, ...modifiers: MapModifiersModifier[]): string {
  return (
    baseClassName +
    ' ' +
    generateModifierClassNameArray(baseClassName, ...modifiers)
      .join(' ')
      .trim()
  ).trim();
}

export type ModifierProp<M extends string> = M | M[];

export function injectModifiers<M extends string>(
  baseModifiers: ModifierProp<M> | undefined,
  ...additionalModifiers: M[]
): ModifierProp<M> {
  const modifiers = (() => {
    if (typeof baseModifiers === 'undefined') {
      return [];
    } else if (typeof baseModifiers === 'string') {
      return [baseModifiers];
    }
    return baseModifiers;
  })();

  additionalModifiers = additionalModifiers.filter(mod => !modifiers.includes(mod));

  return modifiers.concat(additionalModifiers);
}

export function mapDataAttrs(dataSet: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};

  for (const key in dataSet) {
    result[`data-${paramCase(key)}`] = dataSet[key];
  }

  return result;
}
