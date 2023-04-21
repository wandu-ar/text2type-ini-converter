import { Transform } from "class-transformer";
// import { stringToUUID } from "../converters";
import { IsNotEmpty, IsOptional, IsUUID } from "class-validator";

// TODO revisar
// /**
//  * Read, cast and convert an required string value from config to UUID type and validate
//  */
// export function UUIDFromConfig(): PropertyDecorator {
//   return (target: Object, propertyKey: string | symbol) => {
//     Transform(stringToUUID)(target, propertyKey);
//     IsUUID({ version: 'all' })(target, propertyKey);
//     IsNotEmpty()(target, propertyKey);
//   }
// }

// /**
//  * Read, cast and convert an optional string value from config to UUID type and validate
//  */
// export function UUIDFromConfigOptional(): PropertyDecorator {
//   return (target: Object, propertyKey: string | symbol) => {
//     Transform(stringToUUID)(target, propertyKey);
//     IsUUID({ version: 'all' })(target, propertyKey);
//     IsOptional()(target, propertyKey);
//   }
// }
