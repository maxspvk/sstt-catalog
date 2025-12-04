import React from 'react';
import { loggerService } from '../services/LoggerService';
import { Download } from 'lucide-react';

/**
 * TIER 1: Presentation Layer
 * Includes "Download Log" functionality to satisfy the Excel logging requirement visually.
 */
const Footer: React.FC = () => {
  const handleDownloadLogs = () => {
    loggerService.downloadLogsAsExcel(); // Interaction: Calls the Logger Service to generate the CSV/Excel file.
  };

  return (
    // Layout: Semantic footer tag. 'mt-auto' ensures it sticks to the bottom of the viewport.
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-gray-700 mt-auto py-8">
      {/* Responsive Design: Stacks vertically on mobile (flex-col), horizontal row on desktop (md:flex-row) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Content: Static copyright text */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 Research Project. SSTT Course.
        </div>

        {/* Button with an icon to trigger the log export functionality */}
        <button 
          onClick={handleDownloadLogs}
          className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          <Download size={16} />
          Download Session Logs (Excel)
        </button>
      </div>
    </footer>
  );
};

export default Footer;
