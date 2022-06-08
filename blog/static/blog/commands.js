let commands = {
    "clear": clear,
    "motd": MOTD,
    "help": help,
    "social": social,
    "projects": projects
}

function projects() {
    let msg = `
    <div class="white">
            <p><span class="lightblue">Social Central -</span> Social Central is a social media site created by me, Quintin Dunn. On social central you can link all of your social media, keeping it all in one spot to share with others! <a href="https://sociableconnect.com" class="lightblue">Social Central</a></p>
    </div>`;

    append_stdout(msg);
}

function clear() {
    let stdout = document.getElementById('stdout');
    stdout.innerHTML = "";
}

function help() {
    let msg = `
    <div class="white">
        <p><span class="lightblue">clear</span> - Clears the terminal.</p>
        <p><span class="lightblue">motd</span> - Shows the message of the day.</p>
        <p><span class="lightblue">help</span> - Shows a list of commands.</p>
        <p><span class="lightblue">social</span> - Link my social media.</p>
        <p><span class="lightblue">projects</span> - List of my top projects.</p>
    </div>
    `
    append_stdout(msg);
}

function social() {
    let msg = `<div class="white">
            <p>Github: <a href="https://github.com/quintindunn" class="lightblue">quintindunn</a></p>
            <p>Discord: <a href="#" class="lightblue">T1ps#4933</a></p>
        </div>`;
    append_stdout(msg);
}