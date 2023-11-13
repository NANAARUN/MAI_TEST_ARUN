import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: "var(--primary)",
    padding: 10,
    textAlign: "center",
    color: "#fff",
  },
  wrapper: {
    margin: "auto",
    marginTop: 100,
    maxWidth: 1200,
  },
  descTitle: {
    marginTop: "15px !important",
    marginBottom: "10px !important",
    color: "var(--primary)",
  },
  desc: {
    backgroundColor: "#dbe7f1",
    padding: 15,
    borderRadius: 4,
  },
  slide: {
    height: 200,
    width: 300,
    display: "inline-block",
    padding: "0 35px",
  },
}));

const slides = [
  {
    url: "https://picsum.photos/id/1/200/300",
  },
  {
    url: "https://picsum.photos/id/2/200/300",
  },
  {
    url: "https://picsum.photos/id/3/200/300",
  },
  {
    url: "https://picsum.photos/id/4/200/300",
  },
  {
    url: "https://picsum.photos/id/5/200/300",
  },
  {
    url: "https://picsum.photos/id/6/200/300",
  },
];

export default () => {
  const classes = useStyles();
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <div className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Paper elevation={2}>
            <Typography variant="h5" className={classes.heading}>
              Project Details
            </Typography>
            <div style={{ padding: 25 }}>
              <Typography variant="h6">Living area - Renovations</Typography>
              <Typography variant="subtitle1" className={classes.descTitle}>
                Description
              </Typography>
              <Typography variant="body1" className={classes.desc}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <div style={{ marginTop: 25 }}>
                <Carousel
                  centerMode={true}
                  centerSlidePercentage={33.3}
                  showThumbs={false}
                  // selectedItem={}
                  onClickItem={(idx, item) => {
                    console.log({ idx, item });
                    setActiveSlide(slides[idx]);
                  }}
                  autoPlay={true}
                >
                  {slides.map((slide, idx) => (
                    <div className={classes.slide} key={idx}>
                      <img src={slide.url} />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item md={4}>
          {/* <Paper elevation={4}></Paper> */}
          <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea
              onClick={() => {
                setIsDialogOpen(true);
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={activeSlide.url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle>Selected Image</DialogTitle>
        <img src={activeSlide.url} />
      </Dialog>
    </div>
  );
};
