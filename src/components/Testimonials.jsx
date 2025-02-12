import { Box, Button, Chip, Container, Grid, Paper, Typography, styled, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import EastIcon from '@mui/icons-material/East';
import VerifiedIcon from '@mui/icons-material/Verified';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'react-slick';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import '../styles/Pricing.css'

const PricingCardContainer = styled(Paper)(({ theme, index }) => ({
    textAlign: 'left',
    color: '#FFFFFF',
    borderRadius: '15px',
    // border: '1px solid #A1AEBF',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
    backgroundColor: index === 0 ? '#110f0f' : 'transparent',
    backgroundImage: index === 1 ? 'linear-gradient(74deg, #000428 0%, #004E92 113.02%)' : index === 2 ? 'linear-gradient(180deg, #110F0F 0%, #212529 100%)' : 'none',
    border: index === 0 ? "1px solid #A1AEBF" : index === 2 ? '1px solid #A1AEBF' : 'none',
    // marginTop: index === 0 || index === 2 ? '10px' : '0px',
    [theme.breakpoints.up('xs')]: {
        height: index === 0 || index === 2 ? '830px' : 'auto',
        marginTop: index === 0 || index === 2 ? '38px' : '0px',
    },
    [theme.breakpoints.up('sm')]: {
        height: index === 0 || index === 2 ? '830px' : 'auto',
        marginTop: index === 0 || index === 2 ? '40px' : '0px',
    },
    [theme.breakpoints.up('md')]: {
        height: index === 0 || index === 2 ? '830px' : 'auto',
        marginTop: index === 0 || index === 2 ? '40px' : '0px',
    },
    [theme.breakpoints.up('lg')]: {
        height: index === 0 || index === 2 ? '870px' : 'auto',
        marginTop: index === 0 || index === 2 ? '41px' : '0px',
    },

    [theme.breakpoints.down(425)]: {
        height: index === 0 || index === 2 ? '840px' : 'auto',
        marginTop: index === 0 || index === 2 ? '44px' : '0px',
    },
    [theme.breakpoints.down(375)]: {
        height: index === 0 || index === 2 ? '920px' : 'auto',
        marginTop: index === 0 || index === 2 ? '18px' : '0px',
    },
}));








const Pricing = () => {
    const pricingData = [
        {
            title: 'Self',
            originalPrice: '₹2000',
            discountedPrice: '₹0',
            description: 'Ideal for those who can learn things on their own and self-paced',
            features: [
                { checked: true, text: 'Online Mode' },
                { checked: true, text: 'Upto 360 hours in 3 months' },
                { checked: true, text: <HighlightedText>Work on real customer projects</HighlightedText> },
                { checked: true, text: 'Stipend from companies' },
                { checked: true, text: <CertificateText>Internship Certificate <br /><SubText>(Directly from verified companies)</SubText></CertificateText> }
            ],
            internships: [
                { checked: true, text: 'Pre-assessment' },
                { checked: true, text: 'Task practice' },
                { checked: true, text: <HighlightedText>Job simulation</HighlightedText> },
                { checked: true, text: 'Free learning materials' },
                { checked: true, text: 'Agile learning process' },
                { checked: true, text: 'Task completion review' },
                { checked: true, text: <CertificateText>Portfolio <SubText>(LinkedIn)</SubText></CertificateText> },
                { checked: true, text: 'Deploy in Github' },
            ],
        },
        {
            title: 'Pro',
            originalPrice: '₹4000',
            discountedPrice: '₹1,999',
            description: 'Ideal for those who need to gain live skills from a Senior developer',
            features: [
                { checked: true, text: 'Online Mode' },
                { checked: true, text: '360 hours in 3 months' },
                { checked: true, text: <HighlightedText>Work on real customer projects</HighlightedText> },
                { checked: true, text: 'Stipend from companies' },
                { checked: true, text: <CertificateText>Internship Certificate <br /><SubText>(Directly from verified companies)</SubText></CertificateText> }
            ],
            title2: <Title2Text>Everything from<HighlightedText> Self</HighlightedText> plus :</Title2Text>,
            internships: [
                { checked: true, text: 'AI Codegen' },
                { checked: true, text: 'Program switch' },
                { checked: true, text: 'Weekly huddle with mentor' },
                { checked: true, text: <CertificateText>Portfolio <SubText>(Github)</SubText></CertificateText> },
            ],
            placements: [
                { checked: true, text: 'Resume preparation' },
                { checked: true, text: 'Placement assistance' },
                { checked: true, text: 'Business English' },
                { checked: true, text: 'Softskill Training' },
            ]
        },
        {
            title: 'Prime',
            originalPrice: '₹10000',
            discountedPrice: '₹4,999',
            description: 'Unlock your full potential and accelerate your career with expert guidance and placement assistance.',
            features: [
                { checked: true, text: 'Online Mode' },
                { checked: true, text: '360 hours in 3 months' },
                { checked: true, text: <HighlightedText>Work on real customer projects</HighlightedText> },
                { checked: true, text: 'Stipend from companies' },
                { checked: true, text: <CertificateText>Internship Certificate <br /><SubText>(Directly from verified companies)</SubText></CertificateText> }
            ],
            title2: <Title2Text>Everything from <HighlightedText>Pro</HighlightedText> plus :</Title2Text>,
            internships: [
                { checked: true, text: 'Project guidance' },
                { checked: true, text: 'Product Design' },
                { checked: true, text: 'Live support & Doubt clearance' },
                { checked: true, text: <CertificateText>Code + Task review <SubText>(Github PR)</SubText></CertificateText> },
            ],
            placements: [
                { checked: true, text: 'Mock Interview' },
                { checked: true, text: 'Dedicated placement officer' },
            ]
        },
    ];

    const sliderRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1.2 : 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow onClick={() => sliderRef.current && sliderRef.current.slickNext()} />,
        prevArrow: <CustomPrevArrow onClick={() => sliderRef.current && sliderRef.current.slickPrev()} />,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2.2 } },
            { breakpoint: 576, settings: { slidesToShow: 1.15 } }
        ],
    };


    return (
        <Box sx={{ backgroundColor: "#110f0f", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 2, md: 2 } }}>
            <Container maxWidth="lg" align="center">
                <Box>
                    <Container maxWidth="sm">
                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 3 }}>
                            Some pieces of our solutions
                        </Typography>
                        <Typography variant='body1' sx={{ color: 'rgba(255, 255, 255, 0.40)', fontSize: '13px' }}>
                            We have solved your problem of finding an internship and excelling in your career into these two buckets below
                        </Typography>
                    </Container>
                </Box>

                <Slider ref={sliderRef} {...settings}>
                    {pricingData.map((card, index) => (
                        <Box key={index} sx={{ padding: "10px", width: "100%", marginTop: 5, display: "flex", justifyContent: "center", height: "100%", /* backgroundColor: "pink" */ }}>
                            <PricingCardContainer elevation={3} index={index}>
                                <Box textAlign={"center"}>
                                    <Typography variant="h4" sx={{ color: "#FFA800", textTransform: "uppercase", fontWeight: 600, marginBottom: "15px" }}>
                                        {card.title}
                                    </Typography>
                                </Box>
                                {/* <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.32)', mr: 2, lineHeight: "25px", fontSize: "15px", textAlign: "center" }}>
                                    Starts From
                                </Typography> */}
                                <Box sx={{ display: 'flex', alignItems: 'end', mb: 1, letterSpacing: "1px", flexDirection: "row" }}>
                                    <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.32)', mr: 1, textDecoration: 'line-through' }}>
                                        {card.originalPrice}
                                    </Typography>
                                    <Typography variant="h4" fontWeight="bold" sx={{ color: '#FFFFFF', fontSize: { xs: "30px", sm: 'auto' } }}>
                                        {index === 1 || index === 2 ? (
                                            <>
                                                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.32)', lineHeight: "18px", fontSize: { xs: "12px", sm: "15px" }, textAlign: "left" }}>
                                                    Starts From
                                                </Typography>
                                                {card.discountedPrice}
                                            </>
                                        ) : (
                                            card.discountedPrice
                                        )}
                                    </Typography>
                                </Box>



                                <Typography variant="body2" sx={{ color: '#EEEEEE', mb: 3, fontSize: { xs: "12px", md: "12px", lg: "15px" }, fontWeight: "200" }}>
                                    {card.description}
                                </Typography>

                                <Button variant="contained" sx={{ textTransform: 'uppercase', background: "linear-gradient(68deg, #2E3393 -1.82%, #1CFAFC 106.59%)", color: '#fff', borderRadius: "6px", fontSize: { xs: "9px", sm: "9px", lg: "12px" }, fontWeight: "bold", width: { xs: "100%", sm: "80%" }, padding: { xs: '7px', sm: "auto" } }}>
                                    Secure Your February Spot <EastIcon sx={{ marginLeft: '8px' }} />
                                </Button>

                                <Box padding='15px 0px' sx={{ color: "white", fontWeight: '400' }}>
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
                                    {card.title2 && <Typography variant='h6' sx={{ fontSize: "16px", textAlign: "center" }}>{card.title2}</Typography>}

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
            </Container >
        </Box >
    );
};

const FeatureItem = ({ feature }) => (
    <Box sx={{ display: 'flex', alignItems: 'start', gap: 1, marginBottom: 1 }}>
        <Typography variant='body2' sx={{ fontSize: "13px" }}>
            {feature.checked ? <VerifiedIcon sx={{ fontSize: { xs: "14px", lg: "16px" }, color: "#3ED37A" }} /> : <CloseIcon sx={{ color: 'red', fontSize: "18px" }} />}
        </Typography>
        <Typography variant='body2' sx={{ fontSize: { xs: "11px", lg: "14px" }, fontWeight: 200 }}>
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

const CertificateText = ({ children }) => (
    <>{children}</>

);

const SubText = ({ children }) => (
    <Box component='span' sx={{ fontSize: { xs: "11px", sm: "11px" }, color: "#A1AEBF" }}>{children}</Box>
);

const Title2Text = ({ children }) => (
    <Typography variant='h6' sx={{
        fontSize: { xs: "15px", sm: "16px" }, textAlign: "center", whiteSpace: "nowrap"
    }}>{children}</Typography>
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