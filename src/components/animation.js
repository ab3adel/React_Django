
import {Link} from 'react-router-dom'
import * as d3 from 'd3'
import {ReactComponent as Dalool} from '../daool.svg'
import {ReactComponent as Shadow} from '../shadow.svg'
import {ReactComponent as Destruc} from '../destruc2.svg'
import {useEffect, useState} from 'react'
import {  easeCircleInOut, easeCubicIn, image, schemeDark2, window } from 'd3'
import {ReactComponent as Mr} from '../mr2.svg'
import {ReactComponent as Gift} from '../gift.svg'
import {ReactComponent as Sold} from '../sold.svg'
import {ReactComponent as Aim} from '../aim.svg'
import {ReactComponent as Sam} from '../sam.svg'
import {ReactComponent as Mfk} from '../maintain.svg'
import {ReactComponent as Stair} from '../stairs.svg'
import {ReactComponent as Mrshadow} from '../mrshadow.svg'
export const Main = (props) => {
      const { state}=props
       let defaultHeight;
       let defaultwidth;
       let documentHeight
      if (typeof(document.defaultView) !=='undefined'){
         defaultwidth=document.defaultView.innerWidth
        defaultHeight = document.defaultView.innerHeight
       
      }
      const [dimension,setDimension]=useState({
        windowWidth:defaultwidth,
        windowHeight:defaultHeight,
       
      })
      useEffect ( ()=>{ 
 
        var shadow=d3.select('#shadow') 
        var dalool=d3.select('#dalool')
        var name=d3.select('.titleName')
        let mfk=d3.select('#mfk')
        let sam =d3.select('#sam')
        let interfaces=d3.selectAll('.curtail')
        var explorebtn=d3.select('.exploreButton')
        var headBar =d3.select('.headerBar')
        var destruc= d3.select ('#destruc')
       explorebtn.transition().style('display','none')
       var rect1 =d3.select('.show1').selectChildren('div')
       var rect2 =d3.select('.show2').selectChildren('div')
       const mr=d3.select('#mr')
       const flag=d3.select('.flag')
       const flagChild=flag.selectChild()
       const downables=d3.select('.downable').selectChildren('div')
       const mainBackgroun=document.querySelector('.mainBackgroun')
       const sociealImages= d3.selectAll('.socialImage')
       const sociealData= d3.selectAll('.socialData')
       const conclusion=d3.select('.conclusion')
       let mrshadow3 =d3.select('#mrshadow').selectChild('ellipse').attr('rx','130').attr('ry','15')
       let mrshadow=d3.select('#mrshadow')                                                                                        
       d3.select('.facebook').style('max-width',`${dimension.windowWidth}px`)
       d3.select('.whatsapp').style('max-width',`${dimension.windowWidth}px`)
       d3.select('.telegram').style('max-width',`${dimension.windowWidth}px`)
       sociealImages._groups[0].forEach(element => {
         let width= parseInt(dimension.windowWidth)/4
         d3.select(element).style('max-width',`${width}px`)
       })
       const handleSvg=(e)=>{
       if (e.target.id==='sold'){
         d3.select('#rect').transition().style('transform','rotateY(180deg)').ease(d3.easeLinear).duration(1000)
         d3.select('#rect').transition().style('transform','rotateY(0deg)').ease(d3.easeLinear).duration(1000).delay(1000)
       
       }
       if (e.target.id==='aim'){
         d3.select('#arrow').transition().style('transform','translateZ(10px)').ease(d3.easeLinear).duration(1000)
         d3.select('#arrow').transition().style('transform','translateZ(-10px)').ease(d3.easeLinear).duration(1000).delay(1000)
       }
       if (e.target.id==='gift'){
         d3.select('#gift').transition().style('transform','rotateZ(20deg)').ease(d3.easeCircleInOut).duration(1000)
         d3.select('#gift').transition().style('transform','rotateZ(-20deg)').ease(d3.easeCircleInOut).duration(1000).delay(1000)
       }
       }
       d3.select('#sold').on('mouseover',(e)=>handleSvg(e))
       d3.select('#gift').on('mouseover',(e)=>handleSvg(e))
       d3.select('#aim').on('mouseover',(e)=>handleSvg(e))
       
       const handler=()=> {
         setDimension({
           windowHeight:document.defaultView.innerHeight,
           windowWidth:document.defaultView.innerWidth
         })
        
       }
       const socialHandler=()=>{
  
          document.getElementsByClassName('section3')[0].removeEventListener('mouseover',socialHandler)
          mr.transition().style('animation-name','mrMove').duration(1500)
          mrshadow.transition().style('animation-name','mrshadowMove').duration(1500)
          mrshadow3.transition().attr('rx','90').attr('ry','15').delay(600).duration(500)
                   .transition().attr('rx','230').attr('ry','15')
       
          sociealImages._groups[0].forEach(element => {
            let width=parseInt(dimension.windowWidth)/2-(parseInt(dimension.windowWidth)/10)
            console.log(width)
            d3.select(element).transition().style('animation-name','socialImageMove')
                              .transition().style('left',`-${width}px`).ease(d3.easeLinear).duration(1000)
                              .transition().style('left','0px')
                                           .ease(d3.easeLinear).duration(1000)
                              .transition().style('animation-name','nothing').delay(2700)
          });
          sociealData._groups[0].forEach(element=>{
            d3.select(element).transition()
                              .style('visibility','visible').style('opacity','0.2').delay(3500)
                              .transition().style('opacity','0.6').ease(d3.easeElasticInOut).duration(500).delay(500)
                              .transition().style('opacity','1').ease(d3.easeElasticInOut).duration(500).delay(500)
          })
       }
       document.getElementsByClassName('section3')[0].addEventListener('mouseover',socialHandler)
       if (state){

        props.func(false)
        name.style('display','none')
       
       rect1._groups[0].map(element => {
         var ele= d3.select(element)
        ele.transition().style('visibility','hidden').style('opacity',0.1).duration(4000)
       });
       rect2._groups[0].forEach(element => {
        var ele= d3.select(element)
  
        ele.transition().style('visibility','hidden').style('opacity',0.1).duration(4000)
       });
       interfaces._groups[0].forEach(element=>{
         d3.select(element).transition().style('height','270px').ease(d3.easeBounceInOut).duration(4000).delay(4000)
         
       })
      sam.transition().style('height','270px').ease(d3.easeBounceInOut).duration(4000).delay(4000)
         .transition().style('animation-name','mfkMove').delay(3100)
      mfk.transition().style('height','270px').ease(d3.easeBounceInOut).duration(4000).delay(4000)
         .transition().style('animation-name','mfkMove').delay(3100)
         shadow.transition().style('animation-name','shadowing').style('visibility','hidden')
                     .transition().delay(2000).style('visibility','visible')
        
        dalool.transition().delay(1000)
                        .style('animation-name','falling')
                        .style('animation-play-state','running')
                        .style('visibility','visible')
         headBar.transition().duration(3000)
                           .style('display','none').transition() 
                           .style('display','flex')           
        destruc.transition().style('display','none')
                          .transition().style('display','block').delay(3800).ease(easeCircleInOut)
                          .transition().style('opacity','0.5').ease(easeCubicIn).delay(500)
                          .transition().style('opacity','0.2').ease(easeCubicIn).delay(500)   
                          .transition().style('display','none').ease(easeCubicIn).delay(500) 
        var t=1000                  
            
                d3.select('#root').transition().style('animation-name','shock').delay(3800)
         
               
            setTimeout( ()=> {
             rect1._groups[0].forEach(element => {
               t=t+200
              var ele= d3.select(element)
              ele.transition().style('visibility','visible').style('opacity',0.2)
              .transition().style('opacity',0.5).style('transform','translateX(20px)').ease(d3.easeBounceOut).duration(t)
              .transition().style('opacity',1).style('transform','translateX(20px)').ease(d3.easeBounceOut).duration(t)
              .transition().style('transform','translateX(10px)').ease(d3.easeBounceOut).duration(400)
                
              });
              rect2._groups[0].forEach(element => {
                t=t+200
                var ele= d3.select(element)
                ele.transition().style('visibility','visible').style('opacity',0.2)
                .transition().style('opacity',0.5).style('transform','translateX(20px)').ease(d3.easeBounceOut).duration(t)
                .transition().style('opacity',1).style('transform','translateX(20px)').ease(d3.easeBounceOut).duration(t)
                .transition().style('transform','translateX(10px)').ease(d3.easeBounceOut).duration(400)
                  
                });
            
                
              },5100)
           
              setTimeout( ()=> {
               explorebtn.transition().style('display','inline-flex').style('animation-name','explorebtn').delay(4000)
               explorebtn.transition().style('animation-name','explorebtnMove')
               .style('animation-duration','4s')
               .style('animtion-timing-function','ease-in-out')
               .style('animation-direction','alternate-reverse')
               .style('animation-iteration-count','infinite').delay(7100)
              },5000)
           const animateMr = ()=> {
             document.removeEventListener('scroll',animateMr)
         
             const mrMove=dimension.windowWidth
   
         
             flag.transition().style('width',`${mrMove}px`).ease(d3.easePolyIn).duration(2800)
                  .transition().style('background','linear-gradient(to right , black,rgb(155, 136, 54))')
                  .ease(d3.easeLinear).duration(1000)
             flagChild.transition().style('display','block').ease(d3.easeSin).delay(2800)
                                  .style('opacity','0.3').ease(d3.easeSin).delay(2800)
                                  .transition().style('opacity','0.5').ease(d3.easeSin).duration(500).delay(500)
                                  .transition().style('opacity','0.7').ease(d3.easeSin).duration(500).delay(500)
                                  .transition().style('opacity','1').ease(d3.easeSin).duration(500).delay(500)
                      .ease(d3.easeExpIn)
                      let timer=1000
             downables._groups[0].forEach(ele=> {
               timer=timer+1000
              let downable=  d3.select(ele)
             downable.transition().style('height','90%')
              .ease(d3.easeCircle).duration(3000).delay(timer)
              .transition().style('background','linear-gradient(to right , black,rgb(155, 136, 54))').delay(100)
              timer=timer+2000
             downable.selectChild().transition()
                                         .style('display','flex').delay(timer)
                                         .transition().style('opacity','0.1').ease(d3.easeQuadInOut).duration(300)
                                         .transition().style('opacity','0.5').ease(d3.easeQuadInOut).duration(300)
                                         .transition().style('opacity','0.7').ease(d3.easeQuadInOut).duration(300)
                                         .transition().style('opacity','0.5').ease(d3.easeQuadInOut).duration(300)
                                         .transition().style('opacity','0.7').ease(d3.easeQuadInOut).duration(300)
                                         .transition().style('opacity','1').ease(d3.easeQuadInOut).duration(300)
                                       

             })         
               
           }  
    
           
         
           setTimeout(()=>{
            document.defaultView.addEventListener('resize',handler)
            document.addEventListener('scroll',animateMr)

            
          
           },800)
        
            }
       
          if (!state) {
            interfaces._groups[0].forEach(element=>{
              d3.select(element).transition().style('height','270px')
              
            })

            sam.transition().style('height','270px')
            mfk.transition().style('height','270px')
            name.style('display','flex')
           
            destruc.transition().style('display','none')

            shadow.transition().style('display','none')
             dalool.style('display','none')
             headBar.style('display','flex')
            rect1._groups[0].forEach(element => {
             var ele= d3.select(element)
             ele.transition().style('visibility','visible')  

          }  )
            rect2._groups[0].forEach(element => {
          
           var ele= d3.select(element)
           ele.transition().style('visibility','visible')
        })
        
      }           
    },[])
    
                       
           return (
          
                   <div className="mainBackgroun" >
                    <div className="section1">
                         <div className="advertise" >
                          <div className="none">
                             <div className="curtail">
                               <Mfk/>
                             </div>
                          </div>
                          <div className="none1">
                             <div className="curtail">
                              <Sam/>
                             </div>
                          </div>
                                <Dalool/>
                                 <Shadow/>
                                 <Destruc/>
                                 <div className="titleName">
                                     <p>
                                   B3d CENTER
                                     </p>
                                  </div>
                         </div>
                       <div className="show1">
                           <div className="show1rect">
                               <ul className="serviceList">
                                 <legend className="serviceLegend">صيانة</legend>
                                 <li>موبايلك عنا بيتصلح أكيد</li>
                               </ul>
                           </div>
                           <div className="show1rect1">
                               <ul className="serviceList">
                               <legend className="serviceLegend"> مستلزمات موبايل</legend>
                               <li> أسعار منافسة وعروض دورية</li>

                               </ul>
                            </div>
                       </div>
                       <div className="show2">
                        <div className="show2rect">
                           <ul className="serviceList">
                            <legend className="serviceLegend"> <Link to="/mobiles/"> شراء وبيع موبايلات </Link></legend>
                            <li>  جهازك من عنا!  </li>
                            <li>   اشتري واتهنى</li>

                            </ul>
                        </div>
                        <div className="show2rect1">
                           <ul className="serviceList">
                           <legend className="serviceLegend">والمزيد</legend>
                           <li>ابقى معنا لتعرف كل جديد</li>
                           </ul>
                        </div>
                       </div>
                    </div>    
                    <div className="section2">
                    
                       <div className="advert2">
                        
                         <div className="flag">
                         <legend className="serviceLegend"> WELCOME OUR CENTER </legend>
                         </div>
                    
                       </div>
                       <div className="downable">
                               <div className="downable1">
                                      
                                     <div className="downableContent">
                            
                                        <ul className="noList">
                                        <li><Sold/></li>
                                        <li> here you </li>
                                        <li>   will find </li>
                                        <li>  all the sold</li> 
                                        </ul>  
                                     </div>
                               </div>
                               <div className="downable2">
                         
                                   <div className="downableContent">
                                       
                                       <ul className="noList">
                                       <li><Gift/></li>
                                       <li>  here you</li>
                                       <li>   will find </li>
                                       <li>  all new</li> 
                                       </ul>
                                    </div>
                               </div>
                               <div className="downable3">
                       
                                   <div className="downableContent">
                                       
                                     <ul className="noList">
                                     <li><Aim/></li>
                                      <li>   we organise </li>
                                      <li>   periodic gifts </li> 
                                      <li> show from here</li>
                                      </ul>
                                    </div>
                               </div>
                       </div>
                   
                    </div>   
                    <div className="section3">
                      <div className="conclusion" >
                    
                      <div className="mrShadow">
                      <Mrshadow/>
                       <Mr/>
                 
                       </div>
                       <Stair/>
                      </div>
                       <div className="social">
                        <div className="facebook">
                         <img className="socialImage" src="facebook.png"></img>
                         <p className="socialData">https://www.facebook.com/mohammad.ismael.75</p>
                         </div>
                         <div className="whatsapp">
                          <img className="socialImage" src="whatsapp.png"></img>
                          <p className="socialData">963988043107</p>
                         </div>
                         <div className="telegram">
                          <img className="socialImage" src="telegram.png"></img>
                          <p className="socialData">963988043107</p>
                         </div>
                       </div>
                     </div>
                  
                   </div>
              
           )
}