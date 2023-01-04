import React from "react";


 
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-green-400 flex justify-center items-center p-4  text-gray-200"
    >
      <form
        method="POST"
        action="https://getform.io/f/640104ff-82ce-402c-8c4e-29ef929e96fe"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-[#699261] ">
              Contact
            </p>
          <p className="text-[#699261] py-4">
            Submit the form below or send me an email -
            lu.tacchetti@gmail.com
          </p>
        </div>
        <input
          className="text-gray-500 bg-gray-200 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-gray-200 text-gray-500"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-gray-200 p-2 text-gray-500"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-gray-400 hover:border-green-400 px-4 py-3 my-8 mx-auto flex items-center">
          Send email
        </button>
      </form>
    </div>
  );
};

export default Contact;
