import React from "react";

const Service = () => {
  return (
    <>
      <section className="service">
        <div className="service__container">
          <div className="service__background">
            <div className="service__background__layer"></div>
          </div>
          <div className="service__container__row">
            <div className="service__container__column">
              <h1 className="h1">Priser</h1>

              <h2 className="h2">Klippning</h2>
              <ul>
                <li>
                  Klippning 60 min &#8943; <span>685 Kr</span>
                </li>
                <li>
                  Klippning 40min (rek dam) &#8943; <span>565 Kr</span>
                </li>
                <li>
                  Klippning 25min (rek herr) &#8943; <span>450 Kr</span>
                </li>
                <li>
                  Klippning pensionär 40min ( rek dam) &#8943;{" "}
                  <span>535 Kr</span>
                </li>
                <li>
                  Klippning pensionär 25min (rek herr) &#8943;{" "}
                  <span>395 Kr</span>
                </li>
                <li>
                  Klippning barn t.o.m 12år &#8943; <span>395 Kr</span>
                </li>
                <li>
                  Luggklippning &#8943; <span>200 Kr</span>
                </li>
                <li>
                  Maskin hela huvudet &#8943; <span>200 Kr</span>
                </li>
                <li>
                  Extra styling vid klippning &#8943; <span>180 Kr</span>
                </li>
              </ul>

              <h2 className="h2">Färgbehandling</h2>
              <h3 className="h3">
                Priset kan justeras beroende på färg och tidsåtgång
              </h3>
              <ul>
                <li>
                  Färg Enkel + klipp kort hår &#8943; <span>1450 Kr</span>
                </li>
                <li>
                  Färg Enkel + klipp mellanlängd &#8943; <span>1550 Kr</span>
                </li>
                <li>
                  Färg Enkel + klipp långt/tjockt &#8943; <span>1660 Kr</span>
                </li>
                <li>
                  Färg Effekt + klipp kort hår &#8943; <span>1550 Kr</span>
                </li>
                <li>
                  Färg Effekt + klipp mellanlängd &#8943; <span>1660 Kr</span>
                </li>
                <li>
                  Färg Effekt + klipp långt/tjockt &#8943; <span>1850 Kr</span>
                </li>
                <li>
                  Färg Avancerad + klipp kort &#8943; <span>1660 Kr</span>
                </li>
                <li>
                  Färg Avancerad + klipp mellan &#8943; <span>1850 Kr</span>
                </li>
                <li>
                  Färg Avancerad + klipp långt/tjockt &#8943;{" "}
                  <span>1985 Kr</span>
                </li>
                <li>
                  Slingor i hätta + klipp kort &#8943; <span>1450 Kr</span>
                </li>
                <li>
                  Slingor i hätta + klipp mellanlängd &#8943;{" "}
                  <span>1550 Kr</span>
                </li>
                <li>
                  Slingor i hätta +klipp Långt/tjockt &#8943;{" "}
                  <span>1850 Kr</span>
                </li>
              </ul>
              <h2 className="h2">Permanent</h2>
              <ul>
                <li>
                  Permanent (klassisk) kort hår + klipp &#8943;{" "}
                  <span>1495 Kr</span>
                </li>
                <li>
                  Permanent/strukturbeh. + klipp &#8943; <span>1695 Kr</span>
                </li>
                <li>
                  Perm, längre än axellängd + klipp &#8943; <span>2015 Kr</span>
                </li>
              </ul>

              <h2 className="h2">Övriga behandlingar</h2>
              <ul>
                <li>
                  Tvätt och fön/plattning &#8943; <span>360 Kr</span>
                </li>
                <li>
                  Extra styling vid klipp eller annan behandling &#8943;{" "}
                  <span>180 Kr</span>
                </li>
                <li>
                  Brynplockning &#8943; <span>180 Kr</span>
                </li>
                <li>
                  Brynfärg &#8943; <span>180 Kr</span>
                </li>
                <li>
                  Brynfärg med plockning &#8943; <span>285 Kr</span>
                </li>
                <li>
                  Fransfärg &#8943; <span>310 Kr</span>
                </li>
                <li>
                  Frans- och brynfärg m plockning &#8943; <span>440 Kr</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
