import getImage from '../../utils/get_image'
import getPredictionText, {createPrompt, createPrompt2 } from '../../utils/getPrediction'
import GenerateImage from '../../utils/GetStabeleDiffusionImage'
import fetchOpenAI from '../../utils/GetOpenAiPrediction'

const handler = async (req, res) => {

    let askAi = `answer following question in 2 sentnces as you predict future using new age jargon: ${req.body.data}`

    let predictionLong = await fetchOpenAI(askAi)

    // let askForPrompt = `generate funy 1 sentence which describes following (no abstraction, just physical objects): ${predictionLong}`

    // let prompt = await fetchOpenAI(askForPrompt)

    const imageUrls = await GenerateImage(predictionLong)


    res.status(200).json({ images: imageUrls, prediction: predictionLong })
  

}

export default handler