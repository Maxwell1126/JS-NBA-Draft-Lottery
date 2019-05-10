CREATE TABLE "teams"("id" serial PRIMARY KEY, "name" VARCHAR(20));
CREATE TABLE "stats"("id" serial PRIMARY KEY, "name" VARCHAR(20));

INSERT INTO "teams"("name")
VALUES('New York'),('Cleveland'),('Phoenix'),('Chicago'),('Atlanta'),('Washington'),
('New Orleans'),('Memphis'),('Dallas'),('Minnesota'),('Los Angeles'),('Charlotte'),
('Miami'),('Boston');

INSERT INTO "stats"("name")
VALUES('% First'),('% Second'),('% Third'),('% Fourth'),('% Top Four'),('Mean Place');

CREATE TABLE "simulations"("id" serial PRIMARY KEY,
    "team_id" INTEGER, FOREIGN KEY("team_id") REFERENCES "teams"("id"), "place" INTEGER);
