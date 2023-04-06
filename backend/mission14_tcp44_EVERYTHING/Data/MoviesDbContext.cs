using Microsoft.EntityFrameworkCore;

namespace mission14_tcp44_EVERYTHING.Data
{
    public class MoviesDbContext : DbContext
    {
        //constructor
        public MoviesDbContext(DbContextOptions<MoviesDbContext> options) : base(options) { }

        public DbSet<HiltonMovies> Movies { get; set; }
    }
}
