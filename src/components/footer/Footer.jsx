import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="col logo-col">
          <h4>BeatFlow</h4>
          <p>Listen to music you love.</p>
        </div>

        <div className="col">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">For the Record</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Communities</h5>
          <ul>
            <li>
              <a href="#">For Artists</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h5>Useful links</h5>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Web Player</a>
            </li>
            <li>
              <a href="#">Free Mobile App</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <small>
          © {new Date().getFullYear()} BeatFlow — Built with music in mind.
        </small>
      </div>
    </footer>
  );
}
