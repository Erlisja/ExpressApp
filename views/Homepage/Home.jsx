const React = require("react");

class Home extends React.Component {
  render() {
    const { cars } = this.props; // Extract the cars dataset passed from the route
    return (
      <>
        <head>
          <title>Philadelphia Car Vendor</title>
          <link rel="stylesheet" href="/styles/styles.css" />
        </head>

        <div id="main-div">
          <h1>Welcome to Philadelphia Car Vendor</h1> <br />
          <h2>Our Online Shop</h2>
          <table id="car-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.id}</td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  <td>{car.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="/api/carsDatabase">
            <button type="button" name="homeButton" id="nextPage">
              {" "}
              Next Page
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

module.exports = Home;
