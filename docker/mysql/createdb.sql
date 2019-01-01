-- CREATE DATABASE datastore;

-- when the node mysql client is upgraded, consider using the following line
-- instead (https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server)
-- CREATE USER 'user'@'%' IDENTIFIED BY 'user';
CREATE USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'user';

GRANT ALL ON *.* TO 'user'@'%';

FLUSH PRIVILEGES;
