import logo from './logo.svg';
import './App.css';
import "./Component/project"
import Project from './Component/project';

function App() {
  let sub=[
    {
      id:"1",
      date:"2-2-2036", 
    }
  ]
  let price = 976556789000
  let sid="sid is hero"
  let uday="Uday and rano after class is over then him are both goes to DHARAM KA KAM KARNE "
  var viraj="Viraj and Vishal are brother beacause KUMBH NA MELA MA VIRAJ KHOVAI GAYO TO HAVE MADIYO "
     


  return (
    <div>
      <Project  uday={uday}   viraj={viraj} p={price} />
 

    </div>
  );
}

export default App;
