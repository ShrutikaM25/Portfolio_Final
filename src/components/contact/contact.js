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
    <div className='bg-[#1e1e2f] h-full py-6'>
    <div className="grid md:grid-cols-2 items-center overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white font-[sans-serif]">
      {/* Contact Form */}
      <div className="p-20 bg-gray-900 h-full" data-aos="fade-right">
        <h2 className="text-4xl font-bold bg-gray-900 text-white">Contact <span className="text-yellow-400 bg-gray-900">Me</span></h2>
        <p className="text-sm text-gray-300 mt-4 leading-relaxed bg-gray-900">
          Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.
        </p>
    
        {/* Status messages */}
        {status === 'success' && (
          <div className="text-green-500 font-semibold text-center mb-4">
            Your message has been sent successfully!
          </div>
        )}
        {status === 'error' && error && (
          <div className="text-red-500 font-semibold text-center mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={sendEmail}>
        <div className="space-y-4 mt-8 bg-gray-900">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              required
              data-aos="fade-up"
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              required
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              rows="4"
              required
              data-aos="fade-up"
              data-aos-delay="400"
            ></textarea>
            <button
              type="submit"
              className={`mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500`}
              disabled={status === 'sending'}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="mr-2 bg-yellow-400" viewBox="0 0 548.244 548.244">
                <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" />
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="p-8 space-y-6 bg-white" data-aos="fade-left">
        <h2 className="text-2xl font-semibold bg-white">LET'S GET IN TOUCH</h2>
        <div className="flex items-center space-x-4 bg-white" data-aos="fade-left" data-aos-delay="200">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400 bg-white" />
          <p className='bg-white'>Pimpri-Chinchwad, Pune-411033</p>
        </div>
        <div className="flex items-center space-x-4 bg-white" data-aos="fade-left" data-aos-delay="400">
          <FontAwesomeIcon icon={faPhone} className="text-yellow-400 bg-white" />
          <p className='bg-white'>+91 9028483896</p>
        </div>
        <div className="flex items-center space-x-4 bg-white" data-aos="fade-left" data-aos-delay="600">
          <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 bg-white" />
          <p className='bg-white'>shrutim2409@gmail.com</p>
        </div>
        <div className="flex items-center space-x-4 bg-white" data-aos="fade-left" data-aos-delay="800">
          <FontAwesomeIcon icon={faGlobe} className="text-yellow-400 bg-white" />
          <a href="https://shrutikam.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline bg-white">
            shrutikam.netlify.app
          </a>
        </div>
        <div className="mt-6" data-aos="fade-up" data-aos-delay="1000">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86794.33997226287!2d73.70974078458059!3d18.64083987139174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1731580102559!5m2!1sen!2sin"
      width="100%" 
      height="300" 
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


export default Contact;
