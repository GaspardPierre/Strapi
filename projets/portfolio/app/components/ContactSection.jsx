"use client";
import React, { useState , useRef} from 'react';
import emailjs from '@emailjs/browser';


export default function Contact  ()  {
  const form = useRef();
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Utilisez emailjs.sendForm pour envoyer l'email
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({ fullName: '', email: '', message: '' });

      } catch (error) {
        
    console.error('Network error:', error);
    alert('Failed to send message, please try again.');
  }

      };
      


  return (
    <div className="rounded-lg shadow-lg w-4/5 mx-auto my-10">
      <h2 className="text-header text-3xl text-center font-heading mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit}
       className="space-y-6"
       ref={form}>
        <div>
          <label htmlFor="fullName" className="font-body text-white">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full bg-body border border-border-1 rounded py-3 px-4 text-section-2"
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-white font-body">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full bg-body border border-border-1 rounded py-3 px-4 text-section-2"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="text-white font-body">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full bg-body border border-border-1 rounded py-3 px-4 text-section-2"
            rows="4"
            placeholder="Your message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-section-2 to-navlink button text-header font-bold py-3 px-4 rounded hover:bg-navhover"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};


