import { Blessing } from "./components/handler/blessing";
import { Default } from "./components/handler/default";
import { Layout } from "./components/layout";

function App() {
  const searchString = window.location.search;
  const param = new URLSearchParams(searchString);

  const name = param.get("name"); // name
  const textID = param.get("type"); // as id
  const custom = param.get("custom"); // as 1
  const customText = param.get("newtext"); // as long string

  if (name === null || name === undefined) {
    return (
      <Layout>
        <Default />
      </Layout>
    );
  } else {
    if (custom !== "1") {
      if (textID === null || textID === undefined) {
        return (
          <Layout>
            <Blessing name={name} text={Number(textID)} />
          </Layout>
        );
      } else {
        return (
          <Layout>
            <Default />
          </Layout>
        );
      }
    } else {
      if (
        customText === "" ||
        customText === undefined ||
        customText === null
      ) {
        return (
          <Layout>
            <Default />
          </Layout>
        );
      } else {
        return (
          <Layout>
            <Blessing name={name} custom={custom} customText={customText} />
          </Layout>
        );
      }
    }
  }
}

export default App;
