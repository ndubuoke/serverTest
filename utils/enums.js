
export const getEnumsArray = object => {
    return [...Object.values(object)]
  }

export const FORM_CONTROL_TYPES = Object.freeze({
  TEXT_INPUT: "text_input",
  TOGGLE: "toggle",
  DROPDOWN_FIELD: "dropdown_field",
  TEXTAREA: "textarea",
  NUMERICAL_INPUT: "numerical_input",
  INTEGER_INPUT: "integer_input",
  TIME_INPUT: "time_input",
  DATE_INPUT: "date_input",
  DECIMAL_INPUT: "decimal_input",
  FILE_UPLOAD_ZONE: "file_upload_zone",
  SECTION: "section",
  PAGE: "page",
  CHECKBOX :"checkbox",
  LABEL: "label"
});


export const FORM_TYPES = Object.freeze({
  INDIVIDUALACCELARATED: "individualAccelerated",
  INDIVIDUALLEGACY: "individualLegacy",
  SMEACCELERATED: "smeAccelerated",
  SMELEGACY: "smeLegacy"
});


export const STATUS = Object.freeze({
  ACTIVE: "active",
  INACTIVE: "inactive",
  DEACTIVATED: "deactivated"
});



export const FORM_STATUS = Object.freeze({
  DRAFT: "draft",
  PUBLISHED: "published",
  DEACTIVATED: "deactivated"
});