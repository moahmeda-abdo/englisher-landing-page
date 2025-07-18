/* eslint-disable @next/next/no-img-element */
import BreadCrumbs from "@/shared/components/BreadCrumbs";
import Container from "@/shared/components/Container";
import Testimonials from "@/shared/components/Testimonials";

export default function AboutPage() {
  return (
    <div className="bg-[#F3F3F3]">
      <BreadCrumbs
        title=" Foundations of Phonetics and Pronunciation"
        items={[
          { title: "Home", to: "/" },
          {
            title: " Foundations of Phonetics and Pronunciation",
            to: "/phonetics",
          },
        ]}
      />

      {/* Hero Section */}
      <Container>
        <section className=" mb-[80px]  px-[20] md:px-[50px] mt-8 rounded-md bg-white py-[20px] md:py-[50px]">
          <div className=" relative w-full h-fit rounded-2xl overflow-hidden ">
            <img
              src="/courses/general-english/hero.png"
              alt="General English Course Hero"
              className="h-[350px] md:h-[500px] max-h-[500px] object-cover rounded-md block"
            />
            {/* Logo overlay */}
            <img
              src="/logo.png"
              alt="Englisher Logo"
              className="absolute top-6 left-8 h-10 md:h-12 z-10"
            />
          </div>
          <div className="bg-white   p-8 pb-0 relative z-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              <span className="text-red-600 font-extrabold">About</span> Course
            </h2>
            <div className="flex flex-col gap-4"></div>
            <p className="text-gray-700 text-base md:text-lg leading-[220%]">
              This book provides insights into the phonetics of the American
              accent, utilizing modern techniques and visual methods to simplify
              understanding and application of these sounds. It is tailored for
              beginners in English learning, particularly focusing on fluent
              speaking, aiming to build confidence, improve pronunciation, and
              make phonetics easy to grasp through a simplified and enjoyable
              approach. This book provides insights into the phonetics of the
              American accent, utilizing modern techniques and visual methods to
              simplify understanding and application of these sounds. It is
              tailored for beginners in English learning, particularly focusing
              on fluent speaking, aiming to build confidence, improve
              pronunciation, and make phonetics easy to grasp through a
              simplified and enjoyable approach.
            </p>
          </div>
        </section>
        
        {/* Course Objectives Section */}
        <section className="mb-[80px]  mt-8 rounded-md  py-[20px] md:py-[50px]">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              <span className="text-red-600 font-extrabold">Course</span> Objectives
            </h2>
          </div>
          
          <div className="flex gap-6">
            {/* Objective 1 */}
            <div className="bg-gray-50 rounded-lg p-6 relative flex-1">
              <div className="text-[20px] md:text-[32px] w-[70px] h-[70px] bg-[#E506161A] text-[#E50616]  rounded-full flex items-center justify-center font-bold ">
                01
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-black my-[25px]">
                  Mastering Fundamentals
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Learn to change your regular accent for everyday use and speak like an American native.
                </p>
              </div>
            </div>

            {/* Objective 2 */}
            <div className="bg-gray-50 rounded-lg p-6 relative flex-1">
              <div className="text-[20px] md:text-[32px] w-[70px] h-[70px] bg-[#E506161A] text-[#E50616]  rounded-full flex items-center justify-center font-bold ">
                02
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-black my-[25px]">
                  Pronunciation Proficiency
                </h3>
                                 <p className="text-gray-700 text-sm leading-relaxed">
                   Master key American English sounds, including stop-fricative, affricate, and nasal sounds. Understand voiced and unvoiced sounds, and the &quot;T&quot; sounds.
                 </p>
              </div>
            </div>

            {/* Objective 3 */}
            <div className="bg-gray-50 rounded-lg p-6 relative flex-1">
              <div className="text-[20px] md:text-[32px] w-[70px] h-[70px] bg-[#E506161A] text-[#E50616]  rounded-full flex items-center justify-center font-bold ">
                03
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-black my-[25px]">
                  Vowel and Diphthong Sounds
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Get familiar with the 11 vowel sounds and 5 diphthongs in General American English for accurate and natural speech.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Details Section */}
        <section className="mb-[80px] px-[20px] md:px-[50px] mt-8 rounded-md bg-white py-[20px] md:py-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[30px]">
            {/* Course Duration */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#E50616" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="#E50616" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-black ">Course Duration</h3>
              </div>
              <p className="text-[#555555] text-sm md:text-[20px] leading-[220%]">
                16 hours across 8 sessions. You&apos;ll learn advanced skills like linking (connecting words smoothly) and intonation (sentence melody) in a fun and interactive way. You&apos;ll also participate in activities and conversations to help you apply what you learn practically.
              </p>
            </div>

            {/* Number of Participants */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#E50616" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="#E50616" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#E50616" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#E50616" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-black ">Number of Participants</h3>
              </div>
              <p className="text-[#555555] text-sm md:text-[20px] leading-[220%]">
                The course is limited to a maximum of 7 participants so you&apos;re guaranteed enough speaking time, personalized feedback, and proper follow-up.
              </p>
            </div>

            {/* Practical Exercises */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11H15" stroke="#E50616" strokeWidth="2"/>
                    <path d="M9 15H15" stroke="#E50616" strokeWidth="2"/>
                    <path d="M16 3H18C19.1046 3 20 3.89543 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H8" stroke="#E50616" strokeWidth="2"/>
                    <path d="M12 3C12.5523 3 13 3.44772 13 4V5C13 5.55228 12.5523 6 12 6H12C11.4477 6 11 5.55228 11 5V4C11 3.44772 11.4477 3 12 3Z" stroke="#E50616" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-black ">Practical Exercises</h3>
              </div>
              <p className="text-[#555555] text-sm md:text-[20px] leading-[220%]">
                Each session includes a speaking assignment focusing on linking and intonation. You&apos;ll record your voice to identify and correct mistakes. You&apos;ll also receive follow-up and feedback via WhatsApp.
              </p>
            </div>

            {/* Instructor */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#E50616" strokeWidth="2"/>
                    <circle cx="12" cy="7" r="4" stroke="#E50616" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-black ">Instructor</h3>
              </div>
              <p className="text-[#555555] text-sm md:text-[20px] leading-[220%]">
                You&apos;ll be coached by a certified Accent Coach with a CELTA qualification from Cambridge University, and extensive experience in American pronunciation training.
              </p>
            </div>

            {/* Ultimate Goal - Full Width */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#E50616" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-black ">Ultimate Goal</h3>
              </div>
              <p className="text-[#555555] text-sm md:text-[20px] leading-[220%]">
                To help you speak naturally like native speakers, using correct pronunciation confidently and fluently. This will boost your clarity and confidence every time you speak English.
              </p>
            </div>
          </div>
        </section>
        
        {/* Course Content Section */}
        <section className="mb-[80px] mt-8 rounded-md  py-[20px] md:py-[50px]">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              <span className="text-red-600 font-extrabold">Course</span> Content
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white mt-[20px]">
            {/* Session 1 */}
            <div className=" p-4 flex items-center gap-3">
              <div className="text-lg font-bold text-black">
                Session <span className="text-red-600"> 1:</span> T sounds
              </div>
            </div>

            {/* Session 2 */}
            <div className=" p-4 flex items-center gap-3">
              <div className="text-lg font-bold text-black">
                Session <span className="text-red-600"> 2:</span> Diphthongs
              </div>
            </div>

            {/* Session 3 */}
            <div className=" p-4 flex items-center gap-3">
              <div className="text-lg font-bold text-black">
                Session <span className="text-red-600"> 3:</span> Word stress
              </div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white mt-[20px]">

            {/* Session 4 */}
            <div className=" p-4 flex items-center gap-3">
              <div className="text-lg font-bold text-black">
                Session <span className="text-red-600"> 4:</span> Sentence stress types
              </div>
            </div>

            {/* Session 5 */}
            <div className=" p-4 flex items-center gap-3">
              <div className="text-lg font-bold text-black">
                Session <span className="text-red-600"> 5:</span> Reduction (Schwa and contracted forms)
              </div>
            </div>

            {/* Session 6 */}
            <div className=" p-4 flex items-center gap-3">
              <div className="text-lg font-bold text-black">
                Session <span className="text-red-600"> 6:</span> Assimilation
              </div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white mt-[20px]">
            {/* Session 7 */}
            <div className=" p-4 flex items-center gap-3">
              <div className="text-lg font-bold text-black">
                Session <span className="text-red-600"> 7:</span> Intonation
              </div>
            </div>

            {/* Session 8 */}
            <div className=" p-4 flex items-center gap-3">
              <div className="text-lg font-bold text-black">
                Session <span className="text-red-600"> 8:</span> Connected speech rules
              </div>
            </div>
          </div>
        </section>
        
      </Container>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
