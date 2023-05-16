const { GatewayIntentBits, Partials } = require('discord.js');
const { ClientIntents, ClientPartials } = require('discord.js-v14-helper');
require("dotenv").config()

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
        token: process.env.TOKEN,
        id: process.env.ID
    },

    // Database:
    database: {
        mongodb_uri: "YOUR_MONGODB_URI (Not required)"
    },

    // Users:
    users: {
        developers: [],
        owner: "520580249252265995"
    },
    
    channels: {
        logging_channel: "THE_LOGGING_CHANNEL_ID (Not required)"
    }
};
