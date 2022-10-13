import { FormControlProperty } from "../models/form-control-property.js";

class FormControlPropertyService {
  async bulkCreate(payload) {
    const res = await FormControlProperty.insertMany(payload);
    return res;
  }

  async createOne(payload) {
    const res = await FormControlProperty.create(payload);
    return res;
  }

  async updateOne(query, data) {
    const res = await FormControlProperty.findOneAndUpdate(query, data, {
      new: true,
    }).select("-__v");
    return res;
  }

  async findOne(id) {
    const res = await FormControlProperty.findOne({ _id: id }).select("-__v");
    return res;
  }

  async findOneByName(name) {
    const res = await FormControlProperty.findOne({
      name: { $regex: name, $options: "i" },
    }).select("-__v");
    return res;
  }

  async deleteOne(id) {
    await FormControlProperty.deleteOne({ _id: id });
  }

  async findAll() {
    const res = await FormControlProperty.find({}).select("-__v");
    return res;
  }

  async findAllAndUpdate() {
    const res = await FormControlProperty.find();
    res.map(async (prop) => {
      await FormControlProperty.findOneAndUpdate(
        { _id: prop._id.toString() },
        { $set: { value: "" } }
      );
    });
  }
}

export default new FormControlPropertyService();
