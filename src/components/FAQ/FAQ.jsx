import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="lg:max-w-6xl mx-auto my-32 text-blue-600">
      <div className="my-20">
<h1 className="text-blue-500 mt-10 text-center text-xl "> Frequently Asked Questions</h1>

<h1 className="text-center text-4xl text-black mb-20 ">Answers to Your Inquiries </h1>
</div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border text-blue-600  ">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            How can I contact IT Blend for support?
            </div>
            <div className="collapse-content">
              <p>
              You can contact our support team through our dedicated helpline at 997, or you can reach out via email at itblend@gmail.com.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What services does IT Blend offer?
            </div>
            <div className="collapse-content">
              <p>
              IT Blend is a comprehensive IT solutions provider. Our services encompass a wide spectrum, including strategic IT consulting, bespoke software development, seamless system integration, robust cybersecurity solutions, and proactive managed IT services. By offering a holistic suite of services, we aim to be your end-to-end technology partner.

              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Is IT Blend suitable for small businesses?
            </div>
            <div className="collapse-content">
              <p>
              Absolutely! IT Blend is dedicated to supporting businesses of all sizes, and our services are designed to scale with your needs. For small businesses, we provide cost-effective solutions, personalized consultations, and tailored support to ensure you receive the IT assistance required to thrive in your industry.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What makes IT Blend different from other IT providers?
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                IT Blend distinguishes itself through a combination of factors. Our commitment to personalized service means that we take the time to understand your unique needs and challenges. We differentiate ourselves by embracing cutting-edge technologies, ensuring our clients benefit from the latest advancements. Moreover, our team of dedicated experts is focused on your success, working as an extension of your business rather than just a service provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
