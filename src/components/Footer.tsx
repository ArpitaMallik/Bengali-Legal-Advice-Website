import React from 'react';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-amber-400" />
              <h3 className="text-xl font-serif font-bold">LegalConsult AI</h3>
            </div>
            <p className="text-indigo-200 text-sm">
              Empowering individuals with AI-driven legal guidance and resources.
              Our mission is to make legal advice more accessible while maintaining
              the highest standards of professionalism.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Legal Areas</h4>
            <ul className="space-y-2 text-indigo-200 text-sm">
              <li>Contract Law</li>
              <li>Family Law</li>
              <li>Property Law</li>
              <li>Employment Law</li>
              <li>Intellectual Property</li>
              <li>Civil Litigation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3 text-indigo-200 text-sm">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@legalconsult.ai</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>1234 Legal Avenue, Suite 500<br />San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-6 text-center text-xs text-indigo-300">
          <p>© 2025 LegalConsult AI. All rights reserved.</p>
          <p className="mt-1">
            This platform provides general legal information and is not a substitute for professional legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;