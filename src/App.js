import React from "react";
import Form from "./components/Form";
import Games from "./components/Games";
import Title from "./components/Title";
import axios from "axios";

let myString = ""
const API_KEY = "9cced237c452b0ea365abb430ed032b9";

class App extends React.Component {

  state = {
   gameData: undefined,
   gameCover: undefined,
  }

  postGame = async (e) => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const Console = e.target.elements.Console.value;
    
    const data = {title: title, console: Console};
    console.log(data);
    const api_post = axios.post("http://localhost:5000/api/games", data)
    .then(function (res){
      console.log(res);
    })
    .catch(function (err){
      console.log(err);
    });

    
    
    console.log(api_post);

  //   if (title && Console) {

  //   this.setState({
  //    title: title,
  //    console: Console
  //   });
  // } else {
  //   this.setState({
  //   title: undefined,
  //   console: undefined
  // });

  }


  getGame = async (e) => {
      e.preventDefault();
      const api_call = await fetch("http://localhost:5000/api/games");
      
      const data = await api_call.json();
     
      console.log(data.data)
      this.setState({
        gameData: data.data,
    
      });
    }

    clearList = (e) => {
      e.preventDefault();
      const clearList = axios.delete("http://localhost:5000/api/games/wipe");
      this.setState({
        gameData: clearList.data,
      })
    }

    editValue = (e) => {
      e.preventDefault();
      const newTitle = e.target.elements.newTitle.value;
      const newConsole = e.target.elements.newConsole.value;
      const data = {title: newTitle, console: newConsole};
      const gameID = e.target.elements.newTitle.id;
      console.log(gameID);
      const newData = axios.put(`http://localhost:5000/api/games/update/:${gameID}`, data);
      window.location.reload();


    }


  render() {
    return(
      <div className="bodyStyle">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form postGame={this.postGame} getGame={this.getGame} clearList={this.clearList}/>
                  <Games editValue={this.editValue} gameData={this.state.gameData}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      );
  }
}

export default App
