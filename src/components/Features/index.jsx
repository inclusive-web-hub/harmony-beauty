import React from "react"
import featuresData from "../../data/features.json"
import Icon from "../Icon"
export const Features = () => {
  return (
    <div className="features">
      <div className="wrapper">
        <div className="section-title h-center">
          <span>Services</span>
        </div>
        <div className="section-subtitle">
          <h2 className="h2 h-center">
            <span>What You Deliver</span>
          </h2>
        </div>
        <div className="feature">
          {featuresData.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-heading">
                <div className={`feature-icon feature-icon-${feature.id}`}>
                  <Icon icon={feature.icon} size={50} color="black" />
                </div>
                <div className="feature-title">{feature.title}</div>
              </div>
              <div className="feature-text">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
