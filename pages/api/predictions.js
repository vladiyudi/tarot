import getImage from '../../utils/get_image'
import { getPredictionText, createPrompt } from '../../utils/getPrediction'
import GenerateImage from '../../utils/GetStabeleDiffusionImage'

const handler = async (req, res) => {

    const predictionText = await getPredictionText(req.body.data)
    
    const prompt = await createPrompt(predictionText.content)
    
    console.log("PROMPT", prompt.content)

    const imageUrls = await GenerateImage(prompt.content)


    res.status(200).json({ images: imageUrls, prediction: predictionText.content })
    // res.status(200).json({ images: 'https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/0-70c9f6c2-2ceb-44f2-a8ab-a96f87ed5376.png', prediction: 'predictionText.content' })

}

export default handler