import { Transform } from "class-transformer";
import { stringToArrayOfStrings, stringToBoolean } from "../converters";
import { IsArray, IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

/**
 * Read, cast and convert an required string value from config to array type and validate
 */
export function ArrayOfStringsFromConfig(separator: string = ','): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Transform(stringToArrayOfStrings(separator))(target, propertyKey);
    IsArray()(target, propertyKey);
    IsString({ each: true })(target, propertyKey);
    IsNotEmpty()(target, propertyKey);
  }
}

/**
 * Read, cast and convert an optional string value from config to array type and validate
 */
export function ArrayOfStringsFromConfigOptional(separator: string = ','): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Transform(stringToArrayOfStrings(separator))(target, propertyKey);
    IsArray()(target, propertyKey);
    IsString({ each: true })(target, propertyKey);
    IsOptional()(target, propertyKey);
  }
}
