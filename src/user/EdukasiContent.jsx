import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import img1 from "../Images/imgEdukasi1.png";
import img2 from "../Images/imgEdukasi2.png";
import img3 from "../Images/imgEdukasi3.png";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
// import "../style/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Heading from "./Heading";

function Edukasi2() {
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
         <Heading></Heading>
      <div className="w-full h-full ">
        {/* <div className="flex justify-end px-10">
          <Button color="blue" className="mt-14 bg-blue-700">
            Add Content
          </Button>
        </div> */}
        <div className="px-12">
          <Button color="blue" className="w-1/4 text-lg bg-blue-700 mt-5 cursor-default">
            What Is Plastic Polution
          </Button>
          <div className="mt-8">
            <img
              src={img1}
              width={"400px"}
              className="h-48 float-left me-5 mb-2"
            />
            <p className="text-sm">
              Reducing plastic waste is essential to mitigate its detrimental
              impact on the environment. There are several effective strategies
              and lifestyle changes that individuals, communities, and
              governments can adopt to minimize plastic waste. Firstly, raising
              awareness about the consequences of plastic pollution is crucial.
              Education campaigns can inform people about the environmental
              impact of plastic and encourage them to make more sustainable
              choices. This awareness can drive behavioral changes, leading to
              reduced plastic usage. Additionally, promoting and investing in
              research and development for alternative materials can
              significantly contribute to decreasing our reliance on
              conventional plastics. Biodegradable and compostable materials
              offer promising alternatives that break down naturally, posing
              fewer threats to the environment. Secondly, recycling programs
              play a pivotal role in reducing plastic waste. Communities and
              businesses should invest in efficient recycling systems that
              encourage the proper disposal of plastic products.{" "}
             
            </p>
            <p className="text-sm">
              Governments can enforce stricter regulations and provide
              incentives for recycling initiatives, making it easier and more
              economically viable for individuals and industries to recycle
              plastics. Additionally, promoting the concept of the circular
              economy, where products are designed to be reused, refurbished, or
              recycled, can significantly reduce the demand for new plastic
              production. Thirdly, reducing single-use plastic consumption is
              paramount. Encouraging the use of reusable items such as bags,
              bottles, and containers can significantly cut down on plastic
              waste. Businesses can take the lead by offering eco-friendly
              packaging options and minimizing plastic packaging wherever
              possible. Consumers, on the other hand, can consciously choose
              products with minimal or no plastic packaging, thus reducing
              demand for such items. Governments can also implement policies
              like plastic bag bans and impose taxes on single-use plastics to
              discourage their usage.
              {/* <div className="flex justify-end">
                <h2 className="text-3xl mr-3">
                  <Link to="/Event/update">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                </h2>
                <h2 className="text-3xl">
                  <FontAwesomeIcon icon={faTrashCan} onClick={handleClick} />
                </h2>
              </div> */}
            
            </p>
          </div>
          <Button color="blue" className=" text-lg mt-8 bg-blue-700 cursor-default">
            How We Do Reduce Plastic Waste
          </Button>
          <div className="mt-8">
            <img src={img2} alt="" className="h-48 float-left me-5 mb-2" />
            <p className="text-sm">
              Reducing plastic waste is essential to mitigate its detrimental
              impact on the environment. There are several effective strategies
              and lifestyle changes that individuals, communities, and
              governments can adopt to minimize plastic waste. Firstly, raising
              awareness about the consequences of plastic pollution is crucial.
              Education campaigns can inform people about the environmental
              impact of plastic and encourage them to make more sustainable
              choices. This awareness can drive behavioral changes, leading to
              reduced plastic usage. Additionally, promoting and investing in
              research and development for alternative materials can
              significantly contribute to decreasing our reliance on
              conventional plastics. Biodegradable and compostable materials
              offer promising alternatives that break down naturally, posing
              fewer threats to the environment. Secondly, recycling programs
              play a pivotal role in reducing plastic waste. Communities and
              businesses should invest in efficient recycling systems that
              encourage the proper disposal of plastic products.{" "}
             
            </p>
            <p className="text-sm">
              Governments can enforce stricter regulations and provide
              incentives for recycling initiatives, making it easier and more
              economically viable for individuals and industries to recycle
              plastics. Additionally, promoting the concept of the circular
              economy, where products are designed to be reused, refurbished, or
              recycled, can significantly reduce the demand for new plastic
              production. Thirdly, reducing single-use plastic consumption is
              paramount. Encouraging the use of reusable items such as bags,
              bottles, and containers can significantly cut down on plastic
              waste. Businesses can take the lead by offering eco-friendly
              packaging options and minimizing plastic packaging wherever
              possible. Consumers, on the other hand, can consciously choose
              products with minimal or no plastic packaging, thus reducing
              demand for such items. Governments can also implement policies
              like plastic bag bans and impose taxes on single-use plastics to
              discourage their usage.
              {/* <div className="flex justify-end">
                <h2 className="text-3xl mr-3">
                  <Link to="/Event/update">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                </h2>
                <h2 className="text-3xl">
                  <FontAwesomeIcon icon={faTrashCan} onClick={handleClick} />
                </h2>
              </div> */}
            
            </p>
          </div>

          <Button color="blue" className="w-1/4 text-lg mt-8 bg-blue-700 cursor-default">
            How We Can Help
          </Button>
          <div className="mt-8 mb-10">
            <img src={img3} alt="" className="h-48 float-left me-5 mb-2" />
            <p className="text-sm">
              To address plastic pollution, we can organize various events and
              programs that actively involve communities. One effective way is
              to conduct local clean-up campaigns. In these events, volunteers
              can come together to clean beaches, rivers, or other public areas
              from plastic waste. Not only does this clean the environment, but
              it also raises public awareness about the importance of
              cleanliness and reducing the use of single-use plastics.
              Furthermore, these events can include education on recycling and
              ways to reduce plastic waste in everyday life. Reducing plastic
              can also be accomplished through educational campaigns in schools
              and universities. Organizing seminars, workshops, or training
              sessions on the negative impacts of plastic on the environment and
              ways to reduce it can raise awareness among the younger
              generation. Students can be encouraged to develop creative ideas
              such as using reusable water bottles and shopping bags, as well as
              recycling plastic to create useful products. By educating the next
              generation, we can instill sustainable habits and reduce the
              plastic generation.
              {/* <div className="flex justify-end">
                <h2 className="text-3xl mr-3">
                  <Link to="/Event/update">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                </h2>
                <h2 className="text-3xl">
                  <FontAwesomeIcon icon={faTrashCan} onClick={handleClick} />
                </h2>
              </div> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edukasi2;
