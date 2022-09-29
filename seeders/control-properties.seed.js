export const CONTROL_PROPERTY = [
  {
    name: "Page name",
    description: "With character limit of 50. It defines the name of the page",
    controlType: "page",
    defaultState: "Page [Number]",
  },
  {
    name: "Visibility",
    description: "Toggling on enables page visibility on the form",
    controlType: "toggle",
    defaultState: "On",
  },
  {
    name: "Allow modification after submission",
    description:
      "Toggling on enables modification of form item after request submission",
    controlType: "toggle",
    defaultState: "On",
  },
  {
    name: "Section name",
    description:
      "With character limit of 50. It defines the name of the section",
    controlType: "section",
    defaultState: "Section [Number]",
  },
  {
    name: "Toggle help text",
    description:
      "Toggling on displays information icon, which when clicked, displays help text",
    controlType: "toggle",
    defaultState: "On",
  },
  {
    name: "Help text",
    description:
      "Help text that is displayed when toggle help text is turned on",
    controlType: "textarea",
    defaultState: "",
  },
  {
    name: "Number of columns",
    description:
      "Ranges from 1 to 3. This defines the number of columns the section can contain",
    controlType: "dropdown_field",
    defaultState: "",
  },
  {
    name: "Label",
    description: "With character limit of 100. It defines the header text",
    controlType: "text_input",
    defaultState: "",
  },
  {
    name: "Field label",
    description:
      "With character limit of 100. It defines the short text field label",
    controlType: "text_input",
    defaultState: "",
  },
  {
    name: "Placeholder",
    description:
      "With character limit of 100. It defines the short text field sub-label",
    controlType: "text_input",
    defaultState: "",
  },
  {
    name: "Col Span",
    description:
      "Defines the number of columns the form item should take on the page relative to the number of columns defined for the section",
    controlType: "dropdown_field",
    defaultState: "1",
  },
  {
    name: "Set as Required",
    description: "Toggling on makes the short text field input mandatory",
    controlType: "toggle",
    defaultState: "Off",
  },
  {
    name: "Character Type",
    description:
      "Defines what character the system should allow for the short text field. Dropdown options include: -String -Integer -Decimal",
    controlType: "dropdown_field",
    defaultState: "String",
    controlPropertyItems: ["String", "Integer", "Decimal"],
  },
  {
    name: "Minimum Number of characters",
    description:
      "Defines the minimum number of characters the system should validate in the field",
    controlType: "numerical_input",
    defaultState: "0",
  },
  {
    name: "Maximum Number of characters",
    description:
      "Defines the maximum number of characters the system should validate in the field",
    controlType: "numerical_input",
    defaultState: "",
  },
  {
    name: "Enable External Integration",
    description: "Toggling on enables external integration via an API",
    controlType: "toggle",
    defaultState: "Off",
  },
  {
    name: "Specify Integration API",
    description:
      "This becomes active when 'Enable External Integration' is toggled on. The options are fetched from the Integrations management module, enabling the user to select applicable integration API",
    controlType: "dropdown_field",
    defaultState: "",
  },
  {
    name: "Dropdown Options List",
    description:
      "Defines what is displayed when the dropdown option is clicked. The options are: - Manual Input - Import from File - Import from URL - Import from API",
    controlType: "dropdown_field",
    defaultState: "Manual Input",
    controlPropertyItems: [
      "Manual Input",
      "Import from File",
      "Import from URL",
      "Import from API",
    ],
  },
  {
    name: "Specify Options List",
    description:
      "This field becomes visible when 'Dropdown Options List' field is set to 'Manual Input'. The user inputs the options manually, line by line.",
    controlType: "textarea",
    defaultState: "",
  },
  {
    name: "Specify API",
    description:
      "This field becomes visible when 'Dropdown Options List' field is set to 'Import from API'. The options are fetched from the Integrations management module, enabling the user to sspecify applicable API",
    controlType: "dropdown_field",
    defaultState: "",
  },
  {
    name: "Upload List",
    description:
      "This field becomes visible when 'Dropdown Options List' field is set to 'Import from File'. It accepts files in .xls and .xlsx format, containing the list of options",
    controlType: "file_upload_zone",
    defaultState: "",
  },
  {
    name: "Specify URL",
    description:
      "This field becomes visible when 'Dropdown Options List' field is set to 'Import from URL'. It accepts files in .xls and .xlsx format, containing the list of option",
    controlType: "textarea",
    defaultState: "",
  },
  {
    name: "Enable multiple selection of options",
    description:
      "Toggling on allows for multiple selection of options from the returned list of values when the dropdown is clicked.",
    controlType: "toggle",
    defaultState: "Off",
  },
  {
    name: "Default selection",
    description: "Defines the default option for the dropdown item",
    controlType: "dropdown_field",
    defaultState: "",
  },
  {
    name: "Options arrangement",
    description:
      "The user specifies whether the options would be arranged horizontally or vertically",
    controlType: "dropdown_field",
    defaultState: "Horizontal",
    controlPropertyItems: ["Horizontal", "Vertical"],
  },
  {
    name: "Allowable File Types",
    description:
      "Defines the file formats the system should validate during the file upload process. The list of file types include: jpeg, pdf, png",
    controlType: "textarea",
    defaultState: "jpeg, pdf, png",
  },
  {
    name: "Maximum Number of Files",
    description:
      "Defines the maximum number of files the system should allow during the file upload process ",
    controlType: "integer_input",
    defaultState: "1",
  },
  {
    name: "Maximum File Size for Each Upload",
    description:
      "Defines the maximum file size the system should allow for each file upload process",
    controlType: "decimal_input, dropdown_field",
    defaultState: "1, MB",
    controlPropertyItems: ["KB", "MB", "GB"],
  },
  {
    name: "Swap label position",
    description:
      "Toggling on enables the position of the field label to changed with respect to the action toggle position e.g if the label is on the right it will be swapped to the left",
    controlType: "toggle",
    defaultState: "Off",
  },
  {
    name: "Type",
    description:
      "Defines what type of toggle symbol should be displayed. The list of type options include: checkbox, toggle switch",
    controlType: "dropdown_field",
    defaultState: "checkbox",
    controlPropertyItems: ["checkbox", "toggle switch"],
  },
  {
    name: "Allowable start date",
    description:
      "Defines the minimum allowable start date to be selected or inputted as a date",
    controlType: "date_input",
    defaultState: "",
  },
  {
    name: "Allowable end date",
    description:
      "Defines the maximum allowable start date to be selected or inputted as a date",
    controlType: "date_input",
    defaultState: "",
  },
  {
    name: "Button Type",
    description:
      "Defines the type of button. A dropdown list of button types is shown when clicked: Submit, Reset, Next Page, Previous page, Custom",
    controlType: "dropdown_field",
    defaultState: "Submit",
    controlPropertyItems: [
      "Submit",
      "Reset",
      "Next Page",
      "Previous Page",
      "Custom",
    ],
  },
  {
    name: "Action",
    description:
      "Defines what happens when the button is clicked. A dropdown list of action is displayed when clicked: Submit to URL",
    controlType: "dropdown_field, text_input",
    defaultState: "",
    controlPropertyItems: ["Submit to URL"],
  },
  {
    name: "Minimum numeric input",
    description:
      "Defines the minimum numeric input for the field. It is set to 0 as default.",
    controlType: "numerical_input",
    defaultState: "0",
  },
  {
    name: "Maximum numeric input",
    description: "Defines the maximum numeric input for the field.",
    controlType: "numerical_input",
    defaultState: "",
  },
  {
    name: "Country Code Options List",
    description:
      "Defines what is displayed when the dropdown option is clicked. The options are: - Manual Input - Import from File - Import from URL - Import from API",
    controlType: "dropdown_field",
    defaultState: "Manual Input",
    controlPropertyItems: [
      "Manual Input",
      "Import from File",
      "Import from URL",
      "Import from API",
    ],
  },
  {
    name: "Options List",
    description:
      "Defines what is displayed when the dropdown option is clicked. The options are: - Manual Input - Import from File - Import from URL - Import from API",
    controlType: "dropdown_field",
    defaultState: "Manual Input",
    controlPropertyItems: [
      "Manual Input",
      "Import from File",
      "Import from URL",
      "Import from API",
    ],
  },
  {
    name: "Lowerbound (Min)",
    description:
      "Defines the minimum allowable time to be selected or inputted as a time",
    controlType: "time_input",
    defaultState: "",
  },
  {
    name: "Upperbound (Max)",
    description:
      "Defines the maximum allowable time to be selected or inputted as a time",
    controlType: "time_input",
    defaultState: "",
  },
  {
    name: "Step size",
    description: "Specifies the granularity of the range",
    controlType: "numerical_input",
    defaultState: "",
  },
  {
    name: "Time format",
    description:
      "Defines the time format for the input field. A dropdown with the following options: 'HH:MM:SS', 'HH:MM', '24 HR', 12 HR (AM or PM options)",
    controlType: "text_input",
    defaultState: "HH:MM:SS",
  },
];
