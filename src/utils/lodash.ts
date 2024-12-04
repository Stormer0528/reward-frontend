// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore?tab=readme-ov-file#_debounce
export function debounce(func: (...args: any[]) => void, wait: number, immediate?: boolean) {
  let timeout: NodeJS.Timeout | null = null;
  return function debounceFn(this: any, ...args: any[]) {
    if (timeout) {
      clearTimeout(timeout);
    }

    if (immediate && !timeout) func.apply(this, args);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    }, wait);
  };
}

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore?tab=readme-ov-file#_get
export const get = (obj: any, path: string, defaultValue = undefined) => {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};
