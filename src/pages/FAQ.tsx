import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive design and development services including web design, mobile app development, UI/UX design, branding, and digital marketing solutions. Our team consists of experienced designers, developers, and project managers."
    },
    {
      question: "How does the pricing work?",
      answer: "We offer flexible pricing models including monthly flat-rate subscriptions for unlimited requests, project-based pricing, and hourly rates. Our subscription model allows you to get unlimited design and development requests for one monthly fee."
    },
    {
      question: "What is the typical turnaround time?",
      answer: "Turnaround times vary depending on the complexity of the request. Simple design tasks can be completed within 24-48 hours, while more complex development projects may take 3-7 days. We always provide clear timelines upfront."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, absolutely! There are no long-term contracts. You can cancel your subscription at any time, and you'll continue to have access to our services until the end of your current billing period."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients globally. Our team is experienced in working across different time zones and we use modern communication tools to ensure smooth collaboration regardless of location."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We offer unlimited revisions on all our work until you're completely satisfied. If for any reason you're not happy with our service, we'll work with you to make it right or provide a refund as per our terms."
    },
    {
      question: "How do you handle project management?",
      answer: "Each client is assigned a dedicated project manager who serves as your main point of contact. We use professional project management tools to track progress, communicate updates, and ensure timely delivery."
    },
    {
      question: "What technologies do you work with?",
      answer: "Our team is proficient in a wide range of technologies including React, Vue.js, Angular, Node.js, Python, PHP, WordPress, Shopify, and many more. We stay updated with the latest technologies and best practices."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer ongoing support and maintenance services. This includes regular updates, security patches, bug fixes, and feature enhancements to keep your digital products running smoothly."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply book a discovery call with our team, and we'll discuss your needs, goals, and how we can help. From there, we'll create a customized plan that fits your requirements and budget."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, pricing, and process.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-medium text-black">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-black mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
            <a 
              href="/book-call"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;