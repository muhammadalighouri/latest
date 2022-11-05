import React from "react";
import Footer from "../components/Footer";
import NavigationSec from "../components/NavigationSec";
import "../scss/conditions.scss";
const Disclaimer = () => {
    const stylo = {
        position: 'fixed',
        bottom: '0',
        zIndex: '100',
        width: '100%'
    }
    window.scroll(0, 0);
    return (
        <>
            <NavigationSec style={{ position: "relative" }} />
            <section className="privacy">
                <div className="container">
                    <h1>Disclaimer</h1>
                    <p>
                        <span>
                            Cryptocurrency may be unregulated in your jurisdiction. The value
                            of cryptocurrencies may go down as well as up. Profits may be
                            subject to capital gains or other taxes applicable in your
                            jurisdiction.
                        </span>
                    </p>
                </div>
            </section>
            <Footer stylo={stylo} />
        </>
    );
};

export default Disclaimer;
