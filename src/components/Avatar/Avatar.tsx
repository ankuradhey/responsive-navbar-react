import React, { FC } from "react";
import calendarSVG from "../../calendar.svg";

const Avatar: FC<{}> = () => {
    return (
        <>
            <div className="rounded avatar ">D</div>
            {/* <div className="hidden-lg">
                <div className="row card">
                    <div className="col" style={{ backgroundImage: `url(${calendarSVG})` }}></div>
                    <div className="col">
                        <h2>Thursday, June 18 - Demo</h2>
                        <h2>5:30 PM - 6:00 PM</h2>
                        <p>Cancel Demo</p>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Avatar;
