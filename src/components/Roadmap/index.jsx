import React from "react"
import roadmapData from "../../data/roadmap.json"
import Icon from "../Icon"
export const Roadmap = () => {
  return (
    <div className="section-roadmap" id="roadmap">
      <div className="wrapper">
        <div className="section-title h-center">
          <span>Roadmap</span>
        </div>
        <div className="section-subtitle">
          <h2 className="h2 h-center">
            <span>Discover Our Roadmap</span>
          </h2>
        </div>
        <div className="roadmap">
          {roadmapData.map((item, index) => (
            <div className="roadmap-item" key={index}>
              <span className="roadmap-count">{item.count}</span>
              <div className="roadmap-icon">
                <Icon icon={item.icon} size={50} color="black" />
              </div>
              <div className="roadmap-title">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="roadmap-text">
          Our ultimate objective is to ensure that the internet is universally
          accessible, without exception, to all individuals while promoting
          inclusivity.
        </div>
      </div>
    </div>
  )
}
