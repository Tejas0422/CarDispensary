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
    public class OrderController : ApiController
    {
       
        CarDispensaryEntities CD = new CarDispensaryEntities();



        #region Add orderDetail

        [HttpPost]
        [Route("api/Order/orderDetail")]

        public IHttpActionResult orderDetail(OrderDetail orderDetail)
        {
            if (orderDetail != null) 
            {
                CD.OrderDetails.Add(orderDetail);   
                CD.SaveChanges();
                return Ok("OrderDetail Succefully Added...! ");
            }
            else
            {
                return Ok (" failed....");
            }

           
        }

        #endregion

        #region update OrderDetail
        [HttpPut]
        [Route("api/Order/editOrder/{orderId}")]

        public IHttpActionResult editOrder(int orderId, [FromBody] OrderDetail orderDetail) 
        {

            OrderDetail  OD = CD.OrderDetails.Find(orderId);
            if (OD != null) 
            {
                OD.CarRegistrationNo = orderDetail.CarRegistrationNo;
                OD.VisitMode = orderDetail.VisitMode;   
                OD.CustMobileNo = orderDetail.CustMobileNo; 
                OD.CustAddress = orderDetail.CustAddress;   
                OD.CustomerName = orderDetail.CustomerName; 
                OD.GarageName = orderDetail.GarageName; 
                OD.ManufacturingYear = orderDetail.ManufacturingYear;   
                OD.OdometerReading = orderDetail.OdometerReading;   
                OD.VehicleModel = orderDetail.VehicleModel; 
                OD.ServiceId = orderDetail.ServiceId;
                OD.CustEmail = orderDetail.CustEmail;

                CD.SaveChanges();
                return Ok("OrderDetail Edited Succefull..!");
            }
            return Ok("Something Went Wrong...!");  
        }

        #endregion

        #region GetOrderDetail BY orderId
        [HttpGet]
        [Route("api/Order/GetOrderDetail/{OrderID}")]

        public IHttpActionResult GetOrderDetail(int  orderId) 
        {
           if(orderId != 0)
            {
               var result = CD.OrderDetails.Where(O=> O.OrderId == orderId).
                    Select(  O=>new
                    {
                        CarRegistrationNo = O.CarRegistrationNo,
                        MF = O.ManufacturingYear.ToString(),
                        OD = O.OdometerReading,
                        VM =O.VehicleModel,
                        CN = O.CustomerName,
                        CMN = O.CustMobileNo,
                        CE = O.CustEmail,
                         GN=O.GarageName,
                        SI = O.Service.ServiceName,
                        V = O.VisitMode,


                    }).Distinct().ToList();
                return Ok(result);
            }
            return BadRequest();
        }
        #endregion
    }
}



