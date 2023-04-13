const User = require('../model/model.js');

const newUser = async (req, res, next) => {
    const { name, age, city, pincode, service } = req.body;
    try {
      const newData = new User({ name, age, city, pincode, service });
      await newData.save();
      const data = await User.find();
      return res.json(data);
    } catch (err) {
      console.log(err.message);
    }
};

const getUser = async (req, res, next) => {
    try {
        const Data = await User.find();
        return res.json(Data);
    }
    catch(err){
        console.log(err.message);
    }
};

const updateUser = async (req, res, next) => {
    const { name, age, city, pincode, service } = req.body;
    const { id } = req.params;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, age, city, pincode, service },
        { new: true }
      );
      const data = await User.find();
      return res.json(data);
    } catch (err) {
      console.log(err.message);
    }
  };

const deleteUser = async ({ params: { id } }, res, next) => {
    try {
        await User.findByIdAndDelete(id);
        const data = await User.find();
        return res.json(data);
    }
    catch(err){
        console.log(err.message)
    }
};

module.exports = {
    newUser,
    getUser,
    deleteUser,
    updateUser
};