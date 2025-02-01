import { Container, Grid, Typography, TextField, Box, Link } from "@mui/material";
import Logo from '../assets/images/Logo.png'
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#000", color: "#fff", py: { xs: 4, sm: 8 }, px: { xs: 0, sm: 8 } }}>
            <Container maxWidth="xl" variant="h5" fontWeight="bold">
                <Grid container spacing={4}>
                    {/* OUR WORLD Section */}
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px" }}>
                            {["Instagram", "Linked In"].map((item) => (
                                <Box component="li" key={item} sx={{ marginBottom: 3, marginTop: 3 }}> {/* Add marginBottom here */}
                                    <Link href="#" color="inherit" underline="hover">
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px" }}>
                            {["Instagram", "Linked In"].map((item) => (
                                <Box component="li" key={item} sx={{ marginBottom: 3, marginTop: 3 }}> {/* Add marginBottom here */}
                                    <Link href="#" color="inherit" underline="hover">
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px" }}>
                            {["Instagram", "Linked In"].map((item) => (
                                <Box component="li" key={item} sx={{ marginBottom: 3, marginTop: 3 }}> {/* Add marginBottom here */}
                                    <Link href="#" color="inherit" underline="hover">
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0, fontSize: "13px" }}>
                            {["Instagram", "Linked In"].map((item) => (
                                <Box component="li" key={item} sx={{ marginBottom: 3, marginTop: 3 }}> {/* Add marginBottom here */}
                                    <Link href="#" color="inherit" underline="hover">
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                        </Box>

                    </Grid>



                    {/* Newsletter Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ display: 'flex', mb: 3 }}>
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{ maxWidth: '50px' }}
                            />

                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    display: 'flex',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    marginLeft: "10px"

                                }}
                            >
                                Talenttribe
                            </Typography>
                        </Box>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: "13px",
                                marginBottom: 3
                            }}
                        >
                            Get latest updates

                        </Typography>

                        <TextField
                            fullWidth
                            placeholder="Your Email"
                            sx={{
                                input: { color: "white", padding: { xs: "10px", sm: "15px" } },
                                "& .MuiOutlinedInput-root": {
                                    border: "2px solid #A1AEBF",
                                    borderRadius: "40px",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: "none",
                                },
                            }}
                        />

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
