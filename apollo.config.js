require('dotenv').config();

module.exports = {
  client: {
    service: {
      name: process.env.REACT_APP_SERVICE_NAME,
      url: 'http://localhost:9000/gql',
    },
  },
};
