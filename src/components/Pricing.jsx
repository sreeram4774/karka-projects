import { Box, Button, Container, Paper, Tooltip, Typography, keyframes, styled, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef, useState } from 'react'
import EastIcon from '@mui/icons-material/East';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Pricing.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import timer from '../assets/images/timer.png'
import EmergencyIcon from '@mui/icons-material/Emergency';
import FormSubmission from './FormSubmission';

const glowEffect = keyframes`
        0% { filter: blur(4px) opacity(0.7); }
        50% { filter: blur(10px) opacity(1); }
        100% { filter: blur(6px) opacity(0.8); }
    `;

const PricingCardContainer = styled(({ isPreview, isMobile, ...rest }) => <Paper {...rest} />)(({ theme, index, isPreview, isMobile }) => ({
    textAlign: 'left',
    color: '#FFFFFF',
    borderRadius: '15px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    // width:"50%",
    // bgcolor:"blue",
    minHeight: 'auto',
    position: 'relative',

    backgroundColor: index === 0 ? '#110f0f' : 'transparent',
    backgroundImage: index === 1
        ? 'linear-gradient(74deg, #000428 0%, #004E92 113.02%)'
        : index === 2
            ? 'linear-gradient(180deg, #110F0F 0%, #212529 100%)'
            : 'none',

    ...(isPreview && isMobile && {
        "&::before": {
            content: '""',
            position: "absolute",
            inset: "-3px",
            borderRadius: '15px',
            padding: "3px",
            background: "linear-gradient(68deg, #2E3393 -1.82%, #1CFAFC 106.59%)",
            filter: "blur(8px)",
            zIndex: "-1",
            animation: `${glowEffect} 1.5s infinite alternate`,
        },
    }),

    border: index === 0 || index === 2 ? "1px solid #A1AEBF" : 'none',

    [theme.breakpoints.down(575)]: {
        minHeight: index === 0 || index === 2 ? '850px' : 'auto',
    },
    [theme.breakpoints.down(426)]: {
        minHeight: index === 0 || index === 2 ? '830px' : 'auto',
    },
    [theme.breakpoints.down(375)]: {
        height: index === 0 || index === 2 ? '850px' : 'auto',
    },
    [theme.breakpoints.down(365)]: {
        height: index === 0 || index === 2 ? '880px' : 'auto',
    },
    [theme.breakpoints.down(356)]: {
        height: index === 0 || index === 2 ? '900px' : 'auto',
    },
    [theme.breakpoints.down(321)]: {
        height: index === 0 || index === 2 ? '940px' : 'auto',
    },
    [theme.breakpoints.between(577, 600)]: {
        height: index === 0 || index === 2 ? '930px' : 'auto',
    },
    [theme.breakpoints.up('sm')]: {
        height: index === 0 || index === 2 ? '850px' : 'auto',
    },
    [theme.breakpoints.up('md')]: {
        height: index === 0 || index === 2 ? '850px' : 'auto',
    },
    [theme.breakpoints.up('lg')]: {
        height: index === 0 || index === 2 ? '815px' : 'auto'
    },
}));





const Pricing = () => {

    const [selectedCard, setSelectedCard] = useState(null);
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
    const [hoveredOne, setHoveredOne] = useState(false);
    const [hoveredTwo, setHoveredTwo] = useState(false);

    const pricingData = [
        {
            title: 'Self',
            originalPrice: '₹2000',
            discountedPrice: '₹499',
            description: 'Ideal for those who can learn things on their own and self-paced',
            applyText: `Secure Your ${currentMonth} Spot`,
            cardStyle: {
                // width: '100px',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            },
            features: [
                { checked: true, text: 'Online Mode' },
                { checked: true, text: 'Upto 360 hours in 3 Months' },
                { checked: true, text: <HighlightedText>Work on real customer projects</HighlightedText> },
                { checked: true, text: 'Stipend from Companies' },
                { checked: true, text: <CertificateText>Internship Certificate <br /><SubText>(Directly From Verified Companies)</SubText></CertificateText> }
            ],
            internships: [
                // { checked: true, text: 'Task practice' },
                { checked: false, text: 'Weekly Huddle with Mentor' },
                {
                    checked: true,
                    text:
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px" }}>
                            <HighlightedText>Job Simulation </HighlightedText>
                            <Tooltip
                                title={
                                    <span style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                                        Work on problem statements from real-time projects of the respective company
                                    </span>
                                }
                                arrow
                                placement="top"
                                enterTouchDelay={0}
                                leaveTouchDelay={3000}
                                disableInteractive
                                PopperProps={{
                                    modifiers: [
                                        {
                                            name: "preventOverflow",
                                            options: {
                                                boundary: "window",
                                            },
                                        },
                                    ],
                                }}
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            maxWidth: "180px", 
                                            whiteSpace: "normal",
                                            wordWrap: "break-word",
                                            fontSize: "10px",
                                            background: "black"
                                        },
                                    },
                                    arrow: {
                                        sx: {
                                            color: "black",
                                        },
                                    },
                                }}
                            >
                                <InfoOutlinedIcon fontSize='14px' />
                            </Tooltip>
                        </Box>
                },
                { checked: true, text: 'Free Learning Materials' },
                { checked: true, text: 'Agile Learning Process' },
                { checked: true, text: 'Task Completion Review' },
                { checked: true, text: 'Deploy on Github' },
            ],
        },
        // {
        //     title: 'Pro',
        //     originalPrice: '₹4000',
        //     discountedPrice: '₹2,999',
        //     description: 'Ideal those who need a accountability partner to track & provide feedback on your progress',
        //     applyText: (
        //         <>100% Refund <Typography component="span" color="white" sx={{ marginLeft: "3px" }}>*</Typography></>
        //     ),
        //     features: [
        //         { checked: true, text: 'Online Mode' },
        //         { checked: true, text: 'Upto 360 hours in 3 months' },
        //         { checked: true, text: <HighlightedText>Work on real customer projects</HighlightedText> },
        //         { checked: true, text: 'Stipend from companies' },
        //         {
        //             checked: true,
        //             text: (
        //                 <CertificateText>
        //                     Internship Certificate <br />
        //                     <SubText>(Directly From Verified Companies)</SubText>
        //                 </CertificateText>
        //             ),
        //         }
        //     ],
        //     title2: <Title2Text>Everything from<HighlightedText2> Self</HighlightedText2> and . . . .</Title2Text>,
        //     internships: [
        //         {
        //             checked: true,
        //             //  text: 'Weekly huddle with mentor'
        //             text:
        //                 < Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px" }} >
        //                     <Box>Weekly huddle with mentor </Box>
        //                     <Tooltip
        //                         title={
        //                             <span style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
        //                                 Receive feedback from your mentor, assess code, discuss challenges and gather insights to improve your skills and ensure your continuous learning.
        //                             </span>
        //                         }
        //                         arrow
        //                         placement="top"
        //                         enterTouchDelay={0}
        //                         leaveTouchDelay={3000}
        //                         disableInteractive
        //                         PopperProps={{
        //                             modifiers: [
        //                                 {
        //                                     name: "preventOverflow",
        //                                     options: {
        //                                         boundary: "window",
        //                                     },
        //                                 },
        //                             ],
        //                         }}
        //                         componentsProps={{
        //                             tooltip: {
        //                                 sx: {
        //                                     maxWidth: "190px", // ✅ Correctly applied width to Tooltip content
        //                                     whiteSpace: "normal",
        //                                     wordWrap: "break-word",
        //                                     fontSize: "10px",
        //                                     background: "black"
        //                                 },
        //                             },
        //                             arrow: {
        //                                 sx: {
        //                                     color: "black", // Sets the arrow color to match the tooltip background
        //                                 },
        //                             },
        //                         }}
        //                     >
        //                         <InfoOutlinedIcon fontSize='14px' />
        //                     </Tooltip>
        //                 </Box >
        //         },
        //         {
        //             checked: true,
        //             // text: 'AI Codegen'
        //             text:
        //                 < Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px" }} >
        //                     <Box>AI Codegen </Box>
        //                     <Tooltip
        //                         title={
        //                             <span style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
        //                                 Learn to use AI tools effectively, optimize code and integrate AI into your workflow. Get expert guidance on choosing the right tools for smarter development.
        //                             </span>
        //                         }
        //                         arrow
        //                         placement="right"
        //                         enterTouchDelay={0}
        //                         leaveTouchDelay={3000}
        //                         disableInteractive
        //                         PopperProps={{
        //                             modifiers: [
        //                                 {
        //                                     name: "preventOverflow",
        //                                     options: {
        //                                         boundary: "window",
        //                                     },
        //                                 },
        //                             ],
        //                         }}
        //                         componentsProps={{
        //                             tooltip: {
        //                                 sx: {
        //                                     maxWidth: "180px", // ✅ Correctly applied width to Tooltip content
        //                                     whiteSpace: "normal",
        //                                     wordWrap: "break-word",
        //                                     fontSize: "10px",
        //                                     background: "black"
        //                                 },
        //                             },
        //                             arrow: {
        //                                 sx: {
        //                                     color: "black", // Sets the arrow color to match the tooltip background
        //                                 },
        //                             },
        //                         }}
        //                     >
        //                         <InfoOutlinedIcon fontSize='14px' />
        //                     </Tooltip>
        //                 </Box >
        //         },
        //         { checked: true, text: 'Program switch' },/*  */
        //         { checked: true, text: <CertificatePortText>Portfolio <span style={{ marginRight: "4px" }}></span> <SubPortText>( <GitHubIcon sx={{ fontSize: "16px"/* , color: "#006eab" */, marginRight: .5 }} /><span>Github</span>)</SubPortText></CertificatePortText> },
        //     ],
        //     placements: [
        //         { checked: true, text: 'Resume preparation' },
        //         // { checked: true, text: 'Placement assistance' },
        //         { checked: true, text: 'Business English Training' },
        //         { checked: true, text: 'Softskill Training' },
        //     ]
        // },
        {
            title: 'Prime',
            originalPrice: '₹10000',
            discountedPrice: '₹2,999',
            description: 'Unlock your full potential and accelerate your career with expert guidance and placement assistance.',
            applyText: (
                <>100% Refund <Typography component="span" color="white" sx={{ marginLeft: "3px" }}>*</Typography></>
            ),
            cardStyle: {
                // width: '500px',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            },
            features: [
                { checked: true, text: 'Online Mode' },
                { checked: true, text: 'Upto 360 hours in 3 Months' },
                {
                    checked: true,
                    text:
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px" }}>
                            <HighlightedText>Work on Real Customer Projects</HighlightedText>
                        </Box>
                },
                { checked: true, text: 'Stipend from Companies' },
                {
                    checked: true,
                    text: (
                        <CertificateText>
                            Internship Certificate <br />
                            <SubText>(Directly From Verified Companies)</SubText>
                        </CertificateText>
                    ),
                }
            ],
            title2: <Title2Text>Everything from <HighlightedText2>Self</HighlightedText2> and . . . .</Title2Text>,
            internships: [

                { checked: true, text: 'Weekly Huddle' },
                { checked: true, text: 'AI Codegen' },
                // {
                //     checked: true, text: <CertificatePortText>Portfolio <span style={{ marginRight: "4px" }}></span>
                //         <SubPortText>(
                //             <LinkedInIcon sx={{ fontSize: "16px", color: "#006eab", marginRight: .5 }} />
                //             <span>LinkedIn</span>
                //             )</SubPortText>
                //     </CertificatePortText>
                // },

                { checked: true, text: 'Live Support & Doubt Clearance' },
                { checked: true, text: <CertificateText>Code + Task Review <SubText>(Github PR)</SubText></CertificateText> },
                { checked: true, text: 'Team Project' },
                { checked: true, text: 'Project Guidance' },
            ],
            placements: [
                { checked: true, text: 'Resume Preparation' },
                {
                    checked: true, text: <CertificatePortText>Portfolio <span style={{ marginRight: "4px" }}></span>
                        <SubPortText>(
                            <LinkedInIcon sx={{ fontSize: "16px", color: "#006eab", marginRight: .5 }} />
                            <span>LinkedIn</span>
                            )</SubPortText>
                    </CertificatePortText>
                },
                // { checked: true, text: 'Team Project' },
                // { checked: true, text: 'Project Guidance' },
                { checked: true, text: 'Mock Interview' },
            ]
        },
    ];

    const sliderRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [activeIndex, setActiveIndex] = useState(0);
    // const isPreviewMode = true; // Set this dynamically based on preview mode

    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClickOpen = (index) => {
        console.log(index);

        if (index === 0 || index === 1 || index === 2) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1.2 : 3,
        slidesToScroll: 1,
        afterChange: (current) => {
            let correctedIndex = current;
            const lastIndex = pricingData.length - (isMobile ? 1 : 2);

            if (current >= lastIndex) {
                correctedIndex = lastIndex - 1; // Shift focus one step back
            }
            if (correctedIndex == 1.85) {
                correctedIndex = 2
            }
            // correctedIndex == 1.85 ? correctedIndex = 2 : null;
            setActiveIndex(correctedIndex);
            // console.log(correctedIndex)
        },

        nextArrow: <CustomNextArrow onClick={() => sliderRef.current && sliderRef.current.slickNext()} />,
        prevArrow: <CustomPrevArrow onClick={() => sliderRef.current && sliderRef.current.slickPrev()} />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2.2 } },
            { breakpoint: 576, settings: { slidesToShow: 1.15 } },
            { breakpoint: 375, settings: { slidesToShow: 1.15 } }
        ],
    };

    const handleApplyClick = (card) => {
        setSelectedCard(card);
        let message = "";

        if (card.title === "Self") {
            message = "Hello Can I get more info ";
        } else if (card.title === "Pro") {
            message = "I would like to know more about the refund process.";
        } else if (card.title === "Prime") {
            message = "I would like to know more about the refund process.";
        }

        const encodedMessage = encodeURIComponent(message);

        const phoneNumber = "919385647154";

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };


    return (
        <section id="pricing">
            <Box sx={{
                backgroundColor: "#110f0f", minHeight: "100vh",
                color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 2, md: 2 }
            }}>
                <Container maxWidth="lg" align="center" >
                    <Box>
                        <Container maxWidth="lg"  >
                            <Typography
                                variant="h4"
                                mb={3}
                                fontWeight="500"
                                gutterBottom
                                // align="left"
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: { xs: "28px", sm: "25px", md: "30px", lg: "40px" },
                                }}>
                                Tailored Programmes for Your Career Growth
                            </Typography>
                            <Typography variant='body1' sx={{
                                color: 'rgba(255, 255, 255, 0.40)', fontSize: '13px', [theme.breakpoints.down('375')]: {
                                    fontSize: "0.7rem"
                                }, maxWidth: { xs: "100%", sm: '70%' }
                            }}>
                                We have solved your problem of finding an internship and excelling in your career into these three buckets below
                            </Typography>
                        </Container>
                    </Box>
                </Container >
                <Box sx={{width:'100%',height:"auto",height:"1100px",marginTop:"70px"}}>
                    <Slider ref={sliderRef} {...settings}  >
                            {pricingData.map((card, index) => (
                                <Box  key={index} sx={{display: "flex", justifyContent: "center", height: "1050px",marginTop: index === 1 ? 5 : 15,justifyContent:"space-around"}}>
                                    <PricingCardContainer
                                        elevation={3}
                                        index={index}
                                        isPreview={index !== activeIndex}
                                        isMobile={isMobile}
                                        sx={{
                                            overflow: "hidden",
                                            width: "95%",
                                            ...(index === 1 && {
                                            background: 'linear-gradient(74deg, #000428 0%, #004E92 113.02%)',
                                            boxShadow: "10px 0 30px 10px rgba(0, 78, 146, 0.6)", // Matches #004E92
                                            border: "1px solid rgba(0, 78, 146, 0.4)",
                                            transition: "all 0.3s ease-in-out",
                                            })
                                        }}
                                        >
                                        {/* <Box></Box> */}
                                        <Box textAlign={"center"} >
                                            <Typography variant="h4" sx={{ color: "#FFA800", textTransform: "uppercase", fontWeight: 700, marginBottom: "15px",marginTop:index===1?"50px":"30px",fontSize:index===1?"40px":"35px" }}>
                                                {card.title}
                                            </Typography>
                                        </Box>
                                        {index === 1 || index === 2 ? <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.32)', ml: 3, position: "absolute", top: '7%', left: '13%', background: 'linear-gradient(69deg, #FF0A54 4.18%, #FAE0E4 145.93%)', color: "white", transform: ' translate(-50%,-50%) rotate(-39deg)', padding: "4px 30px", fontSize: "15px", height: "fit-content", width: "100%", textAlign: "center" }}>
                                            15 Days Free Trial
                                        </Typography> : ""}
                                        {/* <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.32)', mr: 2, lineHeight: "25px", fontSize: "15px", textAlign: "center" }}>
                                            Starts From
                                        </Typography> */}
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, letterSpacing: "1px", flexDirection: "row",marginTop:'50px' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'end', letterSpacing: "1px", flexDirection: "row", }}>
                                                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.32)', mr: 1, textDecoration: 'line-through' }}>
                                                    {card.originalPrice}
                                                </Typography>
                                                <Typography variant="h4" fontWeight="bold" sx={{ color: '#FFFFFF', fontSize: { xs: "30px", sm: 'auto' } }}>
                                                    {index === 1 || index === 2 ? (
                                                        <>
                                                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.32)', mr: 2, lineHeight: "15px", fontSize: "13px", textAlign: "center" }}>
                                                                Starts From
                                                            </Typography>
                                                            {card.discountedPrice}
                                                        </>
                                                    ) : (
                                                        card.discountedPrice
                                                    )}
                                                </Typography>

                                            </Box>

                                            {index == 0 && (
                                                <Button variant="contained" sx={{
                                                    textTransform: 'uppercase',
                                                    background: 'linear-gradient(69deg, #FF0A54 4.18%, #FAE0E4 145.93%)',
                                                    borderRadius: "6px",
                                                    fontSize: { xs: "8px", sm: "7px", lg: "10px" },
                                                    fontWeight: "500",
                                                    marginLeft: "10px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    px: 1,
                                                    py: .2,
                                                }}>
                                                    <span>
                                                        LIMITED TIME OFFER
                                                    </span>
                                                    <Box
                                                        component="img"
                                                        src={timer}
                                                        alt=""
                                                        sx={{
                                                            height: "100%",
                                                            width: { xs: "20px", sm: "15px", lg: "20px" },
                                                            marginLeft: "5px"
                                                        }}
                                                    />
                                                </Button>
                                            )}
                                        </Box>

                                        <Typography variant="body2" sx={{ color: '#EEEEEE', mb: 3, fontSize: { xs: "12px", md: "12px", lg: "15px" }, fontWeight: "200" }}>
                                            {card.description}
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            // onClick={() => handleApplyClick(card)}
                                            onClick={() => handleClickOpen(index)}
                                            onMouseEnter={() => {
                                                if (index === 1) setHoveredOne(true);
                                                if (index === 2) setHoveredTwo(true);
                                            }}
                                            onMouseLeave={() => {
                                                if (index === 1) setHoveredOne(false);
                                                if (index === 2) setHoveredTwo(false);
                                            }}
                                            sx={{
                                                textTransform: "uppercase",
                                                position: "relative",
                                                background:
                                                    index === 0
                                                        ? "linear-gradient(68deg, #2E3393 -1.82%, #1CFAFC 106.59%)"
                                                        : index === 1 || index === 2
                                                            ? "linear-gradient(225.92deg, #33D2FF 5.73%, #3D68DE 54.65%, #9845E8 96.75%)"
                                                            : "none",

                                                borderRadius: "6px",
                                                fontSize: { xs: "9px", sm: "9px", lg: "13px" },
                                                fontWeight: "bold",
                                                width: {
                                                    xs: "100%", sm: (index === 1 && hoveredOne) || (index === 2 && hoveredTwo) ? "100%" : "80%",
                                                }, // ✅ Fixed width to prevent layout shift
                                                minWidth: "160px", // ✅ Ensures width remains stable
                                                padding: { xs: "7px", sm: "auto" },
                                                transition: "all 0.3s ease-in-out", // ✅ Smooth transition for text change
                                                whiteSpace: "nowrap", // ✅ Prevents text wrapping
                                                display: "flex", // ✅ Keeps text & icon aligned
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            {(index === 1 && hoveredOne) || (index === 2 && hoveredTwo) ? "100% Refund for first 500 Interns" : card.applyText}
                                            <EastIcon sx={{ marginLeft: "8px", transition: "transform 0.3s ease-in-out" }} />
                                            {(index === 1 || index === 2) ? <Typography sx={{ position: "absolute", bottom: -20, right: 0, fontSize: "9px" }}>Upon Successful Completion</Typography> : ""}

                                        </Button>

                                        <FormSubmission open={open} handleClose={handleClose} />


                                        <Box padding='15px 0px' sx={{ color: "white", fontWeight: '400', mt: 2 }}>
                                            {card.features && card.features.length > 0 && (
                                                <Box padding={{ xs: "5px 18px", md: '5px 24px' }}
                                                >
                                                    {
                                                        card.features.map((feature, index) => (
                                                            <FeatureItem key={index} feature={feature} />
                                                        ))
                                                    }
                                                </Box>
                                            )}
                                            {card.title2 && <Typography variant='h5' sx={{ fontSize: "16px", textAlign: "center" }}>
                                                {card.title2}
                                            </Typography>}

                                            {card.internships && card.internships.length > 0 && (
                                                <SectionBox index={index} title="Internship" items={card.internships} />
                                            )}

                                            {card.placements && card.placements.length > 0 && (
                                                <SectionBox index={index} title="Placement" items={card.placements} />
                                            )}
                                        </Box>


                                    </PricingCardContainer>

                                </Box>
                            ))
                            }
                    </Slider >
                </Box>
            </Box >
        </section >
    );
};

const FeatureItem = ({ feature }) => (
    <Box sx={{ display: 'flex', alignItems: 'start', gap: 1, marginBottom: 1 }}>
        <Typography variant='body2' component="span" sx={{ fontSize: "13px" }}>
            {feature.checked ? <VerifiedIcon sx={{ fontSize: { xs: "14px", lg: "16px" }, color: "#3ED37A" }} /> : <CloseIcon sx={{ color: 'red', fontSize: "18px" }} />}
        </Typography>
        <Typography variant='body2' component="span" sx={{ fontSize: { xs: "11px", lg: "14px" }, fontWeight: 200 }}>
            {feature.text}
        </Typography>
    </Box>
);

const SectionBox = ({ index, title, items }) => (
    <Box sx={{
        background: index % 2 === 1 ? 'linear-gradient(180deg, rgba(19, 22, 27, 0.20) 0%, rgba(22, 43, 96, 0.20) 100%)' : 'linear-gradient(180deg, rgba(0, 7, 45, 0.20) 0%, rgba(32, 36, 39, 0.20) 100%)',
        backdropFilter: 'blur(5.099999904632568px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        // borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        padding: { xs: "5px 18px", md: '5px 24px' },
        mt: 2,
        borderRadius: '12px',
    }}>
        <Typography variant='h6' margin='15px 0px' sx={{ color: "#3ED37A" }}>{title}</Typography>
        {items.map((item, index) => (
            <FeatureItem key={index} feature={item} />
        ))}
    </Box>
);

const HighlightedText = ({ children }) => (
    <span style={{ color: "#1FD7E9", fontWeight: 600 }}>{children}</span>
);
const HighlightedText2 = ({ children }) => (
    <span style={{ color: "#FFA800", fontWeight: 600, textTransform: "uppercase" }}>{children}</span>
);

const CertificateText = ({ children }) => (
    <>{children}</>
);

const SubText = ({ children }) => (
    <Box component='span' sx={{ fontSize: { xs: "11px", sm: "11px" }, color: "#A1AEBF", }}>{children}</Box>
);

const CertificatePortText = ({ children }) => (
    <Box component='span' sx={{ display: "flex" }}>{children}</Box>
);
const SubPortText = ({ children }) => (
    <Box component='span' sx={{ fontSize: { xs: "11px", sm: "11px" }, display: "flex", alignItems: "center", justifyContent: "center", color: "#A1AEBF" }}>{children}</Box>
);

const Title2Text = ({ children }) => (
    <Typography variant='body1' sx={{
        fontSize: { xs: "15px", sm: "16px" }, textAlign: "center", whiteSpace: "nowrap"
    }}>
        <span>{children}</span>
    </Typography>
);


const CustomNextArrow = ({ onClick }) => (
    <IconButton
        style={{ display: 'none', position: 'absolute', top: '0', right: '0', transform: 'translateY(-50%)', zIndex: 10, border: "1px solid #ffa800", borderRadius: '0', color: "#ffa800", background: '#110f0f' }}
        onClick={onClick}
    >
        <ArrowForwardIosIcon />
    </IconButton>
);

const CustomPrevArrow = ({ onClick }) => (
    <IconButton
        sx={{ display: 'none', position: 'absolute', top: '0', right: { xs: '20%', sm: '7%' }, transform: 'translateY(-50%)', zIndex: 10, border: "1px solid #ffa800", borderRadius: '0', color: "#ffa800", background: '#110f0f' }}
        onClick={onClick}
    >
        <ArrowBackIosNewIcon />
    </IconButton>
);

export default Pricing;