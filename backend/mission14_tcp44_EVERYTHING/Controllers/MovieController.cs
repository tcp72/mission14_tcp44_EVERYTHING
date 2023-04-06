using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using mission14_tcp44_EVERYTHING.Data;

namespace mission14_tcp44_EVERYTHING.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MovieController : Controller //ControllerBase was here
    {
        private MoviesDbContext context;
        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray();
            return context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray(); //here is where add .Where
        }
    }
}
