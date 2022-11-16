import path from "path";
import { Route } from "../structures/route";

export default new Route("/")
  .get("/", (req, res) => {
    res.render("home", {
      title: "Home",
    });
  })
  .get("/robot.txt", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'robot.txt'))
  })
  .get("/sitemap.xml", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'sitemap.xml'))
  })
  .get("/site.webmanifest", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'site.webmanifest'))
  });
