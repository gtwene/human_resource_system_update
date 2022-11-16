
import React, { useState } from 'react';
import swal from 'sweetalert';
import { SiGnuprivacyguard } from 'react-icons/si'
import { data } from 'autoprefixer';
import './App.css'


async function loginUser(credentials) {
  return fetch('http://127.0.0.1:8000/api/hr/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())

 }

export default function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault(); 
    const response = await loginUser({
      email,
      password
    });
    if ('token' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['token']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/main-admin";
      });
    } else {
      swal("Failed", response.message, "error");
    }

    // alert(JSON.stringify(response))
  }

  

  return (
    <div className='backgroundScreen h-screen flex flex-col justify-center items-center' id='container'>
      <div className='mb-5'>
        <h1 className='text-2xl font-bold text-white '>Human Resource System</h1>
      </div>

        <div class="w-full max-w-xs">
          
          <form class="bg-white opacity-80 shadow-2xl rounded-lg px-6 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className='mb-5 justify-center items-center flex flex-col '>
            <div className='border-2 border-indigo-600 p-3 rounded-full bg-blue-500' >
             <div><SiGnuprivacyguard className=''/></div>
            </div>
            <h1 className='mt-5'>Sign In</h1>
          </div>
          
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      name="email"
                      label="Email Address"
                      onChange={e => setEmail(e.target.value)} />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      onChange={e => setPassword(e.target.value)} />

            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>


      {/* <CssBaseline /> */}
      {/* <Grid item xs={false} md={7} className={classes.image} /> */}
     
    </div>
  );
}