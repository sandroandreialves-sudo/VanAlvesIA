
import React, { useState } from 'react';

interface SectionCardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  colorClass?: string;
  isCollapsible?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({ 
  title, 
  icon, 
  content, 
  colorClass = "border-gray-200",
  isCollapsible = false 
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border-l-4 ${colorClass} overflow-hidden mb-6 transition-all duration-300`}>
      <div 
        className="px-6 py-4 flex items-center justify-between cursor-pointer select-none"
        onClick={() => isCollapsible && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <span className="text-gray-600">{icon}</span>
          <h3 className="text-lg font-bold text-gray-800 tracking-tight uppercase">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => { e.stopPropagation(); handleCopy(); }}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors text-xs font-medium flex items-center gap-1"
          >
            {copied ? 'Copiado!' : (
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            )}
          </button>
          {isCollapsible && (
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-2">
          <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap font-mono text-sm leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionCard;
