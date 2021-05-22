import Illustration from './Illustration';
import Links from './Links';
import Modal from './Modal';

import React, { useState } from 'react';
import Footer from './Footer';
import BackgroundElements from './BackgroundElements';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  return (
    <div className="App">
      <div className="Logo"/>
      <Links setModalVisible={setModalVisible} setModalText={setModalText}/>
      <Modal modalVisible={modalVisible} modalText={modalText} setModalVisible={setModalVisible}/>
      <Illustration/>
      <Footer/>
      <BackgroundElements/>
    </div>
  );
}

export default App;
