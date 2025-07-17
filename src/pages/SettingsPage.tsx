import { useState } from 'react';
import { Save, Moon, Sun, Volume2, Mic, Shield, User, Palette, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/contexts/ThemeContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    // AI Model Settings
    model: 'deepseek-r1',
    replySpeed: 'balanced',
    safeMode: true,
    contextMemory: true,
    
    // Interface Settings
    fontSize: 'medium',
    chatStyle: 'bubbles',
    
    // Audio Settings
    micLanguage: 'en-US',
    ttsLanguage: 'en-US',
    ttsEnabled: false,
    
    // Personalization
    defaultPersona: 'assistant',
    customInstructions: '',
    
    // Privacy
    saveConversations: true,
    analyticsEnabled: true,
  });

  const saveSettings = () => {
    // In a real app, this would save to backend/localStorage
    console.log('Saving settings:', settings);
  };

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Settings</span>
          </h1>
          <p className="text-muted-foreground">
            Customize your AI experience and preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* AI Model Settings */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-ai-primary" />
                AI Model & Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="model">AI Model</Label>
                  <Select value={settings.model} onValueChange={(value) => updateSetting('model', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deepseek-r1">DeepSeek R1 (Recommended)</SelectItem>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="claude-3">Claude 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reply-speed">Reply Speed</Label>
                  <Select value={settings.replySpeed} onValueChange={(value) => updateSetting('replySpeed', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fast">Fast</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="thoughtful">Thoughtful</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Safe Mode</Label>
                    <p className="text-sm text-muted-foreground">Filter potentially harmful content</p>
                  </div>
                  <Switch 
                    checked={settings.safeMode} 
                    onCheckedChange={(checked) => updateSetting('safeMode', checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Context Memory</Label>
                    <p className="text-sm text-muted-foreground">Remember conversation context across sessions</p>
                  </div>
                  <Switch 
                    checked={settings.contextMemory} 
                    onCheckedChange={(checked) => updateSetting('contextMemory', checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interface Settings */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-ai-primary" />
                Interface & Display
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => theme === 'light' && toggleTheme()}
                      className="flex items-center gap-2"
                    >
                      <Moon className="h-4 w-4" />
                      Dark
                    </Button>
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => theme === 'dark' && toggleTheme()}
                      className="flex items-center gap-2"
                    >
                      <Sun className="h-4 w-4" />
                      Light
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="font-size">Font Size</Label>
                  <Select value={settings.fontSize} onValueChange={(value) => updateSetting('fontSize', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="chat-style">Chat Style</Label>
                <Select value={settings.chatStyle} onValueChange={(value) => updateSetting('chatStyle', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bubbles">Chat Bubbles</SelectItem>
                    <SelectItem value="document">Document Mode</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-ai-primary" />
                Audio & Voice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Text-to-Speech</Label>
                  <p className="text-sm text-muted-foreground">Enable AI voice responses</p>
                </div>
                <Switch 
                  checked={settings.ttsEnabled} 
                  onCheckedChange={(checked) => updateSetting('ttsEnabled', checked)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="mic-language">Microphone Language</Label>
                  <Select value={settings.micLanguage} onValueChange={(value) => updateSetting('micLanguage', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="en-GB">English (UK)</SelectItem>
                      <SelectItem value="es-ES">Spanish</SelectItem>
                      <SelectItem value="fr-FR">French</SelectItem>
                      <SelectItem value="de-DE">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tts-language">TTS Language</Label>
                  <Select value={settings.ttsLanguage} onValueChange={(value) => updateSetting('ttsLanguage', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="en-GB">English (UK)</SelectItem>
                      <SelectItem value="es-ES">Spanish</SelectItem>
                      <SelectItem value="fr-FR">French</SelectItem>
                      <SelectItem value="de-DE">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personalization */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-ai-primary" />
                Personalization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="default-persona">Default Persona</Label>
                <Select value={settings.defaultPersona} onValueChange={(value) => updateSetting('defaultPersona', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="assistant">General Assistant</SelectItem>
                    <SelectItem value="coder">Tech Expert</SelectItem>
                    <SelectItem value="writer">Writing Coach</SelectItem>
                    <SelectItem value="therapist">Supportive Companion</SelectItem>
                    <SelectItem value="teacher">Tutor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-instructions">Custom Instructions</Label>
                <Textarea
                  id="custom-instructions"
                  placeholder="Add custom instructions that will be included in all conversations..."
                  value={settings.customInstructions}
                  onChange={(e) => updateSetting('customInstructions', e.target.value)}
                  className="min-h-[100px]"
                />
                <p className="text-sm text-muted-foreground">
                  These instructions will be applied to all conversations to personalize the AI's behavior.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-ai-primary" />
                Privacy & Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Save Conversations</Label>
                  <p className="text-sm text-muted-foreground">Store chat history for future reference</p>
                </div>
                <Switch 
                  checked={settings.saveConversations} 
                  onCheckedChange={(checked) => updateSetting('saveConversations', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Analytics</Label>
                  <p className="text-sm text-muted-foreground">Help improve the service with usage analytics</p>
                </div>
                <Switch 
                  checked={settings.analyticsEnabled} 
                  onCheckedChange={(checked) => updateSetting('analyticsEnabled', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button onClick={saveSettings} className="bg-gradient-primary hover:opacity-90">
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}