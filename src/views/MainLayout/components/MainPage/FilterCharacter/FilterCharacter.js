import React, { useState } from "react";
import './FilterCharacter.css'


export const FilterCharacter = ({ setSearch, updatePageNumber }) => {
    const [filterCharacter, setFilterCharacter] = useState({
        name: "",
        page: 1,
        gender: "",
        status: ""
    })

    const handleChange = (e) => {
        setFilterCharacter((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = () => {
        setSearch(filterCharacter)
    }

    console.log(filterCharacter)

    return (
        <div className="main">
            <div className="filters">
                <label htmlFor="gender">Status</label>
                <select name="status" onChange={handleChange}>
                    <option value=""></option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>

                <label htmlFor="gender">Species</label>
                <select name="species" onChange={handleChange}>
                    <option value=""></option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                </select>

                <label htmlFor="gender">Type</label>
                <select name="type" onChange={handleChange}>
                    <option value=""></option>
                    <option value="superhuman">Superhuman</option>
                    <option value="parasite">"Parasite"</option>
                    <option value="human">Human with antennae</option>
                </select>

                <label htmlFor="gender">Gender</label>
                <select name="gender" onChange={handleChange}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className="search-bar">
                <input
                    placeholder="Search for characters"
                    className=""
                    name="name"
                    type="text"
                    onChange={handleChange}
                />
            </div>
            <div className="submit-btn">
                <button onClick={handleSubmit}>Search</button>
            </div>
        </div>
    )
};
