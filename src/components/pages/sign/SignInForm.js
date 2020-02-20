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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
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
      <div className="signInBox">
        <Typography component="h1" variant="h4">
          <Box fontFamily='Roboto' >
            SIGN IN
          </Box>
        </Typography>
      </div>
        <form onSubmit={onSubmit} noValidate>
          <div className='text1'>
            <TextField
              fullWidth
              variant = "outlined"
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
              variant = "outlined"
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
          <Button size="medium" style={{
                // backgroundColor: "rgb(106, 98, 210)"
            }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            label="submit">
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
