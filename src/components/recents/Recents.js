import React from 'react'
import { Box,Grid} from '@mui/material'
import Card from '../../card/Card'
import image3 from "../../static/image3.jpg"


const Recents = () => {
  return (
    <Box>
    <Grid container>
    <Grid item md={6} xs={12}><Card cardImage={image3}/></Grid>
    <Grid item md={3} xs={12} sx={{background:"green"}}>Item3</Grid>
    </Grid>
    </Box>
  )
}

export default Recents
