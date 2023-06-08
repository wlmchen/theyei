
import Page from "../../components/utility/Page"
import Link from "next/link"
import { useRouter } from "next/router"
import axios from "axios"
import { useEffect, useState } from "react"

export default function blog() {
  const router = useRouter()
  const { blogTitle } = router.query;

  const [blog, setBlog] = useState(
    {
      account: '',
      author: '',
      content: '',
      description: '',
      pubLink: '',
      pubDate: '',
      thumbnail: '',
      title: '',
      image: '',
    }
  )

  function StringToSlug(title: String) {
    return title
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'')
    ;
  }

  function GetDate(date: String) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2].substr(0, date.split("-")[2].indexOf(" "));
    return (months[parseInt(month) - 1]) + " " + day + ", " + year;
  }
  
  const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sri_yei";
  const mediumURL1 = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sakethraj101";
  const mediumURL2 = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ntadepalli24";
  useEffect(() => {
    if (!blogTitle) { 
      return
    };
    axios.get(mediumUrl).then((data) => {
      data.data.items.forEach((article: any) => {
        if (StringToSlug(article.title) === blogTitle) {
          setBlog(
            {
              account: data.data.feed.link,
              author: article.author,
              content: article.content,
              description: article.description,
              pubLink: article.link,
              pubDate: GetDate(article.pubDate),
              thumbnail: article.thumbnail,
              title: article.title,
              image: data.data.feed.image,
            }
          );
        }
      });
    })

    axios.get(mediumURL1).then((data) => {
      data.data.items.forEach((article: any) => {
        if (StringToSlug(article.title) === blogTitle) {
          setBlog(
            {
              account: data.data.feed.link,
              author: article.author,
              content: article.content,
              description: article.description,
              pubLink: article.link,
              pubDate: GetDate(article.pubDate),
              thumbnail: article.thumbnail,
              title: article.title,
              image: data.data.feed.image,
            }
          );
        }
      });
    })

    axios.get(mediumURL2).then((data) => {
      data.data.items.forEach((article: any) => {
        if (StringToSlug(article.title) === blogTitle) {
          setBlog(
            {
              account: data.data.feed.link,
              author: article.author,
              content: article.content,
              description: article.description,
              pubLink: article.link,
              pubDate: GetDate(article.pubDate),
              thumbnail: article.thumbnail,
              title: article.title,
              image: data.data.feed.image,
            }
          );
        }
      });
    })
  }, [blogTitle])

  return ( 
    <Page
      fullTitle="Youth Economics Initiative (YEI) | Launchpad for Student Economists"
      desc="View the Youth Economics Intitiative (YEI) Medium blog for articles on modern economics issues."
    >
      <div className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-yei-primary-darker font-semibold tracking-wide uppercase">
                <Link href="/blog">
                  &larr; Back to all articles
                </Link>
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {blog.title}
              </span>
              <p className="mt-2 text-center text-xl text-gray-500 leading-8">
                By: {blog.author} - {blog.pubDate}
              </p>
            </h1>
          </div>
          <div className="mt-6 -mb-10 prose prose-lg text-gray-500 mx-auto">
            <div dangerouslySetInnerHTML={{__html: blog.content}} />
          </div>
        </div>
      </div>
    </Page>
  )
}