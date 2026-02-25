// import { NextRequest, NextResponse } from 'next/server';
// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { knowledgeBase } from '@/lib/knowledge-base';

// // Ensure runtime is set correctly
// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';

// export async function POST(req: NextRequest) {
//   try {
//     // Check for Gemini API key
//     const apiKey = process.env.GEMINI_API_KEY;
//     if (!apiKey) {
//       return NextResponse.json(
//         { error: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your .env file.' },
//         { status: 500 }
//       );
//     }

//     let messages;
//     try {
//       const body = await req.json();
//       messages = body.messages;
//     } catch (parseError) {
//       return NextResponse.json(
//         { error: 'Invalid JSON in request body' },
//         { status: 400 }
//       );
//     }

//     // Initialize Google Generative AI
//     const genAI = new GoogleGenerativeAI(apiKey);

//     // Validate messages array
//     if (!Array.isArray(messages) || messages.length === 0) {
//       return NextResponse.json(
//         { error: 'Messages array is required' },
//         { status: 400 }
//       );
//     }

//     // System instruction with knowledge base
//     const systemInstruction = `You are SumitBOT, a helpful assistant chatbot for Sumit Kumar's portfolio website. Your name is SumitBOT. Your purpose is to answer questions about Sumit Kumar, his work, projects, skills, and experience.

// IMPORTANT INSTRUCTIONS:
// 1. Your name is SumitBOT - introduce yourself as SumitBOT when appropriate
// 2. ONLY answer questions about Sumit Kumar, his work, projects, skills, experience, and services
// 3. If asked about something unrelated to Sumit Kumar, politely redirect to topics about him
// 4. Use the knowledge base below to provide accurate and detailed information
// 5. Be conversational, friendly, and professional
// 6. If you don't know something specific, say so rather than making it up
// 7. Always maintain context from the conversation history

// KNOWLEDGE BASE:
// ${knowledgeBase}

// Remember: You are SumitBOT, representing Sumit Kumar professionally. Be helpful, accurate, and engaging.`;

//     // Initialize the model with system instruction
//     const model = genAI.getGenerativeModel({
//       model: "gemini-1.5-flash",
//       systemInstruction: systemInstruction,
//     });

//     // Prepare history (Gemini format)
//     const history = messages.slice(0, -1).map((msg: any) => ({
//       role: msg.role === 'user' ? 'user' : 'model',
//       parts: [{ text: msg.content }],
//     }));

//     const lastMessage = messages[messages.length - 1].content;

//     // Start a chat session
//     const chat = model.startChat({
//       history: history,
//       generationConfig: {
//         maxOutputTokens: 500,
//         temperature: 0.7,
//       },
//     });

//     const result = await chat.sendMessage(lastMessage);
//     const response = await result.response;
//     const assistantMessage = response.text();

//     if (!assistantMessage) {
//       return NextResponse.json(
//         { error: 'No response from Gemini API' },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       message: assistantMessage,
//     });
//   } catch (error: any) {
//     console.error('Chat API error:', error);

//     return NextResponse.json(
//       { error: 'An error occurred while processing your request', details: error.message },
//       { status: 500 }
//     );
//   }
// }





import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledgeBase } from "@/lib/knowledge-base";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 🔐 Get API key from environment
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured in .env file." },
        { status: 500 }
      );
    }

    // 📥 Parse request body
    const body = await req.json();
    const messages = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    // 🧠 Get last user message only (stateless mode)
    const lastMessage = messages[messages.length - 1]?.content;

    if (!lastMessage) {
      return NextResponse.json(
        { error: "Invalid message format." },
        { status: 400 }
      );
    }

    // 🤖 Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);

    const systemInstruction = `
You are SumitBOT, a professional assistant for Sumit Kumar's portfolio website.

Your purpose:
- Answer ONLY questions about Sumit Kumar
- His projects
- His skills
- His experience
- His services
- His professional background

Rules:
1. ONLY introduce yourself as SumitBOT in the very first message. DO NOT repeat your introduction (e.g., "Hello there! I'm SumitBOT") in subsequent responses once the conversation has started.
2. CRITICAL: DO NOT use any markdown formatting symbols like double stars (**), single stars (*), underscores (_), or backticks (\`). Return clean, professional PLAIN TEXT only. Use plain dashes (-) for lists if needed, but avoid all other symbols.
3. Be friendly, professional, and conversational.
4. If asked unrelated questions, politely redirect to Sumit Kumar topics.
5. Use the knowledge base below for accurate answers.

KNOWLEDGE BASE:
${knowledgeBase}

Remember: You represent Sumit Kumar professionally.
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction,
    });

    // 🚀 Generate response (no history = no role error)
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