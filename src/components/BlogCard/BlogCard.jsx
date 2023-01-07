import React from "react";
import { Grid } from "@mui/material";
import {
  ImageContainer,
  ContentContainer,
  TopContainer,
  CategoryContainer,
  MiddleContainer,
  TextContainer,
  LowerContainer,
  InnerLowerContainer,
  AuthorNameContainer,
} from "./BlogCardStyle";
import Image from "../custom/Image";
import CustomTypography from "../custom/CustomTypography";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
const BlogCard = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <ImageContainer>
          <Image
            source={
              "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_960_720.jpg"
            }
            altName={"img"}
            height={180}
            width={278}
            borderRadius={"6px 6px 0px 0px"}
          />
        </ImageContainer>
        <ContentContainer>
          <TopContainer>
            <CategoryContainer>
              <CustomTypography variant="caption" text="SPORTS" weight={600} />
            </CategoryContainer>
          </TopContainer>
          <MiddleContainer>
            <CustomTypography
              variant="subtitle1"
              text="Exciting News about Tom Brady"
              weight={800}
            />
            <TextContainer>
              <CustomTypography
                variant="body2"
                paragraph={true}
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              />
            </TextContainer>
          </MiddleContainer>
          <LowerContainer>
            <InnerLowerContainer>
              <AccountCircleSharpIcon fontSize="large" />
              <AuthorNameContainer>
                <CustomTypography variant="body1" text="Harsh Joshi" />
                <CustomTypography variant="body2" text="2 hr ago" />
              </AuthorNameContainer>
            </InnerLowerContainer>
          </LowerContainer>
        </ContentContainer>
      </Grid>
    </Grid>
  );
};

export default BlogCard;
