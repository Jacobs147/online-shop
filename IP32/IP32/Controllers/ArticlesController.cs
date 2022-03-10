using IP32.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IP32.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ArticlesController : ControllerBase
    {
        private readonly ArticlesService _articlesService;

        public ArticlesController(ArticlesService articlesService)
        {
            _articlesService = articlesService;
        }

        [HttpGet]
        public IEnumerable<ArticleDto> Get([FromQuery] StronnicowanieDto stronnicowanie)
        {
            IEnumerable< ArticleDto > articles = _articlesService.Pobierz(stronnicowanie);
            return articles;
        }

        [HttpGet("{id}")]
        public ArticleDto Get(int id)
        {
            return _articlesService.ZnajdzPoId(id);
        }

        [HttpDelete("{id}")]
        public bool Usuń(int id)
        {
            return _articlesService.Usuń(id);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public ArticleDto Dodaj([FromBody] ArticleDto dto)
        {            
            return _articlesService.Dodaj(dto);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public ArticleDto Update(int id, [FromBody] ArticleDto dto)
        {
            return _articlesService.update(id, dto);
        }
    }
}
