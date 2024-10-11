
import { useState } from 'react'
import './App.css'

function App() {

  const [password,setPassword]=useState('F43#$&8b');
  const [length,setLength]=useState(8);
  const [inum,setInum]=useState(true);
  const [icl,setIcl]=useState(true);
  const [isl,setIsl]=useState(true);
  const [ichar,setIchar]=useState(true);

  function generatePassword(){
    let charset="";
    if(icl) charset +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(ichar) charset +="!@#$%^&*()_+=-*/><`;',.[]{}|";
    if(isl) charset +="abcdefghijklmnopqrstuvwxyz";
    if(inum) charset +="1234567890";
    let generatedpass="";
    for(let i=0;i<length;i++){
      let index=Math.floor(Math.random()*charset.length);
      generatedpass +=charset[index];
    }
    setPassword(generatedpass);
    
  }

  function copyToClipboard(){
    navigator.clipboard.writeText(password);
    alert('Password Copied !');
  }


  return (
    <>
      <div className="pass-generator">
       <marquee behavior="" direction=""><h2>Strong Password Generator</h2></marquee> 
        <div className="input">
          <label htmlFor="length">Password Length :</label>
          <input type="number" name="" id="length" min={3} value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
        </div>
        <div className="options">
          <div className="option">
            <input type="checkbox" name="" id="cl" checked={icl} onChange={(e)=>setIcl(e.target.checked)}/>
            <label htmlFor="cl"> Include Capital Letters</label>
          </div>
          <div className="option">
            <input type="checkbox" name="" id="sl" checked={isl} onChange={(e)=>setIsl(e.target.checked)} />
            <label htmlFor="sl"> Include Small Letters</label>
          </div>
          <div className="option">
            <input type="checkbox" name="" id="num" checked={inum} onChange={(e)=>setInum(e.target.checked)}/>
            <label htmlFor="num"> Include Numbers</label>
          </div>
          <div className="option">
            <input type="checkbox" name="" id="sc" checked={ichar} onChange={(e)=>setIchar(e.target.checked)} />
            <label htmlFor="sc"> Include Special Characters</label>
          </div>
        </div>
        <div className="btn-container">
        <div className="border"></div>
        <button className='gp' onClick={generatePassword}>Generate Password</button>
        </div>
        <div className="result">
          <input type="text" readOnly value={password} />
          <button onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="copyright">
          <p>Designed & Developed by</p>
          <a target='_blank' href="https://appsail-50022521443.development.catalystappsail.in/">Sj Developer</a>
        </div>
      </div>
    </>
  )
}

export default App
