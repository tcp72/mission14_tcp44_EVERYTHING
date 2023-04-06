using Microsoft.EntityFrameworkCore;

namespace mission14_tcp44_EVERYTHING.Data
{
    public class MoviesDbContext : DbContext
    {
        //constructor
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options) : base(options) { } //sets up base options

        public DbSet<Movie> Movies { get; set; } //needs to match table name in the Sqlite database
    }
}
