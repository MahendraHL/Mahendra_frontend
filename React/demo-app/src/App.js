
import './App.css';
import Table from './Components/Table'
import Form from './Components/Form'
import Welcome from './Components/Welcome';
import Heading from './Components/Heading';
import ClassParent from './Components/ClassParent';
import  ClassCounter  from './Components/ClassCounter';
import Counter from './Components/FunctionBased/Counter'
import DynamicContent from './Components/FunctionBased/DynamicContent';
import RenderingContent from './Components/FunctionBased/RenderingContent';
import ToggleContent from './Components/FunctionBased/ToggleContent';
import  ParentRender  from './Components/ParentRender';
import WithLogger from './Components/FunctionBased/WithLogger'
import Parent from './Components/FunctionBased/Parent'
import ParentContext from './Components/FunctionBased/ParentContext';
import UseEffect from './Components/FunctionBased/UseEffect';

function App() {
  let name="James";
  let age=25
  let marks=223;
  return (
    <div>
      <h1>Hello world</h1>
      <Table/>
      <Form/>
      <Welcome name={name} age={age}/>
      <Heading marks={marks}/>
      <ClassParent/>
      <ClassCounter/>
      <Counter/>
      <DynamicContent isLoggedIn={true}></DynamicContent>
      <RenderingContent isLoggedIn={true}/>
      <RenderingContent isLoggedIn={false}/>
      <ToggleContent/>
      <ParentRender/>
      <WithLogger/>
      <Parent message={"hi"} name={"Mahi"}/>
      <ParentContext/>
      <UseEffect/>
      
      </div>
  );
}

export default App;
