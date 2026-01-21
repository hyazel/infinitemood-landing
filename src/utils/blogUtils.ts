import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  content: string;
}

// Import all markdown files from the blog directory
const blogPosts = import.meta.glob('/src/content/blog/*.md', { as: 'raw', eager: true });

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  for (const path in blogPosts) {
    const fileContent = blogPosts[path];
    const { data, content } = matter(fileContent);
    
    posts.push({
      slug: data.slug || path.split('/').pop()?.replace('.md', '') || '',
      title: data.title || 'Sans titre',
      date: data.date || '',
      excerpt: data.excerpt || '',
      author: data.author || '',
      content: content,
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}
