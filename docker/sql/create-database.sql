CREATE DATABASE [city-info]
GO

USE [city-info];
GO

CREATE TABLE QueryHistory (
                         Id INT NOT NULL IDENTITY,
                         CityName TEXT NOT NULL,
                         Date DATETIME NOT NULL,
                         PRIMARY KEY (Id)
);
GO