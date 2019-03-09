import React, {Component} from 'react';
import Container from './Container';

class SearchItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            menuItems: props.menuItems,
        };
    }
    updateSearch(event){
        this.setState({search:event.target.value.substr(0,5)})
    }
    render(){
        /* let filteredItems = this.props.menuItems.filter(
          (item)=>{
return item.name.toLowerCase().indexOf(this.this.state.search.toLowerCase()) !==-1;
          }  
        );*/
        return(
            <div>
                <input type = "text" placeholder = "Search" value = {this.state.searc} onChange = {this.updateSearch.bind(this)} />
            </div>
        )
    }
}

export default SearchItem;