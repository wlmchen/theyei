import axios from "axios";
import { useState, useEffect } from "react"
import Link from "next/link"

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([])

  function GetDate(date: String) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2].substr(0, date.split("-")[2].indexOf(" "));
    return (months[parseInt(month) - 1]) + " " + day + ", " + year;
  }

  function StringToSlug(title: String) {
    return title
      .toLowerCase()
      .replace(/ /g,'-')
      .replace(/[^\w-]+/g,'')
    ;
  }

  const mediumUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@theyei";

  useEffect(() => {
    axios.get(mediumUrl).then((data) => {
      console.log(data)
      data.data.items.forEach((article: any) => {
        setBlogs(prevBlogs => [
          ...prevBlogs,
          {
            account: data.data.feed.link,
            author: article.author,
            content: article.content,
            description: article.description,
            pubLink: article.link,
            pubDate: article.pubDate,
            thumbnail: article.thumbnail,
            title: article.title,
            image: data.data.feed.image,
            blog: `/blog/${StringToSlug(article.title)}`
          }
        ]);
      });
    })
  }, [])

  return (
    <div className="bg-white pt-16 pb-6">
      <div className="mx-auto py-8 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-14">
        <div className="pb-8">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Our Blog
          </h2>
          <p className="text-xl text-gray-600">
            View the 
            <a 
              className="text-yei-primary-darker" 
              target="_blank" rel="noreferrer" 
              href="https://theyei.medium.com/"
            >
              {` YEI's Medium page `}
            </a> 
            for a list of articles on modern economics issues. 
          </p>
        </div>
        <div className="mx-auto grid gap-5 lg:max-w-none">
          {blogs.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg border border-gray-200 shadow-md hover:shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-yei-primary-darker">
                    Article
                  </p>
                  <Link
                    href={post.blog}
                  >
                    <div className="cursor-pointer">
                      <p className="block mt-2 text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="truncate mt-3 text-base text-gray-500">{post.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    </div>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a
                      href={post.account}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="cursor-pointer">
                        <span className="sr-only">{post.author}</span>
                        <img className="h-10 w-10 rounded-full" src={post.image} alt="" />
                      </div>
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a
                        href={post.account}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="cursor-pointer hover:underline">{post.author}</p>
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.pubDate}>{GetDate(post.pubDate)}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}