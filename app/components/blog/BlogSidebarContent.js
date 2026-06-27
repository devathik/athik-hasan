import { getBlogs } from "@/app/utils/getData";

export async function getBlogSidebarData() {
  const blogs = await getBlogs();

  // Group blogs by category
  const categories = blogs.reduce((acc, blog) => {
    const category = blog.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(blog);
    return acc;
  }, {});

  // Get recent blogs
  const recentBlogs = blogs.slice(0, 5);

  return {
    categories: Object.entries(categories).map(([name, posts]) => ({
      name,
      count: posts.length
    })),
    recentBlogs
  };
} 