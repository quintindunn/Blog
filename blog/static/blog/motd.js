let motd = `
<div>
    <p class="white">Welcome to my site! To get a list of the commands execute the "<span class="green">help</span>" command</p>
</div>
`

function MOTD(){
    append_stdout(motd);
}