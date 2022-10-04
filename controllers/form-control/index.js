import { FORM_CONTROL } from "../../seeders/form-control.seed.js";
import formControlService from "../../services/form-control-service.js";
import { STATUS } from "../../utils/enums.js";
import { errorResMsg, successResMsg } from "../../utils/response.js";

class FormControlController {
  async findAll(req, res) {
    try {
      const formControl = await formControlService.findAll();

      return successResMsg(res, 200, {
        message: "Form controls fetched successfully",
        data: formControl,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating form control",
      });
    }
  }

  async findOne(req, res) {
    try {
      const { id } = req.params;

      const control_exists = await formControlService.findOne(id);

      if (!control_exists) {
        return successResMsg(res, 404, {
          message: "Form control not found",
          data: null,
        });
      }

      return successResMsg(res, 200, {
        message: "Form control fetched successfully",
        data: control_exists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching form control",
      });
    }
  }

  async findOneByName(req, res) {
    try {
      const { name } = req.params;

      const control_exists = await formControlService.findOneByName(name);

      if (!control_exists) {
        return successResMsg(res, 404, {
          message: "Form control not found",
          data: null,
        });
      }

      return successResMsg(res, 200, {
        message: "Form control fetched successfully",
        data: control_exists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching control",
      });
    }
  }

  async createOne(req, res) {
    try {
      const payload = req.body;

      // Check if control exists
      const control_exists = await formControlService.findOneByName(
        payload?.name
      );
      if (control_exists) {
        return successResMsg(res, 404, {
          message: "Form control already exists",
          data: control_exists,
        });
      }

      const formControl = await formControlService.createOne(payload);

      return successResMsg(res, 201, {
        message: "Form control created successfully",
        data: formControl,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating form control",
      });
    }
  }

  async bulkCreate(req, res) {
    try {
      // HERE'S THE BULK_CREATE
      await formControlService.bulkCreate(FORM_CONTROL);

      return successResMsg(res, 201, {
        message: "Form control successfully seeded",
      });
    } catch (error) {
      console.log(error);
      return errorResMsg(res, 500, {
        message: "Something went wrong while seeding form control",
      });
    }
  }

  async updateStatus(req, res) {
    try {
      const { id, status } = req.params;

      const statusValues = Object.values(STATUS);

      if (!statusValues.includes(status)) {
        return successResMsg(res, 400, {
          message: "Invalid form control property status",
          data: null,
        });
      }

      const control_exists = await formControlService.findOne(id);

      if (!control_exists) {
        return successResMsg(res, 404, {
          message: "Form control not found",
          data: null,
        });
      }

      const update = await formControlService.updateOne(
        { _id: id },
        {
          status,
          statusDesc:
            status === "deactivated"
              ? `This record has been ${status}`
              : `This record is ${status}`,
        }
      );

      return successResMsg(res, 200, {
        message: "Form control updated successfully",
        data: update,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form control",
      });
    }
  }

  async deleteOne(req, res) {
    try {
      const { id } = req.params;

      const control_exists = await formControlService.findOne(id);

      if (!control_exists) {
        return successResMsg(res, 404, {
          message: "Form control not found",
          data: null,
        });
      }

      await formControlService.deleteOne({ _id: id });

      return successResMsg(res, 200, {
        message: "Form control deleted successfully",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while deleting form control",
      });
    }
  }

  async updateOne(req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const query = { _id: id };

      const control_exists = await formControlService.findOne(id);

      if (!control_exists) {
        return successResMsg(res, 404, {
          message: "Form control not found",
          data: null,
        });
      }

      const updated_control_exists = await formControlService.updateOne(
        query,
        payload
      );

      return successResMsg(res, 200, {
        message: "Form control updated successfully",
        data: updated_control_exists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form control",
      });
    }
  }
}

export default new FormControlController();
