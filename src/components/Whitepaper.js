import React from 'react'

const Whitepaper = () => {
    return (
        <div className="fifth">
            <div className="heading" style={{ overflow: "hidden" }}>
                <h1>100% Secure</h1>
                <p>
                    Contract fully audited by Solidity Finance and shown to be 100%
                    secure. Team fully verified by CoinSniper to ensure anti-rug and
                    complete project security.
                </p>
                <div className="btn__container">
                    <button>Audit</button>
                    <button> Whitepaper</button>
                    <button>KYC</button>
                </div>
            </div>
        </div>
    );
};

export default Whitepaper