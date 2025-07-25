/* eslint-disable @next/next/no-img-element */
import BreadCrumbs from "@/shared/components/BreadCrumbs";
import Container from "@/shared/components/Container";

export default function AboutPage() {
  return (
    <div className="bg-[#F3F3F3]">
      <BreadCrumbs
        title="Business English"
        items={[
          { title: "Home", to: "/" },
          { title: "Business English", to: "/business-english" },
        ]}
      />

      {/* Hero Section */}
      <Container className="px-4 md:px-0">
        <section className=" mb-[80px]  px-[20] md:px-[50px] mt-8 rounded-xl md:rounded-md bg-white pt-0 pb-[20px] md:py-[50px]">
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
              Throughout this Business English course, you will master the
              language and communication skills essential for success in the
              corporate world. From writing professional emails to participating
              in high-level meetings, you’ll learn how to communicate with
              clarity, confidence, and impact. You’ll also sharpen your public
              speaking and presentation abilities, helping you deliver
              compelling messages that resonate with international business
              audiences. By the end of the course, you’ll be equipped with the
              vocabulary, tone, and communication strategies needed to thrive in
              any professional environment.
            </p>
          </div>
        </section>
        <section className=" mb-[80px]  px-[20] md:px-[50px] mt-8 rounded-md bg-white py-0 md:py-[50px]">
          <img
            src="/courses/business-english/about.png"
            alt="General English Course About"
            className="w-full h-full object-cover rounded-md"
          />
        </section>

        {/* Course Features Section */}
        <section className="mt-8 rounded-md  py-[20px] md:py-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Course Features */}
            <div className="space-y-8">
              {/* Certification */}
              <div className="text-center bg-white py-[25px] rounded-md">
                <div className="w-[80px] h-[80px] mx-auto mb-4  rounded-full flex items-center justify-center">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M51.4773 54.6643L55.0442 48.8764L61.481 46.6812L62.1941 39.9206L67.037 35.153L64.7344 28.7537L67.037 22.3542L62.1943 17.5866L61.4811 10.8262L55.0443 8.63088L51.4775 2.84289L44.7309 3.65747L38.9999 0L33.2689 3.65777L26.5225 2.84319L22.9557 8.63103L16.5189 10.8263L15.8057 17.5867L10.9629 22.3543L13.2654 28.7538L10.9629 35.1533L15.8056 39.9208L16.5187 46.6813L22.9555 48.8766L26.5224 54.6644L33.2689 53.85L38.9999 57.5076L44.7309 53.85L51.4773 54.6643ZM19.2822 28.7538C19.2822 17.8815 28.1276 9.03612 38.9999 9.03612C49.8722 9.03612 58.7176 17.8815 58.7176 28.7538C58.7176 39.6261 49.8722 48.4715 38.9999 48.4715C28.1276 48.4715 19.2822 39.6261 19.2822 28.7538Z"
                      fill="#E50616"
                    />
                    <path
                      d="M38.9998 13.6094C30.6491 13.6094 23.8553 20.4031 23.8553 28.7539C23.8553 37.1046 30.6491 43.8984 38.9998 43.8984C47.3505 43.8984 54.1443 37.1046 54.1443 28.7539C54.1443 20.4031 47.3505 13.6094 38.9998 13.6094ZM32.1899 58.5866L24.1644 59.5555L19.9242 52.6746L18.4827 52.1831L12.2651 71.617L23.4586 71.0014L32.2161 78L37.3696 61.8924L32.1899 58.5866ZM58.0754 52.6747L53.835 59.5555L45.8097 58.5866L40.63 61.8924L45.7835 78L54.541 71.0014L65.7344 71.617L59.5168 52.1831L58.0754 52.6747Z"
                      fill="#E50616"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Certification
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed max-w-sm mx-auto">
                  Upon successfully completing the course stage (3 months), you
                  will receive an official certificate.
                </p>
              </div>

              {/* Final Project */}
              <div className="text-center bg-white py-[25px] rounded-md">
                <div className="w-[80px] h-[80px] mx-auto mb-4  rounded-full flex items-center justify-center">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3055_1161)">
                      <path
                        d="M11.3867 49.9807C11.1714 50.41 11.0967 50.8962 11.1732 51.3703C11.2497 51.8444 11.4735 52.2825 11.8128 52.6223L12.3716 53.1811C13.9861 51.2678 15.8679 49.1916 18.15 46.91C18.3112 46.7487 18.4772 46.6709 18.639 46.522L15.0441 42.9264C12.9541 46.7065 11.7354 49.2892 11.3867 49.9807ZM31.0765 59.8366C28.7891 62.1242 26.7179 64.0094 24.8156 65.6252L25.5725 66.382C25.9146 66.7244 26.3567 66.9493 26.8349 67.0242C27.3131 67.0991 27.8027 67.0201 28.2332 66.7987C29.4169 66.1887 31.2782 65.3127 35.2297 63.112L31.4653 59.3475C31.3164 59.5099 31.2383 59.6754 31.0765 59.8366ZM29.8584 48.1312C28.2069 46.4798 23.5629 47.9603 21.3813 50.1414C14.083 57.4396 10.7869 62.6138 9.30688 65.6692C9.09989 66.0962 9.03107 66.5772 9.10997 67.0451C9.18887 67.5131 9.41158 67.9448 9.74715 68.2804C10.0832 68.6164 10.5156 68.8394 10.9843 68.9183C11.453 68.9972 11.9345 68.9281 12.3621 68.7206C15.3488 67.2705 20.4601 63.9898 27.8451 56.6052C30.2439 54.2053 31.4276 49.701 29.8602 48.1329L29.8584 48.1312ZM7.13293 30.4246L0.669748 36.8883C0.314051 37.2439 0.0856682 37.707 0.0200282 38.2057C-0.0456117 38.7044 0.0551608 39.2109 0.306713 39.6465C0.811885 40.5308 1.86991 40.9813 2.87675 40.7116C6.36999 39.775 9.44368 39.3792 11.5134 39.9102C14.4579 34.675 17.6221 29.8561 20.9731 25.4786C19.0348 24.236 12.6298 24.9281 7.13293 30.4249V30.4246ZM38.6795 77.7548C39.1085 77.9716 39.5951 78.0473 40.0696 77.9711C40.5442 77.8949 40.9826 77.6707 41.3222 77.3305L47.7862 70.8673C52.7904 65.8619 53.6711 59.4041 52.5356 57.3563C47.6535 61.0358 42.7076 64.1427 38.0933 66.7438C38.4117 68.5416 38.1999 70.2858 37.4471 75.3799C37.376 75.8551 37.457 76.3407 37.6783 76.7672C37.8996 77.1937 38.25 77.5393 38.6795 77.7548ZM45.3682 22.9231C42.6957 25.5962 42.6957 29.9446 45.3682 32.6176C48.0415 35.2908 52.3904 35.2908 55.0635 32.6176C57.7365 29.9444 57.7366 25.5961 55.0635 22.9231C52.3903 20.25 48.0415 20.2499 45.3683 22.9231H45.3682ZM77.8657 2.2293C77.7836 1.09922 76.8838 0.206026 75.7572 0.121475C70.1449 -0.301127 64.5546 0.389295 59.075 2.06508C59.4874 5.82949 61.4346 9.90362 64.7588 13.2278C68.1228 16.5912 72.3074 18.5379 76.1393 18.902C77.6152 13.73 78.3149 8.19097 77.8657 2.2293Z"
                        fill="#E50616"
                      />
                      <path
                        d="M61.5272 16.4598C57.7247 12.6571 55.4025 8.09643 54.6574 3.65576C40.9352 9.28364 27.7992 21.5734 17.4189 38.8382L22.5759 43.9953C26.0996 42.5648 30.377 42.1868 33.0901 44.8993C35.8067 47.6165 35.4217 51.8922 33.9917 55.411L39.3184 60.7377C52.602 52.7319 68.0672 40.1189 74.6437 23.3378C70.0947 22.6506 65.3918 20.3245 61.5272 16.4598ZM58.2946 35.8497C53.8404 40.304 46.5916 40.304 42.1367 35.8497C37.6819 31.3948 37.6819 24.1454 42.1367 19.6912C46.5916 15.2369 53.8404 15.2369 58.2946 19.6912C62.7496 24.146 62.7496 31.3948 58.2946 35.8497Z"
                        fill="#E50616"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3055_1161">
                        <rect width="78" height="78" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Final Project
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed max-w-sm mx-auto">
                  Upon successfully completing the course stage (3 months), you
                  will receive an official certificate.
                </p>
              </div>

              {/* Weekly Assignments */}
              <div className="text-center bg-white py-[25px] rounded-md">
                <div className="w-[80px] h-[80px] mx-auto mb-4  rounded-full flex items-center justify-center">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M60.3037 12.3581H58.5731V10.6518C58.5731 6.84933 55.5019 3.77808 51.7237 3.77808H11.4319C7.62936 3.77808 4.55811 6.84933 4.55811 10.6518V56.7937C4.55811 60.5962 7.62936 63.6675 11.4319 63.6675H13.1381V65.3737C13.1445 67.1948 13.8708 68.9394 15.1585 70.2271C16.4462 71.5148 18.1908 72.241 20.0119 72.2475H47.4313C44.5863 69.1264 43.0087 65.0558 43.0072 60.8326C43.0117 56.3133 44.809 51.9803 48.0047 48.7847C51.2004 45.589 55.5333 43.7917 60.0527 43.7872C62.5974 43.7872 65.0057 44.3625 67.1775 45.3691V19.2318C67.1711 17.4108 66.4448 15.6661 65.1571 14.3784C63.8694 13.0908 62.1248 12.3645 60.3037 12.3581ZM17.5256 27.0976V25.8862C17.5256 25.5596 17.667 25.2256 17.8839 24.9965L25.7302 17.1258C25.9717 16.8833 26.2996 16.7466 26.6419 16.7456H27.8704V24.6285C27.8704 25.9886 26.7613 27.0976 25.4012 27.0976H17.5256ZM39.7922 54.539H28.0434C27.4616 54.539 26.9036 54.3079 26.4922 53.8965C26.0808 53.4851 25.8497 52.9271 25.8497 52.3453C25.8497 51.7634 26.0808 51.2055 26.4922 50.7941C26.9036 50.3826 27.4616 50.1515 28.0434 50.1515H39.7922C40.374 50.1515 40.932 50.3826 41.3434 50.7941C41.7548 51.2055 41.9859 51.7634 41.9859 52.3453C41.9859 52.9271 41.7548 53.4851 41.3434 53.8965C40.932 54.3079 40.374 54.539 39.7922 54.539ZM48.5794 44.3625H28.0556C27.4738 44.3625 26.9158 44.1313 26.5044 43.7199C26.093 43.3085 25.8619 42.7505 25.8619 42.1687C25.8619 41.5869 26.093 41.0289 26.5044 40.6175C26.9158 40.2061 27.4738 39.9749 28.0556 39.9749H48.5794C49.1612 39.9749 49.7192 40.2061 50.1306 40.6175C50.542 41.0289 50.7731 41.5869 50.7731 42.1687C50.7731 42.7505 50.542 43.3085 50.1306 43.7199C49.7192 44.1313 49.1612 44.3625 48.5794 44.3625ZM54.1978 12.3581H26.6419C25.1282 12.3581 23.7022 12.9504 22.6273 14.0278L14.7517 21.9277C13.7195 22.9871 13.1407 24.4071 13.1381 25.8862V59.2775H11.4197C10.0547 59.2775 8.94317 58.166 8.94317 56.801V10.6421C8.94317 9.30145 10.0766 8.16558 11.4197 8.16558H51.7237C53.0887 8.16558 54.1978 9.27708 54.1978 10.6421V12.3581Z"
                      fill="#E50616"
                    />
                    <path
                      d="M60.0527 47.4434C58.2794 47.4194 56.519 47.748 54.8737 48.4101C53.2284 49.0722 51.7311 50.0545 50.4686 51.3001C49.2061 52.5456 48.2037 54.0296 47.5195 55.6658C46.8352 57.302 46.4829 59.0578 46.4829 60.8313C46.4829 62.6048 46.8352 64.3606 47.5195 65.9968C48.2037 67.633 49.2061 69.117 50.4686 70.3626C51.7311 71.6081 53.2284 72.5905 54.8737 73.2525C56.519 73.9146 58.2794 74.2432 60.0527 74.2193C63.5722 74.1718 66.9313 72.7404 69.4033 70.2348C71.8753 67.7293 73.2613 64.3511 73.2613 60.8313C73.2613 57.3116 71.8753 53.9334 69.4033 51.4278C66.9313 48.9223 63.5722 47.4908 60.0527 47.4434ZM65.9807 60.2597L59.4434 65.5272C59.2175 65.71 58.9575 65.8459 58.6785 65.9271C58.3995 66.0083 58.1071 66.033 57.8184 65.9999C57.5298 65.9667 57.2506 65.8764 56.9972 65.7341C56.7439 65.5919 56.5214 65.4005 56.3429 65.1713L53.7737 61.8953C53.4146 61.4373 53.2522 60.8554 53.3221 60.2776C53.3921 59.6998 53.6887 59.1734 54.1467 58.8143C54.6047 58.4552 55.1866 58.2927 55.7644 58.3627C56.3422 58.4326 56.8686 58.7292 57.2277 59.1872L58.4245 60.7131L63.2312 56.8424C63.4546 56.6533 63.7136 56.5108 63.9929 56.4233C64.2722 56.3358 64.5662 56.3051 64.8576 56.333C65.149 56.3609 65.4318 56.4468 65.6894 56.5857C65.9471 56.7245 66.1743 56.9136 66.3578 57.1416C66.5413 57.3696 66.6773 57.6321 66.7578 57.9135C66.8382 58.1949 66.8616 58.4896 66.8265 58.7801C66.7913 59.0707 66.6984 59.3513 66.5532 59.6054C66.4079 59.8595 66.2133 60.082 65.9807 60.2597Z"
                      fill="#E50616"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Weekly Assignments
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed max-w-sm mx-auto">
                  Upon successfully completing the course stage (3 months), you
                  will receive an official certificate.
                </p>
              </div>
            </div>

            {/* Right Side - Large Image */}
            <div className="relative">
              <img
                src="/courses/general-english/last-section.png"
                alt="Student studying English"
                className="w-full lg:min-w-[700px] h-[400px] md:h-[750px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
