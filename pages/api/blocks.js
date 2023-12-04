export default async function handler(req, res) {
  const formData = new FormData();
  const newDoc = {
    url: 'https://app-yokot-we-tuni.azurewebsites.net/api/v1/blocks',
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
