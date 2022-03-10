using IP32.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IP32
{

    public class ArticlesService
    {
        private static List<ArticleDto> Articles = new List<ArticleDto>
        {
            new ArticleDto {Id=0, Nazwa="Długopis", Cena=2.50m, Opis="kulkowy"},
            new ArticleDto {Id=1, Nazwa="Pióro", Cena=30.00m, Opis="Parker"},
            new ArticleDto {Id=2, Nazwa="Papier", Cena=5.00m, Opis="milimetrowy"},
            new ArticleDto {Id=3, Nazwa="Blok", Cena=3.50m, Opis="techniczny"},
            new ArticleDto {Id=4, Nazwa="Brystol", Cena=10.50m, Opis="A1"}
        };

        public IEnumerable<ArticleDto> Pobierz(StronnicowanieDto stronnicowanie)
        {
            return Articles.Skip((stronnicowanie.Strona - 1) * stronnicowanie.Ilosc).Take(stronnicowanie.Ilosc);
        }

        public ArticleDto Dodaj(ArticleDto dto)
        {
            dto.Id = Articles.Max(a => a.Id) + 1;
            Articles.Add(dto);
            return dto;
        }

        public bool Usuń(int id)
        {
            Articles = Articles.FindAll(o => o.Id != id);
            return true;
        }

        public ArticleDto ZnajdzPoId(int id)
        {
            return Articles.Find(a => a.Id == id);
        }

        public ArticleDto update(int id, ArticleDto temp)
        {
            ArticleDto dto = ZnajdzPoId(id);
            dto.Nazwa = temp.Nazwa;
            dto.Opis = temp.Opis;
            dto.Cena = temp.Cena;
            return dto;
        }
    }
}
