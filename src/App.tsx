import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Pipeline from "./pages/Pipeline";
import Campaigns from "./pages/Campaigns";
import Messages from "./pages/Messages";
import Tasks from "./pages/Tasks";
import LandingPages from "./pages/LandingPages";
import Analytics from "./pages/Analytics";
import DripSequences from "./pages/DripSequences";
import Automations from "./pages/Automations";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/landing-pages" element={<LandingPages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/drip-sequences" element={<DripSequences />} />
            <Route path="/automations" element={<Automations />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
