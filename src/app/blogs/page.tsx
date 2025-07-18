/* eslint-disable @next/next/no-img-element */
import BreadCrumbs from "@/shared/components/BreadCrumbs";
import Container from "@/shared/components/Container";
import blogsData from "@/shared/data/blogs.json";

export const metadata = {
  title: "Our Blogs | Englisher - English Learning Tips & Insights",
  description: "Discover helpful tips, insights, and resources for learning English. Read our expert blogs on pronunciation, grammar, business English, and more.",
};

export default function BlogsPage() {
  const { blogs } = blogsData;
  const highlightedBlog = blogs.find(blog => blog.is_highlighted) || blogs[0]; // Find highlighted blog or fallback to first
  const otherBlogs = blogs.filter(blog => !blog.is_highlighted); // All blogs except highlighted

  return (
    <div className="bg-[#F3F3F3]">
      <BreadCrumbs
        title="Our Blogs"
        items={[
          { title: "Home", to: "/" },
          { title: "Blogs", to: "/blogs" },
        ]}
      />

      <Container>
        {/* Highlighted Blog Hero Section */}
        <section className="py-12">
          <div className=" overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Highlighted Blog Image */}
              <div className="lg:w-1/2 relative">
                <img
                  src={highlightedBlog.image}
                  alt={highlightedBlog.title}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </div>

              {/* Highlighted Blog Content */}
              <div className="lg:w-1/2 text-black p-8 flex flex-col justify-center">
                {/* Highlighted Blog Badge */}
                <div className="inline-block mb-4">
                  <span className="border border-red-600 text-red-600 px-3 py-1 rounded text-sm font-medium">
                    Highlighted Blog
                  </span>
                </div>

                {/* Posted Date */}
                <p className="text-gray-400 text-sm mb-6">
                  Posted on {new Date(highlightedBlog.publishedDate).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })} - {highlightedBlog.publishedTime || '10:48 PM'}
                </p>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {highlightedBlog.title}
                </h1>


                {/* Content */}
                <p className="text-[#555555] text-base leading-[180%] mb-6">
                  Waiting in line, sitting in the middle seat, the food, delays — there&apos;s a long list of annoying things about flying on planes.
                </p>
                <p className="text-[#555555] text-base leading-[180%] mb-6">
                  And here&apos;s another one that bothers a lot of us — getting blocked ears. It&apos;s sometimes called &quot;airplane ear,&quot; and may also be known as &quot;ear barotrauma.&quot; But why do we get it, and what can we do about it?
                </p>

                {/* Learn More Button */}
                <button className="bg-black border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-black/80 cursor-pointer  transition-colors self-start">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Blogs Section */}
        <section className="pb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-black">
              <span className="text-red-600 font-extrabold">Our</span> Blogs
            </h2>
            <span className="text-gray-600">{otherBlogs.length} blogs</span>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherBlogs.map((blog) => (
              <article 
                key={blog.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Blog Image */}
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Recent Blog Badge */}
                  {blog.isRecent && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Recent Blog
                    </span>
                  )}
                </div>

                {/* Blog Content */}
                <div className="p-5">
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-red-600 text-xs font-medium">
                      {blog.category}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-black mb-2 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {blog.title}
                  </h3>

                  {/* Arabic Title */}
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {blog.titleArabic}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                    {blog.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-gray-500 text-xs">
                      {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <button className="text-red-600 font-medium text-xs hover:text-red-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
} 