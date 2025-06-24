import { Member } from '../types/member';

export const members: Member[] = [
  {
    id: 'ADM001',
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '+1-555-0123',
    membershipType: 'Premium',
    joinDate: '2023-01-15',
    status: 'Active',
    dateOfBirth: '1985-03-15',
    profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    emergencyContact: {
      name: 'Jane Smith',
      phone: '+1-555-0124',
      relationship: 'Spouse'
    },
    medicalInfo: {
      allergies: ['Peanuts'],
      medications: ['Aspirin'],
      conditions: []
    }
  },
  {
    id: 'ADM002',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1-555-0125',
    membershipType: 'VIP',
    joinDate: '2022-11-08',
    status: 'Active',
    dateOfBirth: '1990-07-22',
    profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    emergencyContact: {
      name: 'Michael Johnson',
      phone: '+1-555-0126',
      relationship: 'Brother'
    },
    medicalInfo: {
      allergies: [],
      medications: ['Vitamin D'],
      conditions: ['Asthma']
    }
  },
  {
    id: 'ADM003',
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+1-555-0127',
    membershipType: 'Standard',
    joinDate: '2023-03-22',
    status: 'Active',
    dateOfBirth: '1988-12-10',
    profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    emergencyContact: {
      name: 'Lisa Chen',
      phone: '+1-555-0128',
      relationship: 'Wife'
    },
    medicalInfo: {
      allergies: ['Shellfish'],
      medications: [],
      conditions: []
    }
  },
  {
    id: 'ADM004',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@email.com',
    phone: '+1-555-0129',
    membershipType: 'Premium',
    joinDate: '2023-02-14',
    status: 'Active',
    dateOfBirth: '1992-05-18',
    profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    emergencyContact: {
      name: 'Carlos Rodriguez',
      phone: '+1-555-0130',
      relationship: 'Father'
    },
    medicalInfo: {
      allergies: [],
      medications: ['Birth Control'],
      conditions: ['Diabetes Type 1']
    }
  },
  {
    id: 'ADM005',
    name: 'David Wilson',
    email: 'david.wilson@email.com',
    phone: '+1-555-0131',
    membershipType: 'Standard',
    joinDate: '2023-04-10',
    status: 'Inactive',
    dateOfBirth: '1975-09-03',
    profileImage: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    emergencyContact: {
      name: 'Mary Wilson',
      phone: '+1-555-0132',
      relationship: 'Mother'
    },
    medicalInfo: {
      allergies: ['Latex'],
      medications: ['Ibuprofen'],
      conditions: ['High Blood Pressure']
    }
  }
];