import React, { useState } from "react";
import { Box, Grid, TextField, Button, MenuItem } from "@mui/material";

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

    console.log("fjjfefkjenfhjebgfkew", filterCharacter)

    return (

        <Box component="form" padding={10} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
            display={"flex"}
            justifyContent={"center"}>
            <div>
                <TextField id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    name="status"
                    helperText="Status"
                    onChange={handleChange}>
                    <MenuItem value="alive">Alive</MenuItem>
                    <MenuItem value="dead">Dead</MenuItem>
                    <MenuItem value="unknown">Unknown</MenuItem>
                </TextField>
                <TextField id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    name="species"
                    helperText="Species"
                    onChange={handleChange}>
                    <MenuItem value="human">Human</MenuItem>
                    <MenuItem value="alien">Alien</MenuItem>

                </TextField>
                <TextField id="outlined-select-currency"
                    select
                    label="Select"
                    name="type"
                    helperText="Type"
                    onChange={handleChange}>
                    <MenuItem>Super Human</MenuItem>
                    <MenuItem>Parasite</MenuItem>
                    <MenuItem>Human</MenuItem>
                </TextField>
                <TextField id="outlined-select-currency"
                    select
                    label="Select"
                    name="gender"
                    helperText="Filter by gender"
                    onChange={handleChange}>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="unkown">Unknown</MenuItem>
                </TextField>
                <TextField id="outlined-basic"
                    label="Search Here"
                    variant="outlined"
                    name="name"
                    onChange={handleChange} />
                <Button variant="contained" size="large" style={{ margin: "10px" }} onClick={handleSubmit}>Serach</Button>
            </div>
        </Box>
    )
};
