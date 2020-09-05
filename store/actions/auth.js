import {AsyncStorage} from 'react-native';


export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

let timer;

export const setDidTryAL = () => {
  return {type : SET_DID_TRY_AL}
}
export const authenticate = (email, password) => {
    return dispatch => {
        dispatch({
            type:AUTHENTICATE,
            userId:email,
            password:password})
    };
}

// export const authenticate = (userId, token, expiryTime) => {
//     return dispatch => {
//         dispatch(setLogoutTimer(expiryTime));
//         dispatch({
//             type:AUTHENTICATE,
//             userId:userId,
//             token:token})
//     };
// }

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBM6GOC5kS_Fp2aWK4PMnFBo-jOf4p90-8',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;
        let message = 'Something went wrong!';
        if(errorId === 'EMAIL_EXISTS'){
            message = 'This email exists already!';
        } else if (errorId === 'INVALID_PASSWORD'){
            message = 'This password is not valid!'
        }
        throw new Error(message)
      }

    const resData = await response.json();
    dispatch(authenticate(resData.idToken,resData.localId, parseInt(resData.expiresIn) * 1000));
    const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000);
    saveToStorage(resData.idToken,resData.localId, expirationDate);
  };
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(authenticate(email,password))
    }
    // return async dispatch => {
    //   const response = await fetch(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBM6GOC5kS_Fp2aWK4PMnFBo-jOf4p90-8',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //       })
    //     }
    //   );
  
      
    //   if (!response.ok) {
    //     const errorResData = await response.json();
    //     const errorId = errorResData.error.message;
    //     let message = 'Something went wrong!';
    //     if(errorId === 'EMAIL_NOT_FOUND'){
    //         message = 'This email could not be found!';
    //     } else if (errorId === 'INVALID_PASSWORD'){
    //         message = 'This password is not valid!'
    //     }
    //     throw new Error(message)
    //   }
  
    //   const resData = await response.json();
    //   console.log(resData);
    //   dispatch(authenticate(resData.localId,resData.idToken,
    //     parseInt(resData.expiresIn) * 1000));
    //   const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000)
    //   console.log('exp',expirationDate)
    //   saveToStorage(resData.idToken,resData.localId, expirationDate);
    // };
  };

export const logout = () => {
    // clearLogoutTimer();
    // AsyncStorage.removeItem('userData');
    return{ type:LOGOUT}
}

const clearLogoutTimer = () => {
    if(timer){
        clearTimeout(timer);
    }
}

const setLogoutTimer = expirationTime => {
    return dispatch => {
        timer = setTimeout(() => {
            dispatch(logout());
        },expirationTime )
    }
}

  const saveToStorage = (token,userId, expirationDate) => {
      AsyncStorage.setItem(
          'userData',
          JSON.stringify({
              token:token,
              userId:userId,
              expiryDate: expirationDate.toISOString()
          })
      )
  }