using IP32.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace IP32.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OsobyController : ControllerBase
    {
        private readonly OsobyService _osobyService;

        public OsobyController(OsobyService osobyService)
        {
            _osobyService = osobyService;
        }

        [HttpGet]
        public IEnumerable<OsobaDto> Pobierz([FromQuery] StronnicowanieDto stronnicowanie)
        {
            return _osobyService.Pobierz(stronnicowanie);
        }

        [HttpDelete("{id}")]
        public bool Usuń(int id)
        {
            return _osobyService.Usuń(id);
        }

        [HttpPost]
        public OsobaDto Dodaj([FromBody] OsobaDto dto)
        {
            return _osobyService.Dodaj(dto);
        }

        [HttpPut("{id}")]
        public OsobaDto PodnieśWiek(int id)
        {
            return _osobyService.PodnieśWiek(id);
        } 
    }
}