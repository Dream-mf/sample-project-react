import { NavLink } from "react-router-dom";
import Layout from "../layout";

const IndexPage = () => {
  return (
    <Layout>
      <ol className="breadcrumb">
        <li className="breadcrumb-item active">Home</li>
      </ol>
      <div className="jumbotron pt-4 pb-2">
        <h1 className="display-3 mb-4 mt-0">Welcome</h1>
        <div className="lead mt-4 mb-4">
          This is an example application using vanilla react as a host, and create react application
          as remotes. These are dynamically resolved in each next page route. Remote urls are retrieved from
          an api using the service in this repo. You can see how here
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;