import React from 'react';
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import {Home,MenuBook,Info} from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import Hom from './home';
import NavBar from './nav';
import Contactus from './contactus';
import Log from './login';
import Signup from './signup';
// import CardGroc from './card';
// import Slideshow from './slider';
// import HomePage from './homepage';
// import CoursesPage from './coursespage';
// import AboutUsInfo from './aboutusinfo';


const BottomNav=()=>{
    const [value,setvalue]=React.useState(0);
    const handlechange=(event,newvalue)=>{
        setvalue(newvalue);
    };
    return(
        <div>
            {value ===0 && <Hom/>}
            {value ===1 && <Signup/>}
            {value ===2 && <Log/>}
            {value ===3 && <Contactus/>}
            <br/>

            

            <BottomNavigation value={value} onChange={handlechange} showLabels>
                <BottomNavigationAction label="Home" icon={<Home/>}/>
                <BottomNavigationAction label="Signup" icon={<MenuBook/>}/>
                <BottomNavigationAction label="Login" icon={<LoginIcon/>}/>
                <BottomNavigationAction label="Contact Us" icon={<Info/>}/>
            </BottomNavigation>

        </div>
    )
}
export default BottomNav;