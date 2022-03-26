const { IncomingWebhook } = require("@slack/webhook");

// TODO: initializing slack webhook
const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK);

// TODO: getting error messages from res, res
const loggerStream = {
  write: (message) => {
    webHook.send({
      text: message,
    });
  },
};

module.exports = ({ loggerStream });
