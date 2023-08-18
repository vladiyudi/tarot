import getImage from '../../utils/get_image'
import { getPredictionText, createPrompt } from '../../utils/getPrediction'
import GenerateImage from '../../utils/GetStabeleDiffusionImage'

const handler = async (req, res) => {

    const predictionText = await getPredictionText(req.body.data)
    
    const prompt = await createPrompt(predictionText.content)
    
    console.log("PROMPT", prompt.content)

    // const imageUrls = await GenerateImage(prompt.content)

    const imageUrls = await GenerateImage('high tech women')
    // res.status(200).json({ images: imageUrls, prediction: predictionText.content })
    res.status(200).json({ images: imageUrls, prediction: 'predictionText.content' })

}

export default handler