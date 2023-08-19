//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CarDispensaryV1.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class RateChart
    {
        public int PriceId { get; set; }
        public int BrandId { get; set; }
        public int CategoryId { get; set; }
        public int ServiceId { get; set; }
        public int VarientId { get; set; }
        public int ModelId { get; set; }
        public double Price { get; set; }
    
        public virtual Brand Brand { get; set; }
        public virtual CarModel CarModel { get; set; }
        public virtual Category Category { get; set; }
        public virtual Service Service { get; set; }
        public virtual Varient Varient { get; set; }
    }
}
