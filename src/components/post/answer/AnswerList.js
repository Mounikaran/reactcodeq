import { MDBRow, MDBCol } from "mdbreact";
import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { loadAnswers } from "../../../store/actions/actions";
import axios from "axios";
// import AnswerCreate from './AnswerCreate';

class AnswerList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: null,
			question_id: props.question_id,
		};
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.setState({ question_id: nextProps.question_id });
		const { question_id } = this.state;
		if (question_id) {
			console.log(question_id);
			this.loadAnswers(question_id);
		}
	}

	// componentDidMount() {
	// 	const { question_id } = this.state;
	// 	if (question_id) {
	// 		console.log(question_id);
	// 		this.loadAnswers(question_id);
	// 	}
	// }

	loadAnswers = (question_id) => {
		let answers = [];
		axios
			.get(`http://127.0.0.1:8000/post/answers/`)
			.then((res) => {
				const all_answers = res.data;
				all_answers.forEach(function (answer) {
					if (answer.question.id === question_id) {
						answers.push(answer);
						console.log(answer);
					}
				});
			})
			.catch((err) => console.log(err));
		console.log(question_id, answers);
	};

	render() {
		const { answers } = this.props;
		return (
			<>
				<div className="bg-white">
					<div className="h4 text-center">
						Answers{" "}
						<span className="badge badge-default">
							{" "}
							{answers ? answers.length : 0}{" "}
						</span>
					</div>
					<hr />
				</div>

				{answers
					? answers.map((answer, index) => (
							<MDBRow key={index}>
								<MDBCol size="8">{ReactHtmlParser(answer.code)}</MDBCol>
							</MDBRow>
					  ))
					: ""}
				<div>
					<hr />
				</div>
			</>
		);
	}
}

const mapStatestoProps = (state) => {
	return {
		answers: state.answers,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoadAnswer: (question_id) => dispatch(loadAnswers(question_id)),
	};
};

export default connect(mapStatestoProps, mapDispatchToProps)(AnswerList);
