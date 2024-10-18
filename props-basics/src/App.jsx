import { useState } from 'react'

function App() {
  

  return (
    <div>
      <button onClick={handleClick}>Click me to get random title</button>
      <Header title={titleList} />
      <Header title="pratham" />
      <Header title="pratham1" />
      <Header title="pratham12" />
      <Header title="pratham123" />
      <Header title="pratham1234" />
      <Header title="pratham12345" />

    </div>
  )
}


export function HeaderWithButtons(){
  const [titleList, setTitleList] = useState("The title inside the div");
  return <div>
  <button onClick={handleClick}>Click me to get random title</button>
  <Header title={titleList} />
  </div>

}
export function Header({ title }) {
  return (
    <div>
      <p>{title}</p>
    </div>
  )
}

export default App;
