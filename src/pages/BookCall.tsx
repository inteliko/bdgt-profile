
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HUBSPOT_EMBED_SRC = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
const HUBSPOT_MEETINGS_URL = "https://meetings-na2.hubspot.com/start-modo?embed=true";

const BookCall = () => {
  useEffect(() => {
    // Ensure the container exists before loading the script
    const container = document.querySelector('.meetings-iframe-container');

    // Remove any previously injected script to avoid duplicates during HMR/navigation
    const existing = document.querySelector(`script[src="${HUBSPOT_EMBED_SRC}"]`);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = HUBSPOT_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup: remove script if component unmounts
      script.remove();
      // also remove hubspot-generated iframe if present
      const generated = container?.querySelector('iframe');
      if (generated && generated.parentElement) generated.parentElement.removeChild(generated);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Call</h1>
          <p className="text-lg text-gray-600 mb-8">Use the scheduler below to pick a time that works for you.</p>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* HubSpot Meetings embed container (HubSpot script will replace this div with the iframe) */}
            <div className="meetings-iframe-container" data-src={HUBSPOT_MEETINGS_URL} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookCall;
