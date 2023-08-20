using CarDispensaryV1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace CarDispensaryV1.Controllers
{
    [EnableCors("*", "*", "*")]
    public class RequestHandlerController : ApiController
    {

        CarDispensaryEntities CD = new CarDispensaryEntities();


        Random random = new Random();

        #region  show order Request to appropriate Garage

        [HttpGet]
        [Route("api/RequestHandler/Detail/{id}")]
        public IHttpActionResult Detail(int id)
        {

            int randomNumber = random.Next(1,3); // Generates a random non-negative integer

            if (id == randomNumber)
            {
                var Data = CD.OrderDetails.Where(orderDetail=>orderDetail.ServiceDone==true).Select(orderDetail => new
                {
                    Id = orderDetail.OrderId,
                    CarRegistrationNo = orderDetail.CarRegistrationNo,
                    VisitMode = orderDetail.VisitMode,
                    CustMobileNo = orderDetail.CustMobileNo,
                    CustAddress = orderDetail.CustAddress,
                    CustomerName = orderDetail.CustomerName,
                    GarageName = orderDetail.GarageName,
                    ManufacturingYear = orderDetail.ManufacturingYear,
                    OdometerReading = orderDetail.OdometerReading,
                    VehicleModel = orderDetail.VehicleModel,
                    ServiceId = orderDetail.ServiceId,
                    CustEmail = orderDetail.CustEmail,
                    ServicePrice = orderDetail.ServicePrice,
                    VarientName = orderDetail.VarientName,
                }).ToList();

                return Ok(Data);
            }

            return Ok("No Service available");
        }

        #endregion


        #region  response by garage order accepted or Not

        [HttpPut]
        [Route("api/RequestHandler/OrderAccept/{Id}")]

        public IHttpActionResult OrderAccept(int Id)
        {
            OrderDetail OD = CD.OrderDetails.Find(Id);
            if (OD != null)
            {
                OD.ServiceDone = false;

                return Ok("Done...!");
            }
            return Ok("Not Done...!");
            
        }

        #endregion
    }
}
