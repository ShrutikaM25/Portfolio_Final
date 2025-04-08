import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending'); // Set status to 'sending'

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success'); // Set status to 'success'
          setError(null);
          setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
        },
        (error) => {
          console.log(error.text);
          setStatus('error'); // Set status to 'error'
          setError('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div className="bg-[#0f0f1a] py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 shadow-[0_0_80px_#6366f1aa] rounded-3xl overflow-hidden backdrop-blur-lg bg-[#1a1a2e]/50 border border-white/10">
        
        {/* Contact Form */}
        <div className="p-10 md:p-16 text-white space-y-6" data-aos="fade-right">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-sm">
            Got a project idea or just want to say hi? Drop me a message below and I'll get back to you soon!
          </p>

          {status === 'success' && (
            <div className="text-green-400 font-medium bg-white/10 p-2 px-4 rounded-md">
              Message sent successfully!
            </div>
          )}
          {status === 'error' && error && (
            <div className="text-red-400 font-medium bg-white/10 p-2 px-4 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={sendEmail} className="space-y-5 mt-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-transparent border-b border-gray-600 text-sm placeholder:text-gray-400 focus:border-pink-500 outline-none py-3"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-transparent border-b border-gray-600 text-sm placeholder:text-gray-400 focus:border-pink-500 outline-none py-3"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              required
              className="w-full bg-transparent border-b border-gray-600 text-sm placeholder:text-gray-400 focus:border-pink-500 outline-none py-3"
            ></textarea>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:brightness-110 transition duration-300 shadow-lg shadow-purple-500/20"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="p-10 md:p-16 text-gray-200 space-y-6 bg-gradient-to-br from-[#1a1a2e]/70 to-[#1e1e2f]/70" data-aos="fade-left">
          <h2 className="text-2xl font-semibold text-white">Let's Connect</h2>
          <div className="space-y-4 text-sm">
            <ContactInfo icon={faMapMarkerAlt} text="Pimpri-Chinchwad, Pune-411033" />
            <ContactInfo icon={faPhone} text="+91 9028483896" />
            <ContactInfo icon={faEnvelope} text="shruti03om@gmail.com" />
            <ContactInfo icon={faGlobe} text="shrutikam.netlify.app" link="https://shrutikam.netlify.app" />
          </div>

          <div className="rounded-xl overflow-hidden mt-6 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86794.33997226287!2d73.70974078458059!3d18.64083987139174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1731580102559!5m2!1sen!2sin"
              width="100%" 
              height="250" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, text, link }) => (
  <div className="flex items-center gap-3">
    <FontAwesomeIcon icon={icon} className="text-pink-500 text-lg" />
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
        {text}
      </a>
    ) : (
      <p className="text-white">{text}</p>
    )}
  </div>
);

export default Contact;
