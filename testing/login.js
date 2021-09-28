let start = document.getElementById('submit');
let usr = document.getElementById('username');
let paw = document.getElementById('password');
const usrbasicauth = ['s17', 's19',];
const pawbasicauth = [1, 2, 3, 4, 5, 6, 7, 8, 9];

document.createEvent('CLICK').click

start.addeventListener('CLICK', function event() {
    let saveusr = usr.value;
    let savepaw = password.value;
});

if(saveusr.include(usrbasicauth.split)) {
    let callback = document.getElementById('hidden');
    callback.innerHTML = saveusr;
    callback.style.opacity = '0';
    console.log("ik all of aschc usernames im glad your honest");
}else {
    let retard = document.getElementById('errorlog');
    retard.innerHTML = "that login is not in all saints data base";
    retard.style.opacity = '92';
}

if(savepaw.include(pawbasicauth.split)) {
    console.log(true)
    redirect(filepath('.html','index'));
}else {
    console.log(false);
    let retard = document.getElementById('errorlog');
    retard.innerHTML = "that login is not in all saints data base";
    retard.style.opacity = '92';
    console.log(date + "faled login");
}