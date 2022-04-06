const { agendaModel } = require("../models/index");
const { handleHttpError } = require("../utils/customHttpErros");

// GETTING PATIENT DETAIL

// params {*} req
// params {*} res
const getAgenda = async (req, res) => {
  try {
    const pc_id = Number(req.params.pc_id)
    const data = await agendaModel.findOneAgenda(pc_id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "CANNOT_GET_AGENDA_DETAIL", e);
  }
};

module.exports = { getAgenda };
