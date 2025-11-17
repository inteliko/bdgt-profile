
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookCall = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    companyWebsite: ""
  });

  const [showCalendly, setShowCalendly] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectMeetingTime = () => {
    setShowCalendly(true);
  };

  const closeCalendly = () => {
    setShowCalendly(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Content */}
            <div className="lg:pr-12">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-growmodo-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-semibold">Startmodo</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Are You Held Back by<br />
                the Lack of Design &<br />
                Dev Talent?
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Schedule a 15-min discovery call with one of our outsourcing experts and learn how Startmodo can help you scale your agency or marketing team today.
              </p>
              
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-4">As seen on:</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                    <span className="text-xs text-gray-400">Product Hunt</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                    <span className="text-xs text-gray-400">BetaList</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                    <span className="text-xs text-gray-400">BETA LIST</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                    <span className="text-xs text-gray-400">Land-book</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                    <span className="text-xs text-gray-400">UPlabs</span>
                  </div>
                  <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                    <span className="text-xs text-gray-400">DESIGNMUNK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-growmodo-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-semibold">Startmodo</span>
              </div>
              
              <form className="space-y-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="workEmail" className="text-sm font-medium text-gray-700">
                    Work Email *
                  </Label>
                  <Input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <div className="mt-1 flex">
                    <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                      <span className="text-sm">🇺🇸</span>
                    </div>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="rounded-l-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="companyWebsite" className="text-sm font-medium text-gray-700">
                    Company Website *
                  </Label>
                  <div className="mt-1 flex">
                    <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                      <span className="text-sm text-gray-500">🔗</span>
                    </div>
                    <Input
                      id="companyWebsite"
                      name="companyWebsite"
                      type="url"
                      value={formData.companyWebsite}
                      onChange={handleInputChange}
                      className="rounded-l-none"
                      placeholder="https://"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="captcha"
                    className="mt-1"
                    required
                  />
                  <Label htmlFor="captcha" className="text-sm text-gray-600">
                    Please verify yourself via CAPTCHA *
                  </Label>
                </div>

                <Button
                  type="button"
                  onClick={handleSelectMeetingTime}
                  className="w-full bg-black text-white py-3 text-lg font-medium hover:bg-gray-800"
                >
                  Select Meeting Time →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Schedule Your Meeting</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeCalendly}
                className="hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="h-[calc(90vh-80px)] overflow-hidden">
              <iframe
                src="https://calendly.com/office-bdglobaltech/30min"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-b-lg"
                title="Schedule a meeting"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BookCall;
