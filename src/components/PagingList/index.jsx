import React from "react"
import Icon from "../Icon"

export const PagingList = ({ paginate }) => {
  return (
    <ul className="paging-list">
      <li
        onClick={() => paginate.prev()}
        className="paging-list-item paging-prev"
      >
        <button className="paging-list-link">
          <Icon icon="arrow-left" size={20} color="black" className="" />
        </button>
      </li>

      {[...Array(paginate.maxPage)].map((x, i) => (
        <li
          key={i}
          onClick={() => paginate.jump(i + 1)}
          className={`paging-list-item ${
            paginate.currentPage === i + 1 && "active"
          }`}
        >
          <button className="paging-list-link">{i + 1}</button>
        </li>
      ))}

      <li
        onClick={() => paginate.next()}
        className="paging-list-item paging-next"
      >
        <button className="paging-list-link">
          <Icon icon="arrow-left" size={20} color="black" className="" />
        </button>
      </li>
    </ul>
  )
}
