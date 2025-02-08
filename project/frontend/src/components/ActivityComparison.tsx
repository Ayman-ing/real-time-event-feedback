import React from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Feedback, ActivityType } from '../types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  feedback: Feedback[];
}

const activityColors = {
  'Initial Interest': '#60A5FA',
  'Final Rating': '#F472B6'
};

export function ActivityComparison({ feedback }: Props) {
  // Calculate average initial interest and final rating for each activity
  const activityComparison = feedback.reduce((acc, user) => {
    user.checkInData.forEach(checkIn => {
      if (!acc[checkIn.category]) {
        acc[checkIn.category] = {
          initialInterest: { sum: 0, count: 0 },
          finalRating: { sum: 0, count: 0 }
        };
      }
      acc[checkIn.category].initialInterest.sum += checkIn.initialInterest;
      acc[checkIn.category].initialInterest.count += 1;
    });

    user.checkOutData.forEach(checkOut => {
      acc[checkOut.category].finalRating.sum += checkOut.finalRating;
      acc[checkOut.category].finalRating.count += 1;
    });

    return acc;
  }, {} as Record<ActivityType, {
    initialInterest: { sum: number; count: number; };
    finalRating: { sum: number; count: number; };
  }>);

  const activities = Object.keys(activityComparison);
  const averageInitialInterest = activities.map(activity => 
    activityComparison[activity as ActivityType].initialInterest.sum / 
    activityComparison[activity as ActivityType].initialInterest.count
  );
  const averageFinalRating = activities.map(activity =>
    activityComparison[activity as ActivityType].finalRating.sum /
    activityComparison[activity as ActivityType].finalRating.count
  );

  const data = {
    labels: activities,
    datasets: [
      {
        label: 'Initial Interest',
        data: averageInitialInterest,
        backgroundColor: activityColors['Initial Interest'],
        borderColor: 'white',
        borderWidth: 1,
      },
      {
        label: 'Final Rating',
        data: averageFinalRating,
        backgroundColor: activityColors['Final Rating'],
        borderColor: 'white',
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      title: {
        display: true,
        text: 'Initial Interest vs Final Rating by Activity',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: 'Rating (1-5)',
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <ArrowLeftRight className="text-indigo-500" />
        <h3 className="text-lg font-semibold">Activity Interest Comparison</h3>
      </div>
      <div className="h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}