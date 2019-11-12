import React,{ Component } from 'react';

class NewsCard extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let {articles,innerText} =this.props
        console.log(innerText)
        let filteredArticle= innerText ? articles.filter(articles => articles.title.toLowerCase().includes(innerText.toLowerCase())) : articles;
        if(filteredArticle){
                return(<div>
                {
                    filteredArticle.map((name,key)=><p>{name.title}</p>)
               }
            </div>)
        }
        else{
            return <p>Loading</p>
        }
    }
}
export default NewsCard;