using IP32.Models;
using System.Collections.Generic;
using System.Linq;

namespace IP32
{
    public class OsobyService
    {
        private static List<OsobaDto> Osoby = new List<OsobaDto>
        {
            new OsobaDto { Id = 1, Imie = "Adam", Nazwisko = "Nowak", Wiek = 25 },
            new OsobaDto { Id = 2, Imie = "Rafał", Nazwisko = "Kowalski", Wiek = 30 },
            new OsobaDto { Id = 3, Imie = "Damian", Nazwisko = "Nowak", Wiek = 35 },
            new OsobaDto { Id = 4, Imie = "Jan", Nazwisko = "Grzegorzyk", Wiek = 40 }
        };

        public IEnumerable<OsobaDto> Pobierz(StronnicowanieDto stronnicowanie)
        {
            return Osoby.Skip((stronnicowanie.Strona - 1) * stronnicowanie.Ilosc).Take(stronnicowanie.Ilosc);
        }

        public OsobaDto Dodaj(OsobaDto dto)
        {
            dto.Id = Osoby.Max(o => o.Id) + 1;
            Osoby.Add(dto);
            return dto;
        }

        public bool Usuń(int id)
        {
            Osoby = Osoby.FindAll(o => o.Id != id);
            return true;
        }

        public OsobaDto PodnieśWiek(int id)
        {
            var osoba = Osoby.Find(o => o.Id == id);
            osoba.Wiek = osoba.Wiek + 1;
            return osoba;
        }
    }
}
