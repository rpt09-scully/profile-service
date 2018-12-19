# Profile Service

Profile Service for 9 Trails

## Related Projects

 - paths: https://github.com/rpt09-scully/paths-service/
 - profile: [Current]
 - photos: https://github.com/rpt09-scully/trail-photos-service/
 - trail: https://github.com/rpt09-scully/trail-service/
 - reviews: https://github.com/rpt09-scully/reviews-service/

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

To Retrieve data for a given user perform a GET request to the `users/{userID}` endpoint. Data will return in the format below

```
{
  "data": {
    "type": "users",
    "id": 22,
    "attributes": {
      "first_name": "Joel",
      "last_name": "Vandervort",
      "email": "tbecker@example.net",
      "location": "Fletachester, VA",
      "date_joined": "1979-02-20",
      "favorite_activities": [
        "Hiking",
        "Fishing",
        "Hunting"
      ],
      "bio": "Aut sequi dolore temporibus quia qui consequatur. Possimus non fugiat perspiciatis voluptas. Enim aut quia minus ipsam. Dolore corrupti et tenetur sit.",
      "photo_url": "http://lorempixel.com/640/480/",
      "pro": true
    }
  }
}
```

## Requirements

> Coming Soon

## Development


To set up:

  ``` sh
  # cd into directory
  $> cd profile-service
  # install dependencies
  $> npm install
  $> npm install mysql
  # setup .env file (for sql creds) using .envexample
  $> cp .envexample .env
  # seed database `profile_db` (change credentials as needed)
  $> mysql -u <username here> -p < ../schema.sql  
  ```

  Inside `.env` place your SQL credentials (change if needed)
  ``` 
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=

  RDS_DB_NAME=
  RDS_HOSTNAME=
  RDS_PASSWORD=
  RDS_PORT=
  RDS_USERNAME=
  ```

  To execute:

  ``` sh
  $> npm run start
  ```

### Installing Dependencies

> Coming Soon

