import React from 'react'
import { codes } from "../assests/Code";
import { Link } from 'react-router-dom';
import Select from "react-select";
const SendMessage = () => {
    const newObj = codes.map((item, i) => {
        return {
            label: `${item.name} (${item.dial_code})`,
            value: `${item.name} (${item.dial_code})`,
        };
    });
    const investment = [
        {
            value: " $0 - $5k",
            label: " $0 - $5k",
        },
        {
            value: "$5k - $10k",
            label: "$5k - $10k",
        },
        {
            value: "$10k - $25k",
            label: "$10k - $25k",
        },

        {
            value: "$25k - $50k",
            label: "$25k - $50k",
        },
        {
            value: "  $50k +",
            label: "  $50k +",
        },
    ];
    const time = [
        {
            value: " Morning",
            label: " Morning",
        },
        {
            value: "Afternoon",
            label: "Afternoon",
        },
        {
            value: "",
            label: "Evening",
        },
    ];
    console.log("person", newObj);
    return (
        <div className="fourth">
            <div className="heading">
                <h1>Talk to us</h1>
                <p>
                    Leave your details below and we’ll contact you to discuss purchasing
                    Doge Rush.
                </p>
            </div>
            <div className="grid">
                <div className="first">
                    <div className="item">
                        <input type="text" placeholder="Enter First Name" />
                    </div>
                    <div className="item">
                        <input type="text" placeholder="Enter Last Name" />
                    </div>
                </div>
                <div className="second">
                    <Select placeholder="Country Code" options={newObj} />
                    <div className="item">
                        <input type="text" placeholder="Enter Contact Number" />
                    </div>
                    <Select placeholder="Select a time to contact" options={time} />
                </div>
                <div className="third">
                    <Select placeholder="Enter Investment Budget" options={investment} />
                    <button>Submit!</button>
                </div>

                <p id="p">
                    <input type="checkbox" name="" id="" for="p" />
                    By submitting this form you agree to our{" "}
                    <Link to={"/terms"}>Terms</Link> and{" "}
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </p>
            </div>
        </div>
    );
};

export default SendMessage