import React from 'react';
import Icon from './Img/Icon.png';
import Icon3 from './Img/Icon3.png';
import Icon4 from './Img/Icon4.png';
import Icon5 from './Img/Icon5.jpg';
import Icon6 from './Img/Icon6.png';
import Icon7 from './Img/Icon7.png';
import Icon8 from './Img/Icon8.jpeg';
import IconVC from './Img/IconVC.jpg';
import {Container, Row, Col} from 'react-bootstrap';

function Home_page() {
    return(
        <div>
          <div className='NavBar'>
            <Row>
               <Col xs={12} md={3}>
                <img src={Icon} alt="" 
                 style={{marginLeft: '-120px',height: '50px', backgroundColor: 'white', marginTop: '20px'}}/>
               </Col> 
               <Col xs={2} md={2}><label className='Nav' style={{marginTop: '33px'}}>Founder</label></Col>
               <Col xs={2} md={1}><label className='Nav' style={{marginTop: '33px'}}>Pelajari</label></Col>
               <Col xs={2} md={2}><label className='Nav' style={{marginTop: '33px'}}>Dukungan</label></Col>
               <Col xs={2} md={1}><label className='Nav' style={{marginTop: '33px'}}>Keamanan</label></Col>
               <Col xs={12} md={1}>
                <div className='Block-Nav-Masuk'>
                  <button className='Nav-Masuk'>Masuk</button>
                </div>
                </Col>
            </Row>
          </div>
            <div className='Block-Header'>
              <div className='info-app'>
                  <img src={Icon4} alt="" 
                   style={{height: '100px', width: '150px', marginTop: '-60px', marginLeft: '100px'}}/>
                  <h3>Free Call in MikeChat</h3>
                  <p>free calls to all your friends wherever they are with a wide range and freedom of communication</p>
                  <button className='buttonBlockHeader'>Information</button>
              </div>
          </div>
          <img src={Icon3} alt="" 
               style={{marginRight: '80px',width: '500px',marginTop: '60px',height: '400px', backgroundColor: 'white', float: 'right'}} />
         
          <div className='Block-One'>
            <div className='First-Article'>
            <img src={Icon5} alt="" 
             style={{width: '300px', height: '250px', marginTop: '50px', float: 'left', marginLeft: '100px'}}/>
            <p style={{float: 'left', width: '200px', marginTop: '330px', marginLeft: '-250px', fontWeight: 200}}>
              Anda dapat melakukan aktivitas hubungan sosial anda di platform ini dengan sangat mudah.
            </p>
            </div>
            <div className='Second-Article'>
            <img src={Icon6} alt="" 
             style={{width: '300px', height: '290px', marginTop: '10px',marginLeft: '-400px'}}/>
            <p style={{width: '200px', marginTop: '31px', marginLeft: '580px', fontWeight: 200}}>
              Layanan yang telah kami berikan kepada anda telah menjadi patokan kami dalam meningkatkan service kami.
            </p>
            </div>
            <div className='Thirty-Article'>
            <img src={Icon7} alt="" 
             style={{width: '300px', height: '250px', marginTop: '-400px',marginRight: '130px',float: 'right'}}/>
            <p style={{float: 'right', width: '200px', marginTop: '-110px', marginRight: '160px', fontWeight: 200}}>
              Performa aktivitas sosial yang sangat baik dapat anda dapatkan disini dengan fleksibilitas tinggi.
            </p>
            </div>
          </div>

          <div className='Block-Two mt-5'>
            <div className='Article-Slide-First'>
             <article 
              style={{float: 'left', marginLeft: '90px', marginTop: '130px', fontWeight: 200, width: '400px'}}>
                <h5 style={{fontWeight: 200, fontSize: '40px'}}>Fitur Chat</h5>
                <p>Fitur ini digunakan untuk melakukan transaksi pesan antar sekelompok orang, ini disajikan juga agar
                  anda dapat menjalin hubungan dengan orang lain. Seperti dengan keluarga, sahabat, saudara, atau hubungan 
                  yang lebih spesial lainnya.
                </p>
                <button
                 style={{border: 'none', height: '50px', marginTop: '20px', backgroundColor: 'rgb(108, 51, 107)', color: 'white', borderRadius: '10px', width: '200px'}}
                >Baca Selengkapnya</button>
             </article>
             <img src={Icon8} alt="" 
              style={{width: '500px', height: '500px', borderRadius: '10px', float: 'right', marginRight: '70px'}}/>
            </div>
          </div>

          <div className='Block-Three'>
            <div className='Article-Slide-Second'>
            <article 
              style={{float: 'left', marginLeft: '90px', marginTop: '130px', fontWeight: 200, width: '400px'}}>
              <h5 style={{fontWeight: 200, fontSize: '40px'}}>Fitur Video Call</h5>
                <p>Anda dapat melihat orang yang ingin anda hubungi secara bertatap virtual dan melakukan perbincangan yang
                  secara bebas dan melakukan segala hal dengan saling melihat satu sama lain, antara 2 orang atau lebih.
                </p>
                <button
                 style={{border: 'none', height: '50px', marginTop: '20px', backgroundColor: 'rgb(108, 51, 107)', color: 'white', borderRadius: '10px', width: '200px'}}
                >Baca Selengkapnya</button>
                <img src={IconVC} alt="" 
                 style={{width: '500px', height: '500px', borderRadius: '10px', float: 'left', marginLeft: '-800px', marginTop: '-300px'}}/>
            </article>
            </div>
          </div>

        <div className='footer mt-5'>
          <h5>MikeChat Apps</h5>
        </div>

      </div>
    )
}

export default Home_page;