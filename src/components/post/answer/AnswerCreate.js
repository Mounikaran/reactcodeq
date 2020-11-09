import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../EditorToolbar";
import { MDBBtn } from "mdbreact";
import axios  from "axios";

class AnswerCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
		};
	}
	handleChange = (value) => {
		this.setState({
			value: value,
		});
    };
    
    handleSubmit = (event) => {
        console.log("submitted")
        event.preventDefault();
        const {question_id, user_id, token} = this.props;
        console.log(question_id, user_id, token);
        if (question_id && user_id && token) {
            let form_data = new FormData();
            form_data.append("user_id", user_id);
            form_data.append("question_id", question_id);
            form_data.append("code", this.state.value);
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            };
            axios.post("/post/answers/", form_data)
            .then(res => res.data)
            .catch(err => console.log(err))
        }
    }

	render() {
		return (
			<>
                
				<form onSubmit={this.handleSubmit}>
					<EditorToolbar />
					<ReactQuill
						theme="snow"
						placeholder="create Your content"
						value={this.state.value}
						onChange={this.handleChange}
						modules={modules}
						formats={formats}
					/>
                    <div className="text-right">

                    <MDBBtn type="submit" size="sm">Add Answer</MDBBtn>
                    </div>
				</form>
			</>
		);
	}
}

export default AnswerCreate;
