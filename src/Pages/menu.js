import firebase from '../firebase'
import React from 'react'

const [menu, setItems] = useState([])

useEffect(() => {
  firebase.firestore().collection('menu').doc('Breakfast').collection('bebidas').get().then((snap => {
    const getMenu = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    setItems(() => getMenu);
  })
  )
}, [])


const Menu = () => (
  <>
    {menu.map((e, index) => (
      < div key={index}>
        <h1 key={e.type}>{e.type}</h1>
        <h1 key={e.price}>{e.price}</h1>
      </div>
    ))}
  </>
)