import axios from 'axios';
const apiKey = process.env.OPENAI_API_KEY;
const client = axios.create({
    headers: { 'Authorization': 'Bearer ' + apiKey }
});



export default async function fetchOpenAI (prompt) {

    const params = {
      "prompt": prompt, 
      "max_tokens": 20
    }
    try {
        const res = await client.post('https://api.openai.com/v1/engines/davinci/completions', params)
        
        console.log(res.data)
        
        return res.data.choices[0].text
    }
    catch (error) {
        console.log(error)
    }

}

  
  

