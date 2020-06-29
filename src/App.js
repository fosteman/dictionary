import React from 'react';
import MaterialTable from 'material-table';

import './App.css';
import firebase  from "firebase";
function App() {
    var firebaseConfig = {
        apiKey: "AIzaSyA5uTK4amfj3enEneEIQxugTl6XdA0YsIU",
        authDomain: "laura-dictionary.firebaseapp.com",
        //databaseURL: "https://laura-dictionary.firebaseio.com",
        projectId: "laura-dictionary",
        //storageBucket: "laura-dictionary.appspot.com",
        //messagingSenderId: "346191307233",
        appId: "1:346191307233:web:e031bc389831267190b2a0"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }

    const [term, setTerm] =React.useState([])
    React.useEffect(async ()=>{
        const fn = firebase.functions()
        fn.useFunctionsEmulator('http://localhost:5001')

        const fetchDictionary =  fn.httpsCallable("getDictionary")



        const dictionary = await fetchDictionary()
console.log(dictionary.data)


        setTerm(dictionary.data)
    },[])
  return (
    <div className="App">
      <MaterialTable
                      columns={[
                        {title:"Number",field:""},
                        {title:"Term"},
                        {title:"Definition"},
                        {title:"Desc"}
                      ]}

                     data={term
                     }/>
    </div>
  );
}

export default App;
