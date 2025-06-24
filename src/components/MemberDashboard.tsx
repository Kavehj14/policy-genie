import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Shield, 
  LogOut, 
  AlertTriangle,
  Heart,
  Pill,
  UserCheck,
  Crown,
  Star
} from 'lucide-react';
import { Member } from '../types/member';

interface MemberDashboardProps {
  member: Member;
  onLogout: () => void;
}

const MemberDashboard: React.FC<MemberDashboardProps> = ({ member, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'medical' | 'emergency'>('profile');

  const getMembershipIcon = (type: string) => {
    switch (type) {
      case 'VIP': return <Crown className="w-5 h-5 text-yellow-500" />;
      case 'Premium': return <Star className="w-5 h-5 text-purple-500" />;
      default: return <UserCheck className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Inactive': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Suspended': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">ADM Portal</h1>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Member Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <img
                src={member.profileImage || 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
              />
              <div className="absolute -bottom-2 -right-2">
                {getMembershipIcon(member.membershipType)}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{member.name}</h2>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(member.status)}`}>
                    {member.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    {member.membershipType}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>ID: {member.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined: {new Date(member.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-t-2xl shadow-xl border border-gray-100 border-b-0">
          <div className="flex border-b border-gray-200">
            {[
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'medical', label: 'Medical Info', icon: Heart },
              { id: 'emergency', label: 'Emergency Contact', icon: AlertTriangle }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-200 ${
                  activeTab === id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-2xl shadow-xl p-8 border border-gray-100 border-t-0">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium text-gray-900">{member.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Member Since</p>
                      <p className="font-medium text-gray-900">{new Date(member.joinDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Membership Type</p>
                      <p className="font-medium text-gray-900">{member.membershipType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'medical' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Medical Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <h4 className="font-semibold text-red-900">Allergies</h4>
                  </div>
                  {member.medicalInfo?.allergies?.length ? (
                    <ul className="space-y-1">
                      {member.medicalInfo.allergies.map((allergy, index) => (
                        <li key={index} className="text-red-700 text-sm">• {allergy}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-red-600 text-sm">None reported</p>
                  )}
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Pill className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-900">Medications</h4>
                  </div>
                  {member.medicalInfo?.medications?.length ? (
                    <ul className="space-y-1">
                      {member.medicalInfo.medications.map((medication, index) => (
                        <li key={index} className="text-blue-700 text-sm">• {medication}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-blue-600 text-sm">None reported</p>
                  )}
                </div>

                <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-900">Conditions</h4>
                  </div>
                  {member.medicalInfo?.conditions?.length ? (
                    <ul className="space-y-1">
                      {member.medicalInfo.conditions.map((condition, index) => (
                        <li key={index} className="text-yellow-700 text-sm">• {condition}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-yellow-600 text-sm">None reported</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'emergency' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact</h3>
              {member.emergencyContact ? (
                <div className="max-w-md">
                  <div className="p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                      <h4 className="font-semibold text-orange-900">Primary Contact</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-orange-700">Name</p>
                        <p className="font-medium text-orange-900">{member.emergencyContact.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-orange-700">Phone</p>
                        <p className="font-medium text-orange-900">{member.emergencyContact.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-orange-700">Relationship</p>
                        <p className="font-medium text-orange-900">{member.emergencyContact.relationship}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-600">No emergency contact information on file.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;