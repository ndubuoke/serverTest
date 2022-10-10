import {
  body,
  oneOf,
  validationResult,
  check,
  param,
  checkSchema,
} from "express-validator";
import { FORM_CONTROL_TYPES, getEnumsArray } from "../utils/enums.js";
import { errorResMsg } from "../utils/response.js";

export const expressValidator = (req, res, next) => {
  const errors = validationResult(req);
  var messages = [];
  if (!errors.isEmpty()) {
    for (const i of errors.array()) {
      messages.push(i);
    }
    return res
      .status(400)
      .send({ message: "Bad Request", data: errors, status: 400 });
  }
  next();
};

export const updateFormControlStatusValidator = () => [
  param("status")
    .notEmpty()
    .isString()
    .isIn(["active", "inactive", "deactivated"])
    .withMessage(
      "Form control status does contain a valid value, ['active', 'inactive', 'deactivated']"
    ),
  param("id")
    .notEmpty()
    .isString()
    .withMessage("Form control ID cannot be empty"),
];

export const formControlIDValidator = () => [
  param("id")
    .isString()
    .notEmpty()
    .withMessage("Form control ID cannot be empty"),
];

export const formControlNameValidator = () => [
  param("name")
    .isString()
    .notEmpty()
    .withMessage("Form control name cannot be empty"),
];

export const createFormControlValidator = () => [
  body("name").notEmpty().withMessage("Form control name is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("description must be a string"),
  body("formControlType")
    .notEmpty()
    .isString()
    .isIn([...getEnumsArray(FORM_CONTROL_TYPES)])
    .withMessage("Form control type does contain a valid value"),
  body("formControlTypeDesc")
    .optional()
    .isString()
    .withMessage("Form control type description must be a string"),
  body("formControlProperties")
    .notEmpty()
    .isArray({ min: 1 })
    .withMessage("Form control must have at least one property"),
];

export const requireParams = (params) => (req, res, next) => {
  const reqParamsList = Object.keys(req.params);
  const hasAllRequiredParams = params.every((param) =>
    reqParamsList.includes(param)
  );

  if (!hasAllRequiredParams) {
    return errorResMsg(
      res,
      400,
      `The following params are required: ${params.join(", ")}`
    );
  }
  next();
};
