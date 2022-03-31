const ENGINE_DB = process.env.ENGINE_DB
const getProperties = () => {
  const data = {
    nosql: {
      id: '_id'
    },
    mysql: {
      us_id: 'us_id'
    }
  }
  return data[ENGINE_DB]
}

module.exports = getProperties