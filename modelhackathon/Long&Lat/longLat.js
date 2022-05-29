let queen = document.createElement("section")
queen.setAttribute("class","Container-Box")
queen.innerHTML = 
        `<div class="input">
            <h3 class="head">Dawn & Dusk</h3>
            <label for="lat" class="lab bold">Latitude</label>
            <input id="lat" type="number" placeholder="Enter the Latitude">
            <label for="long" class="lab bold">Longitude</label>
            <input id="long" type="number" placeholder="Enter the Longitude">
            <button onclick = "lucifer()" class="search" >Search</button>
        </div>
        <div class="result">
            <h5 class="head result">Search Result</h5>
            <p class="lat">Latitude</p>
            <p class="long">Longitude</p>
            <p class="dawn">Dawn</p>
            <p class="dusk">dusk</p>
            <p class="leng">length</p>
        </div>`
document.body.append(queen);


async function lucifer (){
    let inp1 = document.querySelector("#lat").value;
    let inp2 = document.querySelector("#long").value;
    let url = await fetch(`https://api.sunrise-sunset.org/json?lat=${inp1}&lng=${inp1}`);
    let res = await url.json();
    console.log(res);
    
    document.querySelector(".lat").innerText=`Latitude is ${inp1}`;
    document.querySelector(".long").innerText=`Longitude is ${inp2}`;
    let dawn = res.results.sunrise;
    console.log(dawn);
    document.querySelector(".dawn").innerText=`Dawn at ${dawn}`;
    let dusk = res.results.sunset;
    console.log(dusk);
    document.querySelector(".dusk").innerText=`Dawn at ${dusk}`;
    let leng = res.results.day_length;
    document.querySelector(".leng").innerText=`Day Length ${leng}`;

}                                                                                                           
lucifer();  