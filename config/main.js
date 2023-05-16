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
                        name: 'Joe Mama',
                        type: 3
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
        mongodb_uri: ""
    },

    // Users:
    users: {
        developers: [],
        owner: "520580249252265995"
    },
    
    channels: {
        logging_channel: "812274789396906016"//"808247295953862667"
    }
};
