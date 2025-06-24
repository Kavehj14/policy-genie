export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  membershipType: 'Standard' | 'Premium' | 'VIP';
  joinDate: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  dateOfBirth: string;
  profileImage?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalInfo?: {
    allergies: string[];
    medications: string[];
    conditions: string[];
  };
}