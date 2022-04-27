import React from 'react';
import {Card} from 'react-bootstrap';
import '../../App.css';
import Product from '../Component/data/Product';
import jamtangan from '../img/jamtangan.jpg';


function Page() {
    return(
     <div>
       <div className='block-one'>
         <div className='d-flex'>
            <label className='mt-3'>MIKe.Store</label>
            <div className='input' style={{marginLeft: '40px'}}>
              <input className='mt-3' placeholder='Cari Barang'/>
            </div>
          </div>
          <i className="fa-solid fa-cart-shopping" style={{float: 'right', marginRight: 140, marginTop: -23}}></i>
          <p style={{float: 'right', marginRight: 70, marginTop: -27}}>Login</p>
       </div>

       <div className='block-two'>
              <div className='image mt-5'>
                <img src={jamtangan} style={{height: "400px", width: "700px", borderRadius: '20px'}}/>
              </div>
              <div className='article'>
                <p id='paragrafImage'>Time Is Very Important For Life</p>
              </div>
       </div>

       <div className='block-three'>
           <Product/>
       </div>

       <div className='block-four'>
         <div className='about'>
           <Card style={{backgroundColor: '#25140f', height: '250px', color: 'white', width: '800px', marginLeft: '270px'}}> 
             <div className='pt-4 p-2'>
              <h3>About</h3>
                <p>Disini Anda Akan Menemukan Berbaai Koleksi Jam Tangan Dengan Kualitas 
                  Yang Telah Diuji Dan Memiliki Lisensi Secara International, Anda Akan Diperlihatkan
                  Oleh Keindahan Bentuk Jam Tangan Yang ELegan Dan Kenyamanan Pada Saat Dipakai, Karena
                  Terbuat Dari Bahan Yang Lembut dan Nyaman. Tidak Hanya Itu Berbagai Fitur Juga Ada dan Bervariasi</p>
             </div>
           </Card>
         </div>
        </div>

      <div className='block-five'>
      <h2 className='titleFooter text-white' style={{marginLeft: '600px', marginTop: '30px'}}>MIKe.Store</h2>
        <div className='d-flex' style={{marginTop: '100px', marginLeft: '340px'}}>
          <div className='text-white col-md-3'>
              <h6><i>Store</i></h6>
              <p>Tentang MIKe.Store</p>
              <p>Blog</p>
              <p>Mitra</p>
            </div>
          <div className='text-white col-md-3'>
              <h6><i>Bantuan dan Panduan</i></h6>
              <p>Syarat dan Ketentuan</p>
              <p>Kebijakan Privasi</p>
              <p>Custumer Service</p>
              <p>Security Account</p>
            </div>
            <div className='text-white col-md-3'>
              <h6><i>Keamanan</i></h6>
              <p>Account</p>
              <p>Hak Cipta</p>
              <p>Ketentuan Hukum</p>
              <p>Ketentuan Custumer</p>
            </div>
         </div>
       </div>
     </div>
)};

export default Page;