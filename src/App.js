import React,{Component} from 'react';
import Layout from '../src/components/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';



class App extends Component {
 
  render(){

  return (
    <div >
     <Layout>
      <BurgerBuilder />
     </Layout>
    </div>
   
  );
  }
}

export default App;



// state ={
//   lenghtOfChars :0,
//   enteredString :""
// }


// calculateLenghHandler =(event) =>{
//   var lenghtOfChars = event.target.value.length;
//   this.setState({
//     lenghtOfChars : lenghtOfChars,
//     enteredString :event.target.value
//   })
// }
// deleteLetterHandler =(index) =>{
//   const text = this.state.enteredString.split('');
//   text.splice(index, 1);
//   const updatedString = text.join('');
//   this.setState({enteredString: updatedString});
// }
// render(){

//   let charList = this.state.enteredString.split('').map((ch, index) => {
//     return <Char letter={ch}
//     key={index}
//       clicked={() => this.deleteLetterHandler(index)} />;
//   });


// import Person from './Person/Person';
// import UserOutput from './UserOutput/UserOutput';
// import UserInput from './UserInput/UserInput';
// import Validation from './Validation/Validation';
// import Char from './Char/Char';
// import './App.css';
// state ={
//   username:"Seema"
// }

// changeValHandler =(event) =>{
//   this.setState({
//     username:event.target.value
//   });
// }
// usernameChangedHandler = (event) => {
//   this.setState({username: event.target.value});
// }
// state = {
//   persons:[
//     {name:'Seema' , age:29},
//     {name:'Sid' , age:29}
//   ]
// }


// switchHandler =() =>{
//  //console.log("called");

//  this.setState({
//   persons:[
//     {name:'Seemu' , age:29},
//     {name:'Siddhu' , age:29}
//   ]
//  })
// }