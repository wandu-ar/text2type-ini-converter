import { Transform } from "class-transformer";
import { stringToBoolean } from "../converters";
import { IsBoolean, IsNotEmpty, IsOptional } from "class-validator";

/**
 * Read, cast and convert an required string value from config to boolean type and validate
 */
export function BooleanFromConfig(): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Transform(stringToBoolean)(target, propertyKey);
    IsBoolean()(target, propertyKey);
    IsNotEmpty()(target, propertyKey);
  }
}

/**
 * Read, cast and convert an optional string value from config to boolean type and validate
 */
export function BooleanFromConfigOptional(): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    Transform(stringToBoolean)(target, propertyKey);
    IsBoolean()(target, propertyKey);
    IsOptional()(target, propertyKey);
  }
}
