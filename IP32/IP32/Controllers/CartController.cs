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
    public class CartController : ControllerBase
    {

        private readonly CartService _cartService;
        private readonly ArticlesService _articlesService;

        public CartController(CartService cartService, ArticlesService articlesService)
        {
            _cartService = cartService;
            _articlesService = articlesService;
        }

        [HttpGet]
        public IEnumerable<ArticleDto> Get()
        {
            return _cartService.Pobierz();
        }

        [HttpDelete]
        public IEnumerable<ArticleDto> Wyczysc()
        {
            return _cartService.Wyczyść();
        }

        [HttpPost]
        public IEnumerable<ArticleDto> Dodaj([FromBody] int id)
        {
            ArticleDto dto = _articlesService.ZnajdzPoId(id);
            return _cartService.Dodaj(dto);
        }
    }
}
