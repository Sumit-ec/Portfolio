"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm SumitBOT, here to answer questions about Sumit Kumar, his work, projects, and experience. What would you like to know?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const MAX_MESSAGE_LENGTH = 200; // Maximum characters per message

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Prevent body scroll when chatbot is open
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Validate message length
    const trimmedMessage = inputValue.trim();
    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      setError(`Message is too long. Please keep it under ${MAX_MESSAGE_LENGTH} characters.`);
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: trimmedMessage,
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response received:", text.substring(0, 200));
        throw new Error(
          `API route returned HTML instead of JSON (Status: ${response.status}). ` +
          `This usually means the route wasn't found. Please restart your dev server and ensure the route file exists at src/app/api/chat/route.ts`
        );
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Failed to get response (${response.status})`);
      }

      const data = await response.json();

      if (!data.message) {
        throw new Error("Invalid response format from API");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setError(null);
    } catch (err: any) {
      console.error("Chat error:", err);
      const errorMsg = err.message || "Something went wrong. Please try again.";
      setError(errorMsg);
      const errorMessage: Message = {
        role: "assistant",
        content: "I'm sorry, I encountered an error. Please make sure the OpenAI API key is configured.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setError(null);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/50 flex items-center justify-center text-white transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={!isOpen ? {
          y: [0, -8, 0],
          boxShadow: [
            "0 10px 25px -5px rgba(139, 92, 246, 0.5)",
            "0 10px 40px -5px rgba(139, 92, 246, 0.7)",
            "0 10px 25px -5px rgba(139, 92, 246, 0.5)"
          ]
        } : {}}
        transition={!isOpen ? {
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {}}
        aria-label="Toggle SumitBOT"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{
                rotate: 0,
                opacity: 1,
                scale: [1, 1.1, 1]
              }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{
                rotate: { duration: 0.2 },
                opacity: { duration: 0.2 },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Bot className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-[#09090B] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col overflow-hidden"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-white/10 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Bot className="w-5 h-5 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-white font-semibold text-sm">SumitBOT</h3>
                  <p className="text-gray-400 text-xs">I can answer questions about Sumit Kumar's work</p>
                </div>
              </div>
              <button
                onClick={handleToggle}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Close SumitBOT"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Container */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 break-words overflow-hidden ${message.role === "user"
                        ? "bg-gradient-to-r from-blue-500/50 to-purple-500/50 border border-blue-400/60 text-white shadow-lg shadow-blue-500/20"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-2">
                    <Loader2 className="w-5 h-5 text-purple-400 animate-spin" />
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2 text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-white/10 p-4 bg-[#09090B]">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => {
                    if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
                      setInputValue(e.target.value);
                    }
                  }}
                  onPaste={(e) => {
                    e.preventDefault();
                    setError("Copy-paste is not allowed. Please type your message.");
                    setTimeout(() => setError(null), 3000); // Clear error after 3 seconds
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                  }}
                  onCut={(e) => {
                    e.preventDefault();
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask SumitBOT anything..."
                  disabled={isLoading}
                  rows={3}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm resize-none overflow-y-auto"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all duration-300 hover:scale-110 flex-shrink-0"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-500">
                  {inputValue.length > MAX_MESSAGE_LENGTH * 0.8 && (
                    <span className={inputValue.length > MAX_MESSAGE_LENGTH ? "text-red-400" : "text-yellow-400"}>
                      {inputValue.length}/{MAX_MESSAGE_LENGTH} characters
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-500 text-center flex-1">
                  Ask me anything about Sumit Kumar's work, projects, or experience
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

