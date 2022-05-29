let cont = document.createElement("section");
cont.setAttribute("class","bad")
cont.innerHTML=
`<div class="input">
    <label for="inp pad">Enter the character Id (1-57)</label>
    <input id="lat" type="number" placeholder="Enter the Id" max="61">
    <button onclick="jessi()" class="search pad">Search</button>
</div>
<section class="container">
    <div class="image">
        <img class="img" src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" alt="" class="src">
    </div>
    <div class="details">
        <h2 class="nickel">Walter White</h2>
        <p class="occupation">Meth King Pin</p>
        <p class="birth">09-07-1958</p>
        <p class="nick">Heisenberg</p>
        <p class="status">Presumed dead</p>
    </div>
</section>`

document.body.append(cont);

async function jessi() {
    let sky = document.querySelector("#lat").value;
    console.log(sky)
    let inp1 = await fetch(`https://www.breakingbadapi.com/api/characters/${sky}`);
    let res = await inp1.json();
    console.log(res);

    let dust = res[0].name;
    console.log(dust)
    document.querySelector(".nickel").innerText =`${dust}`;
    

    //Occupation
    let array1= res[0].occupation;
    let index1=(array1.length)-1;
    let occup = res[0].occupation[index1];
    console.log(occup);  
    document.querySelector(".occupation").innerText=`Occupation: ${occup}`; 
    
    
    // Date of Birth
    let birthD = res[0].birthday;
    document.querySelector(".birth").innerText=`D.O.B.: ${birthD}`; 
    
    //profile
    let picq = res[0].img;
    console.log(picq);
    let pikachu = document.querySelector(".img");
    pikachu.setAttribute("src",`${picq}`);


    //Nick-Name
    let mia = res[0].nickname;
    document.querySelector(".nick").innerText=`Nick Name: ${mia}`;


    //Status
    let stat = res[0].status;
    console.log(stat);
    document.querySelector(".status").innerText=`Status: ${stat}`;

}

jessi();

