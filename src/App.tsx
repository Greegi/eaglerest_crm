
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import BasePage from "./pages/BasePage";
import ClientsPage from "./pages/ClientsPage";
import CrmPage from "./pages/CrmPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import NotesPage from "./pages/NotesPage";
import TrademarkNamesPage from "./pages/TrademarkNamesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><BasePage /></Layout>} />
          <Route path="/clients" element={<Layout><ClientsPage /></Layout>} />
          <Route path="/crm" element={<Layout><CrmPage /></Layout>} />
          <Route path="/knowledge-base" element={<Layout><KnowledgeBasePage /></Layout>} />
          <Route path="/notes" element={<Layout><NotesPage /></Layout>} />
          <Route path="/trademark-names" element={<Layout><TrademarkNamesPage /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
