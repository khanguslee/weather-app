# Weather App

A simple weather app that uses the MERN stack.

## Getting Started

The application has been split into `server` and `client` folders which contain the node + express backend and React frontend respectively.

Clone the repository to get a local copy of the repository.

```bash
git clone  https://github.com/khanguslee/weather-app.git
```

### OpenWeather API Key

The application also uses the OpenWeather API to get weather data. To be able to use the API, you will need to get your own API key.

1. Sign up [here](https://openweathermap.org/).
2. Create a `.env` file inside the `server` directory.
3. Add `OPEN_WEATHER_API_KEY = <YOUR_API_KEY_HERE>` to the `.env` file

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

## Documentation

[REST API Documentation](https://github.com/khanguslee/weather-app/blob/server-readme/server/README.md#api-documentation)
