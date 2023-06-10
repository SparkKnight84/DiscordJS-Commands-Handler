const ms = require('ms');
const { Embed, Attachment } = require("discord.js");

module.exports = {
    command_data: {
        name: 'eval',
        description: 'Evaluate your javascript code',
        type: 1,
        options: [
            {
                name: 'code',
                description: 'The javascript code to run',
                type: 3, // String type
                required: true
            }
        ],
    },
    role_perms: null,
    developers_only: true,
    cooldown: '',
    category: 'Utility',
    run: async (client, interaction) => {
        const evaled = eval(interaction.options.get('code').value);
        await interaction.deferReply();

        return interaction.editReply({
            content: evaled
        });
    }
};