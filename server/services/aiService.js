const { GoogleGenerativeAI } = require('@google/generative-ai');
const { buildRepurposePrompt } = require('../utils/prompts');

async function repurposeContent(content) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    console.warn('WARNING: GEMINI_API_KEY is not set or is using the default value. Using MOCK mode.');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      linkedin: "🚀 Are you struggling to create content consistently? You're not alone! Many creators face burnout trying to be everywhere at once.\n\nThe secret isn't working harder; it's working smarter. Content repurposing is the game-changer you've been looking for. By transforming one strong piece of core content (like a blog post or podcast) into multiple formats, you maximize your reach without multiplying your effort.\n\nHere are 3 quick tips to get started:\n1️⃣ Identify your best-performing evergreen content.\n2️⃣ Extract the key insights into bite-sized takeaways.\n3️⃣ Adapt the tone and format for each specific platform.\n\nStop reinventing the wheel and start amplifying your message! What is your biggest challenge with content creation right now? Let me know in the comments below! 👇\n\n#ContentStrategy #MarketingTips #Productivity #CreatorEconomy #Growth",
      twitter: "1/ Tired of creating content from scratch every day? It's time to start repurposing. Here's why you need a content repurposing strategy (and how to start). 🧵👇\n\n2/ The biggest mistake creators make is treating every platform like a blank slate. Instead, create ONE high-quality core piece (like a blog or newsletter) and slice it up. This saves time and ensures a consistent message.\n\n3/ Take a blog post: turn the main points into a Twitter thread, a LinkedIn carousel, and a short YouTube script. One asset becomes ten pieces of content. You're working smarter, not harder.\n\n4/ The key is adaptation, not just copying and pasting. Adjust the tone for the platform. Add emojis for Instagram, keep it professional for LinkedIn. Respect the medium to maximize engagement.\n\n5/ Ready to offload the heavy lifting? Start using AI tools to help draft these variations. What piece of content will you repurpose today? Let me know! #ContentMarketing #CreatorEconomy",
      instagram: "Feeling overwhelmed by the content treadmill? 🏃‍♂️💨 We've all been there! Trying to show up on every platform every day is a recipe for burnout. 😫\n\nBut what if you could reach more people with LESS effort? 🤯 The secret is Content Repurposing! ♻️\n\nInstead of constantly chasing the next new idea, take your best existing content and transform it. A single blog post can become an infographic, a reel, and a carousel! 📊🎥🎠\n\nStop working harder and start working smarter. Your audience is waiting! 🌟\n\n👇 Drop a 🔥 in the comments if you're ready to level up your content strategy!\n\n#contentmarketing #contentcreator #marketingtips #socialmediastrategy #contentstrategy #digitalmarketing #businessgrowth #entrepreneurlife #worksmart #productivityhacks #contenttips #marketingstrategy #growyourbusiness #creativebusiness #contentcreation #socialmediatips #marketingagency #smallbiztips #creatorcommunity #marketingonline #contentideas",
      youtube: "TITLE: Stop Wasting Time! The Ultimate Content Repurposing Strategy\n\nHOOK: Are you spending hours every week creating content, only to feel like you're barely making a dent? What if I told you that you could 10x your output without working any extra hours?\n\nINTRO: Hey everyone, welcome back! Today we are diving into the magic of content repurposing. If you're a creator or business owner feeling burnt out by the content hamster wheel, this video is exactly what you need. We're going to cover how to turn one piece of content into a month's worth of posts.\n\nMAIN POINTS:\n1. The Core Content Concept: Why you need one pillar piece (like a long-form video or blog) to serve as your foundation.\n2. The Slicing Strategy: How to extract micro-content like quotes, short clips, and key takeaways from your pillar piece.\n3. Platform Adaptation: Why copy-pasting doesn't work and how to tweak your message for the specific culture of Twitter, LinkedIn, and Instagram.\n4. Automation and AI Tools: How to leverage tools to speed up the process of formatting and drafting.\n\nCTA: If you found this helpful, make sure to hit that subscribe button for more strategies on growing your online presence. And let me know in the comments: what is the hardest part about content creation for you? See you in the next one!"
    };
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = buildRepurposePrompt(content);
    const result = await model.generateContent(prompt);
    let text = result.response.text();
    
    // Clean up potential markdown code blocks
    text = text.replace(/^```(json)?\n/i, '').replace(/```$/i, '').trim();
    
    const parsed = JSON.parse(text);
    
    // Validate keys
    const requiredKeys = ['linkedin', 'twitter', 'instagram', 'youtube'];
    for (const key of requiredKeys) {
      if (!parsed[key]) {
        throw new Error(`Missing required platform key in response: ${key}`);
      }
    }
    
    return parsed;
  } catch (error) {
    console.error("AI Generation Error:", error);
    console.warn("Falling back to MOCK mode due to error.");
    
    // Temporary override to force mock mode
    const originalKey = process.env.GEMINI_API_KEY;
    process.env.GEMINI_API_KEY = 'your_api_key_here';
    const mockData = await repurposeContent(content);
    process.env.GEMINI_API_KEY = originalKey; // Restore
    
    return mockData;
  }
}

module.exports = {
  repurposeContent
};
