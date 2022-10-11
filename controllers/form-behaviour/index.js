import formBehaviourService from "../../services/form-behaviour-service.js";
import { STATUS } from "../../utils/enums.js";
import { errorResMsg, successResMsg } from "../../utils/response.js";

class FormBehaviourController {
  async findAll(req, res) {
    try {
      const formBehaviour = await formBehaviourService.findAll(req.query);
      return successResMsg(res, 200, {
        message: "Form behaviour fetched successfully",
        data: formBehaviour,
      });
    } catch (error) {
        console.log(error)
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching form behaviour",
      });
    }
  }

  async findOne(req, res) {
    try {
      const { id } = req.params;

      const formBehaviourExists = await formBehaviourService.findOne(id);

      if (!formBehaviourExists) {
        return successResMsg(res, 404, {
          message: "Form behaviour not found",
          data: null,
        });
      }

      return successResMsg(res, 200, {
        message: "Form behaviour fetched successfully",
        data: formBehaviourExists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching form behaviour",
      });
    }
  }

  async findByStatus(req, res) {
    try {
      const { status } = req.params;

      const formBehaviourExists = await formBehaviourService.findFormBehavioursByStatus(status);

      return successResMsg(res, 200, {
        message: "Form behaviour fetched successfully",
        data: formBehaviourExists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while fetching form behaviour",
      });
    }
  }

  async createOne(req, res) {
    try {
      const payload = req.body;
      const formBehaviour = await formBehaviourService.createOne(payload);

      return successResMsg(res, 200, {
        message: "Form behaviour created successfully",
        data: formBehaviour,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while creating form behaviour",
      });
    }
  }

  async updateStatus(req, res) {
    try {
      const { id, status } = req.params;

      const statusValues = Object.values(STATUS);

      if (!statusValues.includes(status)) {
        return successResMsg(res, 400, {
          message: "Invalid form behaviour status",
          data: null,
        });
      }

      const behaviourExists = await formBehaviourService.findOne(id);

      if (!behaviourExists) {
        return successResMsg(res, 404, {
          message: "Form behaviour not found",
          data: null,
        });
      }

      const update = await formBehaviourService.updateOne(
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
        message: "Form behaviour updated successfully",
        data: update,
      });
    } catch (error) {
        console.log(error)
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form behaviour",
      });
    }
  }

  async deleteOne(req, res) {
    try {
      const { id } = req.params;

      const behaviourExists = await formBehaviourService.findOne(id);

      if (!behaviourExists ) {
        return successResMsg(res, 404, {
          message: "Form behaviour not found",
          data: null,
        });
      }

      await formBehaviourService.deleteOne({ _id: id });

      return successResMsg(res, 200, {
        message: "Form behaviour deleted successfully",
        data: null,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while deleting form behaviour",
      });
    }
  }



  async updateOne(req, res) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const query = { _id: id };

      const behaviourExists = await formBehaviourService.findOne(id);

      if (!behaviourExists) {
        return successResMsg(res, 404, {
          message: "Form behaviour not found",
          data: null,
        });
      }

      const updatedBehaviourExists = await formBehaviourService.updateOne(
        query,
        payload
      );

      return successResMsg(res, 200, {
        message: "Form behaviour updated successfully",
        data: updatedBehaviourExists,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while updating form behaviour",
      });
    }
  }
}

export default new FormBehaviourController();
