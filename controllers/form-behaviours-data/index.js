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
      const all = await formBehavioursDataService.fetchAll();
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

// {
//     formType: 'sampleformtype',
//     behaviourStatus: 'Published',
//     version: 1,
//     behaviours: [ { config: [Object], condition: [Object], actions: [Array] } ],
//     createdBy: 'System admin',
//     createdById: 'System admin',
//     lastModifiedBy: 'System admin',
//     lastModifiedById: 'System admin',
//     _id: new ObjectId("633f39f56e480c0c02c44d1f"),
//     createdAt: 2022-10-06T20:26:29.539Z,
//     updatedAt: 2022-10-06T20:26:29.539Z,
//     __v: 0
//   }
