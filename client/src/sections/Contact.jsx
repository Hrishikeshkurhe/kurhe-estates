import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { submitInquiry } from '../api/inquiries.js';

export default function Contact() {
  const [copyRef, copyClass] = useReveal('left');
  const [formRef, formClass] = useReveal('right');

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [note, setNote] = useState('');

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setNote('Sending your enquiry...');

    try {
      await submitInquiry({
        ...form,
        property: 'Infinia',
      });

      setNote(
        'Thank you — our booking desk will call you back shortly.'
      );

      setForm({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch {
      setNote(
        'Unable to send your enquiry. Please try again or contact our booking desk directly.'
      );
    }
  };

  return (
    <section className="contact" id="contact">

      {/* Decorative background */}
      <div className="contact-orb contact-orb-one"></div>
      <div className="contact-orb contact-orb-two"></div>

      <div className="contact-inner">

        {/* LEFT SIDE */}
        <div
          className={`contact-copy ${copyClass}`}
          ref={copyRef}
        >
          <div className="contact-intro">
            <span className="contact-index">05</span>

            <p className="eyebrow">
              Private Enquiry
            </p>
          </div>

          <h2>
            Begin your
            <br />
            <em>Infinia</em> journey.
          </h2>

          <div className="contact-line"></div>


          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <a
              href="tel:+917972383011"
              className="contact-detail"
            >
              <span className="detail-number">01</span>

              <div>
                <span className="detail-label">
                  Booking Desk
                </span>

                <strong>
                  +91 7972 383011
                </strong>
              </div>

              <span className="detail-arrow">↗</span>
            </a>

            <a
              href="mailto:kurheestates@gmail.com"
              className="contact-detail"
            >
              <span className="detail-number">02</span>

              <div>
                <span className="detail-label">
                  Email
                </span>

                <strong>
                  kurheestates@gmail.com
                </strong>
              </div>

              <span className="detail-arrow">↗</span>
            </a>

            <div className="contact-detail location-detail">
              <span className="detail-number">03</span>

              <div>
                <span className="detail-label">
                  Location
                </span>

                <strong>
                  Amravati, Maharashtra
                </strong>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE — FORM */}
        <div
          className={`contact-form-wrap ${formClass}`}
          ref={formRef}
        >
          <div className="contact-form-top">
            <div>
              <span className="form-kicker">
                PRIVATE APPOINTMENT
              </span>

              <h3>
                Request a callback
              </h3>
            </div>

            <span className="form-mark">
              INFINIA
            </span>
          </div>

          <form
            className="contact-form"
            onSubmit={onSubmit}
          >

            {/* NAME */}
            <div className="luxury-field">
              <div className="field-meta">
                <span>01</span>
                <label htmlFor="name">
                  Full Name
                </label>
              </div>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>


            {/* PHONE */}
            <div className="luxury-field">
              <div className="field-meta">
                <span>02</span>
                <label htmlFor="phone">
                  Phone Number
                </label>
              </div>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+91"
                value={form.phone}
                onChange={onChange}
                required
              />
            </div>


            {/* EMAIL */}
            <div className="luxury-field">
              <div className="field-meta">
                <span>03</span>
                <label htmlFor="email">
                  Email Address
                </label>
              </div>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={onChange}
              />
            </div>


            {/* MESSAGE */}
            <div className="luxury-field message-field">
              <div className="field-meta">
                <span>04</span>
                <label htmlFor="message">
                  Your Message
                </label>
              </div>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us how we can assist you..."
                value={form.message}
                onChange={onChange}
              />
            </div>


            {/* BUTTON */}
            <button
              type="submit"
              className="contact-submit"
            >
              <span>
                Request Private Appointment
              </span>

              <strong>↗</strong>
            </button>

            {note && (
              <p className="form-note">
                {note}
              </p>
            )}

          </form>

          <div className="form-footer">
            <span>INFINIA — AMRAVATI</span>
            <span>PRIVATE RESIDENCES</span>
          </div>
        </div>

      </div>

    </section>
  );
}