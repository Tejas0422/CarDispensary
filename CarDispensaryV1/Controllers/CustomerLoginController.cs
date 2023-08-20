using CarDispensaryV1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;

namespace CarDispensaryV1.Controllers
{
    public class CustomerLoginController : ApiController
    {
        CarDispensaryEntities CD = new CarDispensaryEntities();


        #region CustomerLogin

        [HttpPost]
        [Route("api/CustomerLogin/login")]
        public IHttpActionResult login(Customer userCredentials,
                                    string ReturnUrl)
        {
            if (CheckCredentials(userCredentials))
            {
                //Below line does 2 things:
                //1. Create session object with sessionID on server
                //2. Tampers the response to add sessionID in it
                FormsAuthentication.SetAuthCookie(userCredentials.CustEmail, false);

                if (ReturnUrl != null)
                {
                    return Redirect(ReturnUrl);
                }
                else
                {
                    return Ok("Something Went Wrong...!");
                }
            }
            else
            {
                //Check if returnURL exists and then redirect user
                //to resepctive URL
                return Ok("Invalid Username and Password...!");
            }
        }

        #endregion

        #region CheckCredentials
        private bool CheckCredentials(Customer userCredentials)
        {

            var matchingCustomer = CD.Customers.FirstOrDefault(c =>
                c.CustEmail == userCredentials.CustEmail &&
                c.CustPassword == userCredentials.CustPassword);

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
        public IHttpActionResult Signout()
        {
            FormsAuthentication.SignOut();
            return Ok("ThankYou...!");
        }

        #endregion
    }



}



