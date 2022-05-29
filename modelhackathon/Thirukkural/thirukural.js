let tamil = document.createElement("section");
tamil.setAttribute("class","container");
tamil.innerHTML= 
`
<label class="lab1" for="inp1">Enter the versus (1-1330):</label>
<input id="inp1" type="number" placeholder="Enter the Number">
<button onclick="kural()" id="Search">Search</button>
<div class="result">
    <label for="id1">English Chapter:</label>
    <p id="id1" class="res1">Chapter in Eng</p>
    <label for="id2">Versus:</label>
    <p id="id2" class="res1">versus</p>
    <label for="id3">English Explanation</label>
    <p id="id3" class="res1">Eng Explanation</p>
    <label for="id4">Chapter in Tamil</label>
    <p id="id4" class="res1">Chapter in Tamil</p>
    <label for="id5">Versus:</label>
    <p id="id5" class="res1">versus1</p>
    <p id="id6" class="res1">versus2</p>
    <label for="id6">Tamil Explanation</label>
    <p id="id7" class="res1">Tamil Explanation</p>
</div>`

document.body.append(tamil);

async function kural(){
    let input = document.querySelector("#inp1").value;
    console.log(input);
    let out1 = await fetch(`https://api-thirukkural.vercel.app/api?num=${input}`)
    let res = await out1.json();
    console.log(res);
    
    document.querySelector("#id1").innerText= res.chap_eng;
    document.querySelector("#id2").innerText= res.eng;
    document.querySelector("#id3").innerText= res.eng_exp;
    document.querySelector("#id4").innerText= res.chap_tam;
    document.querySelector("#id5").innerText= res.line1;
    document.querySelector("#id6").innerText= res.line2;
    document.querySelector("#id7").innerText= res.tam_exp;
}
kural();