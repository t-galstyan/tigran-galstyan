import React from 'react';

const ContactsPage = () => {
  return (
    <div className="contacts">
      <div className="container">
        <h1 className="title">Contacts</h1>
        <div className="main">
          <iframe
            className="map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.442897092394!2d44.49723177591206!3d40.199209968849694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd15696fd471%3A0x1b9e50c3aefa70ba!2sGabriel%20Sundukyan%20St%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1692965681965!5m2!1sru!2sam"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="text-container">
            <p>
              <b>Address: </b> apt 50, 90 Sundukyan str., Yerevan Armenia
            </p>
            <p>
              <b>E-mail: </b>
              <a href="mailto:tigran-galstyan-1972@mail.ru"> tigran-galstyan-1972@mail.ru</a>
            </p>
            <p>
              <b>Mobile: </b> <a href="tel:+37494225064">+374 94 22 50 64</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
