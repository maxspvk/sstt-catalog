import React from 'react';

/* 
About page structure 
*/

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white dark:bg-dark-card shadow rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          About the Project
        </h1>
        
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-4">
          <p>
            This web application was developed as part of the <strong>Software Systems Theory and Technology (SSTT)</strong> course.
            It serves as a demonstration of specific architectural principles requested by the curriculum.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">Background</h3>
          <p>
            Stemming from extensive experience in the automotive e-commerce sector, 
            I identified a critical inefficiency: <strong>suppliers often engage in 'blind procurement'.</strong>
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">The Problem</h3>
          <p>
            Inventory decisions lack precision because customer <strong>demand
            varies significantly by region</strong> (regional heterogeneity). This leads to overstocking in some 
            warehouses and shortages in others.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">The Solution</h3>
          <p>
            The proposed solution is a <strong>Multi-Agent System (MAS).</strong> In this system, each supplier acts as an autonomous agent that 
            interacts with neighboring agents to predict and optimize stock procurement based on 
            collective intelligence.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">Role of THIS App</h3>
          <p>
            To train these agents, real-world demand data is 
            crucial. <strong>This application serves as the Data Acquisition Interface</strong>, capturing specific user 
            search patterns and generating the logs required for agent learning.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
            Technical Implementation (SSTT Course)
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>3-Tier Architecture:</strong> Separation of Presentation (React), 
              Logic (Services), and Data (Mock DB).
            </li>
            <li>
              <strong>SOLID Principles:</strong> Strict adherence to Single Responsibility and Interface Segregation.
            </li>
            <li>
              <strong>Data Persistence:</strong> Simulation of log storage and Excel/CSV export for data analysis.
            </li>
            <li>
              <strong>UI Adjustability:</strong> Full Dark Mode support via Context API.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
