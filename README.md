# Harmony Beauty

[![Netlify Status](https://api.netlify.com/api/v1/badges/5e931d4a-642c-4c3d-a2d0-7c6bf9d7cade/deploy-status)](https://app.netlify.com/sites/harmony-beauty/deploys)

An e-commerce beauty platform with a bespoke focus on serving the unique needs of individuals with disabilities.

## Requirements

### Alan AI

- Register a new account on [alan website](https://studio.alan.app/register).
- Copy the alan script content into a new project on alan site.
- Save your changes.
- Click on integration on top right corner, and copy the project key.

### TileDesk

- Register a new account on [TileDesk website](https://panel.tiledesk.com/v3/dashboard/#/signup?su=01).
- Create a bot.
- Copy the project ID.

## Install

### Running locally with NPM

- Fork/Clone the repo:

```sh
git clone git@github.com:your-github-username/harmony-beauty.git
```

- Open the newly created directory:

```sh
cd harmony-beauty
```

- Install the required dependencies:

```sh
yarn install
```

Now, you can run the client:

```sh
yarn run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to explore the landing page.

## Deployment

To deploy the client, you will need to set the following environment variables that help the client connect to the server.

```sh
* REACT_APP_SERVER_URL - Your deployed server APIs url.
* REACT_APP_ALAN_AI_KEY - Your Alan AI project key.
* REACT_APP_TILEDESK_PROJECT_ID - Your TileDesk project key.
```

[![Deploy on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/inclusive-web-hub/harmony-beauty)

## License

This project and the accompanying materials are made available under the terms and conditions of the [`MIT LICENSE`](https://github.com/inclusive-web-hub/harmony-beauty/blob/main/LICENSE).
