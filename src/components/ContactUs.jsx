import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/AppContext";
import { Input, Textarea } from "@material-tailwind/react";

const ContactUs = () => {
  const { theme } = useContext(GlobalContext);
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Message, setMessage] = useState("")
  const [send, setSend] = useState(false);

  setTimeout(() => {
    setSend(false);
  }, 5000);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    console.log(Name, Email, Message);
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 px-6"
      id="contactUs"
    >
      <h1 className="text-4xl font-bold text-center" data-aos="zoom-in">
        Contact Us
      </h1>
      <hr
        className="my-5 w-32 h-1 bg-[#8dc63f] border-none"
        data-aos="zoom-out"
      />
      <div className="w-full pt-16" data-aos="zoom-out-up">
        <form className="w-full flex flex-col gap-8 items-center justify-center">
          <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 flex gap-8 flex-col">
            <input
              placeholder="Name"
              type="text"
              className={`input input-bordered w-full visited:outline-none`}
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              placeholder="Email"
              type="email"
              className={`input input-bordered w-full visited:outline-none`}
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
            <textarea
              rows={5}
              className={` textarea textarea-bordered textarea-lg w-full visited:outline-none`}
              placeholder="Write Your Message"
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
          </div>
          <button 
            className={`${!Message || !Name || !Email ? "btn btn-wide btn-disabled" : "btn btn-wide bg-[#8dc63f] hover:bg-[#8dc63f] text-white shadow-xl hover:!scale-105 border-none"}`}
            disabled={send}
            onClick={handleSubmit}
          >
            {send ? (
                <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <p>Send</p>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
