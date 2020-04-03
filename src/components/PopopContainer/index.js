import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PopopModal from '../PopopModal/';
import About from '../About';
import Documentation from '../Documentation'

class PopopContainer extends React.Component {
    state = {
        show : false,
    };

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render() {
        return(                                                        
            <div className="PopopContainer">
                <h1>Popop <span className="ReactSpan">React!</span></h1>
                <Router>
                    <PopopModal show={this.state.show} handleClose={this.hideModal}>
                        <Switch>
                            <Route path='/about' component={About}>
                                <About/>
                            </Route>
                            <Route path='/documentation' compoenent={Documentation}>
                                <Documentation/>
                            </Route>
                        </Switch>
                    </PopopModal>  
                    <Link to='/about'><button onClick={this.showModal}>About</button></Link>
                    <Link to='/documentation'><button onClick={this.showModal}>Documentation</button></Link>
                </Router> 
            </div>
        );
    }
}

const container = document.createElement('div')
document.body.appendChild(container);

export default PopopContainer;