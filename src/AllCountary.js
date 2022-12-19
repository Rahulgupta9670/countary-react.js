import logo from "./logo.svg";
import "./App.css";
import { Country, State, City } from "country-state-city";
import ReactSelect from "react-select";
import { useState } from "react";

function AllCountary() {
  const countries = Country.getAllCountries();
  // const cities = C.getAllCountries()
  const state = State.getAllStates();

  console.log(countries);

  const [countarydata, setCountarydata] = useState();
  const [statedata, setStatedata] = useState();
  const [citydata, setCitydata] = useState();
  const [Stateof, setStateof] = useState([]);
  const [CitysOf, setCityOf] = useState([]);
const [alldata,setAlldata] = useState([])
  const changeData = (event) => {
    const data = event.target.value;
    const state = State.getStatesOfCountry(data);
    // const state = countries.find((countary) => countary.isoCode === data);
    setStateof(state);
    setCountarydata(data);
  };
  // console.log("raglimmmmmmmmmmmmmmm",countarydata,statedata,citydata)
  const getCitydata = (e) => {
    const datass = e.target.value;
    setCitydata(datass);
  };
  const getCityData = (e) => {
    const datas = e.target.value;

    console.log("city--data---", datas);
    let str = datas.split(" ");
    let citys = City.getCitiesOfState(str[1], str[0]);
    console.log("dataI------", citys, str);
    setCityOf(citys);
    setStatedata(datas);
  };
  const submited = () => {
    let alldatas = {
      countary: countarydata,
      state: statedata,
      city: citydata,
    };
    setAlldata(alldatas)
    // console.log("alldatasssssssssssssssssssssssssssss", alldata);
  };
  console.log("alldatasssssssssssssssssssssssssssss", alldata);

  // {isoCode : index.isoCode, count:index.countryCode}
  return (
    <div className="App">
      <select name="countary" onChange={(e) => changeData(e)}>
        {countries.map((index, key) => (
          <option key={key} value={index.isoCode}>
            {index.name}
          </option>
        ))}
      </select>
      <select name="cars" id="cars" onChange={(e) => getCityData(e)}>
        {Stateof.map((index, key) => (
          <option value={`${index.isoCode} ${index.countryCode}`}>
            {index.name}
          </option>
        ))}
      </select>
      <select name="cars" id="cars" onChange={(e) => getCitydata(e)}>
        {CitysOf.map((index, key) => (
          <option value={index.isoCode}>{index.name}</option>
        ))}
      </select>
      <button type="button" onClick={submited}>
        submited
      </button>
      <h1>{alldata.countary}</h1>
      <h1>{alldata.state}</h1>
      <h1>{alldata.city}</h1>
     
    </div>
  );
}

export default AllCountary;
