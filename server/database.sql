CREATE DATABASE GURU_ASHTRA;

CREATE TABLE REGISTER(
    name varchar(255) NOT NULL,
    email varchar(30) not null,
    t_code varchar(5) PRIMARY KEY CHECK(t_code LIKE 'T%'),
    password varchar(10) not null
);

-- CREATE TABLE LOGIN(
--     t_code varchar(5) references REGISTER(t_code),
--     password varchar(10) not null
-- );

CREATE TABLE STUDENTS_DETAILS(
    roll_no numeric(10) PRIMARY KEY,
    name varchar(255) NOT NULL,
    father_name varchar(255) NOT NULL,
    mother_name varchar(255) NOT NULL,
    email varchar(50) not null,
    phone numeric(10),
    dob date not null,
    t_code varchar(5)
);

CREATE TABLE STUDENTS_MARKS(
    roll_no numeric(10) references STUDENTS_DETAILS(roll_no),
    English numeric(3) not null,
    Maths numeric(3) not null,
    Odia numeric(3) not null,
    Science numeric(3) not null,
    Social_Studies numeric(3) not null,
    Computer numeric(3) not null,
    Total numeric(3) generated always as (English+Maths+Odia+Science+Social_Studies+Computer) stored,
    Percentage numeric(3) generated always as (ROUND((English+Maths+Odia+Science+Social_Studies+Computer)/6)) stored
);
