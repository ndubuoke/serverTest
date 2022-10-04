import { Form } from "../models/form.js";

class FormService {
  async createOne(payload) {
    const res = await Form.create(payload);
    return res;
  }

  async updateManyFormStatus(query, data) {
    const res = await Form.updateMany(query, data, {
      new: true,
    }).select("-__v");
    return res;
  }

  async findOne(id) {
    const res = await Form.findOne({ _id: id })
    return res;
  }

  async findByFormType(formType) {
    const res = await Form.findOne({ formType: formType })
    return res;
  }

  async findPublishedFormByType(formType,formStatus){
    const res = await Form.findOne({
        formStatus,
        formType
    })
    return res;
  }

  async deleteOne(id) {
    await Form.deleteOne({ _id: id });
  }

  async findAll(query) {
    console.log(query)
    const res = await Form.find(query)
    return res;
  }
}

export default new FormService();
