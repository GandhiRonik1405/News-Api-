import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';
import PropsTypes from 'prop-types'
// import fetch from '.fetch'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category:'general'
  }
      static PropsTypes = {
          country: PropsTypes.string,
          pageSize:PropsTypes.number,
          category:PropsTypes.string

}
 capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73b731ef199b4214ade3dd4d52b1ca44&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })

  }

  handlePrevClick = async () => {
    console.log("Previous")

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73b731ef199b4214ade3dd4d52b1ca44&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false

    })
  }


  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))){}


      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=73b731ef199b4214ade3dd4d52b1ca44&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false

      })
    
    
  }

  render() {

    return (
      <div className="container">
        <h1 className='text-center ' style={{margin: '35px',color:'#2F3C7E'}}>NEWS APP</h1>

        <div className='container d-flex justify-content-between py-3 '>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
       {this.state.loading && <Spinner/>
}
        <div className="row ">
          {!this.state.loading && this.state.articles.map((element) => {

            return <div className="col-md-4 " key={element.url}>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} 
              source={element.source.name}/>
            </div>
          })}

        </div>
        <div className='container d-flex justify-content-between pt-3 '>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News
