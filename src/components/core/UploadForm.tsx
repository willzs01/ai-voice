
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { DashboardInput } from "@/components/ui/input";
import { ArrowRight, CircleStop, Mic, X } from "lucide-react";
import { motion } from "framer-motion";
import { FaPaperclip } from "react-icons/fa6";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { DashboardPopover } from "./DashboardPopover";

interface Option {
  label: string;
  icon: React.ElementType;
  type: 'youtube' | 'article' | 'text';
}

export function UploadForm() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const { isListening, transcript, interimTranscript, startListening, stopListening } = useSpeechRecognition();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      setInputValue("");
      startListening();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!selectedOption) {
      setInputValue(value);
      setShowPopover(value === "/");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && selectedOption && !inputValue) {
      setSelectedOption(null);
      setInputValue("");
    }
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    setInputValue("");
    setShowPopover(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 animate-fadeIn">
      <motion.div
        className="relative transform transition-all duration-300 hover:scale-102"
        initial={{ scale: 1 }}
        animate={{ scale: isInputFocused ? 1.02 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`flex flex-col bg-gray-50 border-b-2 dark:border-b-4 dark:bg-[#0A0A0A] rounded-2xl shadow-sm relative transition-shadow duration-300 ${
            isInputFocused ? "shadow-lg scale-102" : ""
          }`}
        >
          <div className="relative flex items-center">
            <DashboardPopover
              isOpen={showPopover}
              onClose={() => setShowPopover(false)}
              onSelect={handleOptionSelect}
            />
            <div className="flex items-center gap-2 w-full px-4 py-2">
              {selectedOption && (
                <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  <selectedOption.icon className="h-4 w-4" />
                  <span>{selectedOption.label}</span>
                </div>
              )}
              <DashboardInput
                ref={inputRef}
                value={isListening ? `${inputValue}${interimTranscript}` : inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                className="h-14 text-lg rounded-t-2xl bg-gray-50 dark:bg-[#0A0A0A] rounded-b-none border-0 ring-0 focus:ring-0 focus-visible:ring-0 placeholder:text-gray-500 pr-12"
                placeholder={selectedOption ? "Enter your prompt..." : "Generate a course, Upload PDF, paste YouTube video"}
              />
            </div>
          </div>

          <Button className="absolute bottom-4 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 py-4 left-4 w-5 h-5 transition-transform duration-300 hover:scale-110">
            <FaPaperclip className="text-white" />
          </Button>

          {inputValue && !isListening ? (
            <Button className="absolute bg-blue-600 hover:bg-blue-800 bottom-4 py-4 rounded-full right-4 w-5 h-5 transition-all duration-300 hover:scale-110 animate-slideIn">
              <ArrowRight className="text-white" />
            </Button>
          ) : (
            <Button
              onClick={handleMicClick}
              className={`absolute bottom-4 ${
                isListening ? "bg-red-600 hover:bg-red-800" : "bg-blue-600 hover:bg-blue-800"
              } rounded-full right-4 w-5 h-5 py-4 transition-all duration-300 hover:scale-110`}
            >
              {isListening ? <CircleStop className="text-white" /> : <Mic className="text-white" />}
            </Button>
          )}

          <div className="h-14 rounded-b-2xl" />
        </div>
      </motion.div>
      </div>
  );}
 