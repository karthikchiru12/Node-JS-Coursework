### NPM scripts

- Apart from the core modules provided by the Node JS, we can install additional 3rd party libraries using the NPM (Node package manager).
- We can also use the NPM to initialize a node project and also add additional features to the existing node project.
- To get started you can simply create a project folder and in your terminal change your present working directory to project folder and then type :

```
npm init
```

- You will be presented with a few questions and based on the input you give a file called **package.json** will be created in your project directory.
- You can also edit the details in **package.json** file once it is created,
- The package.json would look something like this :

```
{
  "name": "sample_project",
  "version": "1.0.0",
  "description": "sample",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "karthik",
  "license": "ISC"
}
```

- The **entry point** question when you use **npm init** or \*\*main : \*\* in your package.json is the base file which should contain the code to start the server.
- In the above, we can see that we have the scripts section, where we can define a our own scripts there.

```
"start" : "node app.js"
```

- We can add the above line under the scripts in the package.json file.

```
{
  "name": "sample_project",
  "version": "1.0.0",
  "description": "sample",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
        "start" : "node app.js"
  },
  "author": "karthik",
  "license": "ISC"
}
```

- Now after adding this, instead of using **node app.js** to run the code, we can simply use the command **npm start**.
- But you cannot use your custom names directly, **start** was a special case.
- Let us say you define **start-server** instead of **start**.

```
"start-server" : "node app.js"
```

- And if you use **npm start-server**, it gives you an error that this is not an known command.
- So instead of typing the script name after npm will not work.
- We need to run it something like this :

```
npm run start-server
```

### NPM packages

- The 3rd party packages (dependencies) can be installed and managed via NPM.
- All these packages will be available in the npm repository, from which we can download using npm.
- Imagine, you are constantly making changes to your code, and every time you want to see the changes reflected in the browser, you need to stop the server and then start it again.
- For live code changes to be reflected in the browser, without restarting the server, we can use a package called as **nodemon**.
- We can install this package using the below command. Which then will install the package and all of its dependencies under **node_modules** directory under your project structure.

```
npm install nodemon
```

- Now you can specify a few options in the above command.
- If you want to install the package globally and not in your project folder then you can use the below option.

```
npm install nodemon -g
```

- If you want to install the package as a production dependency, then you use the below command.

```
npm install nodemon --save
```

- If you want to install the package as a development dependency, then you use the below command.

```
npm install nodemon --save-dev
```

- Once the package is installed our package.json will look something like this.

```
{
  "name": "sample_project",
  "version": "1.0.0",
  "description": "sample",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "start-server": "node app.js"
  },
  "author": "karthik",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

- There is also one more additional file created **package-lock.json**.
- **Note :** Let us say, to free up the space you have deleted the **node_modules** folder, then to install the packages again you can simply use **npm install** command.
- Core Node JS modules dont need to be installed, they are pretty much available to use by directly importing them. But the third party packages need to be installed and imported.
- In order to use the nodeman, we can make changes to the package.json file.

```
"start" : "npx nodeman app.js"
```

- Although you will get a command not found error if you directly run **nodeman app.js** in your terminal, this works as the npm scripts checks for the package locally.
- Now you can use npm start and see how the nodemon works.

### Types of errors & Debugging

- There can be three types of errors : **Syntax errors, Runtime errors, Logical errors**.
- You can use breakpoints to stop the code execution at a specific line and then inspect variable values to debug the code. You can also look at all the variables and their values when the code execution stops at break-point.