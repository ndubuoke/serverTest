import mongoose from "mongoose";

// async function removeAllCollections() {
//   const collections = Object.keys(mongoose.connection.collections);
//   for (const collectionName of collections) {
//     const collection = mongoose.connection.collections[collectionName];
//     await collection.deleteMany();
//   }
//   // Closes the Mongoose connection
//   await mongoose.connection.close();
// }

export const removeAllCollections = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
  // Closes the Mongoose connection
  await mongoose.connection.close();
};


export const createFormBodyParameters = async () => {
   const dataCorrect = {
    "name": "sme legacy form",
    "description": "This is a new version of sme legacy form",
    "formType": "smeLegacy",
    "formTypeDesc": "form for sme legacy",
    "formStatus": "published",
    "version": 1,
    "lastModifiedById": "System admin",
    "lastModifiedBy": "System admin",
    "createdById": "System admin",
    "createdBy": "System admin",
    "builtFormMetadata": {
        "pages": [
            {
                "id": "fggdjh37873737837833",
                "name": "Page",
                "formControlType": "page",
                "pageProperties": [
                    {
                        "id": "6339c4bf94b2d9efa54318b5",
                        "name": "Page name",
                        "description": "With character limit of 50. It defines the of the page",
                        "formControlType": "text_input",
                        "defaultState": "Page [Number]",
                        "status": "active",
                        "statusDesc": "The record is active"
                    },
                    {
                        "id": "6339c4bf94b2d9efa54318b6",
                        "name": "Visibility",
                        "description": "Toggling on enables page visibility on the form",
                        "formControlType": "toggle",
                        "defaultState": "On",
                        "status": "active",
                        "statusDesc": "The record is active"
                    },
                    {
                        "id": "6339c4bf94b2d9efa54318b7",
                        "name": "Allow modification after submission",
                        "description": "Toggling on enables modification of form item after request submission",
                        "formControlType": "toggle",
                        "defaultState": "On",
                        "status": "active",
                        "statusDesc": "The record is active"
                    }
                ],
                "sections": [
                    {
                        "id": "ttjhf6438337873737837833",
                        "name": "Section",
                        "formControlType": "section",
                        "sectionProperties": [
                            {
                                "id": "6339c4bf94b2d9efa54318b6",
                                "name": "Visibility",
                                "description": "Toggling on enables page visibility on the form",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b7",
                                "name": "Allow modification after submission",
                                "description": "Toggling on enables modification of form item after request submission",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b8",
                                "name": "Section name",
                                "description": "With character limit of 50. It defines the name of the section",
                                "formControlType": "text_input",
                                "defaultState": "Section [Number]",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b9",
                                "name": "Toggle help text",
                                "description": "Toggling on displays information icon, which when clicked, displays help text",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318ba",
                                "name": "Help text",
                                "description": "Help text that is displayed when toggle help text is turned on",
                                "formControlType": "textarea",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318bb",
                                "name": "Number of columns",
                                "description": "Ranges from 1 to 3. This defines the number of columns the section can contain",
                                "formControlType": "dropdown_field",
                                "defaultState": "",
                                "formControlPropertyItems": [
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "status": "active",
                                "statusDesc": "The record is active"
                            }
                        ],
                        "fields": [
                            {
                                "id": "rrtwlwggdjh37873737837833",
                                "name": "Dropdown",
                                "formControlType": "dropdown_field",
                                "formControlProperties": [
                                    {
                                        "id": "6339c4bf94b2d9efa54318bd",
                                        "name": "Field label",
                                        "description": "With character limit of 100. It defines the short text field label",
                                        "formControlType": "text_input",
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318be",
                                        "name": "Placeholder",
                                        "description": "With character limit of 100. It defines the short text field sub-label",
                                        "formControlType": "text_input",
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318bf",
                                        "name": "Col Span",
                                        "description": "Defines the number of columns the form item should take on the page relative to the number of columns defined for the section",
                                        "formControlType": "dropdown_field",
                                        "defaultState": "1",
                                        "formControlPropertyItems": [
                                            "1",
                                            "2",
                                            "3"
                                        ],
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318b6",
                                        "name": "Visibility",
                                        "description": "Toggling on enables page visibility on the form",
                                        "formControlType": "toggle",
                                        "defaultState": "On",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318b7",
                                        "name": "Allow modification after submission",
                                        "description": "Toggling on enables modification of form item after request submission",
                                        "formControlType": "toggle",
                                        "defaultState": "On",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318c0",
                                        "name": "Set as Required",
                                        "description": "Toggling on makes the short text field input mandatory",
                                        "formControlType": "toggle",
                                        "defaultState": "Off",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318b9",
                                        "name": "Toggle help text",
                                        "description": "Toggling on displays information icon, which when clicked, displays help text",
                                        "formControlType": "toggle",
                                        "defaultState": "On",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318ba",
                                        "name": "Help text",
                                        "description": "Help text that is displayed when toggle help text is turned on",
                                        "formControlType": "textarea",
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318c6",
                                        "name": "Dropdown Options List",
                                        "description": "Defines what is displayed when the dropdown option is clicked. The options are: - Manual Input - Import from File - Import from URL - Import from API",
                                        "formControlType": "dropdown_field",
                                        "defaultState": "Manual Input",
                                        "formControlPropertyItems": [
                                            "Manual Input",
                                            "Import from File",
                                            "Import from URL",
                                            "Import from API"
                                        ],
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318c7",
                                        "name": "Specify Options List",
                                        "description": "This field becomes visible when 'Dropdown Options List' field is set to 'Manual Input'. The user inputs the options manually, line by line.",
                                        "formControlType": "textarea",
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318cb",
                                        "name": "Enable multiple selection of options",
                                        "description": "Toggling on allows for multiple selection of options from the returned list of values when the dropdown is clicked.",
                                        "formControlType": "toggle",
                                        "defaultState": "Off",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318cc",
                                        "name": "Default selection",
                                        "description": "Defines the default option for the dropdown item",
                                        "formControlType": "dropdown_field",
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318c4",
                                        "name": "Enable External Integration",
                                        "description": "Toggling on enables external integration via an API",
                                        "formControlType": "toggle",
                                        "defaultState": "Off",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318c5",
                                        "name": "Specify Integration API",
                                        "description": "This becomes active when 'Enable External Integration' is toggled on. The options are fetched from the Integrations management module, enabling the user to select applicable integration API",
                                        "formControlType": "dropdown_field",
                                        "formControlPropertyItems": [],
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    }
                                ],
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "bdfgdhdhhhh37873737837833",
                                "name": "Short text",
                                "formControlType": "text_input",
                                "formControlProperties": [
                                    {
                                        "id": "6339c4bf94b2d9efa54318bd",
                                        "name": "Field label",
                                        "description": "With character limit of 100. It defines the short text field label",
                                        "formControlType": "text_input",
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318be",
                                        "name": "Placeholder",
                                        "description": "With character limit of 100. It defines the short text field sub-label",
                                        "formControlType": "text_input",
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318bf",
                                        "name": "Col Span",
                                        "description": "Defines the number of columns the form item should take on the page relative to the number of columns defined for the section",
                                        "formControlType": "dropdown_field",
                                        "defaultState": "1",
                                        "formControlPropertyItems": [
                                            "1",
                                            "2",
                                            "3"
                                        ],
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318b6",
                                        "name": "Visibility",
                                        "description": "Toggling on enables page visibility on the form",
                                        "formControlType": "toggle",
                                        "defaultState": "On",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318b7",
                                        "name": "Allow modification after submission",
                                        "description": "Toggling on enables modification of form item after request submission",
                                        "formControlType": "toggle",
                                        "defaultState": "On",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318c0",
                                        "name": "Set as Required",
                                        "description": "Toggling on makes the short text field input mandatory",
                                        "formControlType": "toggle",
                                        "defaultState": "Off",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318b9",
                                        "name": "Toggle help text",
                                        "description": "Toggling on displays information icon, which when clicked, displays help text",
                                        "formControlType": "toggle",
                                        "defaultState": "On",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318ba",
                                        "name": "Help text",
                                        "description": "Help text that is displayed when toggle help text is turned on",
                                        "formControlType": "textarea",
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318c4",
                                        "name": "Enable External Integration",
                                        "description": "Toggling on enables external integration via an API",
                                        "formControlType": "toggle",
                                        "defaultState": "Off",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    },
                                    {
                                        "id": "6339c4bf94b2d9efa54318c5",
                                        "name": "Specify Integration API",
                                        "description": "This becomes active when 'Enable External Integration' is toggled on. The options are fetched from the Integrations management module, enabling the user to select applicable integration API",
                                        "formControlType": "dropdown_field",
                                        "formControlPropertyItems": [],
                                        "defaultState": "",
                                        "status": "active",
                                        "statusDesc": "The record is active"
                                    }
                                ],
                                "status": "active",
                                "statusDesc": "The record is active"
                            }
                        ],
                        "status": "active",
                        "statusDesc": "The record is active"
                    }
                ],
                "fields": [],
                "status": "active",
                "statusDesc": "The record is active"
            },
            {
                "id": "ebvs7djh3787373783tedgv553",
                "name": "Page",
                "formControlType": "page",
                "pageProperties": [
                    {
                        "id": "6339c4bf94b2d9efa54318b5",
                        "name": "Page name",
                        "description": "With character limit of 50. It defines the of the page",
                        "formControlType": "text_input",
                        "defaultState": "Page [Number]",
                        "status": "active",
                        "statusDesc": "The record is active"
                    },
                    {
                        "id": "6339c4bf94b2d9efa54318b6",
                        "name": "Visibility",
                        "description": "Toggling on enables page visibility on the form",
                        "formControlType": "toggle",
                        "defaultState": "On",
                        "status": "active",
                        "statusDesc": "The record is active"
                    },
                    {
                        "id": "6339c4bf94b2d9efa54318b7",
                        "name": "Allow modification after submission",
                        "description": "Toggling on enables modification of form item after request submission",
                        "formControlType": "toggle",
                        "defaultState": "On",
                        "status": "active",
                        "statusDesc": "The record is active"
                    }
                ],
                "fields": [
                    {
                        "id": "ttrh55djh37873737837833",
                        "name": "Dropdown",
                        "formControlType": "dropdown_field",
                        "formControlProperties": [
                            {
                                "id": "6339c4bf94b2d9efa54318bd",
                                "name": "Field label",
                                "description": "With character limit of 100. It defines the short text field label",
                                "formControlType": "text_input",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318be",
                                "name": "Placeholder",
                                "description": "With character limit of 100. It defines the short text field sub-label",
                                "formControlType": "text_input",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318bf",
                                "name": "Col Span",
                                "description": "Defines the number of columns the form item should take on the page relative to the number of columns defined for the section",
                                "formControlType": "dropdown_field",
                                "defaultState": "1",
                                "formControlPropertyItems": [
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b6",
                                "name": "Visibility",
                                "description": "Toggling on enables page visibility on the form",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b7",
                                "name": "Allow modification after submission",
                                "description": "Toggling on enables modification of form item after request submission",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318c0",
                                "name": "Set as Required",
                                "description": "Toggling on makes the short text field input mandatory",
                                "formControlType": "toggle",
                                "defaultState": "Off",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b9",
                                "name": "Toggle help text",
                                "description": "Toggling on displays information icon, which when clicked, displays help text",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318ba",
                                "name": "Help text",
                                "description": "Help text that is displayed when toggle help text is turned on",
                                "formControlType": "textarea",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318c6",
                                "name": "Dropdown Options List",
                                "description": "Defines what is displayed when the dropdown option is clicked. The options are: - Manual Input - Import from File - Import from URL - Import from API",
                                "formControlType": "dropdown_field",
                                "defaultState": "Manual Input",
                                "formControlPropertyItems": [
                                    "Manual Input",
                                    "Import from File",
                                    "Import from URL",
                                    "Import from API"
                                ],
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318c7",
                                "name": "Specify Options List",
                                "description": "This field becomes visible when 'Dropdown Options List' field is set to 'Manual Input'. The user inputs the options manually, line by line.",
                                "formControlType": "textarea",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318cb",
                                "name": "Enable multiple selection of options",
                                "description": "Toggling on allows for multiple selection of options from the returned list of values when the dropdown is clicked.",
                                "formControlType": "toggle",
                                "defaultState": "Off",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318cc",
                                "name": "Default selection",
                                "description": "Defines the default option for the dropdown item",
                                "formControlType": "dropdown_field",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318c4",
                                "name": "Enable External Integration",
                                "description": "Toggling on enables external integration via an API",
                                "formControlType": "toggle",
                                "defaultState": "Off",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318c5",
                                "name": "Specify Integration API",
                                "description": "This becomes active when 'Enable External Integration' is toggled on. The options are fetched from the Integrations management module, enabling the user to select applicable integration API",
                                "formControlType": "dropdown_field",
                                "formControlPropertyItems": [],
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            }
                        ],
                        "status": "active",
                        "statusDesc": "The record is active"
                    },
                    {
                        "id": "fggeuejh37873737837833",
                        "name": "Short text",
                        "formControlType": "text_input",
                        "formControlProperties": [
                            {
                                "id": "6339c4bf94b2d9efa54318bd",
                                "name": "Field label",
                                "description": "With character limit of 100. It defines the short text field label",
                                "formControlType": "text_input",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318be",
                                "name": "Placeholder",
                                "description": "With character limit of 100. It defines the short text field sub-label",
                                "formControlType": "text_input",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318bf",
                                "name": "Col Span",
                                "description": "Defines the number of columns the form item should take on the page relative to the number of columns defined for the section",
                                "formControlType": "dropdown_field",
                                "defaultState": "1",
                                "formControlPropertyItems": [
                                    "1",
                                    "2",
                                    "3"
                                ],
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b6",
                                "name": "Visibility",
                                "description": "Toggling on enables page visibility on the form",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b7",
                                "name": "Allow modification after submission",
                                "description": "Toggling on enables modification of form item after request submission",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318c0",
                                "name": "Set as Required",
                                "description": "Toggling on makes the short text field input mandatory",
                                "formControlType": "toggle",
                                "defaultState": "Off",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318b9",
                                "name": "Toggle help text",
                                "description": "Toggling on displays information icon, which when clicked, displays help text",
                                "formControlType": "toggle",
                                "defaultState": "On",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318ba",
                                "name": "Help text",
                                "description": "Help text that is displayed when toggle help text is turned on",
                                "formControlType": "textarea",
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318c4",
                                "name": "Enable External Integration",
                                "description": "Toggling on enables external integration via an API",
                                "formControlType": "toggle",
                                "defaultState": "Off",
                                "status": "active",
                                "statusDesc": "The record is active"
                            },
                            {
                                "id": "6339c4bf94b2d9efa54318c5",
                                "name": "Specify Integration API",
                                "description": "This becomes active when 'Enable External Integration' is toggled on. The options are fetched from the Integrations management module, enabling the user to select applicable integration API",
                                "formControlType": "dropdown_field",
                                "formControlPropertyItems": [],
                                "defaultState": "",
                                "status": "active",
                                "statusDesc": "The record is active"
                            }
                        ],
                        "status": "active",
                        "statusDesc": "The record is active"
                    }
                ],
                "sections": [],
                "status": "active",
                "statusDesc": "The record is active"
            }
        ]
    }
   }
   const dataNoPages = {
        "name": "sme legacy form",
        "description": "This is a new version of sme legacy form",
    
        "formTypeDesc": "form for sme legacy",
        "formStatus": "published",
        "version": 1,
        "lastModifiedById": "System admin",
        "lastModifiedBy": "System admin",
        "createdById": "System admin",
        "createdBy": "System admin",
        "builtFormMetadata": {
            "pages": [
              
            ]
        }
    }
  return {dataCorrect, dataNoPages}
};
