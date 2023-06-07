import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../styles/Card";
import CameraImg from "../assets/camera.jpg";
import AirpodImg from "../assets/airpod.jpg";
import AlexaImg from "../assets/alexa.jpg";
import MouseImg from "../assets/mouse.jpg";

import { ImageCard } from "../styles/Image";
import styled from "styled-components";
import ResponsiveStyle from "../styles/ResponsiveStyles";
import { Button } from "../styles/Button";
import { Select } from "../styles/Options";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Inputs } from "../styles/Input";
//
import Description from "../Components/Description";
import AddInformation from "../Components/AddInformation";
import Shipping from "../Components/Shipping";
import Reviews from "../Components/Reviews";

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  const [description, setDescription] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [information, setInformation] = useState(false);
  const [shipping, setShipping] = useState(false);

  const VisibleHandler = (e) => {
    let id = e.target.id;
    if (id === "descriptionHanlder") {
      setDescription(true);
      setReviews(false);
      setInformation(false);
      setShipping(false);
    }
    if (id === "informationHanlder") {
      setDescription(false);
      setReviews(false);
      setInformation(true);
      setShipping(false);
    }
    if (id === "shippingHanlder") {
      setDescription(false);
      setReviews(false);
      setInformation(false);
      setShipping(true);
    }
    if (id === "reviewHanlder") {
      setDescription(false);
      setReviews(true);
      setInformation(false);
      setShipping(false);
    }
  };

  // useEffect(() => {
  //   setDescription(true);
  // }, []);

  return (
    <>
      <CardDetails gap="1rem">
        <AllGalleryCard width="100%" gap="10px">
          <GalleryCard>
            <ImageCardDetails src={AirpodImg} />
            <ImageCardDetails src={AlexaImg} />
            <ImageCardDetails src={CameraImg} />
            <ImageCardDetails src={MouseImg} />
            <ImageCardDetails src={CameraImg} />
          </GalleryCard>

          <ImageCardDetails src={CameraImg} height="auto" width="100%" />
        </AllGalleryCard>
        <Card flexDirection="column" gap="10px" width="fit-content">
          <h1 className="name">
            <>Product Title All the details that</>
          </h1>
          <p className="reviews">
            <span className="reviewIcon">
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarHalf className="star" />
              <BsStar className="star" />
            </span>
            <span>(2 reviews)</span>
          </p>
          <div className="price">$1280.00</div>
          <p className="shortDescription">
            Short description All the details that i need are here Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Provident, nihil. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nam.
            Lorem
          </p>
          <Card alignItems="center" height="40px">
            <label className="color">Color:</label>
            <Card gap="5px">
              <ImageCard
                src={CameraImg}
                width="40px"
                height="40px"
                borderRadius="5px"
                className="colorImg"
              />
              <ImageCard
                src={CameraImg}
                width="40px"
                height="40px"
                borderRadius="5px"
                className="colorImg"
              />
            </Card>
          </Card>

          <Card alignItems="center" height="40px">
            <label className="color">Size:</label>
            <Card gap="5px" height="40px">
              <Select>
                <option>Select a size</option>
                <option>Large</option>
                <option>Small</option>
              </Select>
            </Card>
          </Card>

          <Card alignItems="center" height="40px">
            <label className="color">Qty:</label>
            <Card
              gap="5px"
              alignItems="center"
              border="1px solid #cccccc"
              borderRadius="5px"
              width="150px"
              height="40px"
            >
              <AiOutlineMinus className="qty" />
              <Inputs border="none" textAlign="center" />
              <AiOutlinePlus className="qty" />
            </Card>
          </Card>

          <Button
            maxWidth="220px"
            height="40px"
            onClick={() => navigate("/cart")}
          >
            Add to Cart
          </Button>

          <CatyShare>
            <div>Category: {"Women, Dresses, Yellow"}</div>
            <div>Share: Facebook, WhatsApp,</div>
          </CatyShare>
        </Card>
      </CardDetails>
      <br />
      <Card flexDirection="column">
        <DescriptionHeader>
          <MyPara
            color={description ? "blueviolet" : ""}
            id="descriptionHanlder"
            onClick={(e) => VisibleHandler(e)}
            borderBottom={description ? "2px solid blueviolet" : ""}
          >
            Description
          </MyPara>
          <MyPara
            color={information ? "blueviolet" : ""}
            id="informationHanlder"
            onClick={(e) => VisibleHandler(e)}
            borderBottom={information ? "2px solid blueviolet" : ""}
          >
            Additional Information
          </MyPara>
          <MyPara
            color={shipping ? "blueviolet" : ""}
            id="shippingHanlder"
            onClick={(e) => VisibleHandler(e)}
            borderBottom={shipping ? "2px solid blueviolet" : ""}
          >
            Shipping {"&"} Returns
          </MyPara>
          <MyPara
            color={reviews ? "blueviolet" : ""}
            id="reviewHanlder"
            onClick={(e) => VisibleHandler(e)}
            borderBottom={reviews ? "2px solid blueviolet" : ""}
          >
            Reviews
          </MyPara>
        </DescriptionHeader>
        <Card border="1px solid #cccccc" padding="24px" borderRadius="5px">
          <Card
            opacity={description ? "1" : "0.2"}
            transition="all 1s 0s ease-in-out"
            color="#555555"
          >
            {description && <Description />}
          </Card>
          <Card
            opacity={information ? "1" : "0.2"}
            transition="all 1s 0s ease-in-out"
            color="#555555"
          >
            {information && <AddInformation />}
          </Card>
          <Card
            opacity={shipping ? "1" : "0.2"}
            transition="all 1s 0s ease-in-out"
            color="#555555"
          >
            {shipping && <Shipping />}
          </Card>
          <Card
            opacity={reviews ? "1" : "0.2"}
            transition="all 1s 0s ease-in-out"
            color="#555555"
          >
            {reviews && <Reviews />}
          </Card>
        </Card>
      </Card>
      <br />
    </>
  );
};

const CardDetails = styled(Card)`
  .name,
  .price {
    color: #333333;
    font-size: 24px;
    font-weight: lighter;
    letter-spacing: -1px;
  }
  .price {
    color: #b36af8;
  }
  .reviews {
    gap: 7px;
    font-size: 13px;
    color: #cccccc;
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .reviewIcon {
    color: #ffbb00;
  }
  .star {
    width: 15px;
  }
  .shortDescription,
  .color {
    color: #777777;
    font-size: 14px;
  }
  .color {
    width: 70px;
    padding: 10px 10px 10px 0px;
  }
  .colorImg:focus,
  .colorImg:active {
    /* outline: #992a2a solid 10px; */
    /* border: 2px solid green; */
  }
  .qty {
    width: 50%;
  }
  .descriptionBody {
    background: red;
  }
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

const ImageCardDetails = styled(ImageCard)`
  height: auto;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
`;

const AllGalleryCard = styled(Card)`
  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

const GalleryCard = styled(Card)`
  flex-direction: column;
  max-width: 100px;
  gap: 10px;
  max-height: fit-content;

  @media (max-width: 991px) {
    flex-direction: row;
    max-width: 100%;
  }
`;

const CatyShare = styled(Card)`
  justify-content: space-between;
  color: #777777;
`;

const DescriptionHeader = styled(Card)`
  justify-content: center;
  flex-wrap: wrap;
`;

const MyPara = styled.p`
  color: ${(props) => props.color || "black"};
  padding: 8px 24px;
  border-bottom: ${(props) => props.borderBottom || "none"};
  /* transform: translateX(100%); */
  /* transition: display 1s 0s all; */
`;

export default ProductDetailsPage;
