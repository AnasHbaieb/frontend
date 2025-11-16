export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  studentPhoneNumber: number | undefined;
  parentPhoneNumber: number | undefined;
  academicYear: string;
  section?: string; // New optional field
  institutionName: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  date: string;
  time: string;
  type: string;
  notes: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  date: string;
  description: string;
  attachments?: string[];
}
