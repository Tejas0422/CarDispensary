using CarDispensaryV1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Security;

namespace CarDispensaryV1.Controllers
{
    [EnableCors("*", "*", "*")]
    public class CustomerTokenController : ApiController
    {


        CarDispensaryEntities CD = new CarDispensaryEntities();


        #region getToken 

        //[AllowAnonymous]
        [HttpGet]
        [Route("api/CustomerToken/Get/{username}/{password}")]
        public string Get(string username, string password)
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

            var matchingCustomer = CD.Customers.FirstOrDefault(cust => cust.CustEmail == "balram@123" && cust.CustPassword == "balram123");

            if (matchingCustomer != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        #endregion



        #region Singout

        [Route("api/CustomerLogin/Signout")]
        public void Signout()
        {
            FormsAuthentication.SignOut();

        }

        #endregion

    }


}

