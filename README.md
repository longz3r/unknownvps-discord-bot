# UnknownVPS discord bot

This repository contains a Discord bot built using discord.js v14, designed to be used with [`UnknownVPS API`](https://github.com/unknownpersonog/unknownvps-v2/)

## Staying Up to Date with the API Repository

To ensure that this music bot remains up to date with the latest features and improvements from the API, it is closely integrated with the [`unknownpersonog/unknownvps-v2`](https://github.com/unknownpersonog/unknownvps-v2/) repository. This API repository contains the essential components that this bot relies on.

Whenever changes are made to the API repository, they will be tested and integrated into this music bot's codebase to keep it synchronized and functioning seamlessly with the latest API enhancements.

Feel free to explore the [`unknownpersonog/unknownvps-v2`](https://github.com/unknownpersonog/unknownvps-v2/) repository to understand the API's capabilities and how it complements this music bot.

---

_If you have any questions or encounter issues related to the integration with the API repository, please refer to the documentation in the [`unknownpersonog/unknownvps-v2`](https://github.com/unknownpersonog/unknownvps-v2/) repository._


## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [To-Do](#to-do)

## Installation

1. Clone the repository using the following command:

   ```shell
   git clone https://github.com/longz3r/unknown-discord-bot.git
   ```

2. Navigate to the repository's root folder:

   ```shell
   cd unknownvps-discord-bot
   ```

3. Install the required dependencies by running:

   ```shell
   npm install
   ```

4. Register the necessary Slash Commands with the Discord API by making a POST request. Replace `<client id>` with your Discord bot's client ID and `<discord bot token>` with your bot's token. You can make a POST request to the following URL with the specified headers:

   ```http
   POST https://discord.com/api/v10/applications/<client id>/commands
   Headers:
   - Authorization: Bot <discord bot token>
   ```

   For more information, refer to the [Discord API documentation](https://discord.com/developers/docs/interactions/slash-commands).

5. Create a `.env` file based on the provided `dotenv`. Fill in the required details such as your bot token, API keys, and other configuration options.

## Configuration

Before running the bot, you need to configure the `.env` file. Open the file and provide the necessary values for each configuration option.

## Folder Structure

The repository is organized into the following main folders:

- `src`: Contains the source code for the Discord music bot. The `index.js` file is the entry point, and the `handler` folder manages various bot commands and events.
- `data`: Stores API requests that need to be made to the Discord API.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request, and I'll review your changes.

## To-Do

- [x] Stay up to date with [`UnknownVPS API`](https://github.com/unknownpersonog/unknownvps-v2/).
