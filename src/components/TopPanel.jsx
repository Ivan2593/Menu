import React from "react";
import Panel from "./Panel";
import calendar from './Calendar.png';

const TopPanel = () => {
    return(
        <div className="topPanel">
            <div>
                <Panel/>
                <div style={{marginTop: 35.25, marginLeft: 78.25, height: 87.5}}>
                    <img src={calendar} className="calendar" alt="Calendar" />
                </div>
                <div style={{marginTop: 31.25, marginLeft: 47}}>
                    <button style={{width: 150, height: 36, backgroundColor: '#D7F4CB'}}>
                        Обновить меню
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TopPanel;
