

import { Box, Button, TextField, Typography } from "@mui/material";

import React from "react";







const Signup = () => {

    return (

        <div>

            <form>

                <Box maxWidth={400} display={'flex'} flexDirection={'column'} alignItems={"center"} margin={'auto'}

                    marginTop={20} padding={3} borderRadius={5} boxShadow={"5px 5px 10px black"} sx={{

                        ":hover": {

                            boxShadow: '10px 10px 20px skyblue'



                        }

                    }} >

                    <Typography variant="h2" margin={'5'} padding={3} textAlign={'center'}>Signup</Typography>

                    <TextField margin="normal" borderRadius="2px" type="text" placeholder="First_name" />

                    <TextField margin="normal" borderRadius="2px" type="text" placeholder="Last_name" />

                    <TextField margin="normal" type="email" placeholder="Email" />

                    <TextField margin="normal" type="password" placeholder="Password" />

                    <TextField margin="normal" type="password" placeholder="Confirm_Password" />

                    <Button variant="contained" color="warning" sx={{ borderRadius: 3 }} >Sign In</Button>

                    <Button>Already an user?</Button>



                </Box>

            </form>

        </div>



    )

}




export default Signup;