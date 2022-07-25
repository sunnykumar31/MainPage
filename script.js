var next=document.querySelector(".next");
            var prev=document.querySelector(".prev");
            var image=document.querySelector(".carousel-contatiner").children;
    
            totimage=image.length;
    
            var index=0;
    
            next.addEventListener("click",()=>{
                nextImage("next");
            })
    
            prev.addEventListener("click",()=>{
                nextImage("prev");
            })
    
            function nextImage(direction){
                if(direction=="next"){
                    index++;
                    if(index==totimage){
                        index=0;
                    }
                }
                else{
                    if(index==0){
                        index=totimage-1;
                    }
                    else{
                        index--;
                    }
                }
                for(let i=0;i<totimage;i++){
                image[i].classList.remove("main");
                }
                image[index].classList.add("main");
            
            }
    
            function automove(){
                setInterval(()=>{
                    nextImage("next");
                },3000);
            }
    
            window.onload=automove;
