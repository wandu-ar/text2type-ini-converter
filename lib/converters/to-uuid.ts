import { TransformFnParams } from "class-transformer";
import { validate as uuidValidate, parse as uuidParse, stringify as uuidStringify } from "uuid";

// TODO: Confirmar tipo de dato compatible con mongodb y mongoose / Charlarlo con mongo
// export function stringToUUID({ value }: TransformFnParams) {

//   // verificar si ya es un UUID
//   let isUUID = false;
//   try {
//     const buffer = uuidStringify(value);
//   } catch (err) {

//   }

//   const buff = uuidParse(value);
//   buff instanceof Uint8Array 

//   return uuidValidate(value) ? value : uuidParse(value);
// }
