const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const chat_completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Predict future" }],
// });


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
        messages: [{ role: "user", content: `genrate funy prompt for image generation based on following: ${prompt}`}],
    })
    return chat_completion.data.choices[0].message
}

