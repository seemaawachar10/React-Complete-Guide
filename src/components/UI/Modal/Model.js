import React ,{Component}from 'react';
import classes from './Model.module.css';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }
    render(){
        return(
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            <div className={classes.Modal}
            style={{transform: this.props.show?'translateY(0)':'translateY(-100vh)'}}>
                {this.props.children}
            </div>
        </Aux>
        )
    }
       
    
} ;


export default Modal;