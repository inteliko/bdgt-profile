import React, { useState } from "react";

// Tools / Services list that maps to `public/tools/<slug>.(png|svg|jpg)` where available.
const tools = [
  { name: 'Branding & Logo', slug: 'branding-logo' },
  { name: 'Human Illustration', slug: 'human-illustration' },
  { name: 'Web UI', slug: 'web-ui' },
  { name: 'Mobile App UI', slug: 'mobile-app-ui' },
  { name: 'Artworks', slug: 'artworks' },
  { name: 'T-shirt Design', slug: 'tshirt-design' },
  { name: 'Stationery', slug: 'stationery' },
  { name: 'E-Book & Cover', slug: 'ebook-cover' },
  { name: 'Packaging', slug: 'packaging' },
  { name: 'Banner Ad', slug: 'banner-ad' },
  { name: 'Infographic', slug: 'infographic' },
  { name: 'Social Media', slug: 'social-media' },
  { name: 'Pitchdeck', slug: 'pitchdeck' },
  { name: 'Flyer & Poster', slug: 'flyer-poster' },
  { name: 'Brochure', slug: 'brochure' },
  { name: 'Newsletter', slug: 'newsletter' },
  { name: 'Icon Pack', slug: 'icon-pack' },
  { name: 'Podcast Cover', slug: 'podcast-cover' },
  { name: 'Mascot', slug: 'mascot' },
  { name: 'Photo Retouching', slug: 'photo-retouching' },
  { name: 'Explainer Videos', slug: 'explainer-videos' },
  { name: 'Logo Animation', slug: 'logo-animation' },
  { name: 'Typography Videos', slug: 'typography-videos' },
  { name: 'Gif Animations', slug: 'gif-animations' },
  { name: 'E-Learning Videos', slug: 'e-learning-videos' },
  { name: 'Character Animation', slug: 'character-animation' },
  { name: 'Testimonial Videos', slug: 'testimonial-videos' },
  { name: 'Video Editing', slug: 'video-editing' },
  { name: 'UI Animation', slug: 'ui-animation' },
  { name: 'Tutorial Videos', slug: 'tutorial-videos' },
  { name: 'Text Overlays', slug: 'text-overlays' },
  { name: 'Reels & Videos', slug: 'reels-videos' },
  { name: 'WordPress', slug: 'wordpress' },
  { name: 'Beaver Builder', slug: 'beaver-builder' },
  { name: 'WooCommerce', slug: 'woocommerce' },
  { name: 'Unbounce', slug: 'unbounce' },
  { name: 'Visual Composer', slug: 'visual-composer' },
  { name: 'Oxygen Builder', slug: 'oxygen-builder' },
  { name: 'Divi Builder', slug: 'divi-builder' },
  { name: 'WP Bakery', slug: 'wp-bakery' },
  { name: 'Elementor', slug: 'elementor' },
  { name: 'Webflow', slug: 'webflow' },
  { name: 'Wix Classic', slug: 'wix-classic' },
  { name: 'React JS', slug: 'react' }
];

function Logo({ slug, name, size = 48 }: { slug: string; name: string; size?: number }) {
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
        className="w-full h-full object-contain rounded-sm bg-transparent"
        style={{ filter: 'grayscale(100%) contrast(1.1)' }}
        onError={handleError}
      />
    );
  }

  // Fallback: simple letter mark with black and white (no color gradient)
  return (
    <div className="w-full h-full flex items-center justify-center text-black font-bold" style={{ background: '#f3f4f6' }}>
      <span style={{ fontSize: 14 }}>{name.charAt(0)}</span>
    </div>
  );
}

export default function ToolsGrid() {
  return (
    <section className="w-full">
      {/* Full-width infinite scrolling tag pills */}
      <div className="w-full bg-white overflow-hidden py-4">
        <div className="flex animate-[scroll-left_10s_linear_infinite] items-center gap-3">
          {Array.from({ length: 3 }).flatMap(() => ['Portal','Graphics','Ecommerce Stores','Websites','UI Designs','Funnels','Automations']).map((t, i) => (
            <span key={i} className="text-white text-xs px-3 py-1 bg-black rounded-full whitespace-nowrap border border-gray-800 flex-shrink-0 shadow-sm">{t}</span>
          ))}
        </div>
      </div>

      {/* Full-width services grid */}
      <div className="w-full">
        <div className="w-full px-6 py-10 bg-white">
          <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
              {tools.map((t, i) => (
                <div key={t.slug} className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 hover:shadow-md hover:border-growmodo-blue/30 transform transition-all duration-200 border border-gray-200 shadow-sm" style={{ minHeight: 100 }}>
                  <div className="w-14 h-14 flex-shrink-0 rounded-md bg-gray-50 flex items-center justify-center p-1 border border-gray-100" style={{ boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.05)' }}>
                    <div className="w-10 h-10">
                      <Logo slug={t.slug} name={t.name} size={32} />
                    </div>
                  </div>

                  <div className="flex-1 w-full text-center">
                    <div className="text-sm text-black font-semibold leading-tight transition-colors duration-200 hover:text-growmodo-blue line-clamp-2">{t.name}</div>
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
