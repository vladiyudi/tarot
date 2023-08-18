const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export const getPredictionText = async (prompt) => {
    const chat_completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `answer following question in2 sentnces as you predict future using new age jargon: ${prompt}`}],
    });
    return chat_completion.data.choices[0].message
}

export const createPrompt = async (prompt) => {
    const chat_completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `generate funy 1 sentence which describes following (no abstraction, just physical objects): ${prompt}`}],
    })
    return chat_completion.data.choices[0].message
}

