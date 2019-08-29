import { db, firebaseAuth, provider } from '../firebase/index'

export const loginViaGoogle = async () => {
  try {
    const result = await firebaseAuth.signInWithPopup(provider)
    return result.user
  } catch (error) {
    console.log({ error })
  }
}

export const logoutFromApp = async () => {
  try {
    return await firebaseAuth.signOut()
  } catch (error) {
    console.log({ error })
  }
}

export const getTodosDB = async userId => {
  try {
    const snapshot = await db
      .collection('todos')
      .where('userId', '==', userId)
      .get()
    return snapshot.docs.map(item => item.data())
  } catch (err) {
    console.error(err.message)
  }
}

export const addTodoToDB = async (todo, userId) => {
  try {
    await db.collection('todos').add({
      id: todo.id,
      text: todo.text,
      completed: false,
      userId,
    })
  } catch (err) {
    console.error(err.message)
  }
}

export const deleteTodoDB = async id => {
  try {
    const snapshot = await db
      .collection('todos')
      .where('id', '==', id)
      .get()
    snapshot.forEach(doc => {
      db.collection('todos')
        .doc(doc.id)
        .delete()
    })
  } catch (err) {
    console.error(err.message)
  }
}

export const toggleTodoDB = async (id, todo) => {
  try {
    const snapshot = await db
      .collection('todos')
      .where('id', '==', id)
      .get()
    return snapshot.forEach(doc => {
      db.collection('todos')
        .doc(doc.id)
        .update({
          completed: !todo.completed,
        })
    })
  } catch (err) {
    console.error(err.message)
  }
}

export const changeTodoDB = async (text, id) => {
  const snapshot = await db
    .collection('todos')
    .where('id', '==', id)
    .get()
  return snapshot.forEach(doc => {
    db.collection('todos')
      .doc(doc.id)
      .update({
        text,
      })
  })
}

export const clearTodosDB = async () => {
  try {
    const snapshot = await db
      .collection('todos')
      .where('completed', '==', true)
      .get()
    return snapshot.forEach(doc => {
      db.collection('todos')
        .doc(doc.id)
        .delete()
    })
  } catch (err) {
    console.error(err.message)
  }
}

export const toggleAllTodosDB = async () => {
  const snapshot = await db.collection('todos').get()
  const todos = snapshot.docs.map(item => item.data())
  const activeTodosCount = todos.filter(t => !t.completed).length
  if (activeTodosCount !== 0) {
    return snapshot.forEach(doc => {
      db.collection('todos')
        .doc(doc.id)
        .update({
          completed: true,
        })
    })
  } else {
    return snapshot.forEach(doc => {
      db.collection('todos')
        .doc(doc.id)
        .update({
          completed: false,
        })
    })
  }
}
