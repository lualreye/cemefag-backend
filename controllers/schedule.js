const { handleHttpError } = require("../utils/customHttpErros");
const { scheduleModel } = require("../models/index");

const getSchedule = async (req, res) => {
  try {
    const user = req.user;
    console.log(req.paramas)
    const me_id = req.params.me_id;
    const data = await scheduleModel.findAll({
      where: {
        me_id: me_id,
      },
    });
    res.send({ data, user });
  } catch (err) {
    handleHttpError(res, "CANNOT_GET_SCHEDULE", err);
  }
};

module.exports = { getSchedule };
