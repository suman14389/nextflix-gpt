import OpenAI from "openai";

const OPEN_AI_SECRET_KEY = process.env.REACT_APP_OPEN_AI_SECRET_KEY;

const client = new OpenAI({
    apiKey: "sk-OHhxAcpaTt9GsojbcUhKsNAHMx8YileSg67x3seh-bT3BlbkFJWYbGHOyTd3O1C4pp9cQCFuGFHn3IUU2xwvz2gwaTcA",
    dangerouslyAllowBrowser: true
});

export default client;
