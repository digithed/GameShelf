import React from "react";

class Form extends React.Component {
	render(){
		return(
			<div className="formStyle">
			<form onSubmit={this.props.postGame}>
			<input type="text" name="title" placeholder="Title"/>
			<input type="text" name="Console" placeholder="Console"/>
			<button>Post Game</button>

			</form>

			<br></br>
			<form onSubmit={this.props.getGame}>
			<button>Get Game</button>
			</form>

			<form onSubmit={this.props.clearList}>
			<button>Clear List</button>
			</form>

			</div>

			);
	}
}

export default Form