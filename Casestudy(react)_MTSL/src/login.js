import { Box, Button, TextField, Typography } from "@mui/material";

import React from "react";







const Log = () => {

    return (

        <div>

            <form>

                <Box display="flex" flexDirection={'column'} maxWidth={400} alignItems={"center"} justifyContent={'center'} margin={'auto'}

                     padding={3} borderRadius={5} boxShadow={"5px 5px 10px black"} sx={{

                        ":hover": {

                            boxShadow: '10px 10px 20px skyblue'

                        }

                    }} >

                    <Typography variant="h2" padding={3} textAlign={'center'}>Login</Typography>

                    <TextField margin="normal" borderRadius="2px" type="text" placeholder="username" />

                    <TextField margin="normal" type="email" placeholder="Email" />

                    <TextField margin="normal" type="password" placeholder="Password" />

                    <Button variant="contained" color="warning" sx={{ borderRadius: 3 }}>Login</Button>

                </Box>

            </form>

        </div>



    )

}




export default Log;