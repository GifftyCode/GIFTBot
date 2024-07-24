# GIFtBot

GIFtBot is an AI-powered chatbot application that utilizes OpenAI's GPT-3 to provide intelligent responses to user queries. This project serves as a conversational interface where users can interact with the bot by asking various questions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time interaction with OpenAI's GPT-3.
- Predefined quick queries for ease of use.
- Persistent chat interface with bot and user messages.
- Clean and intuitive UI.

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/giftbot.git
   cd giftbot
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your OpenAI API key:

   ```env
   REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Type a message in the input field and press "Enter" or click the "Send" button.
- You can also click on the predefined queries for quick responses.

## Configuration

Ensure your `.env` file contains the following:

```
REACT_APP_OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

## Technologies Used

- React
- OpenAI GPT-3
- Axios
- CSS

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.
