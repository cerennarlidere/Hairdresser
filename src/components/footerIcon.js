import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterItems = [
  //   {
  //     title: "",
  //     url: "/",
  //     cName: "footer-links",
  //     icon: <FontAwesomeIcon icon={["fab", "github"]} size="2x" />,
  //   },
  //   {
  //     title: "View",
  //     url: "/view",
  //     cName: "footer-links",
  //   },
];

class FooterIcon extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <footer className="FooterItems">
        <div style={{ backgroundColor: "gray" }}>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />{" "}
          </a>
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />{" "}
          </a>
        </div>
        <ul
          className={this.state.clicked ? "footer-menu active" : "footer-menu"}
        >
          {FooterItems.map((item, index) => {
            return (
              <div style={{ backgroundColor: "gray" }}>
                <li key={index}>
                  <a className={item.cName} href={item.url}></a>
                </li>
              </div>
            );
          })}
        </ul>
      </footer>
    );
  }
}

export default FooterIcon;
