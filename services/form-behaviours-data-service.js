import FormBehavioursData from "../models/form-behaviours-data.js";

class FormBehaviourDataService {
  async createOne(data) {
    const response = await FormBehavioursData.create(data);
    return response;
  }
  async fetchAll() {
    const response = await FormBehavioursData.find({
      behaviourStatus: "Published",
    });
    return response;
  }
  async findOneByFormType(formType) {
    const response = await FormBehavioursData.findOne({
      formType,
      behaviourStatus: "Published",
    });
    return response;
  }
}

export default new FormBehaviourDataService();
