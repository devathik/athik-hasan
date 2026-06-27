export function getAllCategories(blogs) {
  const categories = blogs.reduce((acc, blog) => {
    const category = blog.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(categories).map(([name, count]) => ({
    id: name.toLowerCase(),
    name,
    count
  }));
}

export function getAllTags(blogs) {
  const tags = blogs.reduce((acc, blog) => {
    blog.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  return Object.entries(tags)
    .map(([name, count]) => ({
      id: name.toLowerCase(),
      name,
      count
    }))
    .sort((a, b) => b.count - a.count);
}

export function filterBlogsByCategory(blogs, category) {
  if (!category || category === 'all') return blogs;
  return blogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
}

export function filterBlogsByTag(blogs, tag) {
  if (!tag) return blogs;
  return blogs.filter(blog => blog.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
} 