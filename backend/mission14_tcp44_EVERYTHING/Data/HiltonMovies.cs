using System.ComponentModel.DataAnnotations;

namespace mission14_tcp44_EVERYTHING.Data
{
    public class HiltonMovies
    {
        [Key]
        public int movieId { get; set; }
        public string? mategory { get; set; }
        public string? mitle { get;  set; }
        public int? year { get; set; }
        public string? director { get; set; }
        public string? rating { get; set; }
        public String? edited { get; set; }
    }
}