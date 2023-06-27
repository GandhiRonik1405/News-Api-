import React, { Component } from 'react'

import './NewsItem.css'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div >
        <div className="card" >
  <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2023/06/11/1600x900/Britain-Cricket-India-Australia-62_1686450660887_1686450681452.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span className="position-absolute top-0  translate-middle badge rounded-pill  "style={{left:'85%',zIndex:'1'}}>
   {source}</span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"> <small className=" text-#2F3C7E">By {!author?"Unknown":author}  on {new Date(date).toGMTString()} </small></p>
  <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">Read Here</a>
    
 </div>
</div>

      </div>
    )
  }
}

export default NewsItem
