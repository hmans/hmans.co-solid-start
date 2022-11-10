import { Feed } from "feed";
import { posts } from "../posts";

const feed = new Feed({
  title: "hmans.co",
  description: "hmans.co Blog",
  id: "http://hmans.co/",
  link: "http://hmans.co/",
  language: "en",
  image: "http://example.com/image.png",
  favicon: "http://example.com/favicon.ico",
  copyright: "Hendrik Mans, 2022",
  // updated: new Date(2013, 6, 14), // optional, default = today
  author: {
    name: "Hendrik Mans",
    email: "hendrik@mans.de",
    link: "https://hmans.co/",
  },
});

posts.forEach((post) => {
  const url = `https://hmans.co/posts/${post.path}`;

  feed.addItem({
    title: post.title!,
    id: url,
    link: url,
    description: "INSERT FULL POST HTML HERE",
    date: post.date,
  });
});

export function GET() {
  return new Response(feed.rss2());
}
