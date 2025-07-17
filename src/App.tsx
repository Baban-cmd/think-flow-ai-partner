import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { LandingPage } from "./pages/LandingPage";
import { ChatPage } from "./pages/ChatPage";
import { PromptsPage } from "./pages/PromptsPage";
import { ExplorePage } from "./pages/ExplorePage";
import { SettingsPage } from "./pages/SettingsPage";
import { LoginPage } from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/prompts" element={<PromptsPage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
