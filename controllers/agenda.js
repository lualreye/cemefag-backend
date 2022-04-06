const { agendaModel } = require("../models/index");
const { handleHttpError } = require("../utils/customHttpErros");

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
    console.log(pc_id,pr_id, es_id, me_id, us_id, tp_id)
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "CANNOT_GET_AGENDA_DETAIL", e);
  }
};

module.exports = { getAgenda };
