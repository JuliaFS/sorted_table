import { Table } from "./components/Table"
import { data } from "./data"


function App() {
  

  return (
    <div className='table-position'>
      <Table rows={data} />
    </div>
  )
}

export default App
