import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div> <br /><br /><br /><br />
        <Typography variant='h3'style={{color:'blue'}}>Add Blog</Typography><br /><br />

            <TextField id="outlined-basic" label="BlogName" variant="outlined"/>
            <br /><br />
            <TextField id="outlined-basic" label="Author Name" variant="outlined"/>
            <br /><br />
            <TextField id="outlined-basic" label="Description" variant="outlined"/>
            <br /><br />
        <Button variant='outlined' color='secondary'>AddBlog</Button>

    </div>
  )
}

export default Add