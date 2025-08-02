/* eslint-disable @next/next/no-img-element */
import BreadCrumbs from "@/shared/components/BreadCrumbs";
import Container from "@/shared/components/Container";
import blogsData from "@/shared/data/blogs.json";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export const metadata = {
  title: "Our Blogs | Englisher - English Learning Tips & Insights",
  description:
    "Discover helpful tips, insights, and resources for learning English. Read our expert blogs on pronunciation, grammar, business English, and more.",
};

export default function BlogsPage() {
  const { blogs } = blogsData;
  const t = useTranslations();
  const locale = useLocale();

  const highlightedBlog = blogs.find((blog) => blog.is_highlighted) || blogs[0];
  const otherBlogs = blogs.filter((blog) => !blog.is_highlighted);

  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <BreadCrumbs
        title={t("blogBreadcrumbsTitle")}
        items={[
          { title: t("blogBreadcrumbsHome"), to: "/" },
          { title: t("blogBreadcrumbsBlogs"), to: "/blogs" },
        ]}
      />

      <Container className="px-4 sm:px-6 lg:px-8">
        {/* Highlighted Blog Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative flex justify-center items-center">
                <img
                  src={highlightedBlog.image}
                  alt={highlightedBlog.title}
                  className="w-full h-full max-h-[500px] object-cover"
                />
              </div>

              <div className="lg:w-1/2 text-black p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                <div className="inline-block mb-3 sm:mb-4">
                  <span className="border border-red-600 text-red-600 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">
                    {t("highlightedBlogLabel")}
                  </span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                  {t("blogPublishedOn")}{" "}
                  {new Date(highlightedBlog.publishedDate).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  - {highlightedBlog.publishedTime || "10:48 PM"}
                </p>

                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                  {locale === "en" ? highlightedBlog.title : highlightedBlog.titleAr}
                </h1>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <p className="text-[#555555] text-sm sm:text-base leading-relaxed sm:leading-[180%]">
                    {locale === "en" ? highlightedBlog.excerpt : highlightedBlog.excerptAr}
                  </p>
                </div>

                <Link
                  href={`/blogs/${highlightedBlog.id}`}
                  className="bg-black border border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-black/80 transition-colors self-start text-sm sm:text-base font-medium inline-block text-center"
                >
                  {t("learnMore")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Blogs Section */}
        <section className="pb-8 sm:pb-12 lg:pb-16">
          <div className="flex flex-col justify-between items-start mb-6 gap-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
              <span className="text-red-600 font-extrabold">{t("our")}</span> {t("blogs")}
            </h2>
            <span className="text-gray-600 text-sm sm:text-base">
              {otherBlogs.length} {t("blogsLabel", { count: otherBlogs.length })}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {otherBlogs.map((blog) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id} className="group">
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative h-40 sm:h-48 lg:h-52 bg-gray-200 flex-shrink-0">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {blog.isRecent && (
                      <span className="absolute top-2 sm:top-3 left-2 sm:left-3 border-[1px] font-bold border-red-50 text-red-500 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs bg-white">
                        {t("newLabel")}
                      </span>
                    )}
                  </div>

                  <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {t("blogPublishedOn")}{" "}
                        {new Date(blog.publishedDate).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        - {blog.publishedTime || "10:48 PM"}
                      </p>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-black mb-2 group-hover:text-red-600 transition-colors duration-300 flex-1">
                      <span
                        className="line-clamp-2 leading-tight"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {locale === "en" ? blog.title : blog.titleAr}
                      </span>
                    </h3>

                    <p
                      className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-auto"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      { locale === "en" ? blog.excerpt : blog.excerptAr}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {otherBlogs.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="max-w-md mx-auto">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {t("noBlogs")}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {t("noBlogsDescription")}
                </p>
              </div>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}
