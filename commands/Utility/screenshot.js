const axios = require('axios');
const { AttachmentBuilder, EmbedBuilder, Interaction, Client, Attachment } = require('discord.js');

module.exports = {
    command_data: {
        name: 'screenshot',
        description: 'Take a screenshot of a website',
        type: 1,
        options: [
            {
                name: 'url',
                description: 'The URL of the website to screenshot',
                type: 3, // String type
                required: true
            }
        ],
    },
    role_perms: null,
    developers_only: false,
    cooldown: '5s',
    category: 'Utility',
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    run: async (client, interaction) => {
        const url = interaction.options.get('url').value;


        try {
            const res = await axios.get(`https://api.popcat.xyz/screenshot?url=${encodeURIComponent(url)}`, { responsetype: "arraybuffer" });


            let image = Buffer.from(res.data)

            // await interaction.channel.send()
            console.log(interaction)
            await interaction.reply({
                // embeds: [
                //     (new EmbedBuilder).setImage("attachment://screenshot.png")
                // ],
                files: [{ attachment: image, name: 'screenshot.png' }]
            })
        } catch (error) {
            // console.error(error);
            // console.log(new MessageAttachment())
            await interaction.reply({
                embeds: [
                    (new EmbedBuilder())
                        .setTitle("Oops! Something went wrong. Please try again later.")
                        .setDescription(error.stack)
                        .setColor("Red")
                ]

            });
        }
    }
};
