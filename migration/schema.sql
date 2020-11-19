DROP DATABASE IF EXISTS game_db;
CREATE DATABASE game_db;

USE game_db;
CREATE TABLE Characters
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL unique,
	image varchar(255) NOT NULL unique,
    attacks  varchar(255) NOT NULL,
    
	PRIMARY KEY (id)
);

Insert into Characters (name, image, attacks)
VALUES("Batman","https://media2.giphy.com/media/26vUCH220kcToAYPS/giphy.gif", "Crying");
Insert into Characters (name, image, attacks)
VALUES("House Plant","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgITFpVbSNOVWCrVgtoBD1CidxqH0hm4eOeA&usqp=CAU", "Roots");
Insert into Characters (name, image, attacks)
VALUES("Barack Obama","https://image.cnbcfm.com/api/v1/image/104656161-GettyImages-688156110.jpg?v=1532563778&w=1400&h=950", "DunksOnYou");
Insert into Characters (name, image, attacks)
VALUES("Ninja","https://pbs.twimg.com/profile_images/1168269614058311680/qVZrY0PL_400x400.jpg", "Sneaky Sneaky");
Insert into Characters (name, image, attacks)
VALUES("LA DRIVER","none", "Quick Brake");
Insert into Characters (name, image, attacks)
VALUES("Stationary Exericse Bike","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmj9TIKZiDTKp8hx22bUHWV6W9ESkFFWk6qA&usqp=CAU", "Butt Cramps");
Insert into Characters (name, image, attacks)
VALUES("Seth Rogan (and friend)","https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/original/original-seth-rogan-james-franco-kanye-west-parody-43-jpg-f09da4b6.jpg", "Blaze Up");
Insert into Characters (name, image, attacks)
VALUES("Hot Dog","https://www.ballparkbrand.com/sites/default/files/Hero_Dog_0.png", "KetchupOnYourShirt");
Insert into Characters (name, image, attacks)
VALUES("Rick Astley","https://imgs.smoothradio.com/images/191589?crop=16_9&width=660&relax=1&signature=Rz93ikqcAz7BcX6SKiEC94zJnqo=", "Never Give You Up");


Select * from Characters;

CREATE TABLE Attacks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL unique,
	CharacterId varchar(255) NOT NULL,

    
	PRIMARY KEY (id)
);

Select * from Attacks