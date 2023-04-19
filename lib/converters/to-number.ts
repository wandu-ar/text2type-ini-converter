import { TransformFnParams } from "class-transformer";

export function stringToNumber({ value }: TransformFnParams) {
  return typeof value === 'number' ? value : Number(value);
}
