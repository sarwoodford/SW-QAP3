// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import React from 'react';

const Message = ({text}) =>{
    return (
        <div className="messageText">
            <h5 className="message">
                {text}
            </h5>
        </div>
    )
}

export default Message;