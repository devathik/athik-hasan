import { getBlogs } from "@/app/utils/getData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
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

    return NextResponse.json({
      categories: Object.entries(categories).map(([name, posts]) => ({
        name,
        count: posts.length
      })),
      recentBlogs: blogs.slice(0, 5)
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog data" },
      { status: 500 }
    );
  }
} 