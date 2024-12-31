export interface CareerItem {
  title: string;
  department: string;
  location: string;
  type: string;
}

export const careerItems: CareerItem[] = [
  {
    title: 'Satellite Systems Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'Hybrid',
    type: 'Full-time'
  },
  {
    title: 'Software Developer',
    department: 'Technology',
    location: 'Remote',
    type: 'Full-time'
  }
];