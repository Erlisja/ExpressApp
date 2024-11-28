const React = require("react");

class ImgDownload extends React.Component {
  render() {
    return (
      <>
        <head>
          <title>Philadelphia Car Vendor</title>
          <link rel="stylesheet" href="/styles/styles.css" />
        </head>
        <div id="main-div">
        <a href="/api/home">
         <button type="button" name="homeButton" id="home-button">
            Home
          </button>
          </a> 
          <h1>Welcome to Philadelphia Car Vendor</h1> <br />
          <h2>Download Image</h2>
          <img
            src="/images/tesla.jpg"
            alt="Tesla Car"
            width={500}
            height={500}
          />
          <br />
          <a href="/api/downloads/image">
            <button type="button" name="downloadButton" id="download-button">
              Download
            </button>
          </a>
        </div>
        <footer>
          <p>Philadelphia Car Vendor &copy; 2024</p>
        </footer>
      </>
    );
  }
}
module.exports = ImgDownload;
