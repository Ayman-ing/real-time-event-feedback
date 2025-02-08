import React, { useState } from 'react';
import { ParticipantProfile, ActivityType } from '../types';

interface Props {
  onSubmit: (data: {
    participantId: string;
    profile: ParticipantProfile;
    activity: ActivityType;
    interestLevel: number;
  }) => void;
}

export function CheckInForm({ onSubmit }: Props) {
  const [participantId, setParticipantId] = useState('');
  const [profile, setProfile] = useState<ParticipantProfile | ''>('');
  const [activity, setActivity] = useState<ActivityType | ''>('');
  const [interestLevel, setInterestLevel] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (participantId && profile && activity && interestLevel) {
      onSubmit({
        participantId,
        profile: profile as ParticipantProfile,
        activity: activity as ActivityType,
        interestLevel
      });
      // Reset form
      setParticipantId('');
      setProfile('');
      setActivity('');
      setInterestLevel(0);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Participant ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quel est votre ID de participation ? <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={participantId}
            onChange={(e) => setParticipantId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Profile Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Profil du participant
          </label>
          <div className="space-y-2">
            {[
              { value: 'End User', label: 'Étudiant(e)' },
              { value: 'Manager', label: 'Enseignant(e) / Professeur' },
              { value: 'Developer', label: 'Chercheur(se) / Scientifique' },
              { value: 'Designer', label: 'Ingénieur(e)' },
              { value: 'End User', label: 'Grand public / Curieux(se)' }
            ].map((option) => (
              <div key={option.label} className="flex items-center">
                <input
                  type="radio"
                  name="profile"
                  value={option.value}
                  checked={profile === option.value}
                  onChange={(e) => setProfile(e.target.value as ParticipantProfile)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            À quelle activité venez-vous de participer ?
          </label>
          <div className="space-y-2">
            {[
              { value: 'Bug', label: 'activité 1' },
              { value: 'Feature Request', label: 'activité 2' },
              { value: 'General', label: 'activité 3' },
              { value: 'Support', label: 'activité 4' }
            ].map((option) => (
              <div key={option.label} className="flex items-center">
                <input
                  type="radio"
                  name="activity"
                  value={option.value}
                  checked={activity === option.value}
                  onChange={(e) => setActivity(e.target.value as ActivityType)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Interest Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            À quel point êtes-vous intéressé(e) par ce sujet ?
          </label>
          <div className="flex justify-between items-center max-w-md">
            {[1, 2, 3, 4, 5].map((value) => (
              <div key={value} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => setInterestLevel(value)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
                    ${interestLevel === value 
                      ? 'border-blue-500 bg-blue-50 text-blue-500' 
                      : 'border-gray-300 hover:border-gray-400'
                    }`}
                >
                  {value}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Envoyer
          </button>
          <button
            type="reset"
            onClick={() => {
              setParticipantId('');
              setProfile('');
              setActivity('');
              setInterestLevel(0);
            }}
            className="text-purple-600 px-6 py-2 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Effacer le formulaire
          </button>
        </div>
      </form>
    </div>
  );
}