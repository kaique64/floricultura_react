import React, { Component } from 'react';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        darkString: 'Dark'
    };

    this.darkmode = this.darkmode.bind(this);
  }

  darkmode(){
    let state = this.state;

    if(state.darkString === 'Light'){
      state.darkString = 'Dark';
      document.body.style.backgroundColor = '#FFF';
      document.body.style.color = 'black';
      document.getElementById('btnDark').style.backgroundColor = '#323336';
      document.getElementById('btnDark').style.color = 'white';
      this.setState(state);
    }else{
      state.darkString = 'Light';
      document.body.style.backgroundColor = '#323336';
      document.getElementById('btnDark').style.backgroundColor = 'white';
      document.getElementById('btnDark').style.color = 'black';
      document.body.style.color = 'white';
      this.setState(state)
    }
  }

  render() {
    return (
      <div>
        <footer>
            <button 
            type="button" 
            class="btn btn-dark" 
            id = 'btnDark'
            onClick = {this.darkmode}
            >
                {this.state.darkString}
            </button>
        </footer>
      </div>
    );
  }
}
