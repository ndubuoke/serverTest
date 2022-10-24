import { FormControl } from "../models/form-control.js";

class FormControlService {
  async bulkCreate(payload) {
    const res = await FormControl.insertMany(payload);
    return res;
  }

  async createOne(payload) {
    const res = await FormControl.create(payload);
    return res;
  }

  async updateOne(query, data) {
    const res = await FormControl.findOneAndUpdate(query, data, {
      new: true,
    }).select("-__v");
    return res;
  }

  async findOne(id) {
    const res = await FormControl.findOne({ _id: id })
      .populate("formControlProperties")
      .select("-__v");
    return res;
  }

  async findOneByName(name) {
    const res = await FormControl.findOne({
      name: { $regex: name, $options: "i" },
    })
      .populate("formControlProperties")
      .select("-__v");
    return res;
  }

  async deleteOne(id) {
    await FormControl.deleteOne({ _id: id });
  }

  async findAll() {
    const res = await FormControl.find({})
      .sort({ createdAt: 1 })
      .populate("formControlProperties")
      .select("-__v");
    return res;
  }

  async findAllAndUpdate(payload) {
    const res = await FormControl.find();
    res.map(async (prop) => {
      await FormControl.findOneAndUpdate(
        { _id: prop._id.toString() },
        { $set: payload }
      );
    });
  }
}

export default new FormControlService();
