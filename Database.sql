CREATE TABLE "teams"("id" serial PRIMARY KEY, "name" VARCHAR(20));
CREATE TABLE "stats"("id" serial PRIMARY KEY, "name" VARCHAR(20));
CREATE TABLE "simulations"("id" serial PRIMARY KEY);

INSERT INTO "teams"("name")
VALUES('New York'),('Cleveland'),('Phoenix'),('Chicago'),('Atlanta'),('Washington'),
('New Orleans'),('Memphis'),('Dallas'),('Minnesota'),('Los Angeles'),('Charlotte'),
('Miami'),('Boston');

INSERT INTO "stats"("name")
VALUES('% First'),('% Second'),('% Third'),('% Fourth'),('% Top Four'),('Mean Place');

CREATE TABLE "simulations_results"("id" serial PRIMARY KEY,
    "simulation_id" INTEGER, FOREIGN KEY("simulation_id") REFERENCES "simulations"("id"),
    "team_id" INTEGER, FOREIGN KEY("team_id") REFERENCES "teams"("id"), "place" INTEGER);
