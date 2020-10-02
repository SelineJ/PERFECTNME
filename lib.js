//model

//view
showMain();
function showMain(){
document.getElementById('app').innerHTML = 
`
<h1>PERFECT NME</h1>
<div class="fleks">

<div class="header">
<img class="logo" src="images/logo.jpg" alt="PERFECT NME"> </div>
    <div class="meny">
        <nav>    
                <ul>
                    <button onclick="showMain()">HOME</button>
                    <button onclick="showMain()">BAND</button>
                    <button onclick="showMain()">RELEASES</button>
                    <button onclick="showMain()">CONTACT</button>
                </ul>
        </nav>
</div>

<div class="main">
<aside>
<img class="logo" src="images/side.jpg" alt="PERFECT NME">
</aside>

</div>
<div class="footer">footer</div>
<div class="sidebar">sidebar</div>
</div>

`
;
}
//controller