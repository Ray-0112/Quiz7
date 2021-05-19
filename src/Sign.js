import './App.css';
import HelloCGU from './cgu_hello'
import { Grid } from "@material-ui/core"
import BasicTextFields from './login_input'
import CheckboxLabels from "./checkbox"
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

function Sign(props) {
  return (
    <div className="App">
      <Grid container style={{minHeight: '100vh'}}>
        <Grid item xs={12} sm={6}>
          <img 
            src="https://i0.zi.org.tw/kocpc/2021/01/1611477294-5830d062501eb5a2b777dade755489e2.jpg" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            alt="img" 
          />
        </Grid>
        <Grid container item xs={12} sm={6} alignItems="center" direction="column"  justify="space-between" style={{padding: 10 }}>
          <div />
          <div style={{display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300}}>
            <Grid container justify="center">
            <img 
              src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37722/preview.svg" 
              width={500} 
              alt="lockimg" 
            />
            <div style={{marginTop:200}}></div>
            {HelloCGU()}
            <div style={{height:200}}></div>
            {BasicTextFields()}
            <div style={{height:10}}></div>
            {CheckboxLabels()}
            <Button onClick={props.onLogin} color="primary" variant="contained" style={{width:900,height:40,marginTop:20} }>
              SIGN IN
            </Button>
            <div style={{height:100}}></div>
            <Link>Forgot password?</Link>
            &nbsp;
            <Link>Don't have an account?</Link>
            &nbsp;
            <Link>Sign Up</Link>
            <p>Copyright © I_LOVE_CSIE@CGU 2021.</p>
            </Grid>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}

export default Sign;