CREATE TABLE messages (
  mid SERIAL PRIMARY KEY,
  data VARCHAR(255),
  time timestamp default current_timestamp
);