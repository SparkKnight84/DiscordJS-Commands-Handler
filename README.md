<p align="center">
    <img src="https://user-images.githubusercontent.com/92172698/220339561-ac3c8034-dcb5-40e5-ae0b-4522638f4016.png">
</p>

## Read this!
### Copyright:
If you are trying to copy the ENTIRE project and then making a video about it, you will get a copyright strike by me if my credits aren't there. To avoid this, edit the project and some of the features so you won't get a strike by me, thank you!

### The project:
This handler works for in-guild bot, which means for a private bot. So if you are trying to make a public bot, well, you have to edit some of the files in the project... Good luck.

# DiscordJS-Commands-Handler
A unique & coolest Discord bot commands handler built with discord.js v14. It handlers **only** application commands, such as slash commands and context menu commands. So if you want prefix commands, then you can not use this project. By the way, if you want to connect to the database called MongoDB, it is already provided! Just provide your MongoDB URI in the configuration file.

If you liked my repository, you can click on the button **⭐️ Star** to add a new star, thank you!

# Features
If you are interesed in this project, here are the available features about this project.

## Beginner friendly:
This code is not very complicated to understand, you just need some JavaScript knowledgements to understand. 

## Application commands handler:

- Role permissions
- Developers only perms
- Owner only perms
- Cooldown
- Logging system

Example command: ([Application command structures](https://discord.com/developers/docs/interactions/application-commands))
```js
module.exports = {
    command_data: { // An object of Application command structure data, from the Discord API (click on the link above)
        name: String,
        description: String,
        type: Number,
        options: Array[Object],
    },
    role_perms: Array[String], // The role permissions for members (role IDs allowed only).
    developers_only: Boolean, // Whenever the command is for the bot developers or not.
    owner_only: Boolean, // Whenever the command is for bot owner or not.
    cooldown: String, // The cooldown of the command (ex: '1s', '10m', '1 week'... etc.).
    logger: Boolean, // Enables the logging system (check configuration file and provide the channel ID).
    category: String, // The command category (especially required for help command, if you want one).
    run: function (...args) { } // The main function to execute the code, make sure to provide all the required args/parameters!
};
```

## Interactions handler (Buttons, String select menus... etc.):
This handler handles all possible components interactions, just provide the interaction custom ID. Example:

```js
module.exports = {
    customId: String, // The interaction customId.
    run: function (...args) { } // The main function to execute the code, make sure to provide all the required args/parameters!
};
```

![2023-02-23 18_52_26-Window](https://user-images.githubusercontent.com/92172698/220989378-9120506e-68fb-4e35-b79f-ebce4d073a94.png)

## Other:
- Simple and cool help command

![2023-02-19 13_12_29-Window](https://user-images.githubusercontent.com/92172698/219947272-6a4ed7af-1a37-473f-99d0-899fe25e7b71.png)

# Setup the project

## Dependencies installation:
Firstly, install `package-lock.json` file:
```shell
npm init -y
```

Then install the required dependencies:

```shell
npm i discord.js@14 discord.js-v14-helper ms mongoose
```

## Start the project:
The setup for now is for [Visual Studio Code](https://code.visualstudio.com/) users only. If you are a repl.it user and non-beginner programmer, you can read the setup below but you have to edit the Environment processing for MongoDB and the bot token.
1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Install [node.js](https://nodejs.org/en/download/).
3. Open command prompt and then type `node -v` and make sure that you have installed node.js version **16.9.0** or above.
4. [Download the project](https://github.com/TFAGaming/DiscordJS-Commands-Handler/archive/refs/heads/main.zip) and extract the folder from .zip folder to a normal folder.
5. Open the folder on a new VSCode tab.
6. Go to `src/config/main.js` and edit the properties of each file.
7. Open terminal, use the command `cd` to access to your project folder, then type `node index.js`, `node .`, or `npm start`.
8. Enjoy!!!

## Issues
If you have an issue, do not start to panic! Create an issue right [here](https://github.com/TFAGaming/DiscordJS-Commands-Handler/issues) and wait for me or some people to respond to your errors.
Please remember to not create an issue that includes "it's broken", "not working at all", or other similar comments like these, thank you.

**Project made with ❤ by T.F.A#7524**.
