import React from "react";
import avatar from "../../assets/avatar.svg";
import img from "../../assets/custom.png";

const About = (props) => {
  return (
    <>
      <section className="about">
        <div className="about__background">
          <div className="about__background__layer"></div>
        </div>
        <div className="about__container">
          <div className="about__container__row">
            <div className="about__container__column">
              <h1 className="h1">Om mig</h1>

              <p className="paragraph">
                <img
                  className="about__container__image avatar"
                  src={avatar}
                  alt="Portrait"
                />
                Kära gäster, jag heter Antonina och jag har min egen
                skönhetssalong Salong Agneta i den österrikiska staden
                Trelleborg. Förälskad i mitt yrke, där jag har varit sedan 2012.
                Jag har en konstutbildning och jag är också frisör-stylist,
                designer, utbildad som färgist vid L'Oreal Academy. Som ingen
                annan kan jag uppnå naturliga nyanser i hårfärgning. Jag har en
                delikat smak, tack vare vilken du alltid får rätt råd om att
                välja frisyr och hårfärg. Förmågan att skapa eleganta frisyrer
                och styling och professionell smink gör mig till en lovande
                bröllopsstylist.
              </p>
            </div>
          </div>
          <div className="about__container__row">
            <div className="about__container__column">
              <p className="paragraph">
                Jag utvecklar ständigt, upptäcker något nytt, intressant, jag
                älskar experiment! Jag föredrar en individuell inställning till
                varje klient, jag är redo att erbjuda de färskaste linjerna både
                i frisyr och i färg. Det är lätt för mig att hitta en
                individuell stil för mina kunder, hitta den perfekta frisyren
                och träna färgerna på håret. Jag är en mycket positiv person med
                öppenhet och vänlighet. Ett leende och gott humör efter att ha
                pratat med mig garanteras!
              </p>
              <img
                className="about__container__image work"
                src={img}
                alt="Something"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
