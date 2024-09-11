import React from 'react';

const Description = ({ description = '', objectives = [], outcomes = [] }) => {
    return (
        <div className="tab-pane fade show active description" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab">
            <h4 className='my-3'>حول هذه الدورة</h4>
            <p>{description || 'No description available.'}</p>
            {/* <h4>أهداف الدورة</h4>
            {objectives.length > 0 ? (
                <ul>
                    {objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>
            ) : (
                <p>No objectives available.</p>
            )} */}
            {/* <h4>نتائج التعلم</h4>
            {outcomes.length > 0 ? (
                <ul>
                    {outcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                    ))}
                </ul>
            ) : (
                <p>No learning outcomes available.</p>
            )} */}
        </div>
    );
};

export default Description;
