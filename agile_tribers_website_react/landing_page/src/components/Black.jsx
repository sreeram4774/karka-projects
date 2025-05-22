import React from "react";
import { Box, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import logo from '../assets/Vector.png';
import { useState, useEffect } from "react";


const Black = () => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setcharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const textArray = ["Freelancer", "Open Source Contributer", "Junior Engineer", "startup Engineer",]
  const speed = 100;
  const delay = 1300;
  const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-yellow-500"];

  useEffect(() => {
    const currentText = textArray[textIndex]

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText.charAt(charIndex))
        setcharIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else {
      setTimeout(() => {
        setDisplayText("")
        setcharIndex(0)
        setTextIndex((prev) => (prev + 1) % textArray.length)
      }, delay);
    }
  }, [charIndex, textIndex]);

  useEffect(()=>{
    const blinkInterval=setInterval(()=>{
      setBlink((prev)=> !prev)
    },500);
    return () => clearInterval(blinkInterval)
  },[]);
  return (
    <>
      <Box sx={{ height: "auto", backgroundColor: "black", padding: "2rem 0", }}>
        <Box
          className="blue_image"
          sx={{
            position: "absolute",
            right: '0%',
            zIndex: "1",
            top: { xs: "-30px", sm: "-50px", md: "-70px", lg: "0px" },
            width: { xs: "150px", sm: "250px", md: "350px", lg: "450px" },
            height: { xs: "150px", sm: "250px", md: "350px", lg: "450px" },
            "&::before": {
              content: '""',
              position: "absolute",
              width: { xs: '200px', sm: '350px', md: '350px', lg: '700px' },
              height: { xs: '200px', sm: '400px', md: '500px', lg: '580px' },
              backgroundImage: `url(${logo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              right: 0,
              // top: "50%",
              // transform:{xs:'translateY(-95%)',sm:'translateY(-135%)',md:'translateY(-135%)'} , 
            },
          }}
        />

        <Box sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: { xs: "0", md: "4vw" },
          justifyContent: { xs: "center", md: "start" }
        }}>
          <Box sx={{
            height: "35vh",
            width: "80%",
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" }
          }}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              }}
            >
              Become a <br />
              <Typography
                component="span"
                sx={{
                  color: "#FFA800",
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                  fontWeight: 'bold'
                }}
              >
                <div className={`font-bold ${colors[textIndex]} transition-all duration-500`} style={{fontSize:'3rem'}}>
                  {displayText}
                  <span className={`${blink ? "opacity-100" : "opacity-0"}`}>|</span>
                </div>
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          gap: "2rem",
          padding: "1rem"
        }}>

          <Box sx={{ width: { xs: "90%", md: "51%", }, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }
              }}
            >
              Begin your AI Driven Tech <br />Career with
              <Typography
                component="span" variant="h4"
                sx={{ color: "#FFA800", marginLeft: { xs: '1vw', md: "1vw" }, fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
              >
                InternTribe
              </Typography>
            </Typography>
          </Box>

          <Box sx={{
            width: { xs: "90%", md: "35%" },
            display: "flex",
            flexDirection: "column",
          }}>
            <Typography
              variant="body1"
              sx={{
                color: "grey",
                fontSize: { xs: "1rem", sm: "1.2rem" }
              }}
            >
              Work on real internships with verified companies and gain valuable industry experience. No hidden barriers—hands-on practice & enhance your ability. Enhance your resume and unlock new opportunities.
            </Typography>

            <Box sx={{ width: "100%", maxWidth: "550px", marginTop: "1rem", }}>
              <Box sx={{
                height: "50px",
                backgroundColor: "#FFA800",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                borderRadius: "8px"
              }}>
                <EmojiEventsIcon sx={{ fontSize: 40, color: "blue" }} />
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
                >
                  Get Internship Certificate Directly from the Company
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Black;
