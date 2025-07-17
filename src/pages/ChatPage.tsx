import { useState, useRef, useEffect } from 'react';
import { Send, Mic, Square, Bot, User, Copy, Edit3, RotateCcw, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI thinking partner powered by DeepSeek R1. How can I help you think through something today?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'Help me brainstorm ideas for...',
    'Analyze this problem...',
    'Explain the concept of...',
    'Write a summary of...',
  ];

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (replace with actual OpenRouter API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you're asking about "${input}". This is a simulated response. In the full implementation, this would connect to the DeepSeek R1 model via OpenRouter API to provide intelligent, contextual responses with advanced reasoning capabilities.`,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognition.start();
    }
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-screen bg-background pt-16">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <Avatar className="h-8 w-8 bg-gradient-primary">
                    <AvatarFallback>
                      <Bot className="h-4 w-4 text-white" />
                    </AvatarFallback>
                  </Avatar>
                )}

                <Card className={`max-w-2xl ${message.role === 'user' ? 'bg-ai-primary text-white' : 'glass-card'}`}>
                  <CardContent className="p-4">
                    <p className="leading-relaxed">{message.content}</p>
                    
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyMessage(message.content)}
                          className="h-8 px-3"
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-3">
                          <Edit3 className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-3">
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Retry
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-3">
                          <Download className="h-3 w-3 mr-1" />
                          Save
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {message.role === 'user' && (
                  <Avatar className="h-8 w-8 bg-muted">
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-4">
                <Avatar className="h-8 w-8 bg-gradient-primary">
                  <AvatarFallback>
                    <Bot className="h-4 w-4 text-white" />
                  </AvatarFallback>
                </Avatar>
                <Card className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <div className="animate-pulse flex space-x-1">
                        <div className="h-2 w-2 bg-ai-primary rounded-full animate-bounce"></div>
                        <div className="h-2 w-2 bg-ai-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="h-2 w-2 bg-ai-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-muted-foreground">AI is thinking...</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className="p-4 border-t border-border/50">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground mb-3">Suggestions to get started:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInput(suggestion)}
                    className="glass border-white/20 hover:bg-white/10"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t border-border/50 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
                className="min-h-[60px] max-h-32 pr-24 resize-none bg-background/50 border-border/50 focus:border-ai-primary"
                disabled={isLoading}
              />
              
              <div className="absolute right-2 bottom-2 flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={startVoiceInput}
                  disabled={isLoading}
                  className={`h-8 w-8 ${isListening ? 'text-red-500 animate-pulse' : ''}`}
                >
                  {isListening ? <Square className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                
                <Button
                  size="icon"
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="h-8 w-8 bg-gradient-primary hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}