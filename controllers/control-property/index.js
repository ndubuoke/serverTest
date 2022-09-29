import { CONTROL_PROPERTY } from "../../seeders/control-properties.seed.js";
import controlPropertyService from "../../services/control-property-service.js";
import { errorResMsg, successResMsg } from "../../utils/response.js";

class ControlPropertyController {
  async findAll(req, res) {
    try {
      const controlProperties = await controlPropertyService.findAll();

      console.log(controlProperties);

      return successResMsg(res, 200, {
        message: "Control properties fetched successfully",
        data: controlProperties,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating control properties",
      });
    }
  }

  async findOne(req, res) {
    try {
      const { id } = req.params;

      const property_exists = await controlPropertyService.findOne(id);

      if (!property_exists) {
        return successResMsg(res, 404, {
          message: "Control property not found",
          data: null,
        });
      }

      return successResMsg(res, 200, {
        message: "Control property fetched successfully",
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
      const controlProperty = await controlPropertyService.createOne(payload);

      console.log(controlProperty);

      return successResMsg(res, 200, {
        message: "Control property created successfully",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating control properties",
      });
    }
  }

  async bulkCreate(req, res) {
    try {
      const payload = CONTROL_PROPERTY;
      const controlProperties = await controlPropertyService.bulkCreate(
        payload
      );

      console.log(controlProperties);

      return successResMsg(res, 200, {
        message: "Control properties successfully seeded",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while seeding control properties",
      });
    }
  }

  async updatePropertyStatus(req, res) {
    try {
      const { id, status } = req.params;

      const property_exists = await controlPropertyService.findOne(id);

      if (!property_exists) {
        return successResMsg(res, 404, {
          message: "Control property not found",
          data: null,
        });
      }

      const updatedProperty = await controlPropertyService.updateOne(
        { _id: id },
        { status }
      );

      console.log(updatedProperty);

      return successResMsg(res, 200, {
        message: "Control property updated successfully",
        data: updatedProperty,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating control properties",
      });
    }
  }

  async deleteOne(req, res) {
    try {
      const { id } = req.params;

      const property_exists = await controlPropertyService.findOne(id);

      if (!property_exists) {
        return successResMsg(res, 404, {
          message: "Control property not found",
          data: null,
        });
      }

      await controlPropertyService.deleteOne({ _id: id });

      return successResMsg(res, 200, {
        message: "Control property deleted successfully",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while deleting control properties",
      });
    }
  }
}

export default new ControlPropertyController();
