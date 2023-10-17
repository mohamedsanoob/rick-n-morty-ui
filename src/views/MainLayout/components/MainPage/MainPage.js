import React, { useEffect, useState } from "react";
import { apiCall } from "../../../../services/fetchApi";
import { FilterCharacter } from "./FilterCharacter/FilterCharacter";
import ShowDetails from "./ShowDetails/ShowDetails";
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import './MainPage.css'

const MainPage = () => {

    const [fetchedData, setFetchedData] = useState([]);
    let [search, setSearch] = useState({ name: "", page: 1 });

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
            <Grid container spacing={4} padding={5} marginBottom={10}>
                {fetchedData.map((item, index) => {
                    return (

                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardMedia component="img"

                                    image={item.image}
                                    alt="name">
                                </CardMedia>
                                <CardContent>
                                    <Typography>
                                        {item.name}
                                    </Typography>
                                    <Typography>
                                        {item.location.name}
                                    </Typography>
                                </CardContent>
                                <ShowDetails item={item} />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <div className="buttons"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "30px"
                }}
                spacing={4}>
                <Button onClick={handlePrev} variant="outlined" style={{ marginRight: "10px" }}>
                    Prev
                </Button>
                <Button onClick={handleNext} variant="outlined">
                    Next
                </Button>
            </div>
        </div>
    )
}

export default MainPage;