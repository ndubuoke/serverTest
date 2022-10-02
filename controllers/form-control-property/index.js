import { FORM_CONTROL_PROPERTY } from "../../seeders/form-control-properties.seed.js";
import formControlPropertyService from "../../services/form-control-property-service.js";
import { STATUS } from "../../utils/enums.js";
import { errorResMsg, successResMsg } from "../../utils/response.js";

class FormControlPropertyController {
  async findAll(req, res) {
    try {
      const formControlProperties = await formControlPropertyService.findAll();

      return successResMsg(res, 200, {
        message: "Form control properties fetched successfully",
        data: formControlProperties,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating form control properties",
      });
    }
  }

  async findOne(req, res) {
    try {
      const { id } = req.params;

      const property_exists = await formControlPropertyService.findOne(id);

      if (!property_exists) {
        return successResMsg(res, 404, {
          message: "Form control property not found",
          data: null,
        });
      }

      return successResMsg(res, 200, {
        message: "Form control property fetched successfully",
        data: property_exists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching form control properties",
      });
    }
  }

  async findOneByName(req, res) {
    try {
      const { name } = req.params;

      const property_exists = await formControlPropertyService.findOneByName(
        name
      );

      if (!property_exists) {
        return successResMsg(res, 404, {
          message: "Form control property not found",
          data: null,
        });
      }

      return successResMsg(res, 200, {
        message: "Form control property fetched successfully",
        data: property_exists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching control properties",
      });
    }
  }

  async createOne(req, res) {
    try {
      const payload = req.body;
      const controlProperty = await formControlPropertyService.createOne(
        payload
      );

      console.log(controlProperty);

      return successResMsg(res, 200, {
        message: "Form control property created successfully",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating form control properties",
      });
    }
  }

  async bulkCreate(req, res) {
    try {
      await formControlPropertyService.bulkCreate(FORM_CONTROL_PROPERTY);

      return successResMsg(res, 201, {
        message: "Form control properties successfully seeded",
      });
    } catch (error) {
      console.log(error);
      return errorResMsg(res, 500, {
        message: "Something went wrong while seeding form control properties",
      });
    }
  }

  async updatePropertyStatus(req, res) {
    try {
      const { id, status } = req.params;

      const statusValues = Object.values(STATUS);

      if (!statusValues.includes(status)) {
        return successResMsg(res, 400, {
          message: "Invalid form control status",
          data: null,
        });
      }

      const property_exists = await formControlPropertyService.findOne(id);

      if (!property_exists) {
        return successResMsg(res, 404, {
          message: "Form control property not found",
          data: null,
        });
      }

      const updatedProperty = await formControlPropertyService.updateOne(
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
        message: "Form control property updated successfully",
        data: updatedProperty,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form control properties",
      });
    }
  }

  async deleteOne(req, res) {
    try {
      const { id } = req.params;

      const property_exists = await formControlPropertyService.findOne(id);

      if (!property_exists) {
        return successResMsg(res, 404, {
          message: "Form control property not found",
          data: null,
        });
      }

      await formControlPropertyService.deleteOne({ _id: id });

      return successResMsg(res, 200, {
        message: "Form control property deleted successfully",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while deleting form control properties",
      });
    }
  }

  async updateOne(req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const query = { _id: id };

      const property_exists = await formControlPropertyService.findOne(id);

      if (!property_exists) {
        return successResMsg(res, 404, {
          message: "Form control property not found",
          data: null,
        });
      }

      const updated_property_exists =
        await formControlPropertyService.updateOne(query, payload);

      return successResMsg(res, 200, {
        message: "Form control property updated successfully",
        data: updated_property_exists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form control properties",
      });
    }
  }
}

export default new FormControlPropertyController();
