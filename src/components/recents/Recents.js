import React from 'react'
import { Box,Grid} from '@mui/material'
import Card from '../../card/Card'
import image1 from "../../static/image1.jpg";
import image2 from "../../static/image2.jpg";
import image3 from "../../static/image3.jpg";
import image4 from "../../static/image4.jpg";


const Recents = () => {
  return (
    <Box>
    <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:1}}>
    <Grid item><Card cardImage={image3}/></Grid>
    <Grid item md={6} xs={12}><Card cardImage={image1}/></Grid>
    <Grid item md={6} xs={12}><Card cardImage={image2}/></Grid>
    <Grid item md={6} xs={12}><Card cardImage={image3}/></Grid>
    <Grid item md={6} xs={12}><Card cardImage={image4}/></Grid>
    </Grid>
    </Box>
  )
}

export default Recents
