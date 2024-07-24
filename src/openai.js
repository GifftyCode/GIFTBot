import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Ensure this is set in your environment variables
});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
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
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error in sendMsgToOpenAI:', error);
    throw error; // Rethrow the error after logging it
  }
}
