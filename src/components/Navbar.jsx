import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <div><br /><br /><br />

      <AppBar>
          <Toolbar>
            <Typography sx={{flexGrow:1}} align="left"style={{color:"yellow"}}>BlogDashboard</Typography>
            <Button>
              <Link to={'/'} style={{color:"yellow"}}>Home</Link>
            </Button>
        <Button>
          <Link to={'/add'} style={{color:"yellow"}}>Add</Link>
        </Button>
          </Toolbar>
        </AppBar>  
    </div>
  )
}

export default Navbar