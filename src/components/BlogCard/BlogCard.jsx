import React from "react";
import { Grid } from "@mui/material";
import Image from "../custom/Image";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { removeHtmlTag } from "../../utils/removeHtmlTag";
const BlogCard = ({ data, isLoading, error }) => {
  // const blogData = data.response;

  return isLoading === true ? (
    "Loading..."
  ) : (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12} sm={4} md={3} lg={3}>
        {data.response.map((items) => (
          <Card sx={{ minWidth: 300 }} key={items.blogId}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={items.blogTitle}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.pixabay.com/photo/2018/10/09/15/03/village-3735180_1280.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {items.blogContent.length > 22
                  ? `${items.blogContent}....`
                  : items.blogContent}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default BlogCard;
