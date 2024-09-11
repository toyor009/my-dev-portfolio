import { useState, useMemo } from 'react';

import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';

import socials from '../content/socials';

const ContactForm = () => {
  const emptyForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [form, setForm] = useState({ ...emptyForm });

  const formIsFilled = useMemo(() => {
    return Object.values(form).every((field) => field.length > 0);
  }, [form]);

  const updateContactForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const submitForm = () => {
    console.log('form: ', form);
    console.log('formIsFilled: ', formIsFilled);
    if (!formIsFilled) return;
  };

  return (
    <div className='contact-section'>
      <div className='contact-info'>
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{' '}
          <a href='mailto:omotoyosiolayiwola@gmail.com'>email</a>. 👋
          <br />
          <br />
          <h3>Or find me on:</h3>
          <div className='hero-socials'>
            {socials.map((social, index) => (
              <a key={index} href={social.url}>
                <img src={`/socials/${social.icon}`} alt='' />
              </a>
            ))}
          </div>
        </p>
        <div>
          <p className='contact-links'>
            <MdEmail />
            omotoyosiolayiwola@gmail.com
          </p>
          <br />
          <p className='contact-links'>
            <FaPhoneAlt />
            +234 70 3714 8172
          </p>
          <br />
          <p className='contact-links'>
            <IoLocation />
            Lagos, Nigeria
          </p>
          <br />
        </div>
      </div>

      <div className='contact-form'>
        <form name='contact'>
          <input
            type='text'
            name='senderName'
            placeholder='Your Name'
            value={form.name}
            required
            onInput={(e) => updateContactForm('name', e.target.value)}
          />
          <input
            type='email'
            name='senderEmail'
            placeholder='Email'
            value={form.email}
            required
            onInput={(e) => updateContactForm('email', e.target.value)}
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={form.subject}
            required
            onInput={(e) => updateContactForm('subject', e.target.value)}
          />
          <textarea
            placeholder='Your Message'
            name='message'
            value={form.message}
            required
            onInput={(e) => updateContactForm('message', e.target.value)}
          ></textarea>
          <input type='button' value='Send' onClick={submitForm} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
