import LatestedBottomNews from "@/components/Home/LatestedBottomNews";
import MoreNews from "@/components/Home/MoreNews";
import NewsAdsBanners from "@/components/Home/NewsAdsBanners";
import TopStoriesArea from "@/components/Home/TopStoriesArea";
import VideoArea from "@/components/Home/VideoArea";
import NewsFeed from "@/components/Utility/NewsFeed";

export default function Home() {
  return (
    <>
      <NewsFeed />
      <NewsAdsBanners />
      <TopStoriesArea />
      <VideoArea />
      <MoreNews />
      <LatestedBottomNews />
    </>
  );
}
