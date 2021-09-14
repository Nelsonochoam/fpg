### FPG Challenge
At FPG, we have had to process a lot of crypto data. Because it's core to us, we want to test your familiarity with ORMs, Databases, and Async/Threads.

You'll see in this enclosed folder a CSV. We'd like you to upload this CSV.

We will remind you that the interview is 45 minutes long. Please give an estimate on which steps you believe you can reach.

The steps we'll take are:

* Prepare a database. If you don't have a database ready, you can create an in-memory data structure representing the DB.

* Choose an ORM (or do it in SQL) and create the table to store CSV data.

* Deserialize the data.

* Save these records row-by-row first into the database. Do some simple data checks.

* Write code to read the newly inserted row. Feel free to use threads, async, etc

* Increase Isolation Level to the highest.

* Will there be issues with increasing isolation level?

---

### Pre-requisites
* Install docker and docker-compose
* Install node

----

### Setup

Go to the root of the project

* Run `docker-compose up` to start the postgres database container
* After the container is up run `npm run migrate`
* Run `npm run challenge` to run the challenge

When you run `npm run challenge` you will be prompted on stdin to select
one of 2 options. To ingest the csv file or read the values

To reset the challenge run `npm run reset` and it will clear the database table.

---

### Things to improve on

* We are reading the entire csv file into memory which is bad. We could read the
data in chunk and batch update the database concurrently as new data comes in.