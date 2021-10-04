import AllBlogs from "../components/blog/AllBlogs"
import Page from "../components/utility/Page"

export default function blogs() {
  return (
    <Page
      fullTitle="Youth Economics Initiative (YEI) | Launchpad for Student Economists"
      desc="View the Youth Economics Intitiative (YEI) Medium blog for articles on modern economics issues."
    >
      <AllBlogs />
    </Page>
  )
}