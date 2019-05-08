CREATE TABLE "teams"("id" serial PRIMARY KEY, "name" VARCHAR(20), "seed" INTEGER);

CREATE TABLE "stats"("id" serial PRIMARY KEY, "name" VARCHAR(20));

INSERT INTO "teams"("name", "seed")
VALUES('New York', 1),('Cleveland', 2),('Phoenix', 3),('Chicago', 4),('Atlanta', 5),('Washington', 6),
('New Orleans', 7),('Memphis', 8),('Dallas', 9),('Minnesota', 10),('Los Angeles', 11),('Charlotte', 12),
('Miami', 13),('Boston', 14);

INSERT INTO "stats"("name")
VALUES('% First'),('% Second'),('% Third'),('% Fourth'),('% Top Four'),('Mean Place');

CREATE TABLE "simulations"("id" serial PRIMARY KEY, "1st" INTEGER, FOREIGN KEY("1st") REFERENCES "teams"("id"),
"2nd" INTEGER, FOREIGN KEY("2nd") REFERENCES "teams"("id"), "3rd" INTEGER, FOREIGN KEY("3rd") REFERENCES "teams"("id"), "4th" INTEGER, FOREIGN KEY("4th") REFERENCES "teams"("id"), "5th" INTEGER, FOREIGN KEY("5th") REFERENCES "teams"("id"), "6th" INTEGER, FOREIGN KEY("6th") REFERENCES "teams"("id"), "7th" INTEGER, FOREIGN KEY("7th") REFERENCES "teams"("id"), "8th" INTEGER, FOREIGN KEY("8th") REFERENCES "teams"("id"), "9th" INTEGER, FOREIGN KEY("9th") REFERENCES "teams"("id"), "10th" INTEGER, FOREIGN KEY("10th") REFERENCES "teams"("id"), "11th" INTEGER, FOREIGN KEY("11th") REFERENCES "teams"("id"), "12th" INTEGER, FOREIGN KEY("12th") REFERENCES "teams"("id"), "13th" INTEGER, FOREIGN KEY("13th") REFERENCES "teams"("id"), "14th" INTEGER, FOREIGN KEY("14th") REFERENCES "teams"("id"));
