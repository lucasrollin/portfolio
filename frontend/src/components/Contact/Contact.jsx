import { useState } from 'react';
import styles from './Contact.module.scss';

const INITIAL_STATE = { name: '', email: '', message: '' };

function Contact() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus('success');
      setForm(INITIAL_STATE);
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <span className={styles.index}>005</span>
          <span className={styles.label}>Contact</span>
        </div>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Travaillons
              <br />
              <em>ensemble.</em>
            </h2>
            <p className={styles.desc}>
              Disponible pour un poste junior fullstack.
              <br />
              N'hésitez pas à me contacter.
            </p>
          </div>
          <div className={styles.right}>
            {status === 'success' ? (
              <div className={styles.success}>
                <p>Message envoyé.</p>
                <p>Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label htmlFor="name">Nom</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                {status === 'error' && (
                  <p className={styles.error}>
                    Une erreur est survenue. Réessayez.
                  </p>
                )}
                <button
                  type="submit"
                  className={styles.submit}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Envoi...' : 'Envoyer'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
