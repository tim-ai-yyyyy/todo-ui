CREATE DATABASE IF NOT EXISTS TO_DO_DB;
USE TO_DO_DB;
CREATE TABLE IF NOT EXISTS to_do_list_table(id int not null auto_increment, name varchar(50), description varchar(250), primary key (id));
INSERT INTO to_do_list_table(name, description) VALUES ("Alla", "Dove");