import OpenAI from "openai";

const OPEN_AI_SECRET_KEY = process.env.REACT_APP_OPEN_AI_SECRET_KEY;

const client = new OpenAI({
    apiKey: OPEN_AI_SECRET_KEY,
    dangerouslyAllowBrowser: true
});

export default client;
