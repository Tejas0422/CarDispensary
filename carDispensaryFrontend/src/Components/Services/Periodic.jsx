import { useNavigate } from "react-router-dom";
import Package1 from "../Services/image/package1.JPG"
import "../Services/Periodic.css";
import { useRef, useState } from "react";
import standared from "../Services/image/SandardService.jpg";
import Comprehensive from "../Services/image/Comprahensive.jpg";
import tataimg from "../Services/image/Tata.png";
import toyataimg from "../Services/image/toyata.png";
import marutiimg from "../Services/image/maruti.png";
import hundaiimg from "../Services/image/hundai.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, } from '@fortawesome/free-solid-svg-icons';
import { faInr } from '@fortawesome/free-solid-svg-icons';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import axios from 'axios';




library.add(faCheck, faRupeeSign, faInr)



const Periodic = () => {

    const navigate = useNavigate;
    const city = localStorage.getItem("city");
    navigate("/");

    const [showNormalDiv, setNormalDiv] = useState(false);



    const handleButtonClick = () => {

        setNormalDiv(true);
        GetAllBrands();
    };




    const [selectCar, setSelectCar] = useState();

    const [AllBrands, setAllBrands] = useState([]);

    const [CarModels, SetCarModels] = useState([]);

    const [varient, setVarient] = useState([]);

    const [showModelDiv, setShowModelDiv] = useState(false);

    const [showbrandDiv, setShowBrandDiv] = useState(false);

    const [showVarinetDiv, setShowVarinetDiv] = useState(false);

    const [service, setService] = useState([]);

    const [servicePrice, setServicePrice] = useState([]);

    const [showServicesDiv, SetShowServicesDiv] = useState(false);



    const handlerCarClick = (prop) => {

        setSelectCar(prop);
        GetCarModel(prop);


    };

    const varientHandler = (ModelId) => {
        localStorage.setItem("modelId", ModelId);

        GetAllVarients();
    }



    // Get all Brands 
    const GetAllBrands = () => {
        axios.get("http://localhost:63650//api/service/GetCarBrands")
            .then(function (response) {
                // handle success

                const brands = response.data;
                console.log(response);
                setAllBrands(brands);
            })
            .catch(function (error) {
                // handle error

                console.log(error);
            });
    };


    //Get CarModel Specific Id

    const GetCarModel = (BrandId) => {

        axios.get(`http://localhost:63650/api/Service/GetAllCarModel/${BrandId}`)
            .then(function (response) {

                const models = response.data;
                console.log(response);
                SetCarModels(models);
                setShowBrandDiv(true);


            })
            .catch(function (error) {


                console.log(error);
            });
    };



    //Get All Varient 

    const GetAllVarients = () => {

        axios.get("http://localhost:63650//api/Service/GetAllVarient")
            .then(function (response) {
                // handle success

                const varients = response.data;
                console.log(response);
                setVarient(varients);
                setShowVarinetDiv(true);
                setShowModelDiv(true);

            })
            .catch(function (error) {
                // handle error

                console.log(error);
            });
    };



    const SelectServiceHandler = (prop) => {

        SelectService(prop);

    }


    //Get service at appropriate model and varient


    const SelectService = (variantId) => {

        const modelid = localStorage.getItem("modelId");
        console.log(modelid);

        axios.get(`http://localhost:63650/api/Service/GetCarModel/${modelid}/${variantId}`)
            .then(function (response) {
                // handle success

                const services = response.data;
                console.log(services);

                var priceArray = services.map(service => service.price);
                setServicePrice(priceArray);

                console.log(servicePrice);
                debugger;
                SetShowServicesDiv(true);
                // Assuming setVarient is a function to update state
                setService(services); // Corrected function name

            })
            .catch(function (error) {

                console.log(error);
            });
        debugger;
    };






    return (
        <div className="rootDiv">


            <div className="mainDiv">
                <div style={{ textAlign: 'center' }}>
                    <br />
                    <br />
                    <h2>
                        Scheduled Packages
                    </h2>
                </div>
                <br />
                <br />
                <br />
                <div id="1" className="packages1">

                    <div>

                        <img style={{ height: '250px', width: '250px' }} src={Package1} alt="image"></img>
                    </div>


                    <div style={{ paddingLeft: '30px' }}>
                        <h4>Basic Service</h4>
                        <br />
                        <h6>*<span>1000kms or 1 Month Warranty </span></h6>
                        <br />
                        <div className="packages1_1">
                            <div>
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                            </div>
                            <div>

                                {/* <h> <FontAwesomeIcon icon="rupee-sign" style={{ color: 'black',fontSize:"20px"}}/></h>
                           
                           <br/> */}
                                <h style={{ color: 'black', fontSize: "30px" }}><FontAwesomeIcon icon="inr" style={{ color: 'black', fontSize: "30px" }} />&nbsp;{servicePrice[0]}</h>
                                <br />
                                <br />
                                <button className="btn btn-danger">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div id="1" className="packages1">

                    <div>

                        <img style={{ height: '250px', width: '250px' }} src={standared} alt="image"></img>
                    </div>


                    <div style={{ paddingLeft: '30px' }}>
                        <h4>Basic Service</h4>
                        <br />
                        <h6>*<span>1000kms or 1 Month Warranty </span></h6>
                        <br />
                        <div className="packages1_1">
                            <div>
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                            </div>
                            <div>

                                {/* <h> <FontAwesomeIcon icon="rupee-sign" style={{ color: 'black',fontSize:"20px"}}/></h>
       
       <br/> */}
                                <h style={{ color: 'black', fontSize: "30px" }}><FontAwesomeIcon icon="inr" style={{ color: 'black', fontSize: "30px" }} />&nbsp;{servicePrice[1]} </h>
                                <br />
                                <br />
                                <button className="btn btn-danger">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div id="1" className="packages1">

                    <div>

                        <img style={{ height: '250px', width: '250px' }} src={Comprehensive} alt="image"></img>
                    </div>


                    <div style={{ paddingLeft: '30px' }}>
                        <h4>Basic Service</h4>
                        <br />
                        <h6>*<span>1000kms or 1 Month Warranty </span></h6>
                        <br />
                        <div className="packages1_1">
                            <div>
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                                <br />
                                <h><FontAwesomeIcon icon="check" style={{ color: 'blue' }} />&nbsp; Oil Filter Replacement</h>
                            </div>
                            <div>

                                {/* <h> <FontAwesomeIcon icon="rupee-sign" style={{ color: 'black',fontSize:"20px"}}/></h>
       
       <br/> */}
                                <h style={{ color: 'black', fontSize: "30px" }}><FontAwesomeIcon icon="inr" style={{ color: 'black', fontSize: "30px" }} />&nbsp;{servicePrice[2]} </h>
                                <br />
                                <br />
                                <button className="btn btn-danger">Add To Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />




            </div>


            {/* -------------------------------//Cart Div//--------------------------------------- */}


            <div>
                <div className="secondDiv" id="second" style={{ display: showNormalDiv ? 'none' : 'block' }} >

                    <br />
                    <br />
                    <h2 style={{ paddingLeft: "80px", paddingRight: "60px" }}>Experince The Best Car Service In <h2>{city}</h2> </h2>
                    <br />
                    <br />
                    <center>
                        <form>
                            <input style={{ paddingTop: "10px", textAlign: "center" }} type="tel" id="phone" placeholder="Mobile" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            <br />
                            <br />


                            <input type="" style={{ paddingTop: "10px", textAlign: "center" }} value={selectCar} readOnly required></input>
                            <br />
                            <br />
                            <button className="btn btn-primary" onClick={handleButtonClick}>Check Price For Free</button>
                            <br />
                            <br />
                            <br />

                        </form>
                    </center>
                </div>


                {/* ---------------------------------------------------//Replace Div//------------------------------------------------------------ */}


                {showNormalDiv && (
                    <div className="secondDiv" style={{ height: "350px", width: "500px", }} >
                        <div style={{ display: showbrandDiv ? 'none' : 'block' }}
                            className="showpricediv"

                        >
                            <div className="showpricediv.inner"
                            >
                                <br />
                                <h5 style={{ textAlign: "center" }}> <b>Select Manufacturer</b></h5>
                                <br />

                                <h4 className="CarSelector">{selectCar}</h4>
                                <br />
                                <br />
                                <div className="carbrandLogosDiv">

                                    {AllBrands.map((brand, index) => (
                                        <div className="logo" key={brand.BrandId}>
                                            <img
                                                className="carLogos"
                                                src={brand.BrandImage}
                                                onClick={() => handlerCarClick(brand.BrandId)} //brand.BrandName,
                                                alt={brand.BrandName}
                                            />
                                            <br />
                                            <br />
                                            <h6 style={{ textAlign: "center" }}>{brand.BrandName}</h6>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}


                {showbrandDiv && (
                    <div className="secondDiv " style={{ height: "610px", width: "500px", display: showModelDiv ? 'none' : 'block' }}>


                        <div className="showpricediv">
                            <div className="showpricediv.inner">
                                <br />
                                <h5 style={{ textAlign: "center" }}>
                                    <b>Select Car Model</b>
                                </h5>
                                <br />
                                <h4 className="CarSelector">{selectCar}</h4>
                                <br />

                                <div className="carmodelLogosDiv">
                                    {/* Mapping over the AllBrands array */}
                                    {CarModels.map((models) => (
                                        <div className="logo" key={models.ModelId}>
                                            {/* Car logo image */}
                                            <img
                                                className="carModelLogos"
                                                src={models.BrandImage}
                                                onClick={() => varientHandler(models.ModelId)}
                                                alt={models.ModelName}
                                            />
                                            <br />
                                            <br />
                                            {/* Car model name */}
                                            <h6 style={{ textAlign: "center" }}>{models.ModelName}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}



                {showModelDiv && (
                    <div className="secondDiv" style={{ height: "450px", width: "500px", display: showServicesDiv ? 'none' : 'block' }}>
                        <div className="showpricediv">
                            <div className="showpricediv-inner">
                                <br />
                                <h5 style={{ textAlign: "center" }}>
                                    <b>Select Car Variant</b>
                                </h5>
                                <br />
                                <h4 className="CarSelector">{selectCar}</h4>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="VarientLogosDiv">

                                    {varient.map((varients) => (
                                        <div className="logo" key={varients.VarientId}>

                                            <img
                                                className="carVarient"
                                                src={varients.VarImage}
                                                onClick={() => SelectServiceHandler(varients.VarientId)}
                                                alt={varients.VarImage}
                                            />
                                            <br />
                                            <br />

                                            <h6 style={{ textAlign: "center" }}>{varients.VarName}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}





            </div>


        </div>

    )

}

export default Periodic;

