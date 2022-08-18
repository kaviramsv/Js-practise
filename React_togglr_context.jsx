import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];
const AppContext = createContext();
const AppProvider = (props)=>{
  const [lang, setLang] = useState(languages[0])
  return(
  <AppContext.Provider value={{lang, setLang}}>
    {props.children}
  </AppContext.Provider>
  )
}

const App=()=> {
    return (
      // implement Context here so can be used in child components
      <AppProvider>
        <MainSection />
      </AppProvider>
    );
}


const MainSection =()=> {

    const {lang, setLang} = useContext(AppContext)

    const toggleLang=(e)=>{
      e.preventDefault()
      if(lang===languages[0]){
        setLang(languages[1])
      }
      if(lang===languages[1]){
        setLang(languages[0])
      }
    }
    return (
      <div>
        <p id="favoriteLanguage">Favorite programing language:{lang}</p>
        <button id="changeFavorite" onClick={toggleLang}>Toggle language</button>
     </div>
    )
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );