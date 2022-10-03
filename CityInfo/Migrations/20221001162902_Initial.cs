using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CityInfo.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "QueryHistory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    City = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    QueryTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QueryHistory", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "QueryHistory",
                columns: new[] { "Id", "City", "QueryTime" },
                values: new object[] { 1, "Medellin", new DateTime(2022, 10, 1, 11, 29, 2, 529, DateTimeKind.Local).AddTicks(1130) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "QueryHistory");
        }
    }
}
