import "./Contact.css";

const contact = [
  "FAQ",
  "Help Center",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-email">
        <p className="contact-email__text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>

      <h2 className="contact-text">
        <a href="#">Questions? Contact us.</a>
      </h2>
      <ul className="contact-items">
        {contact.map((item, index) => (
          <li key={index} className="contact-item">
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
      <div className="contant-language"></div>
    </div>
  );
}

export default Contact;
