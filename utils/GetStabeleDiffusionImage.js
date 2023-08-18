const reqHeaders = new Headers()
reqHeaders.append('Content-Type', 'application/json')


export default async function GenerateImage (prompt) {
    const requestOptions = {
        method: 'POST',
        headers: reqHeaders,
        body: generateBody(prompt),
        redirect: 'follow'
    };
    try {
        const res = await fetch('https://stablediffusionapi.com/api/v4/dreambooth', requestOptions)
        const data = await res.json()
        return data.output[0]
    }
    catch (error) {
        console.log(error)
    }
}
const generateBody = (prompt) => {
    return JSON.stringify({
        "key": '3AltkMXQa7HOe0kWb0unpALf7WOAxi7ayPeMBezNSGgs2Sf1uXzQnPQCGdIo',
        "model_id": "realistic-vision-v13",
        "prompt": `old fashioned tarot card which shows${prompt}`,
        "width": "512",
        "height": "720",
        "samples": "1",
        "num_inference_steps": "30",
        "seed": null,
        "guidance_scale": 7.5,
        "webhook": null,
        "track_id": null
    })
}