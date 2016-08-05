import React, { Component } from 'react'

import './StoreList.css'
import DepartmentList from './DepartmentList.js'

class StoreList extends Component {

  propTypes: {
    apiUrlBase: React.PropTypes.string.required
  }

  constructor () {
    super()
    this.state = {
      payload: {},
      stores: [],
      selectStore: ''
    }
  }

  componentDidMount() {
    const url = this.props.apiUrlBase + "/store"
    fetch(url,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then (
      (response) => {
        return response.json()
      }
    ).then (
      (json) => {
        this.setState({
          ...this.state,
          payload: json,
          stores: json._embedded.store
        })
      }
    ).catch (
      (err) => {
        console.log(err)
      }
    )
  }

  handleStoreClick(e, store) {
    const selectedStore = (store === this.state.selectedStore ? undefined : store)
    this.setState(
      {
        ...this.state,
        selectedStore: selectedStore
      }
    )
  }

  render () {
    return (
      <div className="storeList">
        {
          this.state.stores.map (
            (store) => {
              return <div className="storeListItem"
                key={store.name}
                onClick={(e) => this.handleStoreClick(e, store.name)}>
                  {store.name}
                  <DepartmentList apiUrlBase={store._links.self.href}
                    collapsed={store.name === this.state.selectedStore}/>
              </div>
            }
          )
        }
      </div>
    )
  }
}

export default StoreList;
