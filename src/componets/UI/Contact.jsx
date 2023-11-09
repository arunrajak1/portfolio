import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbjvbwpz");
  if (state.succeeded) {
    return <div className="flex items-center justify-center m-5">
        <p className="text-2xl">Thank you for your submission! I'll get back to you soon🚀!</p>
    </div>;
  }
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center ">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3351797467235!2d75.89112842540331!3d22.752939129363565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1699434660178!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0 md:w-1/2 h-[450px] lg:flex items-center bg-indigo-100 px-4">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-5 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px] mt-5"
                />
              </div>
              <div className="mb-5">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>
              <div className="mb-5">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                 type="submit" disabled={state.submitting}
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
              hover:bg-headingColor text-center ease-linear duration-150"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
