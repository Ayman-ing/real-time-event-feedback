export type Sentiment = 'Positive' | 'Neutral' | 'Negative';
export type ActivityType = 'Activité 1' | 'Activité 2' | 'Activité 3' | 'Activité 4';
export type ParticipantProfile = 'Étudiant' | 'Enseignant(e) / Professeur' | 'Chercheur(se) / Scientifique' | 'Ingénieur(e)';

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