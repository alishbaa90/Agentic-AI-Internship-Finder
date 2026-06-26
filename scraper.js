const searchTerm = (typeof query !== 'undefined' && query) || (typeof input !== 'undefined' && input);

if (!searchTerm) {
    return "Error: No search query provided by the AI Agent.";
}

const url = `https://lite.duckduckgo.com/lite/`;
const fullQuery = `${searchTerm} internship pakistan`.trim();

let responseText = "";
try {
    responseText = await this.helpers.httpRequest({
        method: 'POST',
        url: url,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://lite.duckduckgo.com',
            'Referer': 'https://lite.duckduckgo.com/'
        },
        body: `q=${encodeURIComponent(fullQuery)}&kl=pk-en&b=`,
        returnFullResponse: false
    });
} catch (error) {
    return `HTTP Request Error: ${error.message}`;
}

// Clean HTML text smoothly
const cleanHtml = responseText.replace(/<\/?[^>]+(>|$)/g, " ").replace(/\s+/g, " ").trim();

if (cleanHtml.length > 100) {
    return cleanHtml.substring(0, 4000); 
}

return "No jobs found or request blocked.";