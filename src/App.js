import './App.css';
import Countries from './components/Countries/Countries';
// import Person from './components/Person/Person';
// import Header from './components/Header/Header';

 

function App() {
  return (
    <div className="App">
      
      <Countries></Countries>

      {/* <Person></Person>
      <Header></Header> */}

    </div>
  );
}

/*
function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    // .then(data=>console.log(data))
    .then(data=>setCountries(data))
  }, [])

  return(
    <div>
      <h1>visiting all Countries</h1>
      <h3>country: {countries.length}</h3>
      {
        //countries.map(country =>console.log(country))
        //countries.map(country =><p>{country.name.common}</p>)
        countries.map(country =><Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h4>Name : { props.name}</h4>
      <h5>population : { props.population}</h5>
      <hr />
    </div>
  )
}*/
export default App;




