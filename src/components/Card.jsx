import React from "react";
import Recipe from "./Recipe";
import rerolled from "./Rerole.png";
import del from "./Delete.png";

const Card = (props) => {
    return(
        <div className="card">
                <div style={{marginBottom: 10}}>
                    <img src={del} className="del" alt="Delete" />
                    <img src={rerolled} className="rerolled" alt="Rerolled" />
                    <div style={{fontSize: '25px', marginLeft: 375, marginTop: 7}}>
                        МЕНЮ НА {props.card}
                    </div>
                </div>
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <div className="CBJY">
                <text style={{fontSize: '23px', marginTop: 15, marginLeft: 77, weigh: 197}}>Калории</text>
                <text style={{fontSize: '23px', marginTop: 15, marginLeft: 55}}>Белки</text>
            </div>
        </div>
    );
};

export default Card;