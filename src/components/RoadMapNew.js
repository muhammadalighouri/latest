import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import '../scss/box.scss'
import RoadMapItem from "./RoadMapItem";

RoadMapNew.propTypes = {
    data: PropTypes.array,
};

function RoadMapNew(props) {

    const { data } = props;

    const [dataBlock] = useState(
        {
            subtitle: 'ROADMAP',
            title: 'cybox Timeline'
        }
    )

    return (
        <section className="tf-section tf-roadmap" id='roadmap'>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="roadmap scrol">

                            {
                                data.map(item => (
                                    <RoadMapItem key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoadMapNew;