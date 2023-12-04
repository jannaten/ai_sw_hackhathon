import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // const { city } = req.body;
    const API_key = "ef92cd611ae451d1b7efb9cf50002de5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Satakunta&APPID=${API_key}&units=metric`;

    const response = await axios.get(apiUrl);
    const newsData = response.data;

    return res.status(200).json(newsData);
  } catch (error) {
    console.error("Error fetching news:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
