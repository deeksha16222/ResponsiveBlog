import React from 'react'
import { Box,Grid} from '@mui/material'
import Card from '../../card/Card'
import image3 from "../../static/image3.jpg"


const Recents = () => {
  return (
    <Box>
    <Grid container rowSpacing={1} columnSpacing={1}>
    <Grid item><Card cardImage={image3}/></Grid>
    <Grid item xs={6}><Card cardImage={image3}/></Grid>
    <Grid item xs={6}><Card cardImage={image3}/></Grid>
    <Grid item xs={6}><Card cardImage={image3}/></Grid>
    <Grid item xs={6}><Card cardImage={image3}/></Grid>
    </Grid>
    </Box>
  )
}

export default Recents
