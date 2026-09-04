import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { submitInquiry } from '../api/inquiries.js';

export default function Contact() {
  const [copyRef, copyClass] = useReveal();
  const [formRef, formClass] = useReveal();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [note, setNote] = useState('This form posts to /api/inquiries on the Express backend.');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setNote('Sending...');
    try {
      await submitInquiry({ ...form, property: 'Infinia' });
      setNote('Thank you — our booking desk will call you back shortly.');
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch {
      setNote('Backend not running — start the Express server (see README) to receive enquiries.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className={`contact-copy ${copyClass}`} ref={copyRef}>
          <p className="eyebrow">Enquire</p>
          <h2>Reserve your<br />residence at Infinia</h2>
          <p>Leave your details and our booking desk will call you back with availability, pricing and a private site-visit slot.</p>
          <div className="contact-detail"><span>Booking Contact</span><a href="tel:+917972383011">7972 383011</a></div>
          <div className="contact-detail"><span>Email</span><a href="mailto:kurheestates@gmail.com">kurheestates@gmail.com</a></div>
          <div className="contact-detail"><span>Office</span><p>Rathi Nagar, Lane-2, Amravati</p></div>
          <div className="contact-detail"><span>Site Address</span><p>Plot No. 8, Ganesh Vihar No. 2, Near Jagadare Layout, Amravati 444604</p></div>
        </div>
        <form className={`contact-form ${formClass}`} ref={formRef} onSubmit={onSubmit}>
          <div className="form-row">
            <label>Full name
              <input type="text" name="name" value={form.name} onChange={onChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>Phone
              <input type="tel" name="phone" value={form.phone} onChange={onChange} required />
            </label>
          </div>
          <div className="form-row">
            <label>Email
              <input type="email" name="email" value={form.email} onChange={onChange} />
            </label>
          </div>
          <div className="form-row">
            <label>Message
              <textarea name="message" rows="3" placeholder="I'd like more details on Infinia..." value={form.message} onChange={onChange} />
            </label>
          </div>
          <button type="submit" className="btn btn-solid full">Request a Callback</button>
          <p className="form-note">{note}</p>
        </form>
      </div>
    </section>
  );
}
