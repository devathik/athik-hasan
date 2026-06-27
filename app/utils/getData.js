import blogsData from '@/public/data/blogs.json';

export async function getBlogs() {
  return blogsData.blogs;
}

export async function getBlogBySlug(slug) {
  return blogsData.blogs.find(blog => blog.slug === slug);
}

export async function getBlogsByCategory(category) {
  if (category === 'all') return blogsData.blogs;
  return blogsData.blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
} 