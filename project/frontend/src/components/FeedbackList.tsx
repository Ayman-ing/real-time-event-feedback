import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { Feedback } from '../types';

interface Props {
  feedback: Feedback[];
  selectedCategory: string;
}

export function FeedbackList({ feedback, selectedCategory }: Props) {
  const filteredFeedback = selectedCategory === 'All' 
    ? feedback 
    : feedback.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-4">
      {filteredFeedback.map((item) => (
        <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="text-gray-400" size={20} />
                <span className="text-sm text-gray-600">{new Date(item.timestamp).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-800">{item.comment}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="text-yellow-500" size={20} fill="currentColor" />
              <span className="font-semibold">{item.rating}</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{item.email}</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}