//1) importing necessary modules
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import readline from 'readline-sync';

//2) configuring dotenv to load environment variables
dotenv.config();

//3) initializing Google Generative AI client with API key from environment variables and setting up the Gemini-2.5-Flash model
const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = gemini.getGenerativeModel({model: 'gemini-2.5-flash'});

//4)starting with a msge to the user
console.log("Welcome to the Gemini-2.5-Flash Chatbot!");

//5) function to handle the chat interaction
const chat = async()=>{
    while(true){
        const userInput = readline.question("You: ");
        if(userInput.toLowerCase() === 'exit'){
            console.log("Exiting the chatbot. Goodbye!");
            break;
        }
        const result = await model.generateContent(userInput);
        console.log("bot:",result.response.text(),'\n')
    }
}
chat();