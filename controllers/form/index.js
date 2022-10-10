import formService from "../../services/form-service.js";
import { errorResMsg, successResMsg } from "../../utils/response.js";
import {formsDynamicQuery} from '../../utils/helper.js'
import { FORM_TYPES, getEnumsArray} from "../../utils/enums.js";

class FormController {
  async findAll(req, res) {
    try {
      const query =  await formsDynamicQuery(req.query)
      const form = await formService.findAll(query);

      return successResMsg(res, 200, {
        message: "Form  fetched successfully",
        data: form,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while getting forms",
      });
    }
  }

  async findOne(req, res) {
    try {
      const { id } = req.params;

      const form_exists = await formService.findOne(id);

      if (!form_exists) {
        return successResMsg(res, 404, {
          message: "Form  not found",
          data: null,
        });
      }

      return successResMsg(res, 200, {
        message: "Form  fetched successfully",
        data: form_exists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching form",
      });
    }
  }

  async findPublishedFormByType(req, res) {
    try {
      const { formType } = req.params;
      const  formStatus = "published"

      const form_exists = await formService.findPublishedFormByType(formType, formStatus);

      if (!form_exists) {
        return successResMsg(res, 404, {
          message: "Form not available at the moment. Check back later",
          data: null,
        });
      }

      return successResMsg(res, 200, {
        message: "Form fetched successfully",
        data: form_exists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching form",
      });
    }
  }

  async updateStatus(req, res) {
    try {
      const { id, status } = req.params;

      const form_exists = await formService.findOne(id);

      if (!form_exists) {
        return successResMsg(res, 404, {
          message: "Form  not found",
          data: null,
        });
      }

      const update = await formService.updateOne(
        { _id: id },
        { status }
      );

      return successResMsg(res, 200, {
        message: "Form updated successfully",
        data: update,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form",
      });
    }
  }
  
  async updateFormStatus(req, res) {
    try {
      const { id, formStatus } = req.params;
    

      const form_exists = await formService.findOne(id);

      if (!form_exists) {
        return successResMsg(res, 404, {
          message: "Form  not found",
          data: null,
        });
      }

      const update = await formService.updateOne(
        { _id: id },
        { formStatus  }
      );

      return successResMsg(res, 200, {
        message: "Form updated successfully",
        data: update,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form",
      });
    }
  }

  async deleteOne(req, res) {
    try {
      const { id } = req.params;

      const form_exists = await formService.findOne(id);

      if (!form_exists) {
        return successResMsg(res, 404, {
          message: "Form not found",
          data: null,
        });
      }

      await formService.deleteOne({ _id: id });

      return successResMsg(res, 200, {
        message: "Form  deleted successfully",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while deleting form",
      });
    }
  }

  async updateOne(req, res) {
    try {
      const { id } = req.params ,payload = req.body,  query = { formType: req.body.formType }, updateStatusQuery = {formStatus: "deactivated"};
      const form_exists = await formService.findOne(id);

      if (!form_exists) {
        return successResMsg(res, 404, {
          message: "Form  not found",
          data: null,
        });
      }

      const updated_form_exists = await formService.updateManyFormStatus(
        query,
        updateStatusQuery
      );
   

      const form = await formService.createOne(payload);

      return successResMsg(res, 200, {
        message: "Form updated successfully",
        data: form,
      });
    } catch (error) {
      console.log(error)
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form",
      });
    }
  }

  async createOne(req, res) {
    try {
      const{ formType} = req.body
      const form_exists = await formService.findByFormType(formType);
      if (form_exists) {
        return successResMsg(res, 400, {
          message: "Form type already exist, please fetch the published one and update",
          data: null,
        });
      }
      const payload = req.body;
      const form = await formService.createOne(payload);

      return successResMsg(res, 200, {
        message: "Form  created successfully",
        data: form,
      });
    } catch (error) {
      console.log(error)
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating form",
      });
    }
  }

  
  async findAllFormTypes(req, res) {
    try {
      const formTypes =  [...getEnumsArray(FORM_TYPES)];

      return successResMsg(res, 200, {
        message: "Form types fetched successfully",
        data: formTypes,
      });
    } catch (error) {
      console.log(error)
      return errorResMsg(res, 500, {
        message: "Something went wrong while getting form types",
      });
    }
  }
}

export default new FormController();
