
import type { NextApiRequest, NextApiResponse } from "next";
// Configuration -> settings & options for api requests
// OpenAIApi -> interface for interacting with api
import { Configuration, OpenAIApi } from "openai";

type ResponseData = {
  text: string,
}

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string,
  }
}


// creates new instance of configuration class using api key as authentication
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
// connect to api using configuration above
const openai = new OpenAIApi(configuration);

async function generate(req: GenerateNextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
        max_tokens: 10,
      });
  
      const response = completion.data.choices[0] as string || "No response received.";
      return Response.json({ text: response});
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ text: "An error occurred." });
    }
  }
}

export {generate as POST};
