import React, { useEffect, useState } from 'react';
import ToolsGrid from './ToolsGrid';

export default function ReferenceOrTools() {
  const [refUrl, setRefUrl] = useState<string | null>(null);

  useEffect(() => {
    const exts = ['png', 'jpg', 'jpeg', 'svg'];
    let i = 0;

    function tryNext() {
      if (i >= exts.length) {
        setRefUrl(null);
        return;
      }
      const ext = exts[i++];
      const url = `/assets/tools-reference.${ext}`;
      const img = new Image();
      img.src = url;
      img.onload = () => setRefUrl(url);
      img.onerror = () => tryNext();
    }

    tryNext();
  }, []);

  if (refUrl) {
    return (
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-black p-8 md:p-12 rounded-md shadow-2xl" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}>
            <div className="w-full flex justify-center">
              <img src={refUrl} alt="Tools reference" className="w-full max-w-5xl object-contain" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <ToolsGrid />;
}
