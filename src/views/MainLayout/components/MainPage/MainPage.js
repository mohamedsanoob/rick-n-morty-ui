import React from "react";
import './MainPage.css'

const MainPage = ({ results }) => {
    return (
        <div className="items">
            {results.map((data) => {

                return (
                    <div className="hello">
                        <div className="card" key={data.id}>
                            <img src={data.image} alt="" />
                            <div className="container">
                                <h4>{data.name}</h4>
                                <p>{data.location.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MainPage;