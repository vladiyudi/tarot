import axios from "axios";


const models = {
    creative: "6bef9f1b-29cb-40c7-b9df-32b51c1f67d3",
    select: "cd2b2a15-9760-4174-a5ff-4d2925057376",
    signature: "291be633-cb24-434f-898f-e662799936ad",
    diffusion: "b820ea11-02bf-4652-97ae-9ac0cc00593d",
    dreamShaper: 'ac614f96-1082-45bf-be9d-757f2d31c174',
    absoluteReality: 'e316348f-7773-490e-adcd-46757c738eb7',
    // rpg:'afa07a07-0183-45eb-bda7-14bd51c084e2',
    // treeD: 'b23f5fcf-290f-46ca-9f04-d4cf2b758213'
}


export default async function getImage(prompts) {

    let imageId = await generateImage(prompts)

    let images = await getImages(imageId)

    let count = 0

    while (!images || images.length === 0) {
        images = await getImages(imageId)
        console.log("count", count)
        count++
        if (count>50) return
    }
   const imageUrls = images.map(image => image.url) 
   return imageUrls
  
}



const getImages = async (imageId) => {
    try {
        const res = await axios.get(`https://cloud.leonardo.ai/api/rest/v1/generations/${imageId}`, { headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${process.env.LEONARDOAI_API_KEY}`,
        } });
        return res.data.generations_by_pk.generated_images
    } catch (error) {
        console.log(error);
    }
}

const getRundomModel = () => {
    const keys = Object.keys(models)
    const randomIndex = Math.floor(Math.random() * keys.length)
    return models[keys[randomIndex]]
}

export const generateImage = async (prompts) => {
    try {
        const res = await axios.post("https://cloud.leonardo.ai/api/rest/v1/generations",{
            "prompt": `hyper realistic tarot card which depicts: ${prompts}`,
            "modelId": getRundomModel(),
            "width": 512,
            "height": 800,
            "num_images":1,
            'promptMagic': true,
          }, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${process.env.LEONARDOAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
          });
        return res.data.sdGenerationJob.generationId
    } catch (error) {
        console.log(error);
    }
}


// Leonardo Creative: 6bef9f1b-29cb-40c7-b9df-32b51c1f67d3
// Leonardo Select: cd2b2a15-9760-4174-a5ff-4d2925057376
// Leonardo Signature: 291be633-cb24-434f-898f-e662799936ad