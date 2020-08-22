# Weather App Backend

## API Documentation

All endpoints start with the following base url:

Base URL: `/api/v1`

### Get Weather

Return the weather data for a city.

- **URL**

`/weather/:city`

- **Method**

`GET`

- **URL Params**

Required:
`city=[string]`

- **Success Response**

  - **Code**: 200
  - **Content**

    ```json
    {
      "city": string,
      "country": string,
      "rain": number | null,
      "temperature": number,
      "pressure": number,
      "humidity": number,
      "wind": {
        "speed": number,
        "deg": number,
        "gust": number
      },
      "weather": {
        "id": number,
        "main": string,
        "description": string,
        "icon": string
      }
    }
    ```

- **Error Response**

  City was not found

  - **Code**: 404
  - **Content**

  ```json
  {
    "error": string,
    "message": string
  }
  ```
