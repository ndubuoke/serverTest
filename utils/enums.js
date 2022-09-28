
export const getEnumsArray = object => {
    return [...Object.values(object)]
  }

export const CONTROL_TYPES = Object.freeze({
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
  PAGE: "page"
});


