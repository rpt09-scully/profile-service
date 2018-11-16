DROP DATABASE IF EXISTS profiles;

CREATE DATABASE profiles;

USE profiles;

DROP TABLE IF EXISTS `profile_data`;

CREATE TABLE `profile_data` (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  email varchar(255) NOT NULL,
  location varchar(255) NOT NULL,
  date_joined date NOT NULL,
  bio varchar(255) NOT NULL,
  photo_url varchar(255) NOT NULL,
  pro boolean NOT NULL,
  PRIMARY KEY (`id`)
) 




/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be 
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be 
 *    mysql -u root < schema.sql
*/