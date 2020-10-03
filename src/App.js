import React,{Component} from 'react';
import logo from './logo.svg';
import * as themes from './themes';
import List from './components/list.jsx'
import { Context } from './components/context';

import './App.css';


class App extends Component {

  state = {
    theme: themes.dark,
    list: [ 'Carmen', 'Alejandro','Ingrid', 'Miguel'],
  }

  toggleTheme = ()=>{
    // this.state.theme
    const { theme } = this.state;

    // OPERADOR TERNARIO     CONDICION ? codigo-true : codigo-false
    
    // setState({ theme : newTheme })

    this.setState({
      theme: theme === themes.dark ? themes.light : themes.dark
    })



  };

  render(){
    const { theme, theme:{background} , theme:{color} } = this.state;

    return(
      <>
        <Context.Provider value={this.state}>

          <div className="App">
            <header className="App-header" 
              style={{ 
                backgroundColor: background,
                color: color
              }}
            >
              <img src={logo} className="App-logo" alt="logo" />
              <code>{JSON.stringify(this.state.theme)}</code>

              <button
                onClick={this.toggleTheme}
                style={{ 
                  backgroundColor: background,
                  color: color
                }}
              >Cambiar tema</button>
          
              <List/>
            </header>
          </div>

          
          
        
        
        </Context.Provider>
      </>
    )
  }

}

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

export default App;
