import React, { useEffect, useState } from "react";
import { apiCall } from "../../../../services/fetchApi";
import { FilterCharacter } from "./FilterCharacter/FilterCharacter";

import './MainPage.css'
import ShowDetails from "./ShowDetails/ShowDetails";

const MainPage = () => {

    const [fetchedData, setFetchedData] = useState([]);
    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState({ name: "", page: 1 });
    const [page, setPage] = useState()

    const handlePrev = () => {
        setSearch(prevState => {
            return { ...prevState, page: prevState.page - 1 }
        })
    }

    const handleNext = () => {
        setSearch(prevState => {
            return { ...prevState, page: prevState.page + 1 }
        })
    };


    useEffect(() => {
        (async function () {
            let data = await apiCall(search.name, search.page, search.gender, search.status)

            setFetchedData(data);
            console.log(data);
        })();
    }, [search]);


    return (

        <div>
            <FilterCharacter setSearch={setSearch} />
            <div className="items">
                {fetchedData.map((item, index) => {

                    return (
                        <div key={index} className="hello">
                            <div className="card" >
                                <img src={item.image} alt="" />
                                <div className="container">
                                    <h4>{item.name}</h4>
                                    <p>{item.location.name}</p>
                                </div>
                                <ShowDetails item={item} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="pagination-button">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default MainPage;