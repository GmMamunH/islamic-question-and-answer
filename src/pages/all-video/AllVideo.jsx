import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AllVideo = () => {
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
}
