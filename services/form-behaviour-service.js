import { FormBehaviours } from "../models/form-behaviours.js";

class FormBehaviourService {
  async createOne(payload) {
    const res = await FormBehaviours.create(payload);
    return res;
  }

  async updateOne(id, data) {
    const res = await FormBehaviours.updateOne(id, data, {
      new: true,
    }).select("-__v");
    return res;
  }

  async findOne(id) {
    const res = await FormBehaviours.findOne({ _id: id, status: "active" })
    return res;
  }

  async findFormBehavioursByStatus(status){
    const res = await FormBehaviours.find({status})
    return res;
  }

  async deleteOne(id) {
    await FormBehaviours.updateOne(
        { _id: id },
        { status: "deactivated", statusDesc: "The record is deactivated" }
    );
  }

  async findAll(query) {
    query.status = "active";
    const res = await FormBehaviours.find(query)
    return res;
  }
}

export default new FormBehaviourService();
