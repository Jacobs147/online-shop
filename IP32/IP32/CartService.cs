using IP32.Models;
using System;
using System.Collections.Generic;

namespace IP32.Controllers
{
    public class CartService
    {
        private List<ArticleDto> Articles = new List<ArticleDto> {};

        public IEnumerable<ArticleDto> Dodaj(ArticleDto dto)
        {
            Articles.Add(dto);
            return Articles;
        }

        public IEnumerable<ArticleDto> Pobierz()
        {
            return Articles;
        }

        public IEnumerable<ArticleDto> Wyczyść()
        {
            Articles.Clear();
            return Articles;
        }
    }
}