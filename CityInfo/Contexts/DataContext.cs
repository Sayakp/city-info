using System;
using Microsoft.EntityFrameworkCore;
using CityInfo.Models;

namespace CityInfo.Contexts
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QueryDto>()
                .HasData(
                    new QueryDto
                    {
                        Id = 1,
                        City = "Medellin",
                        QueryTime = DateTime.Now
                    }
                );

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<QueryDto> QueryHistory { get; set; }

    }
}

