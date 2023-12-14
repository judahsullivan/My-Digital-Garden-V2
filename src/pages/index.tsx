import About from "@/components/home/about";
import Home from "@/components/home/home";
import FeaturedArticles from "@/components/home/featuredArticles";
import RecentProjects from "@/components/home/recentProjects";
import { Fragment } from "react";

export default function Main() {
  return (
    <Fragment>
      <Home />
      <About />
      <RecentProjects />
      {/* <FeaturedArticles /> */}
    </Fragment>
  );
}
