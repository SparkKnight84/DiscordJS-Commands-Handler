const axios = require('axios');
const { MessageAttachment } = require('discord.js');

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
    run: async (client, interaction) => {
        const url = interaction.options.get('url').value;

        try {
            // Make a request to the screenshot API
            const response = await axios.get(`https://api.popcat.xyz/screenshot?url=${encodeURIComponent(url)}`);

            if (response.status === 200 && response.data.success) {
                // Retry the request to get the screenshot image
                const imageResponse = await axios.get(response.data.image);
                
                if (imageResponse.headers['content-type'] === 'image/png') {
                    // Convert the image data to Base64
                    const base64Data = Buffer.from(imageResponse.data, 'binary').toString('base64');
                    const imageAttachment = new MessageAttachment(`data:image/png;base64,${base64Data}`, 'screenshot.png');
                    
                    // Send the screenshot image as a reply
                    await interaction.reply({ files: [imageAttachment] });
                } else {
                    await interaction.reply('Oops! Failed to retrieve the screenshot. Please try again later.');
                }
            } else {
                console.log(response)
                await interaction.reply('Oops! Failed to take a screenshot. Please make sure the URL is valid and try again.');
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('Oops! Something went wrong. Please try again later.');
        }
    }
};
