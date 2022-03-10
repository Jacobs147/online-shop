using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IP32.Models
{
    public class ArticleDto
    {
        public int Id { get; set; }
        public string Nazwa { get; set; }
        public string Opis { get; set; }
        public decimal Cena { get; set; }
    }
}
