import { ArrowRight, Code, Heart, PenTool, Briefcase, GraduationCap, Lightbulb, MessageCircle, FileText, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface AITool {
  id: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  gradient: string;
  prompt: string;
  features: string[];
  popular: boolean;
}

export function ExplorePage() {
  const aiTools: AITool[] = [
    {
      id: 'code-assistant',
      title: 'Code Assistant',
      description: 'Get help with coding, debugging, and code reviews across multiple programming languages.',
      icon: Code,
      category: 'Development',
      gradient: 'from-blue-500 to-cyan-500',
      prompt: 'You are an expert software engineer. Help me with coding tasks, provide detailed code reviews, suggest optimizations, and explain complex programming concepts.',
      features: ['Code Review', 'Bug Fixing', 'Optimization', 'Best Practices'],
      popular: true,
    },
    {
      id: 'therapist-mode',
      title: 'AI Therapist',
      description: 'A supportive companion for mental health, stress management, and emotional wellbeing.',
      icon: Heart,
      category: 'Wellness',
      gradient: 'from-pink-500 to-rose-500',
      prompt: 'You are a compassionate and professional therapist. Provide supportive guidance, active listening, and evidence-based therapeutic techniques while maintaining appropriate boundaries.',
      features: ['Active Listening', 'Stress Management', 'Mindfulness', 'Emotional Support'],
      popular: true,
    },
    {
      id: 'writing-coach',
      title: 'Writing Coach',
      description: 'Enhance your writing skills with personalized feedback and creative guidance.',
      icon: PenTool,
      category: 'Creative',
      gradient: 'from-purple-500 to-indigo-500',
      prompt: 'You are an experienced writing coach. Help improve writing quality, style, structure, and creativity. Provide constructive feedback and actionable suggestions.',
      features: ['Style Improvement', 'Grammar Check', 'Creative Ideas', 'Structure Guidance'],
      popular: false,
    },
    {
      id: 'business-advisor',
      title: 'Business Advisor',
      description: 'Strategic business insights, market analysis, and growth planning assistance.',
      icon: Briefcase,
      category: 'Business',
      gradient: 'from-green-500 to-emerald-500',
      prompt: 'You are a senior business consultant with expertise in strategy, operations, and growth. Provide actionable business advice and strategic insights.',
      features: ['Strategy Planning', 'Market Analysis', 'Financial Advice', 'Growth Hacking'],
      popular: true,
    },
    {
      id: 'study-buddy',
      title: 'Study Buddy',
      description: 'Personalized learning plans, study techniques, and academic support.',
      icon: GraduationCap,
      category: 'Education',
      gradient: 'from-yellow-500 to-orange-500',
      prompt: 'You are an expert tutor and study coach. Help create effective study plans, explain complex concepts, and provide learning strategies.',
      features: ['Study Plans', 'Concept Explanation', 'Practice Tests', 'Learning Strategies'],
      popular: false,
    },
    {
      id: 'creative-partner',
      title: 'Creative Partner',
      description: 'Brainstorm ideas, overcome creative blocks, and explore innovative solutions.',
      icon: Lightbulb,
      category: 'Creative',
      gradient: 'from-amber-500 to-yellow-500',
      prompt: 'You are a creative ideation partner. Help brainstorm innovative ideas, overcome creative blocks, and explore unconventional solutions.',
      features: ['Idea Generation', 'Creative Problem Solving', 'Innovation', 'Design Thinking'],
      popular: false,
    },
    {
      id: 'conversation-partner',
      title: 'Conversation Partner',
      description: 'Practice conversations, improve communication skills, and engage in meaningful dialogue.',
      icon: MessageCircle,
      category: 'Communication',
      gradient: 'from-teal-500 to-cyan-500',
      prompt: 'You are a skilled conversation partner. Engage in meaningful dialogue, help practice communication skills, and provide thoughtful responses.',
      features: ['Communication Skills', 'Language Practice', 'Interview Prep', 'Social Skills'],
      popular: false,
    },
    {
      id: 'resume-builder',
      title: 'Resume Builder',
      description: 'Create compelling resumes, cover letters, and career development guidance.',
      icon: FileText,
      category: 'Career',
      gradient: 'from-slate-500 to-gray-500',
      prompt: 'You are a professional career coach and resume expert. Help create compelling resumes, cover letters, and provide career advice.',
      features: ['Resume Writing', 'Cover Letters', 'Career Advice', 'Interview Tips'],
      popular: true,
    },
    {
      id: 'math-tutor',
      title: 'Math Tutor',
      description: 'Solve complex mathematical problems with step-by-step explanations.',
      icon: Calculator,
      category: 'Education',
      gradient: 'from-red-500 to-pink-500',
      prompt: 'You are an expert mathematics tutor. Solve problems step-by-step, explain mathematical concepts clearly, and provide practice exercises.',
      features: ['Problem Solving', 'Step-by-Step Solutions', 'Concept Explanation', 'Practice Problems'],
      popular: false,
    },
  ];

  const categories = [...new Set(aiTools.map(tool => tool.category))];

  const startChat = (tool: AITool) => {
    // In a real implementation, this would navigate to chat with the tool's prompt pre-loaded
    const chatUrl = `/chat?tool=${tool.id}&prompt=${encodeURIComponent(tool.prompt)}`;
    window.location.href = chatUrl;
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore AI <span className="text-gradient">Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover specialized AI assistants tailored for different tasks and industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button variant="outline" className="glass border-white/20 bg-ai-primary text-white">
            All Tools
          </Button>
          {categories.map((category) => (
            <Button key={category} variant="outline" className="glass border-white/20 hover:bg-white/10">
              {category}
            </Button>
          ))}
        </div>

        {/* Popular Tools Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="text-gradient">Popular Tools</span>
            <Badge className="ml-3 bg-gradient-primary text-white">Trending</Badge>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.filter(tool => tool.popular).map((tool) => (
              <Card key={tool.id} className="glass-card hover-lift group relative overflow-hidden">
                {tool.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-gradient-primary text-white">Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${tool.gradient} mb-4 w-fit`}>
                    <tool.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2 group-hover:text-ai-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-ai-primary mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>

                  {/* Action Button */}
                  <Button 
                    onClick={() => startChat(tool)}
                    className="w-full bg-gradient-primary hover:opacity-90 group-hover:scale-105 transition-all duration-200"
                  >
                    Start Chatting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Tools Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            <span className="text-gradient">All AI Tools</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool) => (
              <Card key={tool.id} className="glass-card hover-lift group relative overflow-hidden">
                {tool.popular && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-gradient-primary text-white">Popular</Badge>
                  </div>
                )}
                
                <CardHeader className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tool.gradient} mb-3 w-fit`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2 group-hover:text-ai-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {tool.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                    <Button 
                      onClick={() => startChat(tool)}
                      size="sm"
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      Try Now
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="glass-card bg-gradient-hero/10 border-none">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don't See What You Need?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Create your own custom AI assistant with specialized prompts and personas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/prompts">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    Browse Prompts
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button size="lg" variant="outline" className="glass border-white/20">
                    Start Custom Chat
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}