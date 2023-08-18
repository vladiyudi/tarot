import axios from 'axios';
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
    headers: { 'Authorization': 'Bearer ' + apiKey }
});


  
 export default async function fetchOpenAI (prompt) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{content: prompt, role: 'user' }],
                temperature: 0.9,
                top_p: 1,
            }),
        });
        const data = await response.json();
        return data.choices[0].message.content
    } catch (error) {
        console.log(error)
        fetchOpenAI(prompt)
    }
 } 

