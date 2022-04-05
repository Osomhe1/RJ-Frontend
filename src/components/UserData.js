// import  {useState, useEffect} from 'react'

// export default function UserData() {
//     localStorage.setItem('email', JSON.stringify(this.state.email));

// //     useEffect(() => {
// //     //   localStorage.setItem('email', JSON.stringify(email));
// //     }, []);

// //   return (
// //     <div>UserData</div>
// //   )
// }

export const  loadData = email => {
  try {
    const serializedData = localStorage.getItem(email.split('@')[0]);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (err) {
    return undefined;
  }
};

export const saveData = email => {
  try {
    const serializedData = JSON.stringify(email.split('@')[0]);
    localStorage.setItem('state', serializedData);
  } catch (err) {
    return undefined;
  }
};
