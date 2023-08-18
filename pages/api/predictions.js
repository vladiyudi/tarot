import getImage from '../../utils/get_image'
import getPredictionText, {createPrompt } from '../../utils/getPrediction'
import GenerateImage from '../../utils/GetStabeleDiffusionImage'
import fetchOpenAI from '../../utils/GetOpenAiPrediction'

const handler = async (req, res) => {

    const predicttion = `answer following question in2 sentnces as you predict future using new age jargon: ${req.body.data}`

    const predictionText = await getPredictionText(req.body.data)
    
    const prompt = await createPrompt(predictionText.content)
    
    console.log("PROMPT", prompt.content)

    const imageUrls = await GenerateImage(prompt.content)

    // const imageUrls = await GenerateImage('futuristic women')


    res.status(200).json({ images: imageUrls, prediction: predictionText.content })
    // res.status(200).json({ images: imageUrls, prediction: 'predictionText.content' })

}

export default handler