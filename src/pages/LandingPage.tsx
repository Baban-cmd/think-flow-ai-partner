import React from 'react';
import { ArrowRight, Sparkles, Brain, Zap, Shield, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function LandingPage() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Reasoning',
      description: 'Powered by DeepSeek R1, delivering human-like reasoning and problem-solving capabilities.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with instant responses and seamless real-time conversations.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your conversations are secure with enterprise-grade encryption and privacy controls.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Custom Personas',
      description: 'Choose from expert personas or create your own for specialized assistance.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer',
      content: 'ThinkFlow AI has revolutionized how I approach coding problems. The reasoning is incredible.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      content: 'The custom personas feature helps me tackle different aspects of product strategy effortlessly.',
      rating: 5,
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Researcher',
      content: 'Perfect for research and analysis. The AI understands context better than any tool I\'ve used.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 mb-8 animate-glow">
              <Sparkles className="h-4 w-4 mr-2 text-ai-primary" />
              <span className="text-sm font-medium">Powered by DeepSeek R1</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Personal{' '}
              <span className="text-gradient">AI Thinking</span>{' '}
              Partner
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Experience the future of conversational AI with advanced reasoning, 
              custom personas, and lightning-fast responses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
                >
                  Start Chatting
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass border-white/20 hover:bg-white/10 px-8 py-4 text-lg"
                >
                  Explore Features
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                  <div className="text-3xl font-bold text-ai-primary mb-2">10M+</div>
                  <div className="text-sm text-muted-foreground">Conversations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-ai-secondary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ai-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">ThinkFlow AI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful features that make ThinkFlow AI the ultimate thinking partner
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center min-h-[400px]">
                  {/* Feature Content */}
                  <div className="w-full md:w-1/2 p-8 md:p-12">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${features[currentFeature].gradient} mb-6`}>
                      {React.createElement(features[currentFeature].icon, { className: "h-8 w-8 text-white" })}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {features[currentFeature].title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {features[currentFeature].description}
                    </p>
                  </div>

                  {/* Feature Visual */}
                  <div className="hidden md:block w-1/2 p-8">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      {React.createElement(features[currentFeature].icon, { className: "h-32 w-32 text-ai-primary opacity-50" })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${
                      index === currentFeature ? 'bg-ai-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCurrentFeature((prev) => (prev + 1) % features.length)}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by <span className="text-gradient">Thousands</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our users are saying about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Think <span className="text-gradient">Differently</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are already transforming their productivity with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chat">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="glass border-white/20 px-8 py-4 text-lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}