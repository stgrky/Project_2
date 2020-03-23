drop database if exists healthcare_portal;

create database healthcare_portal;

use healthcare_portal;

-- create table patients (
-- 	id int auto_increment not null,
--     name varchar(100) not null,
-- 	phone_number int(11),
--     city varchar(30),
--     symptoms varchar(300),
--     infected boolean not null,
--     treatment varchar(300),
--     admitted boolean not null,
--     doctor varchar(30),
--     primary key (id),
-- 	foreign key (doctor_id) references doctors(doctor_id)
-- );

-- create table doctors (
-- 	doctor_id int auto_increment not null,
-- 	name varchar(100) not null
-- );