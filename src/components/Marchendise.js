import React from "react";
import "../scss/marchendise.scss";
const Marchendise = () => {
  return (
    <>
      <section className="march">
        <div className="container">
        <div className="heading" style={{overflow:'hidden'}}>
          <h1 data-aos="fade-down" class="aos-init aos-animate">
          The Merchandise
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-out"
            class="aos-init aos-animate"
          >
    A Fully Community-Driven NFT Project With Charitable Benefactions
              To Important Movements Chosen By The Community Itself!
          </p>
        </div>
          <div className="img">
            <img src="/images/marchen.png" alt="" />
          </div>
          <div className="detail">
            <h1>comming soon!</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marchendise;
