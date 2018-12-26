import React,{Component} from 'react';
import {Router, Switch} from 'react-router-dom';
import Axios from 'axios';
import Cards from '../Components/Card';



export default class Book extends Component{
    state={
        book:[]
    };

    getdata=()=>{
        Axios.get('https://api-demo.koding.sch.id/api/book/')
        .then((ress)=>{
            console.log(ress.data.data);
            this.setState({
                book: ress.data.data
            })


        })
        .catch((err)=>{
            console.log(err)
        });
    };
    componentDidMount(){
        this.getdata();
    }
    render(){
        return(
             <div>
                {this.state.book.map((value, index)=>{
                    return<Cards value ={value.judul} id={value.id}/>
                     })}
            </div>
        );
    }
}