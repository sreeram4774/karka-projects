import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Grid, styled } from '@mui/material';

const FAQAccordion = styled(Accordion)({
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    marginBottom: 10,
    border: "1px solid #A1AEBF",
    // borderRadius: 10,
    '&:before': {
        backgroundColor: 'transparent',
    },
});

const FAQSection = () => {

    const faqData = [
        {
            question: 'Who offers the internship?',
            answer:
                'The internships are offered by verified companies that collaborate with Talent Tribe. These companies provide real-world projects, hands-on experience, and a direct internship certificate upon completion.',
        },
        {
            question: 'Who offers the internship?',
            answer:
                'The internships are offered by verified companies that collaborate with Talent Tribe. These companies provide real-world projects, hands-on experience, and a direct internship certificate upon completion.',
        },
        {
            question: 'Who offers the internship?',
            answer:
                'The internships are offered by verified companies that collaborate with Talent Tribe. These companies provide real-world projects, hands-on experience, and a direct internship certificate upon completion.',
        },
        {
            question: 'Who offers the internship?',
            answer:
                'The internships are offered by verified companies that collaborate with Talent Tribe. These companies provide real-world projects, hands-on experience, and a direct internship certificate upon completion.',
        },
        {
            question: 'Who offers the internship?',
            answer:
                'The internships are offered by verified companies that collaborate with Talent Tribe. These companies provide real-world projects, hands-on experience, and a direct internship certificate upon completion.',
        }
    ];

    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 8 } }}>
            <Container maxWidth="xl">
                <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Grid item sm={6} >
                        <Typography variant="h4" align="left" mb={2} sx={{ typography: { xs: "h5", sm: "h4" } }}>
                            Frequently asked questions
                        </Typography>
                        {faqData.map((faq, index) => (
                            <FAQAccordion key={index}>
                                <AccordionSummary
                                    expandIcon={<AddIcon sx={{ color: "#fff" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography component="span">{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ fontSize: "12px" }}>
                                    {faq.answer}
                                </AccordionDetails>
                            </FAQAccordion>
                        ))}
                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
}

export default FAQSection
