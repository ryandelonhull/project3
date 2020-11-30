DROP DATABASE IF EXISTS game_db;
CREATE DATABASE game_db;

USE game_db;
CREATE TABLE Characters
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL unique,
	image varchar(255) NOT NULL unique,
    attack  integer NOT NULL,
    
	PRIMARY KEY (id)
);


Insert into Characters (name, image, attack)
VALUES("Batman","./Images-char/batperson.png", "1");
Insert into Characters (name, image, attack)
VALUES("House Plant","./Images-char/houseplant.png", "2");
Insert into Characters (name, image, attack)
VALUES("Barack Obama","./Images-char/obama.png", "3");

Insert into Characters (name, image, attack)
VALUES("Ninja","./Images-char/ninja.png", "4");
Insert into Characters (name, image, attack)
VALUES("LA DRIVER","none", "5");
Insert into Characters (name, image, attack)
VALUES("Stationary Exercise Bike","./Images-char/statbike.png", "6");
Insert into Characters (name, image, attack)
VALUES("Hot Dog","./Images-char/hotdog.png", "7");

Insert into Characters (name, image, attack)
VALUES("Seth Rogan (and friend)","./Images-char/SethandJames.png", "8");
Insert into Characters (name, image, attack)
VALUES("Rick Astley","./Images-char/rickya.png", "9");
Insert into Characters (name, image, attack)
VALUES("Wess","./Images-char/Wess.png", "10");
Insert into Characters (name, image, attack)
VALUES("HypnoToad","./Images-char/hypnotoad.png", "11");
Insert into Characters (name, image, attack)
VALUES("PE Teacher","./Images-char/PETeacher.png", "12");

Select * from Characters;

CREATE TABLE Attack
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL unique,
	CharacterId integer NOT NULL,

    foreign key (CharacterId) references Characters (id),
	PRIMARY KEY (id)
);

Insert into Attack (name, CharacterId)
VALUES("BAT DANCE", "1");
Insert into Attack (name, CharacterId)
VALUES("Bat Mobile", "1");
Insert into Attack (name, CharacterId)
VALUES("Brooding and Smouldering", "1");
Insert into Attack (name, CharacterId)
VALUES("Daddy Issues", "1");
Insert into Attack (name, CharacterId)
VALUES("Ask Alfred", "1");

Insert into Attack (name, CharacterId)
VALUES("Drop Leaves", "2");
Insert into Attack (name, CharacterId)
VALUES("Leak Water", "2");
Insert into Attack (name, CharacterId)
VALUES("Make Clones", "2");
Insert into Attack (name, CharacterId)
VALUES("shrivel", "2");
Insert into Attack (name, CharacterId)
VALUES("Growth Spurt", "2");

Insert into Attack (name, CharacterId)
VALUES("Dunks ON YOU", "3");
Insert into Attack (name, CharacterId)
VALUES("Dad Jokes", "3");
Insert into Attack (name, CharacterId)
VALUES("Tan Suit", "3");
Insert into Attack (name, CharacterId)
VALUES("Swagger", "3");
Insert into Attack (name, CharacterId)
VALUES("Ask Michelle", "3");

Insert into Attack (name, CharacterId)
VALUES("Sneaky Sneak", "4");
Insert into Attack (name, CharacterId)
VALUES("Surprise! Behind You", "4");
Insert into Attack (name, CharacterId)
VALUES("Nunchucks", "4");
Insert into Attack (name, CharacterId)
VALUES("Karate Chop", "4");
Insert into Attack (name, CharacterId)
VALUES("Roundhouse Kick", "4");

Insert into Attack (name, CharacterId)
VALUES("Break Check", "5");
Insert into Attack (name, CharacterId)
VALUES("Cut Off", "5");
Insert into Attack (name, CharacterId)
VALUES("Surpise Turn", "5");
Insert into Attack (name, CharacterId)
VALUES("Change 3 lanes at once", "5");
Insert into Attack (name, CharacterId)
VALUES("Changes Lanes into You", "5");

Insert into Attack (name, CharacterId)
VALUES("Butt Cramps", "6");
Insert into Attack (name, CharacterId)
VALUES("Toe Stub", "6");
Insert into Attack (name, CharacterId)
VALUES("Dehydration", "6");
Insert into Attack (name, CharacterId)
VALUES("Wack your Pet with the Pedals", "6");
Insert into Attack (name, CharacterId)
VALUES("Fall Off", "6");

Insert into Attack (name, CharacterId)
VALUES("Ketchup/Mustard on Your Shirt", "7");
Insert into Attack (name, CharacterId)
VALUES("Too Good to Resist", "7");
Insert into Attack (name, CharacterId)
VALUES("Not Enough Bun Son", "7");
Insert into Attack (name, CharacterId)
VALUES("Can't have Just One", "7");
Insert into Attack (name, CharacterId)
VALUES("Food Poisoning", "7");

Insert into Attack (name, CharacterId)
VALUES("Blaze Up Prowess", "8");
Insert into Attack (name, CharacterId)
VALUES("I'm So Sorry", "8");
Insert into Attack (name, CharacterId)
VALUES("Weird Laughing", "8");
Insert into Attack (name, CharacterId)
VALUES("Red Eye Snack Attack", "8");
Insert into Attack (name, CharacterId)
VALUES("Bagged Milk!!", "8");

Insert into Attack (name, CharacterId)
VALUES("Never Gonna Give You Up", "9");
Insert into Attack (name, CharacterId)
VALUES("Never Gonna Let You Down", "9");
Insert into Attack (name, CharacterId)
VALUES("Never Gonna Run Around and Desert You", "9");
Insert into Attack (name, CharacterId)
VALUES("Never Gonna Make You Cry", "9");
Insert into Attack (name, CharacterId)
VALUES("Never Gonna Say Goodbye", "9");

Insert into Attack (name, CharacterId)
VALUES("HYPNOTIZE", "11");
Insert into Attack (name, CharacterId)
VALUES("STUPIFY", "11");
Insert into Attack (name, CharacterId)
VALUES("MESMERIZE", "11");
Insert into Attack (name, CharacterId)
VALUES("CONFOUND", "11");
Insert into Attack (name, CharacterId)
VALUES("BEWILDER", "11");


Insert into Attack (name, CharacterId)
VALUES("DODGE THE BALL!", "12");
Insert into Attack (name, CharacterId)
VALUES("RUN LAPS", "12");
Insert into Attack (name, CharacterId)
VALUES("CLIMB THE ROPE", "12");
Insert into Attack (name, CharacterId)
VALUES("SEX ED", "12");
Insert into Attack (name, CharacterId)
VALUES("Being Creepy", "12");

Select * from Attack

