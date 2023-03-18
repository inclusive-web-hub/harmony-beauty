import footerNavBarData from "../../data/footer.json"
import socialsData from "../../data/socials.json"
import { NavColumn } from "./NavColumn"
import Icon from "../Icon"
import React from "react"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-top"></div>
        <div className="footer-nav">
          {footerNavBarData.map((nav, index) => (
            <NavColumn nav={nav} key={index} />
          ))}
          <div className="footer-nav-col">
            <span className="footer-nav-col-title">Contact</span>
            <ul>
              <li>
                <Icon
                  icon="location"
                  size={20}
                  color="white"
                  className="me-2"
                />{" "}
                Tripoly, Lebanon.
              </li>
              <li>
                <Icon icon="envelop" size={20} color="white" className="me-2" />
                <a href="mailto:business@wiseai.dev">business@wiseai.dev</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copy">
          <span>Developed with ❤️ by wiseaidev © 2023</span>
        </div>
        <div className="footer-bottom-social">
          <ul>
            {socialsData.map((social, index) => (
              <li key={index}>
                <a href={social.path} target="_blank" rel="noreferrer">
                  <Icon icon={social.icon} size={20} color="white" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
