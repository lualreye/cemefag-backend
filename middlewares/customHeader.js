const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key
    if(apiKey === "luis") {
      next()
    } else {
      res.status(403)
      res.send({error: "Algo ocurrio aqui"})
    }
    next()
  } catch(err) {
    res.status(403)
    res.send({error: "Algo ocurrio en el custom header"})
  }
}

module.exports = customHeader