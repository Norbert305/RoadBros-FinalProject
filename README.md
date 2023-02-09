# WebApp boilerplate with React JS and Flask API

<h1>Oh yah. Please fork and then test out before use. Thank You!!!!!</h1>
<h1>Hello Everyone!!!</h1>
<p></p>
<h3>prerequisites needed:</h3>
<p></p>
Download Gitpod Chrome Extension: https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki
<p></p>
<strong>Dont forget to refresh repo after you install.</strong>
<p></p>
Open Project by clicking on the Green GitPod Button
<p></p>
<p></p>
<p></p>

![image](https://user-images.githubusercontent.com/83515541/217136142-82669610-21cf-4e66-be02-2f3b2c49d3bb.png)

To Access in the browser please use commands in terminal: 
<strong>Please copy paste without the $$ dollar sign</strong>
<br/>
<p>$rm -rf node_modules</p>
<p>$nvm install 14</p>
<p>$npm install</p>
<p>$cp ./.env.example ./.env</p>
<p>$ echo "BACKEND_URL=https://3001-${GITPOD_WORKSPACE_URL:8}" >> .env</p>
<p>$npm run start</p>
<p>$npm install react-stripe-checkout</p>
<p></p>
<p></p>
<strong>Not a command :) I will currently work on deployment when the time comes.</strong>
<p></p>
<p></p>
<p></p>
<p>In the Right terminal. Forgot there was 2 terminals lol 😅</p>
<p></p>
<p>pipenv run migrate</p>
<p>pipenv run upgrade</p>
<p>pipenv run start</p>









[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-flask-hello.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/flask-rest-hello/blob/main/docs/assets/how-to.png?raw=true?raw=true" /></a>
</p>

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

### Back-End Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine	| DATABASE_URL 						|
| ------------- | ----------------------------------------------------- |
| SQLite	| sqlite:////test.db	 				|
| MySQL		| mysql://username:password@localhost:port/example	|
| Postgress	| postgres://username:password@localhost:5432/example 	|

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`


### Front-End Manual Installation:

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

## Publish your website!

This boilerplate it's 100% integrated with Herkou, just by pushing your changes to the heroku repository it will deploy: `$ git push heroku main`
