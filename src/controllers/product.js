import joi from "joi";
import product from "../models/product";

const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  desc: joi.string(),
  status: joi.boolean(),
  quantity: joi.number(),
});

export const getAll = async (req, res) => {
  try {
    const data = await product.find();
    if (data.length === 0) {
      return res.status(400).json({
        message: "Không có data",
      });
    }
    return res.json(data);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const getOne = async (req, res) => {
  try {
    const data = await product.findById(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.json({
      message: "Đã tìm thấy sản phẩm",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const add = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data =await product.create(req.body);
    return res.json({
      message: "Thêm thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const data =await product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json({
      message: "Cập nhật thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const data = await product.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(400).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.json({
      message: "Đã xóa sản phẩm",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
