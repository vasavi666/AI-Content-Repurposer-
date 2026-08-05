function buildRepurposePrompt(content) {
  return `You are an expert social media content strategist.
Your task is to repurpose the provided blog content into 4 different platforms.
Return ONLY a valid JSON object with the following keys: "linkedin", "twitter", "instagram", "youtube". Do NOT wrap the JSON in markdown code blocks.

Content to repurpose:
${content}

Platform specific requirements:
- linkedin: A professional tone, maximum 1300 characters. Include a hook, insights, a Call to Action (CTA), and 3-5 relevant hashtags.
- twitter: A thread of 3-5 tweets. Each tweet should be numbered (1/, 2/, etc.) and be under 280 characters. Separate each tweet with \n\n.
- instagram: A casual tone with emojis. Include a hook, a CTA, and a block of 20-25 hashtags at the end.
- youtube: A YouTube video script outlining the TITLE, HOOK, INTRO, MAIN POINTS (3-4 points), and CTA sections.

Remember, output strictly raw JSON format only.`;
}

module.exports = {
  buildRepurposePrompt
};
