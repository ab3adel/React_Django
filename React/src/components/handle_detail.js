import {useParams} from 'react-router-dom'
import {useEffect,useState,useRef,useCallback} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useCookies} from 'react-cookie'
export const HandleDetail = (props) =>{
  var imgs,lessPrice,morePrice,samePrice;
  var extraImgs =[]
  var lessImage,moreImage,sameImage;
  const [laoded,setLoaded]=useState(null)
  const [islaoded,setisLoaded]=useState(false)
  const[cookies,setCookies,removeCookies]=useCookies(['THEtoken'])
 

  const [...items] =props.items
  let {categoryid,itemid}= useParams()
  
  itemid=parseInt(itemid.substring(1))

  const [item ]= items.filter (ele =>  ele.id===itemid? ele : '')
 
  const Image= item.image.substring(23)
  
  const loader =useCallback (
    ()=> {
      axios.get(`http://localhost:8000/products/${itemid}/detail`)
         .then (res => {
           
          setLoaded(res.data)
          setisLoaded(true)
         })
      
    },[itemid]
  )
  useEffect( ()=>
  {
    loader();
    
  },[loader])
  

  if (islaoded) {
     [imgs,lessPrice,morePrice,samePrice] = laoded

     if (lessPrice && lessPrice.image)
    { lessImage=lessPrice.image.substring(23)}
     if(morePrice && morePrice.image)
    { moreImage= morePrice.image.substring(23)}
     if (samePrice && samePrice.image)
     {sameImage=samePrice.image.substring(23)}
   if (imgs)
   
   {

     for (var i =0 ; i<imgs.length ; i++)
      {
         
        if (imgs[i].images)
        {
         
          extraImgs.push(imgs[i].images.substring(23))
          
        }
      }
   }

  }

const hover =(eve) => {
  
  
  if (eve.target.className==="mainImage")
     {
      
       
         eve.target.className="mainImageHover"
     }
  

}
const endHover =(eve) => {
 
  if (eve.target.className==="mainImageHover")
     {
      
       eve.target.className="mainImage"
     }
   if (eve.target.className==='extraImage') 
   {
    eve.preventDefault()
     var swipo=document.querySelector('.mainImage')
     var swipo2=eve.currentTarget
   
     if (swipo && swipo2){
     var extra=swipo.getAttribute('src')
     var main =swipo2.getAttribute('src')
     swipo.setAttribute('src',main)
     swipo2.setAttribute('src',extra)
    }
    
   
    
    
   }   
    
}


  if (item)
{return ( <div key={item.id} id ="detailContainer"> 
           <div className="mainDetail">
              <div className="imageSection" onTouchStart={(eve)=>hover(eve)} onTouchEnd={(eve)=>endHover(eve)} onMouseDown={(eve)=>hover(eve)} onMouseUp={(eve)=>endHover(eve)}>
                 <img className='mainImage' src={Image} alt ='' />
                 
              </div>    

              <div className='extraImageSection'>
              {extraImgs? extraImgs.map ((ele,index)=>{
                  return <img className="extraImage" key={index} src={ele} alt='' onTouchEnd={(eve)=>endHover(eve)}  onMouseUp={(eve)=>endHover(eve)} />
                 }):''}
              </div>
              
              
           </div>
        {islaoded ? 
                 <div className="suggestDetail">
                 <div className ="table">
                    <table>
                     <thead>
                      <tr><th>name</th><td>{item.title}</td></tr>
                      <tr><th>price</th><td>{item.price}</td></tr>
                      <tr><th>description</th><td>{item.description}</td></tr>
                     </thead>
                    </table>
                 </div>
                  <p className="suggesttitle"> we suggest for you too :</p>
                  <div className="suggestImages">
                  { lessImage? <Link  to = {{pathname:`/${categoryid}/:${lessPrice.id}`}}> 
                    <img className = 'suggestImage'src={`${lessImage}`} alt = {`${lessPrice.title}`}/> 
                  </Link>: ''}
                  {moreImage?  <Link  to = {{pathname:`/${categoryid}/:${morePrice.id}`}}> 
                    <img className = 'suggestImage'src={`${moreImage}`} alt = {`${morePrice.title}`}/> 
                    </Link>:'' }
                   {sameImage ?<Link  to = {{pathname:`/${categoryid}/:${samePrice.id}`}}> 
                    <img className = 'suggestImage'src={`${sameImage}`} alt = {`${samePrice.title}`}/> 
                    </Link> :''}   </div>   
                     </div> : 'there is probleme in Net connection'}
                  </div>)}
return (<div> no details </div>)                  
}