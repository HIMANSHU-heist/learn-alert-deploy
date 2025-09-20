import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8" />
              <span className="text-2xl font-bold">Emergency Training Platform</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Professional emergency response training for first responders, government agencies, 
              and organizations committed to disaster preparedness and public safety.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 hover:text-primary-glow cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 hover:text-primary-glow cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-primary-glow cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#training" className="hover:text-white transition-colors">Training Modules</a></li>
              <li><a href="#dashboards" className="hover:text-white transition-colors">Dashboards</a></li>
              <li><a href="#weather" className="hover:text-white transition-colors">Weather Alerts</a></li>
              <li><a href="#reports" className="hover:text-white transition-colors">Reports</a></li>
              <li><a href="#certification" className="hover:text-white transition-colors">Certification</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Support</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-emergency-glow" />
                <span>24/7 Emergency: 911</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>Support: (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>training@emergency.gov</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Emergency Training Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Emergency Training Platform. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;