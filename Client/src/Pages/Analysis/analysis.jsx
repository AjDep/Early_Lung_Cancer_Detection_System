import React, { useState, useEffect } from "react";
import Header from "./../../components/header/header";
import Bottem_card from "./../../components/Analysis/bottem_card";
import Pie_chart from "./../../components/Analysis/pie_chart";
import style from "./anlysis.module.css";
import girlImage from "./../../assets/Girl.png";
import Details from "./../../components/Analysis/details";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Analysis() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Name, setName] = useState("");
  const [Ecount, setECount] = useState(""); //->number of Patients with similar Alkane levels
  const [Ccount, setCCount] = useState(""); //->Patients that have cancer with the similar ALkane level
  const [NCcount, setNCCount] = useState(""); //->Patients that don't have cancer with the similar Alkane level
  const [Totalcount, setTotalCount] = useState(""); //->Total number of Patients with similar Alkane levels

  useEffect(() => {
    const fetchDataFromMongo = async (customerId) => {
      try {
        const response = await fetch(
          `http://localhost:5038/api/Customer/${customerId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          const phoneNumber = data.ContactNumber;
          const Name = data.name;
          setPhoneNumber(phoneNumber);
          setName(Name);
        } else {
          throw new Error("Response is not JSON");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setPhoneNumber("Error fetching phone number");
      }
    };

    const customerId = "65f2b0f77cd285a6382417a4"; // Replace with the actual customer ID
    fetchDataFromMongo(customerId);
  }, []);
  // Empty dependency array for one-time effect

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5038/api/Customer/Count"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const { count } = await response.json();
        setTotalCount(count); // Set the count in state
      } catch (error) {
        console.error("Error:", error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []);
  //Total number of Patients with similar Alkane levels
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5038/api/Customer/Count2"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const { count } = await response.json();
        setECount(count); // Set the count in state
      } catch (error) {
        console.error("Error:", error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []);
  //Total number of Patients that have cancer with the similar ALkane level
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5038/api/Customer/Count3"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const { count } = await response.json();
        setCCount(count); // Set the count in state
      } catch (error) {
        console.error("Error:", error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []);
  ////Total number of Patients that don't have cancer with the similar Alkane level
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5038/api/Customer/Count4"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const { count } = await response.json();
        setNCCount(count); // Set the count in state
      } catch (error) {
        console.error("Error:", error);
        // Handle errors, show error messages, etc.
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []);

  const similarAlkanePercentageOfTotalUsers = (Ecount / Totalcount) * 100;
  const similarAlkanePercentageOfTotalUsersWithCancer =
    (Ccount / Totalcount) * 100;

  const cards = [
    { Details: "Number of people with the same result.", value: Ecount },
    {
      Details: "Number of cancer patients with identical alkane levels.",
      value: Ccount,
    },
    {
      Details: "Non-cancer individuals with equivalent alkane levels.",
      value: NCcount,
    },
    {
      Details: "Similar alkane levels as a percentage of total users.",
      value: similarAlkanePercentageOfTotalUsers + "%",
    },
    {
      Details: "Cancer-diagnosed individuals as a percentage.",
      value: similarAlkanePercentageOfTotalUsersWithCancer + "%",
    },
  ];

  const top_cards = [
    { title: "Prediction", value: "predict" },
    { title: "Recommendation", value: "recomendation" },
  ];

  return (
    <div>
      <Row>
        <Header name="Analysis" />
      </Row>
      <Row className="content">
        <Col>
          <Row>
            <Col>
              <div className={style.top_container}>
                <Pie_chart />
              </div>
            </Col>
            <Col>
              <div className={style.detail}>
                {top_cards.map((item, i) => (
                  <Details key={i} title={item.title} value={item.value} />
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            <div>
              <div className={style.bottem}>
                {cards.map((card, i) => (
                  <Bottem_card
                    key={i}
                    Details={card.Details}
                    value={card.value}
                  />
                ))}
              </div>
            </div>
          </Row>
        </Col>

        <Col>
          <img src={girlImage} alt="" />
        </Col>
      </Row>
    </div>
  );
}

export default Analysis;
