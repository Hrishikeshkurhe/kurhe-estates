
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const validateField = (name, value) => {
  const trimmed = value.trim();

  switch (name) {
    case 'name':
      if (!trimmed) return 'Please enter your full name.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
      if (trimmed.length > 60) return 'Name cannot exceed 60 characters.';
      if (!/^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u.test(trimmed)) {
        return 'Use letters, spaces, apostrophes, periods or hyphens only.';
      }
      return '';

    case 'phone': {
      if (!trimmed) return 'Please enter your mobile number.';
      const digits = trimmed.replace(/\D/g, '');
      const indianNumber =
        digits.length === 10
          ? digits
          : digits.length === 12 && digits.startsWith('91')
            ? digits.slice(2)
            : '';

      if (!/^[6-9]\d{9}$/.test(indianNumber)) {
        return 'Enter a valid 10-digit Indian mobile number.';
      }
      return '';
    }

    case 'email':
      if (!trimmed) return '';
      if (trimmed.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)) {
        return 'Please enter a valid email address.';
      }
      return '';

    case 'message':
      if (value.length > 500) return 'Message cannot exceed 500 characters.';
      return '';

    default:
      return '';
  }
};

export default function Contact() {
  const [copyRef, copyClass] = useReveal('left');
  const [formRef, formClass] = useReveal('right');

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [note, setNote] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setNote('');

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const onBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newErrors = Object.fromEntries(
      Object.entries(form).map(([name, value]) => [
        name,
        validateField(name, value),
      ])
    );

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true,
    });

    if (Object.values(newErrors).some(Boolean)) {
      setNote('Please correct the highlighted fields and try again.');
      return;
    }

    const whatsappNumber = '917972383011';

    const message = [
      'Hello Kurhe Estates,',
      '',
      'I would like to enquire about Infinia residences.',
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Email: ${form.email.trim() || 'Not provided'}`,
      `Message: ${form.message.trim() || 'I would like to know more about the property.'}`,
      '',
      'Please contact me regarding this enquiry.',
      '',
      'Thank you.',
    ].join('\n');

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');

    setForm(initialForm);
    setErrors({});
    setTouched({});
    setNote('Your enquiry is ready in WhatsApp. Please tap Send to submit it.');
  };

  const fieldError = (name) => errors[name];

  return (
    <section className="contact" id="contact">

      {/* Decorative background */}
      <div className="contact-orb contact-orb-one"></div>
      <div className="contact-orb contact-orb-two"></div>

      <div className="contact-inner">

        {/* LEFT SIDE */}
        <div className={`contact-copy ${copyClass}`} ref={copyRef}>
          <div className="contact-intro">
            <p className="eyebrow">08 - Private Enquiry</p>
          </div>

          <h2>
            Begin your
            <br />
            <em>Infinia</em> journey.
          </h2>

          <div className="contact-line"></div>

          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <a href="tel:+917972383011" className="contact-detail">
              <span className="detail-number">01</span>
              <div>
                <span className="detail-label">Booking Desk</span>
                <strong>+91 7972 383011</strong>
              </div>
              <span className="detail-arrow">↗</span>
            </a>

            <a href="mailto:kurheestates@gmail.com" className="contact-detail">
              <span className="detail-number">02</span>
              <div>
                <span className="detail-label">Email</span>
                <strong>kurheestates@gmail.com</strong>
              </div>
              <span className="detail-arrow">↗</span>
            </a>

            <div className="contact-detail location-detail">
              <span className="detail-number">03</span>
              <div>
                <span className="detail-label">Location</span>
                <strong>Amravati, Maharashtra</strong>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className={`contact-form-wrap ${formClass}`} ref={formRef}>

          <div className="contact-form-top">
            <div>
              <span className="form-kicker">PRIVATE APPOINTMENT</span>
              <h3>Request a callback</h3>
            </div>
            <span className="form-mark">INFINIA</span>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>

            {/* NAME */}
            <div className={`luxury-field ${errors.name ? 'field-invalid' : ''}`}>
              <div className="field-meta">
                <span>01</span>
                <label htmlFor="name">Full Name *</label>
              </div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="name"
                maxLength={60}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span className="field-error" id="name-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            {/* PHONE */}
            <div className={`luxury-field ${errors.phone ? 'field-invalid' : ''}`}>
              <div className="field-meta">
                <span>02</span>
                <label htmlFor="phone">Phone Number *</label>
              </div>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="tel"
                inputMode="tel"
                maxLength={16}
                required
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <span className="field-error" id="phone-error" role="alert">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* EMAIL */}
            <div className={`luxury-field ${errors.email ? 'field-invalid' : ''}`}>
              <div className="field-meta">
                <span>03</span>
                <label htmlFor="email">Email Address (Optional)</label>
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="email"
                maxLength={254}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span className="field-error" id="email-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* MESSAGE */}
            <div className={`luxury-field message-field ${errors.message ? 'field-invalid' : ''}`}>
              <div className="field-meta">
                <span>04</span>
                <label htmlFor="message">Your Message (Optional)</label>
              </div>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us how we can assist you..."
                value={form.message}
                onChange={onChange}
                onBlur={onBlur}
                maxLength={500}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : 'message-count'}
              />
              <span className="message-count" id="message-count">
                {form.message.length}/500
              </span>
              {errors.message && (
                <span className="field-error" id="message-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            {/* SUBMIT */}
            <button type="submit" className="contact-submit">
              <span>Send Enquiry on WhatsApp</span>
              <strong>↗</strong>
            </button>

            {note && (
              <p className="form-note" role="status" aria-live="polite">
                {note}
              </p>
            )}

          </form>

          <div className="form-footer">
            <span>INFINIA - AMRAVATI</span>
            <span>PRIVATE RESIDENCES</span>
          </div>

        </div>
      </div>
    </section>
  );
}