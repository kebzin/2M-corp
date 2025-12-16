"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  X,
  Send,
  Home,
  HelpCircle,
  Mail,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState<"home" | "messages" | "help">(
    "home"
  );
  const [message, setMessage] = useState("");

  const menuItems = [
    { label: "Licences" },
    { label: "Getting Starteted" },
    { label: "Documentation Pro Version" },
    { label: "Join Discord for Technical Support" },
    { label: "Hire Us" },
    { label: "Roadmap" },
    { label: "Blogs" },
  ];

  const helpCollections = [
    {
      title: "General Questions",
      description: "Get answers to general questions about 2M Corp",
      articles: 8,
    },
    {
      title: "Services",
      description: "Frequently asked questions about our services",
      articles: 8,
    },
    {
      title: "Projects",
      description: "Information about our project delivery",
      articles: 6,
    },
    {
      title: "Support",
      description: "Frequently asked questions regarding getting Support",
      articles: 5,
    },
  ];

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110 hover:bg-primary/90"
        >
          <MessageCircle className="size-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[600px] w-[400px] flex-col rounded-2xl bg-[#4A5568] text-white shadow-2xl">
          {/* Header */}
          <div className="flex items-start justify-between p-5">
            {activeView === "home" && (
              <div className="flex size-12 items-center justify-center overflow-hidden rounded-full bg-blue-500">
                <img
                  src="/avatar.png"
                  alt="Support"
                  className="size-12 rounded-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML =
                      '<span class="text-xl">👨‍💼</span>';
                  }}
                />
              </div>
            )}
            {activeView === "messages" && (
              <div>
                <h3 className="text-lg font-semibold">Messages</h3>
              </div>
            )}
            {activeView === "help" && (
              <div>
                <h3 className="text-lg font-semibold">Help</h3>
              </div>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 transition-colors hover:bg-white/10"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-4">
            {activeView === "home" && (
              <div className="space-y-5">
                {/* Greeting */}
                <div className="mb-2">
                  <h2 className="mb-1 text-[2rem] font-bold leading-tight text-white">
                    Hi there 👋
                  </h2>
                  <p className="text-[1.75rem] font-bold leading-tight text-white">
                    How can we help?
                  </p>
                </div>

                {/* Send Message Card */}
                <button
                  onClick={() => setActiveView("messages")}
                  className="flex w-full items-center justify-between rounded-xl bg-[#2C3544] p-4 text-left transition-all hover:bg-[#374151]"
                >
                  <div>
                    <div className="mb-1 font-semibold text-white">
                      Send us a message
                    </div>
                    <div className="text-sm text-gray-300">
                      We typically reply in under 3 minutes
                    </div>
                  </div>
                  <ArrowRight className="size-5 text-white" />
                </button>

                {/* Menu Items */}
                <div className="space-y-0.5">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition-all hover:bg-[#374151]"
                    >
                      <span className="text-[15px] text-white">
                        {item.label}
                      </span>
                      <ExternalLink className="size-4 text-gray-300" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeView === "messages" && (
              <div className="flex h-full flex-col">
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-white/10">
                    <MessageCircle className="size-8 text-gray-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">No messages</h3>
                  <p className="mb-6 text-sm text-gray-400">
                    Messages from the team will be shown here
                  </p>
                  <p className="mb-4 text-sm text-gray-400">
                    Ask us anything, or share your feedback.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="relative">
                    <Textarea
                      placeholder="Message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-[60px] resize-none bg-[#3A4556] pr-12 text-white placeholder:text-gray-400"
                    />
                    <button
                      onClick={() => {
                        if (message.trim()) {
                          console.log("Sending message:", message);
                          setMessage("");
                        }
                      }}
                      className="absolute bottom-3 right-3 rounded-full bg-orange-500 p-2 transition-colors hover:bg-orange-600"
                    >
                      <Send className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeView === "help" && (
              <div>
                <div className="mb-4">
                  <Input
                    placeholder="Search for help"
                    className="bg-[#3A4556] text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="mb-3 text-sm text-gray-400">
                  {helpCollections.length} collections
                </div>
                <div className="space-y-3">
                  {helpCollections.map((collection, index) => (
                    <button
                      key={index}
                      className="flex w-full items-start justify-between rounded-lg bg-[#3A4556] p-4 text-left transition-all hover:bg-[#434E62]"
                    >
                      <div className="flex-1">
                        <div className="mb-1 font-medium">
                          {collection.title}
                        </div>
                        <div className="mb-2 text-sm text-gray-400">
                          {collection.description}
                        </div>
                        <div className="text-xs text-gray-500">
                          {collection.articles} articles
                        </div>
                      </div>
                      <span className="text-gray-400">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="flex border-t border-white/10">
            <button
              onClick={() => setActiveView("home")}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors ${
                activeView === "home"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Home className="size-5" />
              <span>Home</span>
            </button>
            <button
              onClick={() => setActiveView("messages")}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors ${
                activeView === "messages"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <MessageCircle className="size-5" />
              <span>Messages</span>
            </button>
            <button
              onClick={() => setActiveView("help")}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs transition-colors ${
                activeView === "help"
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <HelpCircle className="size-5" />
              <span>Help</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
