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
    const apiUrl = `https://services1.arcgis.com/rhs5fjYxdOG1Et61/ArcGIS/rest/services/Indicators/FeatureServer/2/query?where=1%3D1&objectIds=&time=&resultType=none&outFields=*&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=none&f=pjson&token=`;

    const response = await axios.get(apiUrl);
    const newsData = response.data;

    return res.status(200).json(newsData);
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
