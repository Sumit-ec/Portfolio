import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { knowledgeBase } from '@/lib/knowledge-base';

// Ensure runtime is set correctly
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    // Check for API key first before initializing OpenAI client
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please add OpenAI API key to your file.' },
        { status: 500 }
      );
    }

    let messages;
    try {
      const body = await req.json();
      messages = body.messages;
    } catch (parseError) {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    // Initialize OpenAI client only after confirming API key exists
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Validate messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Create system message with knowledge base
    const systemMessage = {
      role: 'system' as const,
      content: `You are SumitBOT, a helpful assistant chatbot for Sumit Kumar's portfolio website. Your name is SumitBOT. Your purpose is to answer questions about Sumit Kumar, his work, projects, skills, and experience.
      
IMPORTANT INSTRUCTIONS:
1. Your name is SumitBOT - introduce yourself as SumitBOT when appropriate
2. ONLY answer questions about Sumit Kumar, his work, projects, skills, experience, and services
3. If asked about something unrelated to Sumit Kumar, politely redirect to topics about him
4. Use the knowledge base below to provide accurate and detailed information
5. Be conversational, friendly, and professional
6. If you don't know something specific, say so rather than making it up
7. Always maintain context from the conversation history

KNOWLEDGE BASE:
${knowledgeBase}

Remember: You are SumitBOT, representing Sumit Kumar professionally. Be helpful, accurate, and engaging.`,
    };

    // Prepare messages for OpenAI (system message + conversation history)
    const openaiMessages = [
      systemMessage,
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o',
      messages: openaiMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const assistantMessage = completion.choices[0]?.message?.content;

    if (!assistantMessage) {
      return NextResponse.json(
        { error: 'No response from OpenAI' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: assistantMessage,
    });
  } catch (error: any) {
    console.error('Chat API error:', error);

    // Handle specific OpenAI errors
    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        {
          error: error.message || 'OpenAI API error',
          code: error.code,
        },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

