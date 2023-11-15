'use server';

import React from 'react';
import { Resend } from 'resend';

import ContactFormEmail from '@/app/components/contact-form-email';
import { getErrorMessage, validateString } from '@/app/libs/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Personal Website Contact Form <personal-website@resend.dev>',
      to: 'tonigashi999@gmail.com',
      subject: 'Message from personal-webpage contact form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
