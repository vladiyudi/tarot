import getImage from '../../utils/get_image'
import { getPredictionText, createPrompt } from '../../utils/getPrediction'


const handler = async (req, res) => {

    const predictionText = await getPredictionText(req.body.data)
    
    const prompt = await createPrompt(predictionText.content)
    
    console.log("PROMPT", prompt.content)

    const imageUrls = await getImage(prompt.content)
    // res.status(200).json({ images: imageUrls, prediction: predictionText.content })
    res.status(200).json({ prediction: predictionText.content })
}

export default handler