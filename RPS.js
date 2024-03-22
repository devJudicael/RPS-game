    /* ****************** 
    
            Contact

        #linkedin : https://www.linkedin.com/in/judicael-cakpo-6907b32a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

         #github : https://github.com/devJudicael

        #email : judicaelcakpo35@gmail.com





       ***************** */
    
    
    









let i;
var ia  = Math.floor((Math.random() * 3 ) )+1;

var p = document.querySelector(".p")
var play1 = document.querySelector(".play1"); 
let play2 = document.querySelector(".play2");

       
           
               
           
 

// selectionner toutes les images du player avec all
var all=document.querySelectorAll(".imag"); // renvoie un tableau

    // forEach permet de parcourir tous les elements d'un tableau

all.forEach(image => {

    image.addEventListener('click',()=>{

         

        select(image) // englobe les 2 fonctions

        
       

    })

   


})


    function select(image) {
        noselected()
        selected(image)
    }
 
 // fonction qui parcourt le tableau d'image et ajoute la bordure à l'élément cliqué et reactive aussi le bouton

 function selected(image) {
    image.classList.add ("selected")
    
    document.querySelector(".play1").classList.remove("active")
    document.querySelector(".play1").removeAttribute("disabled")
 }

 //noselected est une fonction qui parcourt le tableau d'image et enlève la bordure
 function noselected() {
    all.forEach( image => {
        image.classList.remove ("selected")
    })
}

            // verifie si la classe imag contient la class selected et recuperer sa position

           var position;


           function refresh() {
            let toge = document.querySelectorAll(".imag")
            
            for ( i = 0; i < toge.length; i++) {
                if (toge[i].classList.contains("selected")) {
                     position = i+1;
                    break
                    
                }
                
            }
           }
     
           all.forEach(image => {

            image.addEventListener('click',()=>{
                refresh()

            } ) } ) ;
           

            
    

  
   function starting() {
            
        
   
    var src = `images/card${ia}.png`

        document.querySelector(".ia").style.backgroundImage = "url("+src+")";
        document.querySelector(".ia").classList.remove ("iu");


        };
   
            // au click de play , empêcher de changer de choix
   play1.addEventListener('click', ()=> {

    let toge = document.querySelectorAll(".imag")
        starting()


        for ( i = 0; i < toge.length; i++) {
            toge[i].classList.add("noselec");
                
               
                
            };

            

                
                play2.style.zIndex="3";
                play2.style.visibility="visible";

                // si player met pierre et ia ciseaux
                if (position==1 && ia ==3) {
                  
                   p.innerHTML =  `<span style="color: rgb(218, 218, 26);">YOU</span> Win`
                   p.classList.add ("greenborder")
                }

                // si player met papier et ia pierre
                else if (position==2 && ia ==1) {
                    p.innerHTML =  `<span style="color: rgb(218, 218, 26);">YOU</span> Win`
                    p.classList.add ("greenborder")
                }


                // si player ciseaux et ia papier
                else if (position==3 && ia ==2) {
                    p.innerHTML =  `<span style="color: rgb(218, 218, 26);">YOU</span> Win`
                    p.classList.add ("greenborder")
                }





                // si ia met pierre et player ciseaux
                else if (position==3 && ia ==1) {
                    p.innerHTML =  `<span style="color: rgb(218, 218, 26);">IA </span> Win`
                    p.classList.add ("redborder")
                }

                 // si ia met papier et player pierre
                else if (position==1 && ia ==2) {
                    p.innerHTML = `<span style="color: rgb(218, 218, 26);">IA </span> Win`
                    p.classList.add ("redborder")
                }

                 // si ia met ciseaux et player papier
                 else if (position==2 && ia ==3) {
                    p.innerHTML = `<span style="color: rgb(218, 218, 26);">IA </span> Win`
                    p.classList.add ("redborder")
                }


                // cas d'égalité
                else if(position==ia){
                    p.innerHTML=`Equality`
                    p.classList.add ("grayborder")
                    p.style.animation = "none"
                }






            
        }
 //1 : pierre
   //2: papier
   //3: ciseaux




   )


   document.querySelector(".link").addEventListener("click" , ()=>{

       location.reload()

   })

   
   
   
   

  
   