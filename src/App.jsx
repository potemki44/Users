import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import { UsersForm } from './Components/UsersForm'
import { UsersList } from './Components/UsersList'

function App() {
  const [respond, setRespond] = useState([])
  const [hide, setHide] = useState(true)
  const [pass, setpass] = useState()
  const URL = 'https://users-crud1.herokuapp.com/users/'


  const getAllusers = () => {
    axios.get(URL)
      .then(res => { setRespond(res.data) })
      .catch(err => (err))
  }

  useEffect(() => {
    getAllusers()
  }, [])

  const createUsers = (data) => {
    console.log(data)
    axios.post(URL, data)
      .then(res => { console.log(res.data) })
      .catch(err => (err))
      .finally(() => getAllusers())
  }

  const deleteUsers = (id) => {
    const URL2 = `https://users-crud1.herokuapp.com/users/${id}/`

    axios.delete(URL2)

      .then(res => { console.log(res.data) })
      .catch(err => (err))
      .finally(() => getAllusers())
  }



  const hideform = () => setHide(!hide)

  return (

    <div className="App">
      <button onClick={hideform} className='app_button'>{hide ? "Hide Form "  : "Show Form "}</button>

      {hide &&
        <UsersForm createusers={createUsers}
          getAllusers={getAllusers}
          setpass={setpass}
          pass={pass} />}

      <section className='app_div'>
        {
          respond.map(user =>
            <UsersList user={user}
              key={user.id}
              deletes={deleteUsers}
              updateList={setpass}
              hideFlromList={setHide} />)
        }

      </section>

    </div>
  )
}

export default App
