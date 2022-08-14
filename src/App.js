/* eslint-disable no-unused-vars */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Divider } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div className="upper-wrapper mb-4">
        <div className="row col-md-12 wrapperDiv d-flex flex-row">
          <div className="col-md-6 text-left balance-div">
            <p className="m-0">
              My balance
            </p>
            <p className="currency-div">
              $921.48
            </p>
          </div>
          <div className="col-md-6 svgDiv">
            {/* <img src="../public/assets/logo.svg" class="card-img-top img-border" alt="..." /> */}
            <svg className="" width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24" /><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" /></g></svg>
          </div>
        </div>
      </div>

      <div className="upper-wrapper">
        <div className="graphWrapper">
          <div className="col-md-12">
            <p className="spend-title">
              Spending - Last 7 days
            </p>
          </div>
          <img src={require('./Graph.png')} class="card-img-top img-border" alt="..." />
          <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
            <Divider />
          </div>
          <div className="footer-wrapper row">
            <div className="col-md-6 text-left balance-div">
              <p className="footer-title">
                Total This Month
              </p>
              <p className="footer-currency-div">
                $478.33
              </p>
            </div>
            <div className="col-md-6 d-flex footer-left-wrapper">
              <p className="footer2-title">
                +2.4%
              </p>
              <p className="footer2-currency-div">
                from past month
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
