var current_color = "green";
var user = "Guest";
var path = "~";

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('stdin').addEventListener('blur', e => {
      e.target.focus();
    });
    MOTD();
});

function send(self) {
    if(event.keyCode !== 13) return;
    let value = self.value;
    append_current();
    if (!commands[value]) {
        append_stdout(`
        <div class="white"><p><span class="red">Invalid Command:</span> <span class="green">` + value + `</span> is not a command. To get a list of commands, run the command: <span class="green">help</span></p></div>
        `)
    }
    commands[value]();
}

function append_current(){
    let content = "";
    let stdin = document.getElementById("stdin")
    content += `<div class="` + current_color + `"><p>` + user + `@Quintindev ` + path + ` % <span class="white">` + stdin.value + `</span>`;
    append_stdout(content);
    stdin.value = '';
}

function append_stdout(content) {
    let stdout = document.getElementById("stdout");
    stdout.innerHTML += content;
}