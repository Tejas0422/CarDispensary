using CarDispensaryV1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarDispensaryV1.Controllers
{
    public class GarageTokenController : ApiController
    {
        CarDispensaryEntities CD = new CarDispensaryEntities(); 

        #region getToken 

        //[AllowAnonymous]
        [HttpGet]
        [Route("api/GarageToken/Get/{username}/{password}")]
        public string Get(string username,string password)
        {
            if (CheckCredentials(username, password))
            {
                return JwtToken.GenerateToken(username);
            }

            throw new HttpResponseException(HttpStatusCode.Unauthorized);
        }

        #endregion

        #region CheckCredentials
        public bool CheckCredentials(String username, String password)
        {

            var matchingGarage =CD.GarageDetails.FirstOrDefault(garage => garage.GarageMobile  == username && garage.Password== password);

            if (matchingGarage != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        #endregion
    }
}
