import React from "react";
import LocalMap from "../particles/LocalMap";
import MessageForm from "../particles/MessageForm";
import SocialIcons from "../particles/SocialIcons";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact__container">
          <div className="contact__container__row">
            <div className="contact__container__column">
              <h1 className="h1">Kontakter</h1>

              <div className="cl1">
                <h2 className="h2">Öppettider:</h2>
                <p>
                  Mån – fre <span>10:00</span> – <span>18:00</span>
                </p>

                <p>
                  Lördag <span>11:00</span> – <span>16:00</span>
                </p>

                <p>
                  Söndag <span>11:00</span> – <span>16:00</span>
                </p>

                <h2 className="h2">Telefon:</h2>
                <p>0410-441 50</p>
                <h2 className="h2">Adress:</h2>
                <p>Hesekillegatan 56</p>
                <p>231 54 Trelleborg</p>
                <h2 className="h2">E-post:</h2>
                <p>
                  <a href="mailto:salong@agneta.se">mailto:salong@agneta.se</a>
                </p>
                <h2 className="h2">Sociala medier:</h2>
                <SocialIcons />
              </div>
            </div>
            <div className="contact__container__column">
              <div className="cl2">
                <h2 className="h2">Hitta hit:</h2>
                <LocalMap />
                <h2 className="h2">Skicka meddelande:</h2>
                <MessageForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
