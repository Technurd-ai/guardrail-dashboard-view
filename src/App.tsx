
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OwaspDashboard from "./pages/OwaspDashboard";
import NistDashboard from "./pages/NistDashboard";
import GoogleSaifDashboard from "./pages/GoogleSaifDashboard";
import MitreAtlasDashboard from "./pages/MitreAtlasDashboard";
import Iso42001Dashboard from "./pages/Iso42001Dashboard";
import PolicyMapping from "./pages/PolicyMapping";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/owasp" element={<OwaspDashboard />} />
          <Route path="/nist" element={<NistDashboard />} />
          <Route path="/google-saif" element={<GoogleSaifDashboard />} />
          <Route path="/mitre-atlas" element={<MitreAtlasDashboard />} />
          <Route path="/iso-42001" element={<Iso42001Dashboard />} />
          <Route path="/policy-mapping" element={<PolicyMapping />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
