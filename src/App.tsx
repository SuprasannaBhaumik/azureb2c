import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {config} from "./config";
import {PublicClientApplication} from "@azure/msal-browser";

interface InternalState {
  isAuthenticated: boolean;
  error: any;
  user: any
}

interface Props {}

class App extends Component<Props, InternalState> {

  private publicClientApplication: PublicClientApplication = new PublicClientApplication(
      {
        auth: {
          clientId: '' + config.appId,
        }, cache: {
          cacheLocation: 'sessionStorage',
          storeAuthStateInCookie: true
        }
      }
  );

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {}
    }
    this.login = this.login.bind(this);
  }

  async login() {
    console.log(1);
    try {
      await this.publicClientApplication.loginPopup({
        scopes: config.scopes,
        prompt: 'login',
      });
      this.setState({
        isAuthenticated: true
      })
    } catch (err) {
      this.setState({
        isAuthenticated: false,
        user: {},
        error: err,
      })
    }
  }



  logout() {
    this.publicClientApplication.logout();
  }

  render() {
    const {isAuthenticated} = this.state;

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {isAuthenticated ?
              <React.Fragment>
                <p>
                  Successfully Logged In
                </p>
                <p>
                  <button onClick={() => this.logout()}>
                    Log out
                  </button>

                </p>
              </React.Fragment> :
              <p>
                <button onClick={ () => this.login()}>
                  Log in
                </button>
              </p>
            }
          </header>
        </div>
    );
  }

}

export default App;
