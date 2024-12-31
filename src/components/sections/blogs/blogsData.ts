export interface BlogItem {
  title: string;
  date: string;
  excerpt: string;
  author: string;
}

export const blogItems: BlogItem[] = [
  {
    title: 'The Future of Satellite Communication',
    date: '2024-03-15',
    excerpt: 'Exploring the latest advancements in satellite technology and their impact on global connectivity.',
    author: 'Dr. Sarah Johnson'
  },
  {
    title: 'Innovations in Space Technology',
    date: '2024-03-10',
    excerpt: 'Discover how new innovations are shaping the future of space exploration and communication.',
    author: 'James Wilson'
  },
  {
    title: 'Sustainable Space Operations',
    date: '2024-03-05',
    excerpt: 'Understanding the importance of sustainability in satellite operations and space missions.',
    author: 'Emily Chen'
  }
];