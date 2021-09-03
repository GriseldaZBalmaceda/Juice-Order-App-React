import React, { Fragment } from 'react';
import AvailableJuices from './AvailableJuices'
import JuiceSummary from './JuiceSummary';

const Juices = () => {
return (
    <Fragment>
        <JuiceSummary />
        <AvailableJuices />
    </Fragment>
)
}

export default Juices;