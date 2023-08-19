using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using CarDispensaryV1.Models;

namespace CarDispensaryV1.Controllers
{
    [EnableCors("*", "*", "*")]
    public class GarageController : ApiController
    {
CarDispensaryEntities CD = new CarDispensaryEntities();



        #region Garage registration


        [HttpPost]
        [Route("api/Garage/registration")]

        public string registration(GarageDetail garageDetail) 
        {
            if(garageDetail != null) 
            {
               CD.GarageDetails.Add(garageDetail);  
                CD.SaveChanges();
                return "Registration Success";
            }

            return "Something went Wrong";


        }

        #endregion


        #region Garage Login

        [HttpPost]
        [Route("api/Garage/login")]

        public IHttpActionResult login(GarageDetail garageDetail) 
        {


         if (garageDetail !=null)

            {
                var existingGarage = CD.GarageDetails.FirstOrDefault(g => g.GarageMobile == garageDetail.GarageMobile && g.Password == garageDetail.Password);

                if(existingGarage !=null)
                     return Ok("Login successful.");
            }

            else
            {
                return Ok("Invalid email or customer does not exist.");
            }

            return Ok("Invalid Garage data");
        }


        #endregion


    }
}
