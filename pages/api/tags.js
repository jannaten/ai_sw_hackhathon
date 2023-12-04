// import axios from 'axios';

// export default async function handler({ res, req }) {
//   try {
//     // const { city } = req.body;
//     const API_key = 'ef92cd611ae451d1b7efb9cf50002de5';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Satakunta&APPID=${API_key}&units=metric`;

//     const response = await axios.get(apiUrl);
//     const newsData = response.data;

//     return res.status(200).json(newsData);
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }
// pages/api/searchNews.js
import axios from 'axios';

export default async function handler(req, res) {
  const formData = new FormData();
  const accessToken = '';

  const newDoc = {
    url: 'https://app-yokot-we-tuni.azurewebsites.net/api/v1/tags',
    rooturl: '',
    maxdepth: 1,
    maxexternaldepth: 0,
    tags: [],
  };

  formData.append('data', JSON.stringify(newDoc));

  const headers = {
    Authorization: `Bearer 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`,
  };

  const request = new Request(
    'https://app-yokot-we-tuni.azurewebsites.net/api/v1/tags',
    {
      method: 'POST',
      headers,
      body: formData,
    }
  );

  await fetch(request);
}
