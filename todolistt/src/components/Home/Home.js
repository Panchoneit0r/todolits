import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor(){
        super();
        this.state ={
            name: 'Pancho',

        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({name:'Barraza',})
        }, 2000);
    }

    render() {
        const buttonStyle ={
            backgroundColor: 'red',
            border: '1px solid black',
        }

        const {name} = this.state;    
        console.log(name);
        return (
          <div className="home">
              <h1>{name}</h1>
              <h1>A mi el mencho me pela la verga</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <a href="https://www.youtube.com/watch?v=H6LLfczz8hM">Botargas</a>
              <div>
                  {/* styles inline */}
                <button style= {{
                   backgroundColor: 'gray',
                   border: '1px solid black',
                    }}>
                        click
                </button>
                {/* styles objects */}
                <button style= {buttonStyle}>
                    click
                </button>
              </div>
          </div>
        );
    }
}

export default Home;