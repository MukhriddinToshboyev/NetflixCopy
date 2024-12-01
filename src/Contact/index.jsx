import Email from "../Email";
import Language from "../Language";
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
        <Email />
      </div>

      <p className="contact-text">
        <a href="#">Questions? Contact us.</a>
      </p>
      <ul className="contact-items">
        {contact.map((item, index) => (
          <li key={index} className="contact-item">
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
      <div className="contant-language">
        <Language />
        <p className="contact-language__text">Netflix Uzbekistan</p>
      </div>
    </div>
  );
}

export default Contact;
