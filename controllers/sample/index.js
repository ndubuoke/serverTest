import sampleService from "../../services/sample-service.js";
import { errorResMsg, successResMsg } from "../../utils/response.js";

class SampleController {
  async testHandler(req, res) {
    try {
      const sample = sampleService.testService();

      return successResMsg(res, 200, {
        message: "Sample Route Working",
        data: sample,
      });
    } catch (error) {
      return errorResMsg(res, 500, {
        message: "Something went wrong while testing sample route",
      });
    }
  }
}

export default new SampleController();
