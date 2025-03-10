import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,descripton, imageUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descripton}</p>
            <a href="/" className="btn btn-primary">Read More </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem