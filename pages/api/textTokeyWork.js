// export default (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'application/json');
//   res.send(JSON.stringify({ result: ['no results'] }));
// };
import axios from 'axios';

export default async function handler(req, res) {
  try {
    // const { city } = req.body;
    const API_key = 'ef92cd611ae451d1b7efb9cf50002de5';
    const apiUrl = `https://megatron.headai.com/analysis/TextToKeywords/TextToKeywords_HE8kM9J5LD1621945526949.json`;

    const response = await axios.get(apiUrl);
    const newsData = response.data;

    return res.status(200).json(newsData);
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
