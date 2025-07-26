/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/classnames/cn";
import Container from "@/shared/components/Container";
import blogsData from "@/shared/data/blogs.json";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { ImLinkedin2 } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import BreadCrumbs from "@/shared/components/BreadCrumbs";
import Link from "next/link";

export default async function BlogDetailsPage({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;

  const { blogs } = blogsData;
  const blog = blogs.find((b) => b.id.toString() === blogId);

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Blog Not Found</h1>
        <p className="text-gray-500 mt-2">The blog you are looking for does not exist.</p>
        <Link
          href="/blogs"
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }



  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <BreadCrumbs
        title="Our Blogs"
        items={[
          { title: "Home", to: "/" },
          { title: "Blogs", to: "/blogs" },
          { title: "Blogs Details", to: `/blogs/${blogId}` }
        ]}
      />

      <section
        className="relative w-full bg-[#F3F3F3] overflow-hidden flex items-center justify-center py-8 px-2 md:px-0 lg:mt-16"
        role="region"
        aria-labelledby="about-us-heading">
        <Container className="h-fit">
          <div className="h-full">
            <div className="px-4 sm:px-8 w-full h-full relative">
              <div className="relative flex flex-col lg:block">
                <div
                  className="relative mx-auto lg:mx-0 lg:bg-white rounded-t-lg lg:rounded-b-lg lg:w-[60%] w-full max-w-[700px]">
                  <div className="relative">
                    <img
                      src={blog?.image}
                      alt="English learning environment with modern workspace"
                      className="w-full object-contain lg:object-cover rounded-t-lg lg:rounded-b-lg"
                      style={{ height: "min(653px, 50vh)" }}
                    />
                  </div>
                </div>

                <div
                  className={cn(
                    "bg-white opacity-100 backdrop-blur-lg p-2 sm:p-6 md:p-4 rounded-b-lg lg:rounded-t-lg shadow-xl z-10",
                    "max-h-[500px] max-w-[700px] min-h-[400px] mx-auto -mt-[20vh] lg:mt-0",
                    "lg:absolute lg:top-[50px] lg:right-[-50px] lg:transform lg:-translate-x-10 lg:mx-0"
                  )}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      {/* Time */}
                      <div className="flex items-center gap-3 mb-3">
                        <p className="text-gray-400 text-sm">
                          Published on {new Date(blog.publishedDate).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })} - {blog.publishedTime || '10:48 PM'}
                        </p>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-black mb-2 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                        {blog.content}
                      </p>

                    </div>

                    <div className="flex justify-start items-center gap-6">
                      <span className="text-red-500">Share on: </span>
                      {/* Social Icons */}
                      <div className="flex gap-7">
                        {/* WhatsApp */}
                        <a
                          href={`https://wa.me/201000041191?text=${encodeURIComponent(
                            "Hello! I'm interested in learning English with Englisher Academy."
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="WhatsApp"
                          className="hover:text-red-600 text-black"
                        >
                          <BsWhatsapp />
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/company/englisher/" target="_blank" aria-label="LinkedIn" className="hover:text-red-600 text-black">
                          <ImLinkedin2 />
                        </a>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/share/19iYbJytcT/" target="_blank" aria-label="Facebook" className="hover:text-red-600 text-black">
                          <CgFacebook />
                        </a>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/englisherofficial/" target="_blank" aria-label="Instagram" className="hover:text-red-600 text-black">
                          <AiOutlineInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}