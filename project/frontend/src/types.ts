export type Sentiment = 'Positive' | 'Neutral' | 'Negative';
export type ActivityType = 'Bug' | 'Feature Request' | 'General' | 'Support';
export type ParticipantProfile = 'Developer' | 'Designer' | 'Manager' | 'End User';

export interface ActivityFeedback {
  initialInterest: number; // 1-5 scale
  finalRating: number; // 1-5 scale
  category: ActivityType;
}

export interface Feedback {
  id: string;
  rating: number;
  comment: string;
  category: ActivityType;
  timestamp: string;
  email: string;
  sentiment: Sentiment;
  participantProfile: ParticipantProfile;
  checkInData: ActivityFeedback[];
  checkOutData: ActivityFeedback[];
}