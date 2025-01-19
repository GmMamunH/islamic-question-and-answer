import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
// import { Link } from "react-router-dom";
export const ImanAkayed = () => {
  return (
    <>
      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 py-2 px-2">
        {/* {catName.map(({ name, des, img, link }, index) => ( */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <img
              className="p-4"
              src="https://img.youtube.com/vi/_M3YcAFu9-M/0.jpg"
              alt="আবহাওয়ার আগাম সংবাদ বিশ্বাস করা কি ঈমান বিরোধী?"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                আবহাওয়ার আগাম সংবাদ বিশ্বাস করা কি ঈমান বিরোধী?
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                আবহাওয়ার আগাম সংবাদ বিশ্বাস করা কি ঈমান বিরোধী?
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* ))} */}
      </div>
    </>
  );
};
