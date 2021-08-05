import React,{useState} from 'react';
import {Call,MailOutline} from '@material-ui/icons'
import './forms.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Button} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '90%',
      },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

const Forms = () => {
    const classes = useStyles();
    const [product,setProduct] = React.useState('');

    const handleChange = (event) => {
      setProduct(event.target.value);
    };

    return (
        <div className="forms__contain">
            <div className="form__container">
         <div className="form__Details">
                <h1>Contact us for additional information about solutions we can deliver for you.</h1>
                <p>Tsugami Precision Engineering India Pvt. Ltd.</p>
                <p className="form__para">Plot No. A-8, Sipcot Industrial Growth Center, Oragadam, Vallam B Village, Sriperumbudhur Taluk, Kancheepuram, 602 105, India</p>
                <a href="tel:044 - 6717 6717"><Call />044 - 6717 6717</a> <br />
                <a href="mailto:hello@tsugami.in"><MailOutline />hello@tsugami.in</a>
         </div>
         <div className="forms">
         <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Name" color="secondary" type="text"  required/>
      <TextField id="standard-secondary" label="Phone No" type="number" color="secondary"  required/>
      <TextField id="standard-secondary" label="Email" type="email" color="secondary" required />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Product intrested in</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product}
          onChange={handleChange}
        >
          <MenuItem value={10}>CNC Lathe</MenuItem>
          <MenuItem value={20}>CNC Sliding Head Stock</MenuItem>
          <MenuItem value={30}>CNC Turn Mill Centre</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" type="submit">SUBMIT</Button>
      </form>
         </div>
        </div>
        <footer>
             <p>Copyrights &copy; 2021- 2022, Tsugami Corporation All rights reserved</p>
         </footer>
        </div>
    )
}

export default Forms
