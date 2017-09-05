import React from 'react';

const VotesBar = (props) => {

    const { ups, downs } = props;

    const upsPercent = `${100 * (ups / (ups + downs))}%`;
    const downsPercent = `${100 * (downs / (ups + downs))}%`;
    
    return (
        <div className="progress">
            Ups/Donws
            <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
            <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped" />
        </div>
    )
};

export default VotesBar;