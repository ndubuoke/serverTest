import { CustomerForm } from "../models/customer-form.js";

class CustomerFormService {

  async createOne(payload) {
    const res = await CustomerForm.create(payload);
    return res;
  }


  async updateManyCustomerFormStatus(query, data) {
    const res = await CustomerForm.updateMany(query, data, {
      new: true,
    }).select("-__v");
    return res;
  }

  async findOne(id) {
    const res = await CustomerForm.findOne({ _id: id })
    return res;
  }


  async findPublishedFormByType(formType,formStatus){
    const res = await CustomerForm.findOne({
        formStatus,
        formType
    })
    return res;
  }

  async deleteOne(id) {
    await CustomerForm.deleteOne({ _id: id });
  }


  async updateOne(query, data) {
    const res = await CustomerForm.findOneAndUpdate(query, data, {
      new: true,
    }).select("-__v");
    return res;
  }
}

export default new CustomerFormService();
