import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";

import { getQuote } from "../actions";

const Quote = props => {

    return(
        <div className="box">
            <h2>Kanye's Words of Wisdom:</h2>
            {!props.quote && !props.isFetching && <p>Push the button to be blessed...</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            {props.quote && <p className="quote">"{props.quote}"</p>}
            <button className="btn" onClick= {props.getQuote}>Get Greatness</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect (mapStateToProps, { getQuote })(Quote);