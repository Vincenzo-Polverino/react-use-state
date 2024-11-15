import { useState } from 'react'
import languages from './languages'

import './App.css'

function App() {
  const [selectLang, setSelectLang] = useState(languages[0])


  return (
    <>
      <div className='box'>
        <div className='button'>
          {languages.map(language => (<button key={language.id} onClick={() => setSelectLang(language)}>
            {language.title}
          </button>
          ))}
        </div>
        <div className='card'>
          <h2>{selectLang.title}</h2>
          <p>{selectLang.description}</p>
        </div>
      </div>
    </>
  )
}

export default App
