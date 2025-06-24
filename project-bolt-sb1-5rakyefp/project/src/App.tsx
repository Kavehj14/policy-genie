import React, { useState } from 'react';
import VerificationForm from './components/VerificationForm';
import MemberDashboard from './components/MemberDashboard';
import { Member } from './types/member';
import { members } from './data/members';

function App() {
  const [currentMember, setCurrentMember] = useState<Member | null>(null);

  const handleVerificationSuccess = (member: Member) => {
    setCurrentMember(member);
  };

  const handleLogout = () => {
    setCurrentMember(null);
  };

  return (
    <div className="App">
      {currentMember ? (
        <MemberDashboard member={currentMember} onLogout={handleLogout} />
      ) : (
        <VerificationForm 
          onVerificationSuccess={handleVerificationSuccess}
          members={members}
        />
      )}
    </div>
  );
}

export default App;