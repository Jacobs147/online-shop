using IP32.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace IP32.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public LoginResDto Login([FromBody] LoginDto login)
        {
            var res = new LoginResDto();
            if(login.Login == "admin" && login.Password =="admin")
            {
                res.Role = "Admin";
            } 
            else if(login.Login == "user" && login.Password == "user")
            {
                res.Role = "User";
            }
            else
            {
                throw new Exception("Błędny login lub hasło!");
            }
            var klucz = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("bardzotrudnehaslotokena"));
            var zaszyfrowanyKlucz = new SigningCredentials(klucz, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken("http://localhost:44370", null, new List<Claim> { new Claim(ClaimTypes.Role, res.Role) }, null ,DateTime.Now.AddMinutes(30), zaszyfrowanyKlucz);
            res.Token = new JwtSecurityTokenHandler().WriteToken(token);
            return res;
        }
    }
}
