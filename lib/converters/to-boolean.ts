import { TransformFnParams } from "class-transformer";

export function stringToBoolean({ value }: TransformFnParams) {
  if (typeof value === 'boolean') return value;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return !!value;
}


