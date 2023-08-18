import getImage from '../../utils/get_image'
import getPredictionText, {createPrompt } from '../../utils/getPrediction'
import GenerateImage from '../../utils/GetStabeleDiffusionImage'
import fetchOpenAI from '../../utils/GetOpenAiPrediction'

const handler = async (req, res) => {

    const prediction = `answer following question as you predict future using new age jargon: ${req.body.data}`

    const predictionText = await fetchOpenAI(prediction)

    const promptText = `generate funy 1 sentence which describes following (no abstraction, just physical objects): ${predictionText}`
    
    const prompt = await fetchOpenAI(promptText)


    const imageUrls = await GenerateImage(prompt)

    // const imageUrls = await GenerateImage('futuristic women')


    res.status(200).json({ images: imageUrls, prediction: predictionText })
    // res.status(200).json({ images: imageUrls, prediction: 'predictionText.content' })

}

export default handler