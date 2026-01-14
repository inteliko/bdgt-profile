import React from 'react';

const companies = [
  { name: 'Slack', logo: '/tools/1.png' },
  { name: 'Notion', logo: '/tools/2.png' },
  { name: 'Zoho', logo: '/tools/3.png' },
  { name: 'Trello', logo: '/tools/4.png' },
  { name: 'Dropbox', logo: '/tools/5.png' },
  { name: 'Asana', logo: '/tools/6.png' },
  { name: 'GitHub', logo: '/tools/github.svg' },
  { name: 'Zoom', logo: '/tools/zoom.svg' }
];

const TrustedByBrands = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Trusted by <span className="text-growmodo-blue">fast-moving</span> brands & agencies worldwide
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold text-growmodo-blue">10,000+</div>
                <div className="text-gray-600 font-medium">Tasks delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-extrabold text-growmodo-blue">200+</div>
                <div className="text-gray-600 font-medium">Projects nailed</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-20">
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
                ) : (
                  <span className="text-sm text-gray-400 uppercase font-semibold tracking-wider">{company.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByBrands;