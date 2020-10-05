import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class QuestionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug : null,
            question : null,
        }
    }
    
    componentDidMount(){
    
        if(this.props.match.params.slug){
            this.setState({
                slug :  this.props.match.params.slug,
            })
        }
    }

    isValidSlug = (slug) => {
        if(this.props.questions){
            const question = this.props.questions.find(obj => {
                return obj.slug === slug;
            })
            this.setState({
                question : question,
            })
            return true;
        }else{
            return false;
        }
    }

    render() {
        const {slug} = this.state;
        
        if(!this.isValidSlug(slug)){
            return <Redirect to="/404" />
        }

        return (
            <div>
                Quetion View
            </div>
        );
    }
}

export default QuestionView;