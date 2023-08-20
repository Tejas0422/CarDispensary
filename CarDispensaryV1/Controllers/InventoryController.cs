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
    public class InventoryController : ApiController
    {

        CarDispensaryEntities CD = new CarDispensaryEntities();



        #region Inventory Added

        [HttpPost]
        [Route("api/InventoryController/addInventory")]

        public IHttpActionResult addInventory(InventoryDetail inventoryDetail)
        {
            if (inventoryDetail != null) 
            {
                CD.InventoryDetails.Add(inventoryDetail);
                CD.SaveChanges();   
                return Ok("Inventory Added succefull...!");
            }

            return BadRequest("Inventory Not Added...!");
        }

        #endregion 



    }
}
