import React from "react";


function Container3(){
   const list=[
    {
      href:"https://linkedin.com/in/abhijeeth-v-n",
      icon:"fa-brands fa-linkedin",
    },
    {
      href:"https://github.com/ABHIJEETH-V-N",
      icon:"fa-brands fa-github",
    },
    {
      href:"https://www.behance.net/xrp1quext",
      icon:"fa-brands fa-behance",
    },
    {
      href:"https://steamcommunity.com/id/ILOVEVFX/",
      icon:"fa-brands fa-steam",
    },
    {
      href:"https://codepen.io/HYPERVISUALS",
      icon:"fa-brands fa-codepen",
    },
    {
      href:"https://www.instagram.com/hyper__visuals/",
      icon:"fa-brands fa-instagram",
    },
    {
      href:"https://www.youtube.com/@_HYPER_",
      icon:"fa-brands fa-youtube",
    },
    {
      href:"https://x.com/XRP116",
      icon:"fa-brands fa-x-twitter",
    }
   ];

const icons=list.map((abc,index)=>(
  <a  href={abc.href}>
    <i id="aa" className={abc.icon}></i>
  </a>
));
let audio = new Audio("sound/pebble.mp3")
const start = () => {
  audio.play()
}
   return(
    <div id="container3">
    <div className="ico" onMouseOver={start}>
      {icons}
    </div>
    </div>
   );
  }

export default Container3;