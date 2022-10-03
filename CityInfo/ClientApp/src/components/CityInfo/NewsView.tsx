import React from "react";
import { ICityNews, IArticle } from "../../types";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ThermostatAutoSharpIcon from "@mui/icons-material/ThermostatAutoSharp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreSharp from "@mui/icons-material/ExpandMoreSharp";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

interface NewsViewProps {
  news: ICityNews;
  city: string;
}

const NewsView = ({ news, city }: NewsViewProps) => {
  const articleComponent = (article: IArticle, index: number) => (
    <Card key={`$article_${index}`} sx={{ display: "flex", padding: 1 }}>
      <Grid container spacing={1}>
        <Grid sm={3}>
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={`${article.urlToImage}`}
          />
        </Grid>
        <Grid sm={9}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </CardContent>
            <CardActionArea
              href={article.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button>More</Button>
            </CardActionArea>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
  return (
    <>
      {news.articles.map((article, index) => articleComponent(article, index))}
    </>
  );
};

export default NewsView;
