import React from 'react'
import {connect} from 'react-redux'
import {fetchNews} from '../actions/fetchNews'
import NewsCard from './NewsCard'
class ListOfNews extends React.Component{
    constructor(props){
        super(props)
        this.state={
            innerText:''
        }
    }
    componentDidMount(){
        this.props.fetchNews()
    }
    InputStore =(event) =>{
        this.setState({
            innerText:event.target.value
        })
    }
    render(){
        let {articles} =this.props.news
        let { innerText }=this.state
        return(
            <div className="wrapper">
                <input type="text" className="search" onChange={this.InputStore}/>
                <NewsCard articles={articles}
                   innerText={innerText} />
            </div>
        )
    }
}
const mapStatetoProps =(state)=>{
    return {
        news:state.news
    }
}
export default connect(mapStatetoProps,{fetchNews})(ListOfNews);