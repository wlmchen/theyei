import Page from "../components/utility/Page";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <h1>Home.</h1>
      <Link href="/test">
        <a>Test</a>
      </Link>
    </Page>
  );
}
