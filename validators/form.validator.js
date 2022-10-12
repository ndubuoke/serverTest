import { body, oneOf, validationResult, check, param } from "express-validator";

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

// create new form validator
export const createFormValidator = () => [
  body("name").notEmpty().withMessage("Name is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("description must be  a string"),
  body("formType")
    .notEmpty().withMessage("formType cannot be empty")
    .isString().withMessage("formType must be a string")
    .isIn([
      "individualAccelerated",
      "individualLegacy",
      "smeAccelerated",
      "smeLegacy",
    ])
    .withMessage("formType does not contain a valid value"),
  body("formTypeDesc")
    .optional()
    .isString()
    .withMessage("formTypeDesc must be  a string"),
  body("formStatus")
    .notEmpty().withMessage("formStatus cannot be empty")
    .isString().withMessage("formStatus must be a string")
    .isIn(["draft", "published", "deactivated"])
    .withMessage("formStatus does not contain a valid value"),
  body("lastModifiedById")
    .notEmpty()
    .withMessage("lastModifiedById is required"),
  body("lastModifiedBy").notEmpty().withMessage("lastModifiedBy is required"),
  body("createdById").notEmpty().withMessage("createdById is required"),
  body("createdBy").notEmpty().withMessage("createdBy is required"),
  check("builtFormMetadata.pages")
    .notEmpty()
    .withMessage("Page is required")
    .isArray({ min: 1 })
    .withMessage("Page must be an array"),
  check("builtFormMetadata.pages.*.pageProperties")
    .isArray()
    .withMessage("Page Properties must be an array")
    .not()
    .isEmpty()
    .withMessage("Page Properties can not be empty")
    .bail(),
  check("builtFormMetadata.pages.*.id")
    .notEmpty()
    .withMessage("Page id can not be empty")
    .bail(),
  check("builtFormMetadata.pages.*.formControlType")
    .notEmpty()
    .withMessage("Page formControlType can not be empty")
    .bail(),
  check("builtFormMetadata.pages.*.pageProperties.*.name")
    .notEmpty()
    .withMessage("Field name for Page Properties  is required")
    .bail(),
  check("builtFormMetadata.pages.*.pageProperties.*.formControlType")
    .notEmpty()
    .withMessage("Field formControlType for Page Properties  is required")
    .bail(),
  check("builtFormMetadata.pages.*.pageProperties.*.id")
    .notEmpty()
    .withMessage("Field name for Page Properties  is required")
    .bail(),
  check("builtFormMetadata.pages.*.sections")
    .isArray()
    .withMessage("Sections must be an array"),
  check("builtFormMetadata.pages.*.fields")
    .isArray()
    .withMessage("Fields must be an array"),
];

// update form status  validator
export const updateFormStatusValidator = () => [
  param("formStatus")
    .notEmpty()
    .isString()
    .isIn(["draft", "published", "deactivated"])
    .withMessage("formStatus does not contain a valid value"),
];

//
export const updateStatusValidator = () => [
  param("status")
    .notEmpty()
    .isString()
    .isIn(["active", "inactive", "deactivated"])
    .withMessage("Status does not contain a valid value"),
];
