import logo from './logo.svg';
import './App.css';
import NavBar from './nav';
import Slideshow from './slider';
import CardGroc from './card';
import { Container, Grid, Typography } from '@mui/material';
import BottomNav from './bottomnav';




function App() {
  return (
 <>
    <NavBar/>
    <Slideshow/>
    <br/>
    <Typography color="primary" align="center" variant="h4">
        Best Products on our SS_Shop
      </Typography>
      <Container maxwidth="lg" sx={{marginTop:'2rem'}}>
        <Grid Container spacing={2}>
          <Grid item xs={4} sm={6} md={4}>
            <CardGroc
             imageUrl='https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
             dishName='Fruits'
             dishDescription='Fruits are the means by which flowering plants (also known as angiosperms) disseminate their seeds. Edible fruits in particular have long propagated using the movements of humans and animals in a symbiotic relationship that is the means for seed dispersal for the one group and nutrition for the other; in fact, humans and many animals have become dependent on fruits as a source of food.[1] Consequently, fruits account for a substantial fraction of the world' /> 
          </Grid>
          <Grid item xs={4} sm={6} md={4}>
            <CardGroc
             imageUrl='https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
             dishName='Vegetables'
             dishDescription='Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds. An alternative definition of the term is applied somewhat arbitrarily, often by culinary and cultural tradition. It may exclude foods derived from some plants that are fruits, flowers, nuts, and cereal grains, but include savoury fruits such as tomatoes and courgettes, flowers such as broccoli, and seeds such as pulses.' /> 
          </Grid>
          <Grid item xs={4} sm={6} md={4}>
            <CardGroc
             imageUrl='https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25hY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
             dishName='Snacks'
             dishDescription='A snack is a small portion of food generally eaten between meals.[1] Snacks come in a variety of forms including packaged snack foods and other processed foods, as well as items made from fresh ingredients at home.

             Traditionally, snacks are prepared from ingredients commonly available at home without a great deal of preparation. Often cold cuts, fruits, leftovers, nuts, sandwiches, and sweets are used as snacks. With the spread of convenience stores, packaged snack foods became a significant business.' /> 
          </Grid>
        </Grid>
      </Container>
      <br/>
      <BottomNav/>
 </>
  );
}

export default App;
