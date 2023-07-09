const API_KEY = "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";

async function fetchData() {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "Hello, how are you today?",
      max_tokens: 50
    })
  });
  
  const data = await response.json();
  console.log(data);
}

fetchData();
