let models=[
    {
        name: "Bmw ",
        image: "img/bmw.jpg",
        link: "http://www.arabalar.com.tr/bmw/2-serisi"
    },
    {
        name: "Opel",
        image: "img/opel.jpg",
        link: "http://www.arabalar.com.tr/opel/corsa"
    },
    {
        name: "Volvo",
        image: "img/volvo.jpg",
        link: "http://www.arabalar.com.tr/volvo/xc60"
    },
    {
        name: "Scoda",
        image: "img/skoda.jpg",
        link: "http://www.arabalar.com.tr/skoda/scala"
    },
    {
        name: "Audi",
        image: "img/audi.jpg",
        link: "http://www.arabalar.com.tr/audi/q2"
    }
]
let index=0;
let slaydCount=models.length;
let interval;
let settings={
 duration : '1000',
 random : true
}
init(settings)

document.querySelector(".fa-circle-left").addEventListener("click",function(){
    index--;
    showSlide(Index)
    
});
document.querySelector(".fa-circle-right").addEventListener("click",function(){
    index++;
    showSlide(index);
    
});
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })

    
});
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
     init(settings)
    })

    
});
function init(settings){
    // random index
    let prev;
   interval=setInterval(function(){
  if(settings.random){
    do{
        index=Math.floor(Math.random()*slaydCount);
    }while(index==prev)
  
  }else{
    //  artan index
    if(slaydCount==index+1){
        index=-1;
    }
    showSlide(index)
    index++
  }

  showSlide(index);

    },settings.duration)
}

function showSlide(i){
    index=i;
    if(i<0){
        index=slaydCount-1
    }
    if(i==slaydCount){
        index=0;
    }
    document.querySelector(".card-title").textContent=models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector(".card-link").setAttribute("href",models[index].link);
}

