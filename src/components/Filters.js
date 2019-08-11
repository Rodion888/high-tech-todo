import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { handleFilters } from '../actions/todoActions'

const Filters = props => {
  const { filters, handleFilters } = props

  return (
    <ul className="filters">
      {Object.entries(filters).map(([filter, activated], index) => {
        return (
          <li key={index}>
            <a
              href={'#/' + (filter === 'all' ? '' : filter)}
              className={activated ? 'selected' : ''}
              onClick={() => handleFilters(filter)}>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default connect(
  state => ({
    filters: state.filters,
  }),
  dispatch => bindActionCreators({ handleFilters }, dispatch)
)(Filters)
