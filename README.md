# Profile Service

> Profile Service for 9 Trails

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

> Some usage instructions

## Requirements

## Development


To set up:

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

  Inside `config.s` place your SQL credentials (change if needed)
  ``` 
  DB_HOST=localhost
  DB_USER=root
  DB_PASS=
  ```

  To execute:

  ``` sh
  $> npm run start
  ```

### Installing Dependencies



