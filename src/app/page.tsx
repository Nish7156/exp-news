import LatestedBottomNews from "@/components/Home/LatestedBottomNews";
import MainSecitonGrid from "@/components/Home/MainSecitonGrid";
import MoreNews from "@/components/Home/MoreNews";
import NewsAdsBanners from "@/components/Home/NewsAdsBanners";
import TopStoriesArea from "@/components/Home/TopStoriesArea";
import VideoArea from "@/components/Home/VideoArea";
import NewsFeed from "@/components/Utility/NewsFeed";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 6000));
  return (
    <>
      <NewsFeed />
      <NewsAdsBanners />
      {/* <TopStoriesArea /> */}
      <MainSecitonGrid/>

      {/* <VideoArea />
      <MoreNews />
      <LatestedBottomNews /> */}
    </>
  );
}
