import formBehavioursDataService from "../../services/form-behaviours-data-service.js";
import { errorResMsg, successResMsg } from "../../utils/response.js";

class FormBehavioursDataController {
  // create
  async createOrUpdate(req, res) {
    try {
      let data = req.body;
      if (!data.formType) {
        return errorResMsg(res, 400, {
          message: "Please add a form type",
        });
      }
      if (!data.behaviours) {
        return errorResMsg(res, 400, {
          message: "Please add a form behaviours data",
        });
      }
      // check for record with given formType
      const oldRecord = await formBehavioursDataService.findOneByFormType(
        data.formType
      );

      if (oldRecord === null) {
        // New record, set version to 1
        (data.createdBy = "System admin"),
          (data.createdById = "System admin"),
          (data.lastModifiedBy = "System admin"),
          (data.lastModifiedById = "System admin"),
          (data.behaviourStatus = "Published");
        data.version = 1;
        await formBehavioursDataService.createOne(data);

        return successResMsg(res, 200, {
          message: "Form control updated successfully",
          data: null,
        });
      }
      // Old record exists, update version and disable previous record
      // update version
      (data.createdBy = "System admin"),
        (data.createdById = "System admin"),
        (data.lastModifiedBy = "System admin"),
        (data.lastModifiedById = "System admin"),
        (data.behaviourStatus = "Published");
      data.version = oldRecord.version + 1;

      // Disable the old record
      oldRecord.behaviourStatus = "Disabled";
      oldRecord.save();
      await formBehavioursDataService.createOne(data);

      return successResMsg(res, 200, {
        message: "Form control updated successfully",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating form behaviour",
      });
    }
  }
  // fetch all by formType
  async find(req, res) {
    try {
      const formName = req.query.form;
      if (!formName) {
        return errorResMsg(res, 400, {
          message: "Please speciy form type",
        });
      }
      const all = await formBehavioursDataService.findOneByFormType(formName);
      return successResMsg(res, 200, {
        message: "Form controls behaviours data fetched successfully",
        data: all,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching results",
      });
    }
  }
}

export default new FormBehavioursDataController();
