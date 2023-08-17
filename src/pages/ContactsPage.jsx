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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1527.663839989207!2d44.48584161923924!3d40.02346286900029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406ac858d4cf7e13%3A0x6aea452dd401213e!2sSundukyan%20St%2C%20Mkhchyan%200725!5e0!3m2!1sru!2sam!4v1692221576927!5m2!1sru!2sam"
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
