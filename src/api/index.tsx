import { db, firebaseAuth, provider } from '../firebase'
import { Todo, UserId } from '../types'

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

export const getTodosDB = async (userId: UserId) => {
  const snapshot = await db
    .collection('todos')
    .where('userId', '==', userId)
    .get()
  return snapshot.docs.map((item: { data: () => void }) => item.data())
}

export const addTodoToDB = async (todo: Todo, userId: UserId) => {
  await db.collection('todos').add({
    id: todo.id,
    text: todo.text,
    completed: false,
    userId,
  })
}

export const deleteTodoDB = async (id: Todo) => {
  const snapshot = await db
    .collection('todos')
    .where('id', '==', id)
    .get()
  snapshot.forEach((doc: { id: any }) => {
    db.collection('todos')
      .doc(doc.id)
      .delete()
  })
}

export const toggleTodoDB = async (id: Todo, todo: Todo) => {
  const snapshot = await db
    .collection('todos')
    .where('id', '==', id)
    .get()
  return snapshot.forEach((doc: { id: any }) => {
    db.collection('todos')
      .doc(doc.id)
      .update({
        completed: !todo.completed,
      })
  })
}

export const changeTodoDB = async (text: Todo, id: Todo) => {
  const snapshot = await db
    .collection('todos')
    .where('id', '==', id)
    .get()
  return snapshot.forEach((doc: { id: any }) => {
    db.collection('todos')
      .doc(doc.id)
      .update({
        text,
      })
  })
}

export const clearTodosDB = async () => {
  const snapshot = await db
    .collection('todos')
    .where('completed', '==', true)
    .get()
  return snapshot.forEach((doc: { id: any }) => {
    db.collection('todos')
      .doc(doc.id)
      .delete()
  })
}

export const toggleAllTodosDB = async () => {
  const snapshot = await db.collection('todos').get()
  const todos: any = snapshot.docs.map((item: { data: () => void }) =>
    item.data()
  )
  const activeTodosCount = todos.filter((t: any): any => !t.completed).length
  if (activeTodosCount !== 0) {
    return snapshot.forEach((doc: { id: any }) => {
      db.collection('todos')
        .doc(doc.id)
        .update({
          completed: true,
        })
    })
  } else {
    return snapshot.forEach((doc: { id: any }) => {
      db.collection('todos')
        .doc(doc.id)
        .update({
          completed: false,
        })
    })
  }
}
