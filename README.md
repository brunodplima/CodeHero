# Code Hero

Web project that, in a simple way, exemplifies the use of JavaScript, with React, in accessing [Marvel Comics API](https://developer.marvel.com/).

Two screens were developed. The first one lists all the characters, as well as Series and Events in which they participated. The second presents in a more detailed view a specific character. 

- ### Desktop
![Home](assets/desktop_home.png)
![Details](assets/desktop_details.png)

- ### Mobile
![Home](assets/mobile_home.png)
![Details](assets/mobile_details.png)

## Technologies
- [Node.js](https://nodejs.org/en/])
- [Yarn](https://classic.yarnpkg.com/en/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)

### Node.js
To use Node.js, you can perform an installation through a package manager, or another options, such as [Docker](https://www.docker.com/). Please, refer to the [_downloads_ page](https://nodejs.org/en/download/) of the official _site_ and follow the instructions. 
### Yarn
Yarn is a fast, reliable and secure dependency manager, as described in its homepage. In the development of this project it was used to replace `npm`. It is recommended to review the [installation page](https://classic.yarnpkg.com/en/docs/install) to choose the most appropriate way to obtain and use it. 

## Installation
Copy the `.env` file and save it as `.env.local`. Then, fill in the environment variables to access the API, namely `REACT_APP_PUBLIC_KEY` and` REACT_APP_PRIVATE_KEY`.

Finally, run the command below to install the project's dependencies: 
```bash
yarn
``` 

## Running
To run the app in development mode, run the following command:
```bash
yarn start
```
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Production
To generate a production build, the following command must be used:
```bash
yarn build
```
It bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
