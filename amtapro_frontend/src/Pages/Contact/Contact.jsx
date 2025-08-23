import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Alert from './Alert';
import {email} from '../../assets/links'
import Title from '../../Components/Title';
import * as lucid from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const red = 'red-900'

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertData, setAlertData] = useState({ header: '', message: '', border: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const closeAlertBox = () => {
    setAlertVisible(false);
  };

  const showAlert = (header, message, border) => {
    setAlertData({ header, message, border });
    setAlertVisible(true);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showAlert('Missing Fields', 'Please fill in all fields before sending.', red);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_zh0vj84',
          template_id: 'template_12cdgqn',
          user_id: '9nHCjbJ8w8yQTswge',
          template_params: {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: 'mechseiko@gmail.com',
          },
        }),
      });

      if (response.ok) {
        setForm({ name: '', email: '', message: '' });
        showAlert(
          'Success',
          'Message sent successfully. Our team will get back to you shortly.',
          'border'
        );
      } else {
        showAlert('Failed', 'Failed to send message. Please try again.', red);
      }
    } catch (error) {
      console.error('Error sending message:', error, red);
      showAlert('Error', 'An error occurred. Please try again later.', red);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-green-900">
      <Alert
        header={alertData.header}
        message={alertData.message}
        border={alertData.border}
        show={alertVisible}
        closeAlertBox={closeAlertBox}
      />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="bg-white shadow-md rounded-xl p-8 max-w-2xl mx-auto border border-green-700">
          <div className='flex justify-center'>
            <Title title="Contact Us" />
            <span><lucid.Contact size={30}/></span>
          </div>
          
          <p className="text-center text-sm text-gray-600 mb-6">
            Fill out the form below and we’ll respond as soon as possible. You can also {' '}
            <a href={email} className="text-blue-500 underline">
              email us directly.
            </a>{' '}
          </p>

          <form className="space-y-4" onSubmit={sendMessage}>
            <input
              type="text"
              autoFocus
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Your Message *"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="flex justify-center outline-none w-full py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition duration-300"
            >
              <span>Send Message</span>{' '}
              <lucid.Send size={20}/>
            </button>
          </form>
        </div>
        <p className="text-center mt-10 text-sm text-gray-600">
          We appreciate your interest in AmtaPro. Let’s build football’s future together.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;