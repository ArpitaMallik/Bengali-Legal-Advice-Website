import React, { useState } from 'react';
import { BookUp as BookUpload, CheckCircle } from 'lucide-react';
import FileUpload from './FileUpload';

const AdminMode: React.FC = () => {
  // const [documentsUploaded, setDocumentsUploaded] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Simulate document database
  // const mockDocuments = [
  //   { id: 1, name: "Contract Law Handbook.pdf", date: "2024-05-20", size: "1.5 MB" },
  //   { id: 2, name: "Property Law Guidelines.pdf", date: "2024-05-15", size: "2.3 MB" },
  //   { id: 3, name: "Family Law Cases 2024.pdf", date: "2024-05-10", size: "4.1 MB" },
  // ];
  
  const handleAddToDatabase = () => {
    // Simulate adding document to database
    // setDocumentsUploaded(prev => prev + 1);
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm p-6 transition-all">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-serif font-semibold text-gray-800">
          Knowledge Base Management
        </h2>
        <div className="bg-amber-100 px-3 py-1 rounded-full text-xs font-medium text-amber-800">
          Admin Access
        </div>
      </div>
      
      <div className="mb-6 p-4 border border-amber-200 bg-amber-50 rounded-md">
        <div className="flex items-start">
          <BookUpload className="h-5 w-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-700">
              Upload legal documents to enhance the knowledge base. All documents will be processed 
              and indexed for the RAG system to provide better legal advice responses.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Supported format: PDF
            </p>
          </div>
        </div>
      </div>
      
      <FileUpload label="Upload Legal Document to Knowledge Base" />
      
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleAddToDatabase}
          className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors text-sm font-medium"
        >
          Add to Knowledge Base
        </button>
      </div>
      
      {showSuccess && (
        <div className="mt-4 p-2 bg-green-50 border border-green-100 rounded-md flex items-center text-sm text-green-700 animate-fadeIn">
          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
          Document successfully added to the knowledge base
        </div>
      )}
      
      {/* <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md font-medium text-gray-700">Recent Documents</h3>
          <span className="text-xs text-gray-500">Total documents: {mockDocuments.length + documentsUploaded}</span>
        </div>
        
        <div className="border rounded-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document Name
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Added
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-indigo-600">
                    {doc.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {doc.date}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {doc.size}
                  </td>
                </tr>
              ))}
              {documentsUploaded > 0 && (
                <tr className="bg-green-50 hover:bg-green-100">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-indigo-600">
                    New Document.pdf
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toISOString().split('T')[0]}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    2.8 MB
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default AdminMode;