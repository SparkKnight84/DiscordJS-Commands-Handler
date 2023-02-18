const { GatewayIntentBits, Partials } = require('discord.js');
const { ClientIntents, ClientPartials } = require('discord.js-v14-helper');

module.exports = {
    // Client configuration:
    client: {
        constructor: {
            intents: ClientIntents,
            partials: ClientPartials,
            presence: {
                activities: [
                    {
                        name: 'Hello world!',
                        type: 0
                    }
                ],
                status: 'online'
            }
        },
        token: "YOUR_BOT_TOKEN",
        id: "YOUR_BOT_ID"
    },

    // Database:
    database: {
        mongodb_uri: "YOUR_MONGODB_URI (Not required)"
    },

    // Users:
    users: {
        developers: [
          "YOUR_ACCOUNT_ID",
          "YOU_CAN_ADD_MORE_IDS"
        ],
        owner: "YOUR_ACCOUNT_ID"
    }
};
