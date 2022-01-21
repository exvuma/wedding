export function objectKeys<T>(t: T) {
  return Object.keys(t) as (keyof T)[];
}
