import React from 'react';
import { Card,CardContent,Typography,Table,TableBody,TableCell,TableHead,TableRow,Alert,BottomNavigation,BottomNavigationAction,SpeedDial,SpeedDialAction} from '@mui/material';
import {Grid} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CallIcon from '@mui/icons-material/Call';
import ChartIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import './App.css';

const Contactus=()=>{
    const [value,setvalue]=React.useState(0);
    return(
        <Grid container className='wel'>
            <div style={{marginLeft:'5%',marginRight:'5%'}}>
               <Typography variant='h4' component="h2">
                    About <span className='spa'>SS_Shop:</span>
                </Typography>
                <br/><br/>
                <Typography variant="body1" component="p">
                    SS_Shop was founded in 2023,santhosh and sanjeev are the two partners for the company so that the name was called as ss shop.the shop was one of the leading grocery shop in the state and they are very customer friendly,their workers also very helpfull to the customers.the ss_shop got the best grocery shop award in recent times.
                </Typography>
                <br/><br/>
                <Typography variant='h6' component="h2">
                    Contact_us: <span className='spa'>SS_Shop</span>
                </Typography>
                <br/>
                <Typography variant="body1" component="p">
                    Mobile No:<span className='spa'>8825952954</span>
                </Typography>
                <br/>
                <Typography variant="body1" component="p">
                    Email ID: <span className='spa'>SS_shop@gmail.com</span>
                </Typography>
                <br/>
                {/* <Typography variant="body1" component="p">
    
                </Typography> */}
            </div>
            <SpeedDial ariaLabel='speedDial Example' sx={{position:"fixed" , bottom:16,right:16}}
              icon={<AddCircleIcon/>}>
                <SpeedDialAction icon={<CallIcon/>} tooltipTitle="8825952954"/>
                <SpeedDialAction icon={<ChartIcon/>} tooltipTitle="chat with us"/>
                <SpeedDialAction icon={<EmailIcon/>} tooltipTitle="SS_Shop@gmail.com"/>
              </SpeedDial>
        </Grid>
    )
}
export default Contactus;