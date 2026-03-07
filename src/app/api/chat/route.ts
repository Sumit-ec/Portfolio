import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledgeBase } from "@/lib/knowledge-base";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured in .env file." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const messages = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1]?.content;

    if (!lastMessage) {
      return NextResponse.json(
        { error: "Invalid message format." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const isFirstMessage = messages.length <= 1;
    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const systemInstruction = `
You are Genesis, a professional assistant for Sumit Kumar's portfolio website.
Today's Date: ${currentDate}.

Your purpose:
- Answer ONLY questions about Sumit Kumar
- His projects
- His skills
- His experience
- His services
- His professional background

Rules:
1. ${isFirstMessage ? "Introduce yourself as Genesis in this first message." : "This is NOT the first message. DO NOT introduce yourself again. Answer the user's question directly and concisely."}
2. CRITICAL: DO NOT use any markdown formatting symbols like double stars (**), single stars (*), underscores (_), or backticks (\`). Return clean, professional PLAIN TEXT only. Use plain dashes (-) for lists if needed, but avoid all other symbols.
3. Be friendly, professional, and conversational.
4. If asked unrelated questions, politely redirect to Sumit Kumar topics.
5. Use the knowledge base below for accurate answers.
6. When asked about Sumit Kumar's total work experience, calculate the total work experience by adding the duration of each role found in the knowledge base. 
   - Note: Excellence Technologies (Jan 2025 - Oct 2025) is 10 months.
   - Note: Oodles Technologies (Nov 2025 - Present) should be calculated up to today (${currentDate}).
   - If the total experience is less than 1 year, answer in months. 
   - If the total is more than 1 year, answer in years and months (e.g., "1 year and 2 months").
   - IMPORTANT: If asked for experience in "years" specifically, provide the exact total in years and months (e.g., "1 year and 2 months") rather than rounding down to 1 year.
7. When asked about downloading or viewing Sumit's resume or CV, inform the user that they can download it directly by clicking the "Resume" button located at the top of the website in the navigation menu. Do not provide dummy URLs or markdown links.

KNOWLEDGE BASE:
${knowledgeBase}

Remember: You represent Sumit Kumar professionally.
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction,
    });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: lastMessage }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    const response = await result.response;
    const assistantMessage = response.text();

    if (!assistantMessage) {
      return NextResponse.json(
        { error: "No response from Gemini API." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: assistantMessage,
    });
  } catch (error: any) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error: "An error occurred while processing the request.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}