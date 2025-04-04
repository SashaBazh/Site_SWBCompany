import "./Contacts.css";

const Contacts = () => {
  return (
    <>
      <h2 className="contacts-title">Контакты</h2>
      <div className="contacts-container">
        <div className="contacts-info">
          <div className="contact-item">
            <img
              src="/assets/Icons/inst_contacts.svg"
              alt="Instagram"
              className="contact-icon"
            />
            <span>@swb.company</span>
          </div>
          <div className="contact-item">
            <img
              src="/assets/Icons/telega_contacts.svg"
              alt="Telegram"
              className="contact-icon"
            />
            <span>@unkwuownI</span>
          </div>
          <div className="contact-item">
            <img
              src="/assets/Icons/phone_contacts.svg"
              alt="Phone"
              className="contact-icon2"
            />
            <span>+375 29 859 1644</span>
          </div>
        </div>
        <div className="contacts-image">
          <img
            src="/assets/images/carpet.png"
            alt="Carpet"
            className="contact-bg"
          />
        </div>
      </div>
    </>
  );
};

export default Contacts;
