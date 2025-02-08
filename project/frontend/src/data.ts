import { Feedback } from './types';

export const mockFeedback: Feedback[] = [
  {
    id: '1',
    rating: 5,
    comment: "Love the new features! The interface is very intuitive.",
    category: 'General',
    timestamp: '2024-03-15T10:30:00Z',
    email: 'user1@example.com',
    sentiment: 'Positive',
    participantProfile: 'End User',
    checkInData: [
      { category: 'Bug', initialInterest: 3, finalRating: 4 },
      { category: 'Feature Request', initialInterest: 5, finalRating: 5 },
      { category: 'General', initialInterest: 4, finalRating: 5 },
      { category: 'Support', initialInterest: 3, finalRating: 4 }
    ],
    checkOutData: [
      { category: 'Bug', initialInterest: 3, finalRating: 4 },
      { category: 'Feature Request', initialInterest: 5, finalRating: 4 },
      { category: 'General', initialInterest: 4, finalRating: 5 },
      { category: 'Support', initialInterest: 3, finalRating: 5 }
    ]
  },
  {
    id: '2',
    rating: 4,
    comment: "Would love to see dark mode implemented.",
    category: 'Feature Request',
    timestamp: '2024-03-14T15:20:00Z',
    email: 'user2@example.com',
    sentiment: 'Neutral',
    participantProfile: 'Designer',
    checkInData: [
      { category: 'Bug', initialInterest: 2, finalRating: 3 },
      { category: 'Feature Request', initialInterest: 5, finalRating: 4 },
      { category: 'General', initialInterest: 3, finalRating: 3 },
      { category: 'Support', initialInterest: 2, finalRating: 4 }
    ],
    checkOutData: [
      { category: 'Bug', initialInterest: 2, finalRating: 2 },
      { category: 'Feature Request', initialInterest: 5, finalRating: 5 },
      { category: 'General', initialInterest: 3, finalRating: 4 },
      { category: 'Support', initialInterest: 2, finalRating: 3 }
    ]
  },
  {
    id: '3',
    rating: 2,
    comment: "Found several bugs in the latest release. Need immediate fixes.",
    category: 'Bug',
    timestamp: '2024-03-13T09:15:00Z',
    email: 'user3@example.com',
    sentiment: 'Negative',
    participantProfile: 'Developer',
    checkInData: [
      { category: 'Bug', initialInterest: 5, finalRating: 2 },
      { category: 'Feature Request', initialInterest: 3, finalRating: 3 },
      { category: 'General', initialInterest: 2, finalRating: 2 },
      { category: 'Support', initialInterest: 4, finalRating: 3 }
    ],
    checkOutData: [
      { category: 'Bug', initialInterest: 5, finalRating: 1 },
      { category: 'Feature Request', initialInterest: 3, finalRating: 2 },
      { category: 'General', initialInterest: 2, finalRating: 3 },
      { category: 'Support', initialInterest: 4, finalRating: 2 }
    ]
  },
  {
    id: '4',
    rating: 5,
    comment: "The support team was incredibly helpful in resolving my issues.",
    category: 'Support',
    timestamp: '2024-03-12T14:45:00Z',
    email: 'user4@example.com',
    sentiment: 'Positive',
    participantProfile: 'End User',
    checkInData: [
      { category: 'Bug', initialInterest: 2, finalRating: 4 },
      { category: 'Feature Request', initialInterest: 3, finalRating: 4 },
      { category: 'General', initialInterest: 4, finalRating: 5 },
      { category: 'Support', initialInterest: 5, finalRating: 5 }
    ],
    checkOutData: [
      { category: 'Bug', initialInterest: 2, finalRating: 3 },
      { category: 'Feature Request', initialInterest: 3, finalRating: 4 },
      { category: 'General', initialInterest: 4, finalRating: 4 },
      { category: 'Support', initialInterest: 5, finalRating: 5 }
    ]
  },
  {
    id: '5',
    rating: 3,
    comment: "Some features are great, others need improvement.",
    category: 'General',
    timestamp: '2024-03-11T11:30:00Z',
    email: 'user5@example.com',
    sentiment: 'Neutral',
    participantProfile: 'Manager',
    checkInData: [
      { category: 'Bug', initialInterest: 4, finalRating: 3 },
      { category: 'Feature Request', initialInterest: 4, finalRating: 3 },
      { category: 'General', initialInterest: 3, finalRating: 3 },
      { category: 'Support', initialInterest: 3, finalRating: 4 }
    ],
    checkOutData: [
      { category: 'Bug', initialInterest: 4, finalRating: 2 },
      { category: 'Feature Request', initialInterest: 4, finalRating: 3 },
      { category: 'General', initialInterest: 3, finalRating: 3 },
      { category: 'Support', initialInterest: 3, finalRating: 4 }
    ]
  },
  {
    id: '6',
    rating: 4,
    comment: "Great improvements in the UI/UX design.",
    category: 'Feature Request',
    timestamp: '2024-03-10T16:20:00Z',
    email: 'user6@example.com',
    sentiment: 'Positive',
    participantProfile: 'Designer',
    checkInData: [
      { category: 'Bug', initialInterest: 3, finalRating: 4 },
      { category: 'Feature Request', initialInterest: 5, finalRating: 5 },
      { category: 'General', initialInterest: 4, finalRating: 4 },
      { category: 'Support', initialInterest: 2, finalRating: 3 }
    ],
    checkOutData: [
      { category: 'Bug', initialInterest: 3, finalRating: 3 },
      { category: 'Feature Request', initialInterest: 5, finalRating: 4 },
      { category: 'General', initialInterest: 4, finalRating: 4 },
      { category: 'Support', initialInterest: 2, finalRating: 3 }
    ]
  },
  {
    id: '7',
    rating: 1,
    comment: "Critical security issues need to be addressed immediately.",
    category: 'Bug',
    timestamp: '2024-03-09T08:45:00Z',
    email: 'user7@example.com',
    sentiment: 'Negative',
    participantProfile: 'Developer',
    checkInData: [
      { category: 'Bug', initialInterest: 5, finalRating: 1 },
      { category: 'Feature Request', initialInterest: 2, finalRating: 2 },
      { category: 'General', initialInterest: 3, finalRating: 2 },
      { category: 'Support', initialInterest: 4, finalRating: 2 }
    ],
    checkOutData: [
      { category: 'Bug', initialInterest: 5, finalRating: 1 },
      { category: 'Feature Request', initialInterest: 2, finalRating: 2 },
      { category: 'General', initialInterest: 3, finalRating: 1 },
      { category: 'Support', initialInterest: 4, finalRating: 2 }
    ]
  },
  {
    id: '8',
    rating: 5,
    comment: "Documentation is comprehensive and well-organized.",
    category: 'Support',
    timestamp: '2024-03-08T13:15:00Z',
    email: 'user8@example.com',
    sentiment: 'Positive',
    participantProfile: 'Developer',
    checkInData: [
      { category: 'Bug', initialInterest: 4, finalRating: 4 },
      { category: 'Feature Request', initialInterest: 3, finalRating: 4 },
      { category: 'General', initialInterest: 4, finalRating: 5 },
      { category: 'Support', initialInterest: 5, finalRating: 5 }
    ],
    checkOutData: [
      { category: 'Bug', initialInterest: 4, finalRating: 5 },
      { category: 'Feature Request', initialInterest: 3, finalRating: 4 },
      { category: 'General', initialInterest: 4, finalRating: 5 },
      { category: 'Support', initialInterest: 5, finalRating: 5 }
    ]
  }
];