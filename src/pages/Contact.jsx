import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }

    if (field === 'email' && formData.email && !validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submission
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email && !validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Send email using EmailJS
      emailjs.send('service_79hdjhg', 'template_8eg4c5o', formData, 'IC555p7Y3JunsIvhe')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Form submitted successfully!');
          // Reset form fields
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setErrors({});
        }, (err) => {
          console.log('FAILED...', err);
          alert('Failed to send the form. Please try again.');
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] bg-cover bg-center">
      <div className="w-11/12 max-w-2xl bg-white bg-opacity-70 backdrop-saturate-150 shadow-2xl rounded-xl overflow-hidden p-10 transform hover:scale-105 transition duration-500">
        <h1 className="text-4xl font-semibold mb-6 text-violet-500 text-center font-raleway">
          Contact
        </h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-violet-500 text-white py-3 px-6 rounded-lg text-lg font-bold shadow-lg hover:bg-violet-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
