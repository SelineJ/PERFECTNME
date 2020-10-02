//model

//view
showMain();
function showMain(){
document.getElementById('app').innerHTML = 
`
<div class="fleks">

<div class="header">
<img src="images/header.jpg" alt="PERFECT NME">
</div>
    <div class="meny">
        
                    <div onclick="showMain()">HOME</div>
                    <div onclick="showMain()">BAND</div>
                    <div onclick="showMain()">RELEASES</div>
                    <div onclick="showMain()">CONTACT</div>
        
             
</div>

<main class="main">
<article>

<h1>Overscrift</h1>
<img class="logo" src="images/logo.jpg" alt="PERFECT NME">
<p>hejehskhejkshekj hjeskhe sjkh sjhekhs kjheskj hejksan fkjd hfsejk</p>
</article>

</main>

<div class="footer">HOME BAND RELEASES CONTACT</div>
<div class="sidebar">sidebar</div>
</div>

`
;
}
//controller