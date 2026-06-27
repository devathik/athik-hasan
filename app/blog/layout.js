import BlogSidebar from "@/app/components/blog/BlogSidebar";

export default function BlogLayout({ children }) {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-8">
            <BlogSidebar />
          </div>
        </div>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
} 