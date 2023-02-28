import React, { Component } from 'react';
import SmallCard from './SmallCard';


class Cards extends Component {

    constructor(props){
        super(props);
        this.state = {
            cards :[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/cards')
        .then(res => res.json())
        .then(res=>{
            this.setState({
                cards: res.data
            })
        })
    }
    
    
    render(){
        return (
    
            <div className="row">
                
                {this.state.cards.map((card,i)=>{
                    return (
                     <SmallCard key={i}{...card}/>
                    );
                })}
    
            </div>
        )
    }

}

export default Cards;