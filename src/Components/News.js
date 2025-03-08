import React, { Component } from 'react'
import NewsItems from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2 style={{textAlign: "center"}}>Uppal News - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItems title="Bitcoin Drops After Trump Executive Order Disappoints Market - Bloomberg" description="This Week Bitcoin Crashed Extrmely Bearish Conditions in the Market Right Now" imageUrl="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/imdUzS8VqSUI/v0/1200x800.jpg" />
          </div>
          <div className="col-md-4">
            <NewsItems />
          </div>
          <div className="col-md-4">
            <NewsItems />
          </div>
        </div>
      </div>
    )
  }
}

export default News