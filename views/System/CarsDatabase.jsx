const React = require("react");

class CarsDatabase extends React.Component {
  render() {
    const { cars } = this.props; // Extract the cars dataset passed from the route
    return (
      <>
        <head>
          <title>Philadelphia Car Vendor</title>
          <link rel="stylesheet" href="/styles/styles.css" />
        </head>

        <div id="main-div">
          <button type="button" name="homeButton" id="home-button">
            <a href="/api/home">Home</a>
          </button>
          <h1>Welcome to Philadelphia Car Vendor</h1> <br />
          <h2>Car Database</h2>
          <div id="container">
            <div id="form-div">
              <form action="/api/carsDatabase" method="POST">
                Brand: <input type="text" name="brand" required />
                <br />
                Model:
                <input type="text" name="model" required />
                <br />
                Year:
                <input type="number" name="year" required />
                <br />
                Price:
                <input type="number" name="price" required />
                <br />
                <input type="submit" name="" value="Add Car"  />
              </form>
            </div>
            <br />
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
          </div>
        </div>
        <footer>
          <p>Philadelphia Car Vendor &copy; 2024</p>
        </footer>
      </>
    );
  }
}

module.exports = CarsDatabase;
