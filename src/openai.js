import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  console.log('Sending request to OpenAI with message:', message);

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log('Response from OpenAI:', response);

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error(
      'Error in sendMsgToOpenAI:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
