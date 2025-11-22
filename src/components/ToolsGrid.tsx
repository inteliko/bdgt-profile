import React, { useState } from "react";

// Tools list with slugs that map to files you should place in `public/tools/`.
const tools = [
  { name: 'Dribbble', slug: 'dribbble' }, { name: 'HubSpot', slug: 'hubspot' }, { name: 'WordPress', slug: 'wordpress' }, { name: 'Figma', slug: 'figma' },
  { name: 'Illustrator', slug: 'illustrator' }, { name: 'Shopify', slug: 'shopify' }, { name: 'Photoshop', slug: 'photoshop' }, { name: 'Elementor', slug: 'elementor' },
  { name: 'XD', slug: 'xd' }, { name: 'Framer', slug: 'framer' }, { name: 'Webflow', slug: 'webflow' }, { name: 'Woo', slug: 'woo' },
  { name: 'Sketch', slug: 'sketch' }, { name: 'InDesign', slug: 'indesign' }, { name: 'React', slug: 'react' }, { name: 'Canva', slug: 'canva' },
  { name: 'Zapier', slug: 'zapier' }, { name: 'Google', slug: 'google' }, { name: 'Vimeo', slug: 'vimeo' }, { name: 'Lottie', slug: 'lottie' },
  { name: 'AfterEffects', slug: 'aftereffects' }, { name: 'Intercom', slug: 'intercom' }, { name: 'Notion', slug: 'notion' }, { name: 'Typeform', slug: 'typeform' },
  { name: 'Vercel', slug: 'vercel' }, { name: 'Netlify', slug: 'netlify' }, { name: 'Stripe', slug: 'stripe' }, { name: 'Airtable', slug: 'airtable' },
  { name: 'Sentry', slug: 'sentry' }, { name: 'Mixpanel', slug: 'mixpanel' }, { name: 'Webpack', slug: 'webpack' }, { name: 'Storybook', slug: 'storybook' },
  { name: 'Tailwind', slug: 'tailwind' }, { name: 'Radix', slug: 'radix' }, { name: 'FramerMotion', slug: 'framermotion' }, { name: 'Gatsby', slug: 'gatsby' },
  { name: 'Next', slug: 'next' }, { name: 'Sanity', slug: 'sanity' }, { name: 'Amplitude', slug: 'amplitude' }
];

const logoColors = [
  '#0EA5E9','#FB923C','#6366F1','#06B6D4','#F97316','#10B981','#6366F1','#EF4444','#8B5CF6','#06B6D4',
  '#60A5FA','#A78BFA','#F472B6','#F59E0B','#34D399','#60A5FA','#F97316','#06B6D4','#7C3AED','#F43F5E'
];

function Logo({ slug, name, color, size = 48 }: { slug: string; name: string; color: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  // try multiple extensions in order: .png -> .jpeg -> .jpg -> .svg
  const exts = ['png', 'jpeg', 'jpg', 'svg'];
  const [extIndex, setExtIndex] = useState(0);
  const src = `/tools/${slug}.${exts[extIndex]}`;

  const handleError = (_e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (extIndex < exts.length - 1) {
      setExtIndex((i) => i + 1);
    } else {
      setFailed(true);
    }
  };

  if (!failed) {
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        className="w-full h-full object-contain rounded-full bg-transparent"
        onError={handleError}
      />
    );
  }

  // Fallback: simple letter mark with background gradient
  return (
    <div className="w-full h-full flex items-center justify-center text-white font-bold" style={{ background: `linear-gradient(135deg, ${color} 0%, rgba(0,0,0,0.3) 100%)` }}>
      <span style={{ fontSize: 14 }}>{name.charAt(0)}</span>
    </div>
  );
}

export default function ToolsGrid() {
  return (
    <section className="w-full">
      {/* Full-width tag pills (scrolling) */}
      <div className="w-full py-6">
        <div className="w-full">
          <div className="overflow-hidden">
            <div className="flex animate-[scroll-left_30s_linear_infinite] items-center gap-4 px-4">
              {['Portal','Graphics','Ecommerce Stores','Websites','UI Designs','Funnels','Automations','Portal','Graphics','Ecommerce Stores'].map((t, i) => (
                <span key={i} className="text-gray-300 text-sm px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full whitespace-nowrap border border-white/5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Centered, raised black panel with circular icon grid */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-black p-8 md:p-12 rounded-md shadow-2xl" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}>
            <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-10 gap-6 justify-items-center items-center">
              {tools.map((t, i) => (
                <div key={t.slug} className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-105" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex items-center justify-center" style={{ boxShadow: 'inset 0 6px 0 rgba(0,0,0,0.4), 0 10px 30px rgba(0,0,0,0.6)' }}>
                    <Logo slug={t.slug} name={t.name} color={logoColors[i % logoColors.length]} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
