import React from "react";
import { Jumbotron } from "react-bootstrap";
import './Approval.css';

function App() {
  return (
    <div class="container">
      <Jumbotron>
        <h1 class="display-4">Article Approval</h1>
        <br />
        <form class="form-inline">
            <p class="entries col-8">Showing 1-5 out of 100 Entries</p>
            <input class="form-control col-3" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-primary col-1" type="submit"><i class="fas fa-search"></i></button>
        </form>
        <br />
        <table class="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Article</th>
            <th scope="col">View with Hyperlink</th>
            <th scope="col">Tags</th>
            <th scope="col">Response</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="S.No">1</td>
            <td data-label="Article">Amazon</td>
            <td data-label="View with Hyperlink"><a href="www.amazon.in">Amazon</a></td>
            <td data-label="Tags">#CSE #SuperDream</td>
            <td data-label="Response"><button type="button" class="btn btn-success">Approve</button>  /  <button type="button" class="btn btn-danger">Decline</button></td>
          </tr>
          <tr>
            <td data-label="S.No">2</td>
            <td data-label="Article">Google</td>
            <td data-label="View with Hyperlink"><a href="www.google.com">Google</a></td>
            <td data-label="Tags">#CSE #SuperDream</td>
            <td data-label="Response"><button type="button" class="btn btn-success">Approve</button>  /  <button type="button" class="btn btn-danger">Decline</button></td>
          </tr>
          <tr>
            <td data-label="S.No">3</td>
            <td data-label="Article">Microsoft</td>
            <td data-label="View with Hyperlink"><a href="www.microsoft.com">Microsoft</a></td>
            <td data-label="Tags">#CSE #SuperDream</td>
            <td data-label="Response"><button type="button" class="btn btn-success">Approve</button>  /  <button type="button" class="btn btn-danger">Decline</button></td>
          </tr>
          <tr>
            <td data-label="S.No">4</td>
            <td data-label="Article">Schlumberger</td>
            <td data-label="View with Hyperlink"><a href="www.schlumberger.com">Amazon</a></td>
            <td data-label="Tags">#ECE #SuperDream</td>
            <td data-label="Response"><button type="button" class="btn btn-success">Approve</button>  /  <button type="button" class="btn btn-danger">Decline</button></td>
          </tr>
          <tr>
            <td data-label="S.No">5</td>
            <td data-label="Article">Tesla</td>
            <td data-label="View with Hyperlink"><a href="www.tesla.com">Tesla</a></td>
            <td data-label="Tags">#MEE #SuperDream</td>
            <td data-label="Response"><button type="button" class="btn btn-success">Approve</button>  /  <button type="button" class="btn btn-danger">Decline</button></td>
          </tr>
        </tbody>
      </table>
        <div class="buttony">
          <button type="button" class="btn btn-outline-secondary btn-lg"><i class="fas fa-backward"></i></button>
          <button type="button" class="btn btn-outline-secondary btn-lg"><i class="fas fa-forward"></i></button>
        </div>      
      </Jumbotron>
    </div>
  )
}

export default App;