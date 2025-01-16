export interface Article {
  id: number;
  title: string;
  content: string;
  category: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Understanding Vue 3',
    content: 'Vue 3 is the latest version of the Vue.js framework...',
    category: 'Vue',
  },
  {
    id: 2,
    title: 'Getting Started with Tailwind CSS',
    content: 'Tailwind CSS is a utility-first CSS framework...',
    category: 'CSS',
  },
  {
    id: 3,
    title: 'TypeScript Basics',
    content: 'TypeScript is a strongly typed programming language...',
    category: 'TypeScript',
  },
];
