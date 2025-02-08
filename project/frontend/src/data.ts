import { Feedback } from './types';

export type ActivityType = 'Activité 1' | 'Activité 2' | 'Activité 3' | 'Activité 4';
export type ParticipantProfile = 'Étudiant' | 'Enseignant(e) / Professeur' | 'Chercheur(se) / Scientifique' | 'Ingénieur(e)';

export const mockFeedback: Feedback[] = [
  {
    id: '1',
    rating: 5,
    comment: "L’atelier était bien structuré et les explications étaient claires.",
    category: 'Activité 1',
    timestamp: '2024-03-20T09:00:00Z',
    email: 'user1@example.com',
    sentiment: 'Positive',
    participantProfile: 'Étudiant',
    checkInData: [
      { category: 'Activité 1', initialInterest: 4, finalRating: 5 },
      { category: 'Activité 2', initialInterest: 3, finalRating: 4 },
      { category: 'Activité 3', initialInterest: 2, finalRating: 3 },
      { category: 'Activité 4', initialInterest: 5, finalRating: 5 }
    ],
    checkOutData: [
      { category: 'Activité 1', initialInterest: 4, finalRating: 5 },
      { category: 'Activité 2', initialInterest: 3, finalRating: 4 },
      { category: 'Activité 3', initialInterest: 2, finalRating: 3 },
      { category: 'Activité 4', initialInterest: 5, finalRating: 5 }
    ]
  },
  {
    id: '2',
    rating: 3,
    comment: "Bonne conférence, mais j’aurais aimé plus d’exemples pratiques.",
    category: 'Activité 2',
    timestamp: '2024-03-19T14:30:00Z',
    email: 'user2@example.com',
    sentiment: 'Neutral',
    participantProfile: 'Enseignant(e) / Professeur',
    checkInData: [
      { category: 'Activité 1', initialInterest: 3, finalRating: 3 },
      { category: 'Activité 2', initialInterest: 5, finalRating: 3 },
      { category: 'Activité 3', initialInterest: 4, finalRating: 4 },
      { category: 'Activité 4', initialInterest: 2, finalRating: 3 }
    ],
    checkOutData: [
      { category: 'Activité 1', initialInterest: 3, finalRating: 3 },
      { category: 'Activité 2', initialInterest: 5, finalRating: 3 },
      { category: 'Activité 3', initialInterest: 4, finalRating: 4 },
      { category: 'Activité 4', initialInterest: 2, finalRating: 3 }
    ]
  },
  {
    id: '3',
    rating: 4,
    comment: "J’ai apprécié les débats et l’interaction avec les experts.",
    category: 'Activité 3',
    timestamp: '2024-03-18T16:00:00Z',
    email: 'user3@example.com',
    sentiment: 'Positive',
    participantProfile: 'Chercheur(se) / Scientifique',
    checkInData: [
      { category: 'Activité 1', initialInterest: 4, finalRating: 4 },
      { category: 'Activité 2', initialInterest: 3, finalRating: 4 },
      { category: 'Activité 3', initialInterest: 5, finalRating: 5 },
      { category: 'Activité 4', initialInterest: 2, finalRating: 3 }
    ],
    checkOutData: [
      { category: 'Activité 1', initialInterest: 4, finalRating: 4 },
      { category: 'Activité 2', initialInterest: 3, finalRating: 4 },
      { category: 'Activité 3', initialInterest: 5, finalRating: 5 },
      { category: 'Activité 4', initialInterest: 2, finalRating: 3 }
    ]
  },
  {
    id: '4',
    rating: 2,
    comment: "Trop théorique, j’aurais aimé plus d’interactivité.",
    category: 'Activité 4',
    timestamp: '2024-03-17T11:15:00Z',
    email: 'user4@example.com',
    sentiment: 'Negative',
    participantProfile: 'Ingénieur(e)',
    checkInData: [
      { category: 'Activité 1', initialInterest: 5, finalRating: 2 },
      { category: 'Activité 2', initialInterest: 4, finalRating: 3 },
      { category: 'Activité 3', initialInterest: 2, finalRating: 2 },
      { category: 'Activité 4', initialInterest: 3, finalRating: 2 }
    ],
    checkOutData: [
      { category: 'Activité 1', initialInterest: 5, finalRating: 2 },
      { category: 'Activité 2', initialInterest: 4, finalRating: 3 },
      { category: 'Activité 3', initialInterest: 2, finalRating: 2 },
      { category: 'Activité 4', initialInterest: 3, finalRating: 2 }
    ]
  },
  {
    id: '5',
    rating: 5,
    comment: "J’ai adoré l’explication des concepts et la pratique guidée.",
    category: 'Activité 1',
    timestamp: '2024-03-16T13:45:00Z',
    email: 'user5@example.com',
    sentiment: 'Positive',
    participantProfile: 'Étudiant',
    checkInData: [
      { category: 'Activité 1', initialInterest: 4, finalRating: 5 },
      { category: 'Activité 2', initialInterest: 3, finalRating: 3 },
      { category: 'Activité 3', initialInterest: 5, finalRating: 5 },
      { category: 'Activité 4', initialInterest: 2, finalRating: 3 }
    ],
    checkOutData: [
      { category: 'Activité 1', initialInterest: 4, finalRating: 5 },
      { category: 'Activité 2', initialInterest: 3, finalRating: 3 },
      { category: 'Activité 3', initialInterest: 5, finalRating: 5 },
      { category: 'Activité 4', initialInterest: 2, finalRating: 3 }
    ]
  },
  {
    id: '6',
    rating: 1,
    comment: "Manque de matériel pratique pour compléter les démonstrations.",
    category: 'Activité 2',
    timestamp: '2024-03-15T10:30:00Z',
    email: 'user6@example.com',
    sentiment: 'Negative',
    participantProfile: 'Enseignant(e) / Professeur',
    checkInData: [
      { category: 'Activité 1', initialInterest: 3, finalRating: 1 },
      { category: 'Activité 2', initialInterest: 2, finalRating: 1 },
      { category: 'Activité 3', initialInterest: 4, finalRating: 3 },
      { category: 'Activité 4', initialInterest: 5, finalRating: 4 }
    ],
    checkOutData: [
      { category: 'Activité 1', initialInterest: 3, finalRating: 1 },
      { category: 'Activité 2', initialInterest: 2, finalRating: 1 },
      { category: 'Activité 3', initialInterest: 4, finalRating: 3 },
      { category: 'Activité 4', initialInterest: 5, finalRating: 4 }
    ]
  },
  {
    id: '7',
    rating: 4,
    comment: "Le format interactif était excellent, mais certains sujets manquaient de profondeur.",
    category: 'Activité 3',
    timestamp: '2024-03-14T15:00:00Z',
    email: 'user7@example.com',
    sentiment: 'Positive',
    participantProfile: 'Chercheur(se) / Scientifique',
    checkInData: [
      { category: 'Activité 1', initialInterest: 3, finalRating: 4 },
      { category: 'Activité 2', initialInterest: 5, finalRating: 4 },
      { category: 'Activité 3', initialInterest: 4, finalRating: 4 },
      { category: 'Activité 4', initialInterest: 2, finalRating: 3 }
    ],
    checkOutData: [
      { category: 'Activité 1', initialInterest: 3, finalRating: 4 },
      { category: 'Activité 2', initialInterest: 5, finalRating: 4 },
      { category: 'Activité 3', initialInterest: 4, finalRating: 4 },
      { category: 'Activité 4', initialInterest: 2, finalRating: 3 }
    ]
  },
  {
    id: '8',
    rating: 5,
    comment: "Un excellent équilibre entre théorie et pratique.",
    category: 'Activité 4',
    timestamp: '2024-03-13T10:15:00Z',
    email: 'user8@example.com',
    sentiment: 'Positive',
    participantProfile: 'Ingénieur(e)',
    checkInData: [
      { category: 'Activité 1', initialInterest: 4, finalRating: 5 },
      { category: 'Activité 2', initialInterest: 3, finalRating: 4 },
      { category: 'Activité 3', initialInterest: 2, finalRating: 4 },
      { category: 'Activité 4', initialInterest: 5, finalRating: 5 }
    ],
    checkOutData: [
      { category: 'Activité 1', initialInterest: 4, finalRating: 5 },
      { category: 'Activité 2', initialInterest: 3, finalRating: 4 },
      { category: 'Activité 3', initialInterest: 2, finalRating: 4 },
      { category: 'Activité 4', initialInterest: 5, finalRating: 5 }
    ]
  }
];
