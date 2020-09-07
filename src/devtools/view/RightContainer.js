import React, { useState, useEffect } from "react";

import Navbar from './Components/Navbar';
import StoreTimeline from './Components/StoreTimeline';

function RightContainer() {
    return (
        <div>
            <Navbar />
            <StoreTimeline />
        </div>
    )
}

export default RightContainer;