import './index.css'
const Portfolio = () => {
return(
<div id='members'>
 <h2 className='team'>MEET THE JADE</h2>
 <div className='our-team'>
 <div className='images'>
<div>
<img src= "/images/samuria.png" alt='member-one' className='first_three'/>
<div className='caption'>
 <h4>Esther Naserian</h4>
<p>Software Developer</p>
<button>View more</button>
</div>
</div>
<div>
 <img src="/images/trecy.png" alt='member-two'className='first_three'/>
<div className='caption'>
<h4>Trecy Malonza</h4>
<p>Software Developer</p>
<button>View more</button>
</div>  </div>
<div>
<img src="/images/mwanasha.png" alt='member-three' className='first_three'/>
 <div className='caption'>
 <h4>Mwanasha Omari</h4>
 <p>Software Developer</p>
 <button>View more</button>
 
</div>
 </div>
</div>
<div className='image-bottom'>
 <div>
 <img src='/images/glory.png'alt='member-four'/>
<div className='caption'>
 <h4>Gloria Kuria</h4>
  <p>Software Developer</p>
  <button>View more</button>
  
</div>
 </div>
<div>
 <img src='/images/karen.png' alt='member-five'/>
<div className='caption'>
<h4>Caren Chepngetich</h4>
 <p>Software Developer</p>
 <button>View more</button>
 
 </div>
 </div>
</div>
</div>
</div>
    )
}
export default Portfolio;