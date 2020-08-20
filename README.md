# Weather App

A simple weather app that uses the MERN stack.

## Getting Started

The application has been split into `server` and `client` folders which contain the node + express backend and React frontend respectively.

Clone the repository to get a local copy of the repository.

```bash
git clone  https://github.com/khanguslee/weather-app.git
```

### Installation

Since the server and client projects have been split, you will need to install libraries in both folders. To do this from the root of the project, please run the following:

```bash
yarn run app-install
```

### Development

When working on the project, you can there is hot reloading so that when you make a change to either the client or server files, it will automatically reload the project for you.

```bash
yarn run dev
```

### Production

For production, the React application will need to be built and then hosted on the server. To create the build, you will need to run:

```bash
yarn run client-build
```

Once you have built the React application, you will need to run the server using:

```bash
yarn run start
```
