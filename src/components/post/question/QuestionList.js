import React, { Component } from 'react';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdbreact';


class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: null,
        }
    }
    
    componentDidMount(){
        if(this.props.questions){
            this.setState({
                questions: this.props.questions,
            })
        }
    }
    
    render() {
        const {questions} = this.state;
        return (
            <MDBContainer>
                
                        {questions ? (
                            questions.map((question, index)=><MDBCard className="my-1 hoverable pointer"  key={index}>
                                <MDBCardBody>
                                    {question.title}
                                </MDBCardBody>
                            </MDBCard>)
                        ): (
                            <MDBCard>
                                <MDBCardBody>
                                    No Questions Out there
                                </MDBCardBody>
                            </MDBCard>
                        )}
                    
            </MDBContainer>
        );
    }
}

export default QuestionList;