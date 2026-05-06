import nodemailer from 'nodemailer';

export async function sendContact(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: 'Email envoyé.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'envoi." });
  }
}
