
let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto===1000)
            {
                clearInterval(counts);
            }
        }

        let aman=setInterval(updates);
        let up=0;
        function updates()
        {
            var c=document.getElementById("counterr");
            c.innerHTML=++up;
            if(up==400)
            {
                clearInterval(aman);
            }
        }
        let rounk=setInterval(updt);
        let upd=0;
        function updt()
        {
            var cl=document.getElementById("counterrr");
            cl.innerHTML=++upd;
            if(upd==500)
            {
                clearInterval(rounk);
            }
        }

        let anshul=setInterval(uptdd);
        let uptoo=0;
        function uptdd()
        {
            var clo=document.getElementById("counterrrr");
            clo.innerHTML=++uptoo;
            if(uptoo==150)
            {
                clearInterval(anshul);
            }
        }
        