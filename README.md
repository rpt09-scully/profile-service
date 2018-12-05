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

<<<<<<< HEAD
To Retrieve data for a given user perform a GET request to the `users/{userID}` endpoint. Data will return int he format below
=======
> Coming Soon
>>>>>>> 5eff92d2ced7526b65e4395b12ad66f04cf2ef12

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

<<<<<<< HEAD
## Requirements

=======
>>>>>>> 5eff92d2ced7526b65e4395b12ad66f04cf2ef12
> Coming Soon

## Development


To set up:
<<<<<<< HEAD

  ``` sh
  # cd into directory
  $> cd profile-service
  # install dependencies
  $> npm install
  # setup config.js file (for sql creds)
  $> cp config-example.js config.js
  # seed database `profile_db` (change credentials as needed)
  $> mysql -u root -p < schema.sql  
  ```

  Inside `config.js` place your SQL credentials (change if needed)
  ``` 
  module.exports = {
    user: 'root', 

    password: 'example', 

    database: 'profiles_db'
  };
  ```

  To execute:

  ``` sh
  $> npm run start
  ```

### Installing Dependencies

=======

  ``` sh
  # cd into directory
  $> cd profile-service
  # install dependencies
  $> npm install
  # setup config.js file (for sql creds), cd to `database-mysql`
  $> cp config-example.js config.js
  # seed database `profile_db` (change credentials as needed)
  $> mysql -u root -p < schema.sql  
  ```

  Inside `config.js` place your SQL credentials (change if needed)
  ``` 
  module.exports = {
    user: 'root', 

    password: 'example', 

    database: 'profiles_db'
  };
  ```

  To execute:

  ``` sh
  $> npm run start
  ```

### Installing Dependencies

>>>>>>> 5eff92d2ced7526b65e4395b12ad66f04cf2ef12
> Coming Soon

