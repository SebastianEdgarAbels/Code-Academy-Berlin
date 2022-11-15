import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TitleImage from "../components/TitleImage";
import "./View.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Button } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import StarRateIcon from "@mui/icons-material/StarRate";

const View = () => {
  const location = useLocation();
  const params = useParams();
  //   console.log("location", location);
  //   console.log("params :>> ", params.id);

  const [errorDetails, setErrorDetails] = useState(null);
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const urlDetails = `https://cab-cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=${params.id}`;
      const response = await fetch(urlDetails);
      const results = await response.json();
      console.log("result :>> ", results);
      setDetails(results);
      // console.log("details", details.screenshots);
    } catch (error) {
      setErrorDetails(error.message);
    }
  };
  // console.log("details", details);

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      {details && (
        <div className="containerView">
          <div id="img">
            <img src={details.thumbnail} alt={details.title} />
            {/* <div>
              <p>{details.title}</p>
              <p>{details.developer}</p>
            </div> */}
            <div className="starButton">
              <StarBorderIcon
                style={{ color: "#009688", borderColor: "#009688" }}
                onClick={(e) => {
                  console.log("StarClicked:>>>>", e.target.value);
                }}
              />
              <Button
                variant="outlined"
                style={{ color: "#009688", borderColor: "#009688" }}
              >
                Play NOW!{" "}
                <SportsEsportsIcon
                  style={{ color: "#009688", borderColor: "#009688" }}
                />
              </Button>
            </div>
          </div>
          <main>
            <h3>About {details.title}</h3>
            <p>{details.description}</p>
          </main>
          <div id="aditionalInfo">
            <div>
              <h3>Aditional Information</h3>
              <p>Title</p>
              <p>{details.title}</p>
            </div>
            <div>
              <p>Developer</p>
              <p>{details.developer}</p>
            </div>
            <div>
              <p>Publisher</p>
              <p>{details.publisher}</p>
            </div>
            <div>
              <p>Release Date</p>
              <p>{details.release_date}</p>
            </div>
            <div>
              <p>Genre</p>
              <p>{details.genre}</p>
            </div>
            <div>
              <p>Platform</p>
              <p>{details.platform}</p>
            </div>
          </div>
          <div id="screenshots">
            <h3>{details.title}'s Screenshots</h3>
            <div id="titleImg">
              <TitleImage
                className="screenshotImg"
                images={details.screenshots}
                gametitle={details.title}
              />
            </div>
          </div>
          {details.minimum_system_requirements ? (
            <div id="systemRequirements">
              {/* here i have to make an if else and if details.minimum_system_requirements is true then what it comes else details.title + is a browser based game and should run 
        smoothly on practically any PC with a updated web-browser.
If you have old hardware or software, you may still be able to play 
Forge of Empires, but your game experience may suffer. For the best 
gameplay experience, we recommend the latest versions of Firefox, 
Chrome, or Internet Explorer.

 */}

              <h3>Minimum System Requirements({details.platform})</h3>
              <div>
                <h5> OS:</h5>
                <p>{details.minimum_system_requirements.os}</p>
              </div>
              <div>
                <h5> Memory:</h5>
                <p>{details.minimum_system_requirements.memory}</p>
              </div>
              <div>
                <h5> Storage:</h5>
                <p>{details.minimum_system_requirements.storage}</p>
              </div>
              <div>
                <h5> Processor:</h5>
                <p>{details.minimum_system_requirements.processor}</p>
              </div>
              <div>
                <h5> Graphics:</h5>
                <p>{details.minimum_system_requirements.graphics}</p>
              </div>
              <div>
                <h5> Additional Notes:</h5>
                <p>Specifications may change during development</p>
              </div>
            </div>
          ) : (
            <div id="systemRequirements">
              <p>
                {" "}
                {details.title} is a browser based game and should run smoothly
                on practically any PC with a updated web-browser. If you have
                old hardware or software, you may still be able to play Forge of
                Empires, but your game experience may suffer. For the best
                gameplay experience, we recommend the latest versions of
                Firefox, Chrome, or Internet Explorer.
              </p>
            </div>
          )}
          <div id="user-Reviews">Revs</div>
        </div>
      )}
    </>
  );
};

export default View;
