
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DataPreferences = () => {
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: false,
    functional: true,
    thirdParty: false,
    emailMarketing: true,
    profileAnalytics: false
  });

  const handlePreferenceChange = (key: string, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Save preferences logic would go here
    console.log('Saving preferences:', preferences);
    alert('Your preferences have been saved successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Data Preferences</h1>
          <p className="text-gray-600 mb-8">
            Manage how your data is used and control your privacy preferences.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold mb-6">Cookie Preferences</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Essential Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <Switch checked={true} disabled className="ml-4" />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Analytics Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    Help us understand how you use our website to improve user experience.
                  </p>
                </div>
                <Switch 
                  checked={preferences.analytics} 
                  onCheckedChange={(value) => handlePreferenceChange('analytics', value)}
                  className="ml-4" 
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Marketing Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    Used to show you relevant advertisements and measure campaign effectiveness.
                  </p>
                </div>
                <Switch 
                  checked={preferences.marketing} 
                  onCheckedChange={(value) => handlePreferenceChange('marketing', value)}
                  className="ml-4" 
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Functional Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    Enable enhanced functionality like remembering your preferences.
                  </p>
                </div>
                <Switch 
                  checked={preferences.functional} 
                  onCheckedChange={(value) => handlePreferenceChange('functional', value)}
                  className="ml-4" 
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Third-Party Cookies</h3>
                  <p className="text-gray-600 text-sm">
                    Allow third-party services to track your activity across websites.
                  </p>
                </div>
                <Switch 
                  checked={preferences.thirdParty} 
                  onCheckedChange={(value) => handlePreferenceChange('thirdParty', value)}
                  className="ml-4" 
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6 mt-12">Communication Preferences</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Email Marketing</h3>
                  <p className="text-gray-600 text-sm">
                    Receive updates about new features, offers, and industry insights.
                  </p>
                </div>
                <Switch 
                  checked={preferences.emailMarketing} 
                  onCheckedChange={(value) => handlePreferenceChange('emailMarketing', value)}
                  className="ml-4" 
                />
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2">Profile Analytics</h3>
                  <p className="text-gray-600 text-sm">
                    Allow us to analyze your usage patterns to provide personalized recommendations.
                  </p>
                </div>
                <Switch 
                  checked={preferences.profileAnalytics} 
                  onCheckedChange={(value) => handlePreferenceChange('profileAnalytics', value)}
                  className="ml-4" 
                />
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Data Rights</h3>
              <p className="text-gray-600 text-sm mb-4">
                You have the right to access, correct, delete, or export your personal data. 
                Contact us to exercise these rights.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm">Request Data Export</Button>
                <Button variant="outline" size="sm">Delete My Account</Button>
                <Button variant="outline" size="sm">Contact Privacy Team</Button>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button onClick={handleSave} className="bg-growmodo-blue text-white px-8 py-2">
                Save Preferences
              </Button>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-growmodo-blue">Important Information</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Changes to your preferences will take effect immediately</li>
              <li>• Essential cookies cannot be disabled as they are required for basic functionality</li>
              <li>• Disabling certain cookies may limit website functionality</li>
              <li>• You can change these preferences at any time</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DataPreferences;
