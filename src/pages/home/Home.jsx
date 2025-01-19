import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";

export const Home = () => {
  const catName = [
    {
      name: "ঈমান ও আকায়েদ",
      des: " ঈমান ও আকায়েদ বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
      link: "/iman-akayed",
    },
    {
      name: "কুরআনুল কারীম",
      des: " কুরআনুল কারীম বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
      link: "quranul-karim",
    },
    {
      name: "হাদীস ও সুন্নাহ",
      des: " হাদীস ও সুন্নাহ বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
      link: "haddij-sunnah",
    },
    {
      name: "পবিত্রতা ও সালাত বিভাগ",
      des: " পবিত্রতা ও সালাত বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "যাকাত ও সাদাকাহ",
      des: " যাকাত ও সাদাকাহ বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "সিয়াম/রামাদান",
      des: " সিয়াম/রামাদান বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "হাজ্জ ও উমরাহ",
      des: " হাজ্জ ও উমরাহ বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "কুরবানী ও আকীকা",
      des: " কুরবানী ও আকীকা বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "ব্যবসা-বাণিজ্য ও লেনদেন",
      des: " ব্যবসা-বাণিজ্য ও লেনদেন বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "আখলাক ও ইসলামী শিষ্টাচার",
      des: " আখলাক ও ইসলামী শিষ্টাচার বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "হালাল-হারাম",
      des: " হালাল-হারাম বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "বিবাহ ও তালাক",
      des: " বিবাহ ও তালাক বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
    {
      name: "পরিবার ও দাম্পত্য জীবন",
      des: " পরিবার ও দাম্পত্য জীবন বিভাগের অধীনে থাকা প্রশ্নগুলো এখানে দেখতে পাবেন",
      img: "https://www.iqa.info/img/logo.png",
    },
  ];
  return (
    <>
      <div className=" container mx-auto grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-3 py-2 px-2">
        {catName.map(({ name, des, img, link }, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <Link to={link}>
              <CardActionArea>
                <img className="p-4" src={img} alt={name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {des}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
};
