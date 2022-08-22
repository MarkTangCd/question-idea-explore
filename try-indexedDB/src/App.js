import Dexie from 'dexie';
import { useEffect, useState } from 'react';

function App() {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const _db = new Dexie('myDatabase');
    _db.version(1).stores({
      friends: '++id, name, age' // Primary key and indexed props
    });
    setDb(_db);
  }, []);

  async function addFriend() {
    try {
      const id = await db.friends.add({
        name: this.friendName,
        age: this.friendAge
      });
  
      console.log('New friend ID');
      console.log(id);
    } catch (error) {
      console.log('Has a error');
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Hello Dexie.js IndexedDB</h1>
      <button onClick={addFriend}>Add Friend</button>
    </div>
  )
}

export default App;