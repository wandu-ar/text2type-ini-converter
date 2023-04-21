import { Transform } from "class-transformer";
import { stringToNumber } from "../converters";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

/**
 * Read, cast and convert an required string value from config to number type and validate
 */
export function NumberFromConfig(): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Transform(stringToNumber)(target, propertyKey);
    IsNumber()(target, propertyKey);
    IsNotEmpty()(target, propertyKey);
  }
}

/**
 * Read, cast and convert an optional string value from config to number type and validate
 */
export function NumberFromConfigOptional(): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Transform(stringToNumber)(target, propertyKey);
    IsNumber()(target, propertyKey);
    IsOptional()(target, propertyKey);
  }
}
