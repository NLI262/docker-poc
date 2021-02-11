import React from 'react';
import DeviceEmulator from 'react-device-emulator';
import 'react-device-emulator/lib/styles/style.css';
import './App.scss';


function App() {
  return (
    <div>
    <DeviceEmulator  type="mobile" withDeviceSwitch withRotator >
      <h1 style={{color:"white"}}>Welcome to React Device Emulator</h1>
    </DeviceEmulator>
   
  </div>
    
  );
}

export default App;
