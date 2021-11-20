import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loading } from "./Loading";
import { Particle } from "./Particle";
import "./sayt.css";
import AOS from "aos";
import "aos/dist/aos";
import ReseptionIcon from "./icons/resption.png";

export const Sayt = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  if (loader) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="body">
      <Particle />
      <div className="header">
        <h1>HALQ XIZMATI OLIY MAQSAD</h1>
      </div>
      <div className="links">
        <Link to="/reseption" data-aos="fade-right">
          <article className="link cyan">
            <div className="info">
              <h2>QABUL BO'LIMI</h2>
              <p></p>
            </div>
            <div className="row">
              <div className="col-6" style={{ marginTop: "31px" }}>
                <button
                  className="btn w-100 text-white"
                  style={{ backgroundColor: "hsl(180, 62%, 55%)" }}
                >
                  Kirish
                </button>
              </div>
              <div className="col-6">
                <div className="image">
                  <img src={ReseptionIcon} alt="rasm" />
                </div>
              </div>
            </div>
          </article>
        </Link>

        <Link data-aos="fade-down">
          <article className="link red">
            <div className="info">
              <h2>DIREKTOR</h2>
              <p></p>
            </div>
            <div className="image">
              <img
                src="https://image.flaticon.com/icons/png/512/606/606587.png"
                alt="rasm"
              />
            </div>
          </article>
        </Link>
        <Link data-aos="fade-up">
          <article className="link orange">
            <div className="info">
              <h2>KASSA</h2>
              <p></p>
            </div>
            <div className="image">
              <img
                src="https://cdn.icon-icons.com/icons2/1846/PNG/512/cashier2_116164.png"
                alt="rasm"
              />
            </div>
          </article>
        </Link>
        <Link data-aos="fade-left">
          <article className="link blue">
            <div className="info">
              <h2>DOCTOR</h2>
              <p></p>
            </div>
            <div className="image">
              <img
                src="https://gclg.in.ua/wp-content/uploads/2020/04/493-4938154_transparent-drill-team-clipart-blue-doctor-icon-png.png"
                alt="rasm"
              />
            </div>
          </article>
        </Link>
      </div>
      {/* <div className="col-md-4 p-3">
                        <Link className="card shadow bg-body rounded p-3 cards" to={`/reseption`} >
                            <div className="row">
                                <div className="col-6">
                                    <h5>Qabul bo'limi</h5>
                                </div>
                                <div className="col-6">
                                    <img style={{ width: "100px", height: "100px" }} className=" rounded-circle img-fluid float-end border border-success" src="https://static.thenounproject.com/png/2562652-200.png" alt="rasm" />
                                </div>
                            </div>
                        </Link>
                    </div> */}
    </div>
  );
};
