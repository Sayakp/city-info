﻿// <auto-generated />
using System;
using CityInfo.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CityInfo.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221001162902_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("CityInfo.Entities.Query", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("City")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<DateTime>("QueryTime")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("QueryHistory");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            City = "Medellin",
                            QueryTime = new DateTime(2022, 10, 1, 11, 29, 2, 529, DateTimeKind.Local).AddTicks(1130)
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
