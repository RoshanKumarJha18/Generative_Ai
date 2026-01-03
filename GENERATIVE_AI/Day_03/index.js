import openai, { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const ai = new OpenAI({apiKey:process.env.OPENAI_KEY});
console.log(process.env.OPENAI_KEY)

const main = async()=>{
  const response = await ai.images.generate({
    model: "gpt-image-1-mini",
    prompt:"a logo for the name Code With Roshan",
    size:"512x512",
    response_format:"b64_json",
    n:1,
  })
  console.log(response);

}
main();