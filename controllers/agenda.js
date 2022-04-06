const { handleHttpError } = require("../utils/customHttpErros");
const {
  agendaModel,
  productModel,
  payformModel,
  doctorModel,
} = require("../models/index");

// GETTING PATIENT DETAIL

// params {*} req
// params {*} res
const getAgenda = async (req, res) => {
  try {
    const pc_id = Number(req.params.pc_id);
    const data = await agendaModel.findOne({ where: { pc_id: pc_id } });
    const pr_id = data.pr_id;
    const es_id = data.es_id;
    const me_id = data.me_id;
    const us_id = data.us_id;
    const tp_id = data.tp_id;
    const product = await productModel.findOne({
      where: {
        pr_id: pr_id,
        pr_estado: 0,
      },
    });
    const payform = await payformModel.findOne({
      where: {
        tp_id: tp_id,
        tp_estado: 0,
      },
    });
    const doctor = await doctorModel.findDoctorInformation(me_id);
    const agendaResult = {
      data,
      product,
      payform,
      doctor
    }
    console.log(agendaResult)
    res.send({ agendaResult });
  } catch (e) {
    handleHttpError(res, "CANNOT_GET_AGENDA_DETAIL", e);
  }
};

module.exports = { getAgenda };
