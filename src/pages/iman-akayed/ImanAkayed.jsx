import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export const ImanAkayed = () => {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:9000/iman-akayed")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setVideos(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  })
  // const videosList = [
  //   {
  //     link: "https://www.youtube.com/embed/_M3YcAFu9-M",
  //     thumb: "https://img.youtube.com/vi/_M3YcAFu9-M/0.jpg",
  //     title: "আবহাওয়ার আগাম সংবাদ বিশ্বাস করা কি ঈমান বিরোধী?",
  //     auth: "IQA: ইসলামী প্রশ্নোত্তর",
  //     authLogo: "https://www.iqa.info/img/logo.png",
  //   },
  // ];
  return (
    <>
      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 py-2 px-2">
        {videos.map(({ title, auth, thumb, link, authLogo }, index) => (
          <Card key={index} sx={{ maxWidth: 400 }}>
            <Link to={link}>
              <CardActionArea>
                <img className="p-3" src={thumb} alt={title} />

                <CardContent className="flex items-start gap-2">
                  <div className="rounded-full p-1">
                    <img className=" w-16" src={authLogo} alt={title} />
                  </div>
                  <div>
                    <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      className="line-clamp-2"
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {auth}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};
