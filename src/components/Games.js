import React from 'react';
require("../App.css")

class Games extends React.Component {
	
	state = {

	isShow: undefined,
	index1: undefined,
	index2: undefined,
	edit: undefined,
	key: undefined,
	size: undefined,
	id: undefined,
		
	};

	
	turnOn = () => {
		this.setState({ isShow: true});
		
		
	}


	turnOff = () => {
		
		this.setState({ isShow: false });
		
	};

	makeBig = () => {
		this.setState({ size: '100px' });
	}

	index1 = (index) => this.setState({ index1: index });
	index2 = (index) => this.setState({ index2: index });

	edit = () => {
		this.setState({edit: true});
	}

	editOff = () => {
		this.setState({edit: false });
	}
	
	// setsomeVariable(){
	// 	this.setState({id: t})
	// }
	onClick = (t) => {
	
	this.setState({ isShow: true, id: t});	
	}
	clickMe = (num) =>{ 
	console.log(num);
	const ticker = num;
	this.onClick(ticker);
	}
getID = () => {


if(document.getElementById('0')){

if(document.getElementById('0').onclick){
this.clickMe(0);
while(document.getElementById('0').onclick){
document.getElementById('1').onclick = false;





}
}

if(document.getElementById('1').onclick){
this.clickMe(1);
while(document.getElementById('1').onclick){
document.getElementById('0').onclick = false;







}
}
}


}
	render() {

		let styleVar = "";
		let styleNum = 30;

		function styleFunc() {
		if(this.state.isShow === false){
			styleNum = styleNum - 5; 
			styleVar = `font-size:${styleNum}px;`
			return styleVar;
		}
	}
	
		const myData = this.props.gameData || [];
		const myImages = this.props.gameCover || [];
		
		var myArray = [];
		
		
		return(
			<div className="gameStyle">
			<h2> Your current game collection: </h2>
			<p> (single click to show, double-click to collapse): </p>
			{myData.map((item, index) => <h3 id={index} style={{fontSize: this.state.size}} onClick={this.turnOn} onDoubleClick={this.turnOff} key={index}>Title: {item.title}, Console: {item.console}, ID: {item.id}
				{this.state.isShow && <img style={{ 
             width: '200px',
       		height: '100px', align:'right', verticalAlign: 'middle',}} alt="Cover art not available" src={item.link} key={index}/>}{this.state.isShow && <div className="right">
       		<div style={{display: 'inline-block', marginRight: '10px',}}>
       		<p>{item.title} theme song:</p>
       		<iframe title="themeSong" width="210" height="170"
			src={item.themeSong}>
			</iframe>
			</div>

			<div style={{display: 'inline-block',}}>
			<p>{item.title} walkthrough:</p>
			<iframe allowFullScreen="true" title="walkthrough" width="210" height="170"
			src={item.walkthroughLink}>
			</iframe>
			</div>

			</div>}
			{this.state.isShow && <button onClick={this.edit}>Edit Game/Console </button>}{this.state.edit && <form onDoubleClick={this.editOff} onSubmit={this.props.editValue}> 
		
		<input id={item.id} type="text" name="newTitle" placeholder="edit this title" value={item.title} />
		<input id={item.id} type="text" name="newConsole" placeholder="edit this console" value={item.console}/>
		<button>Submit Changes</button>
		</form>}
			</h3>)}

			</div>
			
		

			);
		
	}
}

export default Games