import React from "react";

function App() {
  return (
    <div class="background">
    <div class = "box">
      <h1 class="error">404</h1>
      <p class="text">Oops 404! That page can't be found.</p>
      <p class="text1">Sorry but the page you are looking for was either not found or doesn't exist.</p>
      <p class="text1">Try refreshing the page or click the button below to go back to the Homepage.</p>
      <br />
      <a class="btn btn-outline-dark btn-lg" href="#" role="button"><i class="fas fa-home"></i>  Go back to Homepage</a>
      </div>
    </div>
  );
}

export default App;
