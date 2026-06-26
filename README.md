# 🤖 Agentic AI Internship Finder (n8n & Gemini)

An automated end-to-end agentic AI workflow that acts as a personalized career assistant. It parses raw resume data, dynamically formulates search queries across diverse skill sets, scrapes live job postings, and emails highly matched internship opportunities directly to the user's inbox weekly.

---

## 🚀 How it Works

1. **Schedule Trigger:** Automatically runs every Monday morning at a scheduled time (e.g., 9:00 AM).
2. **Resume Analysis:** Extracts raw text from the candidate's PDF resume.
3. **AI Reasoning (Google Gemini):** Thoroughly reads the resume, dynamically extracts all distinct technical skill sets and career tracks, and formulates an optimized search query.
4. **Custom Lightweight Scraper:** Executes a JavaScript tool hitting **DuckDuckGo Lite** to fetch live job listings, reducing the HTML payload size by 95% to prevent AI context choking.
5. **JSON Formatting:** Gemini filters through the raw data, matches roles against the profile, and structures them into a clean JSON array with tailored `matching_reason` markers.
6. **Inbox Delivery:** A Gmail node converts the JSON array into a beautifully formatted HTML email with direct application links.

---

## 🛠️ Tech Stack & Tools Used

* **n8n:** Visual workflow automation engine used to manage state, orchestrate nodes, and handle automation triggers.
* **Google Gemini 2.5 Flash:** Used for intelligent resume understanding, open-ended dynamic prompting, and structured data processing.
* **JavaScript:** Custom scripting to manage lightweight web requests and payload reductions.
* **DuckDuckGo Lite:** Utilized as a private, text-only search engine layer optimized for rapid automated web scraping.
* **Gmail API:** Integrated to handle seamless custom HTML daily notifications.

---

## 📁 Repository Structure

* `workflow.json`: The complete export of the n8n canvas layout. (Import this into your n8n instance to duplicate the project!)
* `scraper.js`: The underlying custom JavaScript code used inside the scraping node.

---

<img width="1366" height="640" alt="Image" src="https://github.com/user-attachments/assets/37c939be-8545-4d5f-aae1-616943dbf3bd" />
