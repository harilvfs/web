import React, { useState } from 'react';
import {
  ContactForm,
  TerminalHeaderBar,
  TerminalButtons,
  TerminalBtn,
  TerminalTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextArea,
  SubmitButton,
  SuccessNotification,
} from './styled';
import { userData } from '../data';
import Terminal from './Terminal';

interface ContactProps {
  visible?: boolean;
}

const Contact: React.FC<ContactProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mjkbkgpz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setShowSuccess(true);
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        console.error('Form submission error:', await response.text());
        alert('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailCommand = {
    command: 'sendmail',
    text: `Or email me directly at: <a href="mailto:${userData.email}">${userData.email}</a>`,
  };

  return (
    <>
      {showSuccess && (
        <SuccessNotification show={showSuccess}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          Thank you! Your message has been sent successfully.
        </SuccessNotification>
      )}
      <ContactForm id="contact" onSubmit={handleSubmit} action="https://formspree.io/f/mjkbkgpz" method="POST">
        <TerminalHeaderBar>
          <TerminalButtons>
            <TerminalBtn color="close" />
            <TerminalBtn color="minimize" />
            <TerminalBtn color="maximize" />
          </TerminalButtons>
          <TerminalTitle>hari@archlinux: ~/contact</TerminalTitle>
        </TerminalHeaderBar>
        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextArea
            id="message"
            name="message"
            placeholder="Your message"
            required
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </FormGroup>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </ContactForm>
      <Terminal title="~/mail" commands={[emailCommand]} delay={100} />
    </>
  );
};

export default Contact; 
