import { AppBar, Toolbar, Typography, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import './App.css';
import { Login } from "@mui/icons-material";
import Log from './login'
function NavBar() {
    return (
    
        <AppBar position="static">
            <Toolbar>
                <img className="logo" src="https://png.pngtree.com/png-vector/20220121/ourmid/pngtree-grocery-store-logo-png-png-image_4313749.png" />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SS_Shop
                </Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label" color="info">Products</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        <MenuItem value={10} color="inherit">Vegetables</MenuItem>
                        <MenuItem value={20}>Fruits</MenuItem>
                        <MenuItem value={30}>Snacks</MenuItem>
                    </Select>
                </FormControl>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;



