# Getting Started with Azure AD B2C Application
A simple React Application to demonstrate the Azure AD B2C connect 

###`React Application: Environment File`
Create .env file in the root of the application
Add the Client(Application) ID of the registered user.
`REACT_APP_AZURE_ACTIVE_DIRECTORY_APP_CLIENT_ID=<your client id>`

###`Azure Cloud: Application Registration`
**Note: Register the application under Azure B2C Tenant**

![img.png](img.png)


### `Azure Cloud: Identity Providers`
You can integrate different external identity providers such as :
- Open ID
- Social networking apps : Google, LinkedIn, Facebook, Github, etc.
- External Emails

### `Azure Cloud: Company branding`
You can add different customization options to have a branding login/sign-up page
These include various options to add : 
- Background image
- Banner logo
- Username hint
- etc

### `Azure Cloud: User flows`
Create user flows according to various scenarios, such as:
- Sign In Or Sign Up
- Forget password
- Profiling
- etc.

You can test them by clicking on the **Run User Flow**


### `React Application: npm start`
Open the browser and hit http://localhost:3000
It navigates to AD A2B, where provide the Sign Up or Sign In
and redirects to landing page mentioned in the portal.


