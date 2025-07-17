import { useState } from 'react';
import { Search, Plus, Heart, Copy, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  likes: number;
  isLiked: boolean;
  author: string;
}

export function PromptsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Prompts', count: 245 },
    { id: 'writing', name: 'Writing', count: 67 },
    { id: 'coding', name: 'Coding', count: 54 },
    { id: 'study', name: 'Study Help', count: 43 },
    { id: 'business', name: 'Business', count: 38 },
    { id: 'creative', name: 'Creative', count: 43 },
  ];

  const prompts: Prompt[] = [
    {
      id: '1',
      title: 'Code Review Assistant',
      description: 'Get detailed code reviews with suggestions for improvement',
      content: 'Please review the following code and provide detailed feedback on: 1) Code quality and best practices 2) Potential bugs or issues 3) Performance optimizations 4) Readability improvements\n\n[Your code here]',
      category: 'coding',
      tags: ['review', 'debugging', 'optimization'],
      likes: 156,
      isLiked: false,
      author: 'Sarah Chen',
    },
    {
      id: '2',
      title: 'Academic Essay Helper',
      description: 'Structure and improve your academic essays',
      content: 'Help me write an academic essay on [topic]. Please:\n1) Create an outline with main arguments\n2) Suggest relevant sources and references\n3) Provide guidance on thesis statement\n4) Review my draft for clarity and flow',
      category: 'study',
      tags: ['essay', 'academic', 'research'],
      likes: 203,
      isLiked: true,
      author: 'Dr. Emily Watson',
    },
    {
      id: '3',
      title: 'Creative Writing Coach',
      description: 'Enhance your storytelling and creative writing skills',
      content: 'Act as a creative writing coach. Help me develop:\n1) Character development and dialogue\n2) Plot structure and pacing\n3) Setting and world-building\n4) Writing style and voice\n\nGenre: [your genre]\nCurrent idea: [your story concept]',
      category: 'writing',
      tags: ['creative', 'storytelling', 'fiction'],
      likes: 98,
      isLiked: false,
      author: 'Michael Rodriguez',
    },
    {
      id: '4',
      title: 'Business Strategy Advisor',
      description: 'Analyze business problems and develop strategic solutions',
      content: 'I need help developing a business strategy for [situation]. Please analyze:\n1) Market opportunities and threats\n2) Competitive landscape\n3) SWOT analysis\n4) Strategic recommendations with action steps\n\nBusiness context: [describe your business]',
      category: 'business',
      tags: ['strategy', 'analysis', 'planning'],
      likes: 134,
      isLiked: true,
      author: 'Alex Thompson',
    },
    {
      id: '5',
      title: 'Learning Accelerator',
      description: 'Master any topic with structured learning plans',
      content: 'Create a comprehensive learning plan for [topic/skill]. Include:\n1) Learning objectives and milestones\n2) Resources and materials\n3) Practice exercises and projects\n4) Assessment methods\n5) Timeline for mastery\n\nMy current level: [beginner/intermediate/advanced]',
      category: 'study',
      tags: ['learning', 'education', 'skill-building'],
      likes: 187,
      isLiked: false,
      author: 'Lisa Park',
    },
    {
      id: '6',
      title: 'Creative Brainstorm Partner',
      description: 'Generate innovative ideas for any creative project',
      content: 'Let\'s brainstorm creative ideas for [project/challenge]. Help me:\n1) Generate 10+ unique concepts\n2) Explore unconventional approaches\n3) Combine different ideas creatively\n4) Evaluate and refine the best concepts\n\nProject brief: [describe your project]',
      category: 'creative',
      tags: ['brainstorming', 'innovation', 'ideation'],
      likes: 89,
      isLiked: true,
      author: 'Jordan Kim',
    },
  ];

  const filteredPrompts = prompts.filter(prompt => {
    const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyPrompt = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const toggleLike = (id: string) => {
    // In a real app, this would update the backend
    console.log('Toggle like for prompt:', id);
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Prompt <span className="text-gradient">Library</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover and share powerful prompts to unlock AI's full potential
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search prompts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="glass border-white/20">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90">
                <Plus className="h-4 w-4 mr-2" />
                Create Prompt
              </Button>
            </div>
          </div>

          {/* Categories */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 glass">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-xs data-[state=active]:bg-ai-primary data-[state=active]:text-white"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Prompts Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt) => (
              <Card key={prompt.id} className="glass-card hover-lift group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold mb-2 group-hover:text-ai-primary transition-colors">
                        {prompt.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {prompt.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleLike(prompt.id)}
                      className={`h-8 w-8 ${prompt.isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                    >
                      <Heart className={`h-4 w-4 ${prompt.isLiked ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {prompt.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Prompt Preview */}
                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {prompt.content}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyPrompt(prompt.content)}
                        className="h-8 px-3"
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-3">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Use
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Heart className="h-3 w-3" />
                      {prompt.likes}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="pt-3 mt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      by {prompt.author}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPrompts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No prompts found matching your criteria.</p>
              <Button className="mt-4 bg-gradient-primary">
                <Plus className="h-4 w-4 mr-2" />
                Create the First One
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}