import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import styles from './Contact.module.scss';

const schema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: z.string().email('Adresse email invalide'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
});

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error();
    reset();
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
            {isSubmitSuccessful ? (
              <div className={styles.success}>
                <p>Message envoyé.</p>
                <p>Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.field}>
                  <label htmlFor="name">Nom</label>
                  <input id="name" type="text" {...register('name')} />
                  {errors.name && (
                    <span className={styles.error}>{errors.name.message}</span>
                  )}
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" {...register('email')} />
                  {errors.email && (
                    <span className={styles.error}>{errors.email.message}</span>
                  )}
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} {...register('message')} />
                  {errors.message && (
                    <span className={styles.error}>
                      {errors.message.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className={styles.submit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi...' : 'Envoyer'}
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
