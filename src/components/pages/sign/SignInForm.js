import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";
import logo from './../../../img/logo_original.png';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        {/* link to mainpage */}
        Include KAIST
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const SignInForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  type,
}) => {
  return (
    <div className="loginBox">
      <CssBaseline/>
      <img src={logo} alt="logo" style={{maxWidth: 135}} className="logoInclude"/>
      <div className="signInBox">
        <Typography component="h1" style={{fontSize: 30}}>
          <Box fontFamily='Roboto Mono'>
            Sign in to #include
          </Box>
        </Typography>
      </div>
        <form onSubmit={onSubmit} noValidate>
          <div className='text1'>
            <TextField
              fullWidth
              variant = "standard"
              margin="normal"
              id="email"
              label = "Email Address"
              name="email"
              autoFocus
              autoComplete="email"
              onChange={onChange}
              defaultvalue={user.email}
              error = {errors.email}
              helperText={errors.email}
            />
          </div>
          <div className='text2'>
            <TextField
              style={{
                // borderColor:'#ced4da'
            }}
              type = {type}
              variant = "standard"
              margin="normal"
              fullWidth
              id="password"
              label ="Password"
              name="password"
              autoComplete="current-password"
              onChange={onChange}
              defaultvalue={user.password}
              error = {errors.password}
              helperText={errors.password}
            />
          </div>
          <div className="rememberMe">
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          </div>
          <div className="signInSubmit">
          <Button size="large" style={{
                // backgroundColor: "rgb(106, 98, 210)"
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            label="submit"
            style={{fontSize: "18px"}}>
              Sign In 
          </Button>
          </div>
          <div className="forgotPassword">
          <Grid container spacing={0}>
            <Grid item xs>
                <a href="/password">Forgot password?</a>
            </Grid>
            <Grid item>
                <a href="/signup">Don't have an account? Sign up</a>
            </Grid>
          </Grid>
          </div>
        </form>
        <div className="copyright">
        <Box mt={8}>
          <Copyright/>
        </Box>
        </div>
    </div>
  );
};
export default SignInForm;
