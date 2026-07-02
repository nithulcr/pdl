'use client';

import { useState } from "react";
import AnimatedButton from "./AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Handle form submit (send POST to API route)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    // Get data from form fields
    const form = e.target as HTMLFormElement;
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
    const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
    const formData = {
      name: `${firstName} ${lastName}`,
      number: (form.elements.namedItem('number') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    // Send POST request to backend API
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setMessageStatus({ type: 'success', message: "Your message has been sent!" });
      form.reset();
    } else {
      setMessageStatus({ type: 'error', message: "Message sending failed." });
    }


    
  };
  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);

  return (
    <>
      <div className="bg-[var(--background)] py-14 lg:py-24 px-6">  
        <div className="max-w-[900px] mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }} className="heading flex flex-col text-site max-w-[550px] mb-8">
          <div className="flex items-center gap-2 mb-3 uppercase text-sm">
            <svg width="20" height="20" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2423 0L21.0016 5.76043L25.5559 0H22.2423ZM31.993 1.20437L24.2747 9.75047L31.993 6.66278V1.20437ZM12.2421 4.11082C12.2001 4.11146 12.1588 4.11301 12.1172 4.11488C11.5042 4.14208 10.9332 4.28471 10.4616 4.60427C9.3682 5.34497 9.73358 6.99909 8.99334 8.67088C6.4642 14.3825 3.90928 18.5248 1.65161 21.5817V28.2445C5.62076 26.8688 11.5325 25.4431 20.1718 25.1568C21.9845 25.0968 23.3769 25.9677 24.464 25.2314C27.1477 23.4134 26.176 17.338 22.319 11.6438C22.0779 11.2881 21.8533 10.9258 21.6019 10.5904C18.5854 6.56687 14.8907 4.07531 12.242 4.11095L12.2421 4.11082ZM11.8957 5.68992C11.4602 6.58537 11.8691 8.51684 12.9229 10.8945C12.5903 9.69401 12.6208 8.82286 13.0961 8.53392C14.1354 7.90215 16.9023 10.2854 19.2755 13.8574C21.6487 17.4292 22.7298 20.837 21.6906 21.4688C21.263 21.7287 20.5427 21.4777 19.6784 20.8444C21.4648 22.655 23.0772 23.7132 24.0672 23.6582C23.9522 23.8625 23.8304 24.0606 23.6483 24.184C21.9145 25.3586 17.7344 22.2343 14.3248 17.2009C10.9151 12.1675 9.56362 7.12426 11.2974 5.94973C11.4751 5.82946 11.6702 5.72247 11.8957 5.68992ZM31.993 13.1383L26.5346 14.9067L31.993 15.7346V13.1383Z" fill="var(--siteColor)" />
            </svg>

            Get a Quote
          </div>
          <h2 ref={fadeRef} className="fade-up-stagger text-3xl lg:text-[46px] font-medium mb-1 leading-tight">
            Feel Free to Get in Touch or Visit our Location.</h2>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="firstName"
              className="w-full bg-[#f8f8f8]  px-6 py-3 focus:outline-none placeholder-[#BFBCBC] text-white"
              type="text"
              placeholder={"First Name"}
              required
            />
            <input
              name="lastName"
              className="w-full bg-[#f8f8f8]  px-6 py-3 focus:outline-none placeholder-[#BFBCBC] text-white"
              type="text"
              placeholder={"Last Name"}
              required
            />

            
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="number"
              className="w-full bg-[#f8f8f8]  px-6 py-3 focus:outline-none placeholder-[#BFBCBC] text-white"
              type="text"
              placeholder={"Mobile"}
              required
            />

            <input
              name="email"
              className="w-full bg-[#f8f8f8]  px-6 py-3 focus:outline-none placeholder-[#BFBCBC] text-white"
              type="email"
              placeholder={"Email"}
              required
            />
          </div>
          <div>

            <textarea
              name="message"
              className="w-full bg-[#f8f8f8] text-white  px-6 min-h-[120px] py-3 focus:outline-none text-white resize-none placeholder-[#BFBCBC]"
              rows={3}
              placeholder={"Message"}
              required
            />
          </div>
          <div>

            <AnimatedButton type="submit"
              label="Get a Quote" className=" " />
          </div>
          <div className="justify-self-end message-status absolute bottom-[15px] right-[35px]">
            {messageStatus && (
              <p className={`${messageStatus.type === 'success' ? 'text-green-500  text-xs font-normal' : 'text-red-500 text-xs font-normal'}`}>
                {messageStatus.message}
              </p>
            )}
          
          </div>
        </form>
        </div>
      </div>

    </>
  );
}
