import React from 'react';
import { Grid, Box, Link, Container, Paper, IconButton } from '@mui/material';
import { ImFacebook2, ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
export default function Footer() {

    return (
        <Paper sx={{
            marginTop: 'calc(5% + 10px)',
            width: '100%',
            position: 'static',
            bottom: 0,
            bgcolor: 'text.secondary',
            color: 'white',
        }} component="footer" square variant="outlined">

            <Box textAlign='left' marginLeft='8%' pt={{ xs: 5, sm: 3 }} pb={{ xs: 5, sm: 0 }}>
                Follow us! We're friendly:<IconButton href='https://www.facebook.com/ASAC.LTUC/'><ImFacebook2 /></IconButton>  |
                <IconButton href='https://twitter.com/asac_ltuc'><ImTwitter /></IconButton>  |
                <IconButton href='https://www.instagram.com/asac.ltuc/?hl=en'><RiInstagramFill /></IconButton> |
                <IconButton href='https://www.linkedin.com/company/asacltuc/?originalSubdomain=jo'><AiFillLinkedin /></IconButton>
            </Box>

            <Box marginTop='20px'>
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box marginBottom='10px' fontSize='20px'>About Us</Box>
                            <Box padding='7px'>
                                <Link href='/' color='inherit'> 
                                About EasyDo 
                                </Link>
                            </Box>
                            <Box padding='7px'>
                                <Link href='/' color='inherit'>Support</Link>
                            </Box>
                            <Box padding='7px'>
                                <Link href='/' color='inherit'>Terms & Privacy</Link>
                            </Box>
                            <Box padding='7px'>
                                <Link href='/' color='inherit'>Help</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box marginBottom='10px' fontSize='20px'>POPULAR SERVICES</Box>
                            <Box padding='7px'>
                                <Link href='/' color='inherit'>Electrical</Link>
                            </Box>
                            <Box padding='7px'>
                                <Link href='/' color='inherit'>Cleaning</Link>
                            </Box>
                            <Box padding='7px'>
                                <Link href='/' color='inherit'>Painting</Link>
                            </Box>
                            <Box padding='7px'>
                                <Link href='/' color='inherit'>See all services</Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box marginBottom='10px' fontSize='20px'>ADDRESS</Box>
                            <Box padding='7px'>
                                <FaMapMarkerAlt />  Amman, Jordan
                            </Box>
                            <Box padding='7px'>
                                <MdEmail/>EasyDo.join@gmail.com
                            </Box>
                            <Box padding='7px'>
                                <BsFillTelephoneFill /> +962 79 999 9999
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign='center' pt={{ xs: 5, sm: 3 }} pb={{ xs: 5, sm: 0 }}>
                        Copyright © 2022 EasyDo by Epic Geeks
                    </Box>
                </Container>
            </Box>
        </Paper>
    )
}
