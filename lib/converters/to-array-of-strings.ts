import { TransformFnParams } from "class-transformer";

export function stringToArrayOfStrings(separator: string = ',') {
  return ({ value }: TransformFnParams): string[] => {
    if (typeof value !== 'string') throw new Error('Type of value from config is not string');
    return (value.indexOf(separator) === -1) ? [ value ] : value.split(separator);
  }
}
