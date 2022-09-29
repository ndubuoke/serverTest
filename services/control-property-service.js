import { ControlProperty } from "../models/control-property";

class ControlPropertyService {
  async bulkCreate(payload) {
    const res = await ControlProperty.insertMany(payload);
    return res;
  }

  async createOne(payload) {
    const res = await ControlProperty.create(payload);
    return res;
  }

  async updateOne(query, data) {
    const res = await ControlProperty.findOneAndUpdate(query, data, {
      new: true,
    });
    return res;
  }

  async findOne(id) {
    const res = await ControlProperty.findOne({ _id: id });
    return res;
  }

  async deleteOne(id) {
    await ControlProperty.deleteOne({ _id: id });
  }

  async findAll() {
    const res = await ControlProperty.find();
    return res;
  }
}

export default new ControlPropertyService();
