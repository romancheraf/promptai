const API_KEY = "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"

async function fetchData() {      
   const response = await fetch("https://api.openai.com/v1/completions", {
     method: "POST",
     headers: {
         Authorization: 'Bearer ${API_KEY}',
         "Content-Type": "application/json"
     },
     body: JSON.stringfy({
       mode: "text-davinci-003"
       prompt: "hellow,how are you today?"
       max_token: 50
     })
   })
  const date = await response.json()
  console.log(data)
}         

fetchData()
