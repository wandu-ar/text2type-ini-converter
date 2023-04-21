import { TransformFnParams } from "class-transformer";

export function stringToNumber({ value }: TransformFnParams): number {
  return typeof value === 'number' ? value : Number(value);
}
