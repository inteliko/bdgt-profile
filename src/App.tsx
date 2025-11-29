
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Showcase from "./pages/Showcase";
import Talents from "./pages/Talents";
import Scope from "./pages/Scope";
import Pricing from "./pages/Pricing";
import ApplyTalent from "./pages/ApplyTalent";
import BookCall from "./pages/BookCall";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import DataPreferences from "./pages/DataPreferences";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
import FAQ from "./pages/FAQ";
import { BookingModalProvider } from '@/context/BookingModalContext';
import BookingModal from '@/components/BookingModal';

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BookingModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/talents" element={<Talents />} />
          <Route path="/scope" element={<Scope />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/apply-talent" element={<ApplyTalent />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:slug" element={<GuideDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/data-preferences" element={<DataPreferences />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          <BookingModal />
        </BrowserRouter>
      </BookingModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
