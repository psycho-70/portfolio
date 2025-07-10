export const generateContent = async (prompt) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_GEMINI_API_URL}?key=${process.env.REACT_APP_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated";
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      return "Sorry, I couldn't process your request.";
    }
  };