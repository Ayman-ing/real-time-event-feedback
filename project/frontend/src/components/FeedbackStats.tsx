import React from 'react';
import { Star, Users, PieChart, BarChart3 } from 'lucide-react';
import { Feedback, Sentiment, ActivityType, ParticipantProfile } from '../types';
import { ActivityComparison } from './ActivityComparison';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

interface Props {
  feedback: Feedback[];
}

const sentimentColors = {
  'Positive': '#4ADE80',
  'Neutral': '#FCD34D',
  'Negative': '#F87171'
};

const activityColors: Record<ActivityType, string> = {
  'Activité 1': '#FF6B6B',  // Red
  'Activité 2': '#4ECDC4',  // Turquoise
  'Activité 3': '#45B7D1',  // Light Blue
  'Activité 4': '#96CEB4'   // Light Green
};

const profileColors: Record<ParticipantProfile, string> = {
  'Étudiant': '#8B5CF6',  // Purple
  'Enseignant(e) / Professeur': '#EC4899',  // Pink
  'Chercheur(se) / Scientifique': '#3B82F6',  // Blue
  'Ingénieur(e)': '#10B981'  // Green
};

export { activityColors, profileColors };

export function FeedbackStats({ feedback }: Props) {
  const averageRating = feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length;
  const totalResponses = feedback.length;
  
  // Sentiment Analysis
  const sentimentBreakdown = feedback.reduce((acc, curr) => {
    acc[curr.sentiment] = (acc[curr.sentiment] || 0) + 1;
    return acc;
  }, {} as Record<Sentiment, number>);

  // Activity Analysis
  const activityBreakdown = feedback.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {} as Record<ActivityType, number>);

  // Satisfaction by Profile
  const profileSatisfaction = feedback.reduce((acc, curr) => {
    if (!acc[curr.participantProfile]) {
      acc[curr.participantProfile] = { total: 0, sum: 0 };
    }
    acc[curr.participantProfile].total += 1;
    acc[curr.participantProfile].sum += curr.rating;
    return acc;
  }, {} as Record<ParticipantProfile, { total: number; sum: number; }>);

  const averageByProfile = Object.entries(profileSatisfaction).reduce((acc, [profile, data]) => {
    acc[profile as ParticipantProfile] = data.sum / data.total;
    return acc;
  }, {} as Record<ParticipantProfile, number>);

  const sentimentChartData = {
    labels: Object.keys(sentimentBreakdown),
    datasets: [{
      data: Object.values(sentimentBreakdown),
      backgroundColor: Object.keys(sentimentBreakdown).map(
        sentiment => sentimentColors[sentiment as Sentiment]
      ),
      borderColor: 'white',
      borderWidth: 2,
    }],
  };

  const activityChartData = {
    labels: Object.keys(activityBreakdown),
    datasets: [{
      label: 'Number of Responses',
      data: Object.values(activityBreakdown),
      backgroundColor: Object.keys(activityBreakdown).map(
        activity => activityColors[activity as ActivityType]
      ),
      borderColor: 'white',
      borderWidth: 1,
    }],
  };

  const profileChartData = {
    labels: Object.keys(averageByProfile),
    datasets: [{
      label: 'Average Satisfaction (1-5)',
      data: Object.values(averageByProfile),
      backgroundColor: Object.keys(averageByProfile).map(
        profile => profileColors[profile as ParticipantProfile]
      ),
      borderColor: 'white',
      borderWidth: 1,
    }],
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  const pieChartOptions = {
    ...chartOptions,
    scales: undefined,
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Star className="text-yellow-500" />
            <h3 className="text-lg font-semibold">Average Rating</h3>
          </div>
          <p className="text-3xl font-bold">{averageRating.toFixed(1)}/5.0</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Users className="text-blue-500" />
            <h3 className="text-lg font-semibold">Total Responses</h3>
          </div>
          <p className="text-3xl font-bold">{totalResponses}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <PieChart className="text-purple-500" />
            <h3 className="text-lg font-semibold">Sentiment Analysis</h3>
          </div>
          <div className="h-[200px]">
            <Pie data={sentimentChartData} options={pieChartOptions} />
          </div>
        </div>
      </div>

      <ActivityComparison feedback={feedback} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-indigo-500" />
            <h3 className="text-lg font-semibold">Activity Distribution</h3>
          </div>
          <div className="h-[300px]">
            <Bar data={activityChartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-pink-500" />
            <h3 className="text-lg font-semibold">Satisfaction by Profile</h3>
          </div>
          <div className="h-[300px]">
            <Bar data={profileChartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}