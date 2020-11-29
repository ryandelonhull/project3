DROP DATABASE IF EXISTS game_db;
CREATE DATABASE game_db;

USE game_db;
CREATE TABLE Characters
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL unique,
	image varchar(255) NOT NULL unique,
    attacks  integer NOT NULL,
    
	PRIMARY KEY (id)
);

Insert into Characters (name, image, attacks)
VALUES("Batman","./Images-char/batperson.png", "1");
Insert into Characters (name, image, attacks)
VALUES("House Plant","./Images-char/houseplant.png", "2");
Insert into Characters (name, image, attacks)
VALUES("Barack Obama","./Images-char/obama.png", "3");
Insert into Characters (name, image, attacks)
VALUES("Ninja","./Images-char/ninja.png", "4");
Insert into Characters (name, image, attacks)
VALUES("LA DRIVER","none", "5");
Insert into Characters (name, image, attacks)
VALUES("Stationary Exericse Bike","./Images-char/statbike.png", "6");
Insert into Characters (name, image, attacks)
VALUES("Hot Dog","./Images-char/hotdog.png", "7");
Insert into Characters (name, image, attacks)
VALUES("Seth Rogan (and friend)","./Images-char/SethandJames.png", "8");
Insert into Characters (name, image, attacks)
VALUES("Rick Astley","./Images-char/rickya.png", "9");
Insert into Characters (name, image, attacks)
VALUES("Wess","./Images-char/Wess.png", "10");
Insert into Characters (name, image, attacks)
VALUES("HypnoToad","./Images-char/hypnotoad.png", "11");
Insert into Characters (name, image, attacks)
VALUES("PE Teacher","./Images-char/PETeacher.png", "12");
Select * from Characters;

CREATE TABLE Attacks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL unique,
	CharacterId integer NOT NULL,

    foreign key (CharacterId) references Characters (id),
	PRIMARY KEY (id)
);

Insert into Attacks (name, CharacterId)
VALUES("Crying", "1");

Insert into Attacks (name, CharacterId)
VALUES("Bat Mobile", "1");

Insert into Attacks (name, CharacterId)
VALUES("Bruding and Smouldering", "1");

Insert into Attacks (name, CharacterId)
VALUES("Daddy Issues", "1");

Insert into Attacks (name, CharacterId)
VALUES("Ask Alfred", "1");

Insert into Attacks (name, CharacterId)
VALUES("Drop Leaves", "2");
Insert into Attacks (name, CharacterId)
VALUES("Leak Water", "2");
Insert into Attacks (name, CharacterId)
VALUES("Make Clones", "2");
Insert into Attacks (name, CharacterId)
VALUES("shrivel", "2");
Insert into Attacks (name, CharacterId)
VALUES("Growth Spurt", "2");

Insert into Attacks (name, CharacterId)
VALUES("DunksONYou", "3");
Insert into Attacks (name, CharacterId)
VALUES("DadJokes", "3");
Insert into Attacks (name, CharacterId)
VALUES("Tan Suite", "3");
Insert into Attacks (name, CharacterId)
VALUES("Swagger", "3");
Insert into Attacks (name, CharacterId)
VALUES("Ask Michelle", "3");

Insert into Attacks (name, CharacterId)
VALUES("Sneaky Sneaky", "4");
Insert into Attacks (name, CharacterId)
VALUES("Surprise! Behind You", "4");
Insert into Attacks (name, CharacterId)
VALUES("Nunchucks", "4");
Insert into Attacks (name, CharacterId)
VALUES("Karate Chop", "4");
Insert into Attacks (name, CharacterId)
VALUES("Roundhouse Kick", "4");

Insert into Attacks (name, CharacterId)
VALUES("Break Check", "5");
Insert into Attacks (name, CharacterId)
VALUES("Cut Off", "5");
Insert into Attacks (name, CharacterId)
VALUES("Surpise Turn", "5");
Insert into Attacks (name, CharacterId)
VALUES("Change 3 lanes at once", "5");
Insert into Attacks (name, CharacterId)
VALUES("Changes Lanes into You", "5");

Insert into Attacks (name, CharacterId)
VALUES("Butt Cramps", "6");
Insert into Attacks (name, CharacterId)
VALUES("Toe Stub", "6");
Insert into Attacks (name, CharacterId)
VALUES("Dehydration", "6");
Insert into Attacks (name, CharacterId)
VALUES("wack your dog with the pedals", "6");
Insert into Attacks (name, CharacterId)
VALUES("Fall Off", "6");

Insert into Attacks (name, CharacterId)
VALUES("Ketchup on Your Shirt", "7");
Insert into Attacks (name, CharacterId)
VALUES("Too Good to Resist", "7");
Insert into Attacks (name, CharacterId)
VALUES("Not Enough Bun son", "7");
Insert into Attacks (name, CharacterId)
VALUES("Can't have just one", "7");
Insert into Attacks (name, CharacterId)
VALUES("Food Poisoning", "7");

Insert into Attacks (name, CharacterId)
VALUES("Blaze up", "8");
Insert into Attacks (name, CharacterId)
VALUES("Sorry", "8");
Insert into Attacks (name, CharacterId)
VALUES("Weird Laughing", "8");
Insert into Attacks (name, CharacterId)
VALUES("Red Eye Snack Attack", "8");
Insert into Attacks (name, CharacterId)
VALUES("Bagged Milk!!", "8");

Insert into Attacks (name, CharacterId)
VALUES("Never gonna give you up", "9");
Insert into Attacks (name, CharacterId)
VALUES("Never gonna let you down", "9");
Insert into Attacks (name, CharacterId)
VALUES("Never gonna run around and desert you", "9");
Insert into Attacks (name, CharacterId)
VALUES("Never gonna make you cry", "9");
Insert into Attacks (name, CharacterId)
VALUES("Never gonna say goodbye", "9");

Insert into Attacks (name, CharacterId)
VALUES("Hypnotize", "11");
Insert into Attacks (name, CharacterId)
VALUES("Stupify", "11");
Insert into Attacks (name, CharacterId)
VALUES("Mesmorize", "11");
Insert into Attacks (name, CharacterId)
VALUES("Confound", "11");
Insert into Attacks (name, CharacterId)
VALUES("Bewilder", "11");


Insert into Attacks (name, CharacterId)
VALUES("DODGEBALL!", "12");
Insert into Attacks (name, CharacterId)
VALUES("RUN LAPS", "12");
Insert into Attacks (name, CharacterId)
VALUES("CLIMB THE ROPE", "12");
Insert into Attacks (name, CharacterId)
VALUES("SEX ED", "12");
Insert into Attacks (name, CharacterId)
VALUES("Being Creepy", "12");

Select * from Attacks

