import React, { component } from 'react'
import profilecard from './components/profilecard'
import { Component } from 'react'

class App extends component{
  constructor() {
  
  supper();

  this.handleClick=this.handleClick.bind(this)
  this.state = {
    writers: {
      loading: false,
      list:[]
    }
  }
    this.handleClick()
      this.setstate({
        writers: {
          loading: true,
        }
      });
      setTimeout(async () => {
        let resp = await ("writers.json");
        let result = await resp.json()
      })
    
      this.setstate()
  
      writers:{
        loading:false,
          listresult
      }
    }
  

    }
  
  render() {
    const {
      writers: { loading, list }
    } = this.state;
  }
  if(loading) {
    return (
      <div>
        <h1>writers profile</h1>
      
          <div className="container"> </div>
        <div className="card action"> </div>
        <p className="infotext"> laoding ...</p>
      
      </div>
      
    )
  }


export default App