import React, { useState } from 'react'
import { Button, Card, Typography } from '@mui/material';
import './ShowDetails.css'

const ShowDetails = ({ item }) => {
    const [show, setShow] = useState(false);

    return (

        <>
            <Button onClick={() => setShow(!show)} variant='outlined' fullWidth>
                {show ? "Close" : "view"}
            </Button>
            {show &&
                <Card>
                    <Typography padding={2}>
                        <p>Gender : {item.gender}</p>
                        <p>Status : {item.status}</p>
                        <p>Species : {item.species}</p>
                    </Typography>
                </Card>
            }
        </>
    )
}

export default ShowDetails
