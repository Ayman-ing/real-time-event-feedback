import React, { useState } from 'react';
import { LayoutDashboard } from 'lucide-react';
import { mockFeedback } from './data';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackList } from './components/FeedbackList';
import { CheckInForm } from './components/CheckInForm';

const categories = ['All', 'Bug', 'Feature Request', 'General', 'Support'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCheckInForm, setShowCheckInForm] = useState(false);

  const handleCheckInSubmit = (data: any) => {
    console.log('Check-in data:', data);
    // Here you would typically send this data to your backend
    setShowCheckInForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="text-blue-600" size={24} />
              <h1 className="text-xl font-semibold text-gray-900">Feedback Dashboard</h1>
            </div>
            <button
              onClick={() => setShowCheckInForm(!showCheckInForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {showCheckInForm ? 'View Dashboard' : 'Check In'}
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showCheckInForm ? (
          <CheckInForm onSubmit={handleCheckInSubmit} />
        ) : (
          <>
            <FeedbackStats feedback={mockFeedback} />
            
            <div className="mb-6 flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <FeedbackList 
              feedback={mockFeedback} 
              selectedCategory={selectedCategory}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;