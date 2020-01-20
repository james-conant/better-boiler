CREATE DATABASE IF NOT EXISTS nasa;

USE nasa;

CREATE TABLE images (
  id int  NOT NULL AUTO_INCREMENT PRIMARY KEY,
  hdurl VARCHAR NOT NULL,
  date text,
  title text,
  explanation text
);