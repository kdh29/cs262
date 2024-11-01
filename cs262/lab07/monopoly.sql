﻿--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
-- 
-- Author: kvlinden (original)
-- Version: Summer, 2015
--

-- Drop previous versions of the tables if they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS GameTurn;
DROP TABLE IF EXISTS PlayerProperty;
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS PlayerState;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY,
	time timestamp
);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
);

-- New table to store each player's current state in a game (cash and board position).
CREATE TABLE PlayerState (
    playerID integer REFERENCES Player(ID),
    gameID integer REFERENCES Game(ID),
    cash integer,
    position integer CHECK (position >= 0 AND position <= 39),
    PRIMARY KEY (playerID, gameID)
);

-- New table to store information about properties on the Monopoly board.
CREATE TABLE Property (
    ID integer PRIMARY KEY,
    name varchar(50) NOT NULL,
    baseRent integer,
    price integer,
    colorGroup varchar(20)
);

-- New table to store information about properties owned by players in a game.
CREATE TABLE PlayerProperty (
    playerID integer REFERENCES Player(ID),
    gameID integer REFERENCES Game(ID),
    propertyID integer REFERENCES Property(ID),
    houses integer CHECK (houses >= 0 AND houses <= 4),
    hotels integer CHECK (hotels >= 0 AND hotels <= 1),
    PRIMARY KEY (playerID, gameID, propertyID)
);

-- New table to track the turn order and current player in a game.
CREATE TABLE GameTurn (
    gameID integer REFERENCES Game(ID),
    currentTurnPlayerID integer REFERENCES Player(ID),
    turnOrder integer NOT NULL,
    PRIMARY KEY (gameID, currentTurnPlayerID)
);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PlayerState TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;
GRANT SELECT ON PlayerProperty TO PUBLIC;
GRANT SELECT ON GameTurn TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player VALUES (1, 'me@calvin.edu', 'Player 1');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0);
INSERT INTO PlayerGame VALUES (1, 2, 0);
INSERT INTO PlayerGame VALUES (1, 3, 2350);
INSERT INTO PlayerGame VALUES (2, 1, 1000);
INSERT INTO PlayerGame VALUES (2, 2, 0);
INSERT INTO PlayerGame VALUES (2, 3, 500);
INSERT INTO PlayerGame VALUES (3, 2, 0);
INSERT INTO PlayerGame VALUES (3, 3, 5500);

-- Sample PlayerState records for in-progress cash and position data.
INSERT INTO PlayerState VALUES (1, 1, 1500, 0);
INSERT INTO PlayerState VALUES (2, 1, 1300, 10);
INSERT INTO PlayerState VALUES (3, 1, 2000, 25);

-- Sample Property records representing different Monopoly properties.
INSERT INTO Property VALUES (1, 'Boardwalk', 50, 400, 'Dark Blue');
INSERT INTO Property VALUES (2, 'Park Place', 35, 350, 'Dark Blue');
INSERT INTO Property VALUES (3, 'Baltic Avenue', 4, 60, 'Brown');

-- Sample PlayerProperty records showing player ownership, houses, and hotels.
INSERT INTO PlayerProperty VALUES (1, 1, 1, 0, 1);
INSERT INTO PlayerProperty VALUES (2, 1, 2, 2, 0);

-- Sample GameTurn record for tracking the turn order and current player.
INSERT INTO GameTurn VALUES (1, 1, 1);
INSERT INTO GameTurn VALUES (1, 2, 2);
INSERT INTO GameTurn VALUES (1, 3, 3);