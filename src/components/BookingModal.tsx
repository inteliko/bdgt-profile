import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useBookingModal } from '@/context/BookingModalContext';

const HUBSPOT_EMBED_SRC = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
const HUBSPOT_MEETINGS_URL = 'https://meetings-na2.hubspot.com/start-modo?embed=true';

export default function BookingModal() {
  const { isOpen, close } = useBookingModal();

  useEffect(() => {
    if (!isOpen) return;

    const container = document.querySelector('.meetings-iframe-container');

    // remove previously injected script to avoid duplicates
    const existing = document.querySelector(`script[src="${HUBSPOT_EMBED_SRC}"]`);
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = HUBSPOT_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);

    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      script.remove();
      // remove any injected iframe
      const generated = container?.querySelector('iframe');
      if (generated && generated.parentElement) generated.parentElement.removeChild(generated);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      {/* Modal container: bottom sheet on mobile, centered dialog on sm+ */}
      <div className="relative w-full max-w-3xl mx-4 transform -translate-y-12 sm:translate-y-0">
        {/* Close button placed here (outside overflow-hidden) so it isn't clipped */}
        <button
          onClick={close}
          aria-label="Close booking"
          className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 z-50 w-11 h-11 bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="text-lg font-medium">✕</span>
        </button>

        <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
          <div className="flex justify-center items-center p-3 border-b border-gray-100">
            <div className="text-sm text-gray-500">&nbsp;</div>
          </div>

          <div className="p-4 sm:p-6 overflow-auto flex-1">
            <h3 className="text-lg sm:text-2xl font-bold mb-2">Book a Call</h3>
            <p className="text-sm text-gray-600 mb-4">Use the scheduler below to pick a time that works for you.</p>

            <div className="bg-white rounded-lg shadow-inner p-2 sm:p-4 h-[56vh] sm:h-[60vh] md:h-[68vh]">
              <div className="meetings-iframe-container w-full h-full" data-src={HUBSPOT_MEETINGS_URL} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
