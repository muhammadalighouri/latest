import React from 'react'
import "../scss/steps.scss";
const Steps = () => {
    const info = [
        {
            name: "Gamming NFTs",
            desc: "Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.",
            img: "https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon1-min.png",
        },
        {
            name: "Gamming NFTs",
            desc: "Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.",
            img: "https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon2-min.png",
        },
        {
            name: "Gamming NFTs",
            desc: "Latin professor at Hampden-Sydney her College in Virginia, looked up one of the more obscure.",
            img: "https://bithu.uigaint.com/wp-content/uploads/2022/06/aboutus_card_icon3-min.png",
        },
    ];
    return (
        <section className="steps">
            <div className="container">
                <div className="grid">
                    {
                        info.map((item, ind) => {
                            return (
                                <div className="item">
                                    <div className="top">
                                        <img src={item.img} alt="" />
                                        <span>{item.name}</span>
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Steps