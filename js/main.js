function profilePage() {
    var profileName = document.getElementById("profileName");
    var bio = document.getElementById("bio");
    var html = document.getElementById("html");
    var js1 = document.getElementById("js1");
    var js2 = document.getElementById("js2");
    var css = document.getElementById("css");
    var htmlDetails = document.getElementById("htmlDetails");
    var js1Details = document.getElementById("js1Details");
    var js2Details = document.getElementById("js2Details");
    var cssDetails = document.getElementById("cssDetails");
    
    return (profileName, bio, html, js1, js2, css, htmlDetails, js1Details, js2Details, cssDetails);
}

var getJSON = function (url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
};
$.getJSON('data/data.json').then(function (data) {
    profilePage();
    profileName.innerHTML = `${data.name}<span class="username" id="username">(Your username: ${data.username})</span>`;
    bio.innerHTML = `${data.bio}`;
    var dataArray = [];
    dataArray.push(data.courses.length);
    for (var i = 0; i < dataArray; i++) {
        var courseStatusIcon;
        switch (data.courses[i].status) {
            case "completed":
                courseStatusIcon = '<i class="fas fa-check-circle course--status__icon"></i>';
                break;
            case "progress":
                courseStatusIcon = '<i class="fas fa-thumbs-up course--status__icon"></i>';
                break;
            default:
                courseStatusIcon = '<i class="fas fa-thumbs-down course--status__icon"></i>';
                break;
        }
        var detailsArray = [];
        detailsArray.push(data.courses[i].details.length);
        if (i == 0) {
            html.innerHTML = `
                <div class="course--header"><img src="svgs/html5.svg" alt="HTML 5 Logo" class="course--logo"></div>
                <div class="course--status">${courseStatusIcon}${data.courses[i].status}</div>
                <div class="course--description">
                    <div class="course--title">${data.courses[i].title}</div>
                    <div class="course--summary">${data.courses[i].description}</div>
                </div>`;
            for (var j = 0; j < detailsArray; j++) {
                htmlDetails.insertAdjacentHTML('beforeend', `<li>${data.courses[i].details[j]}</li>`);
            }
        } else if (i == 1) {
            js1.innerHTML = `
                <div class="course--header"><span class="course--logo"><i class="fab fa-js fa-5x course--logo__js"></i></span></div>
                <div class="course--status">${courseStatusIcon}${data.courses[i].status}</div>
                <div class="course--description">
                    <div class="course--title">${data.courses[i].title}</div>
                    <div class="course--summary">${data.courses[i].description}</div>
                </div>`;
            for (var j = 0; j < detailsArray; j++) {
                js1Details.insertAdjacentHTML('beforeend', `<li>${data.courses[i].details[j]}</li>`);
            }
        } else if (i == 2) {
            js2.innerHTML = `
                <div class="course--header"><span class="course--logo"><i class="fab fa-js fa-5x course--logo__js"></i></span></div>
                <div class="course--status">${courseStatusIcon}${data.courses[i].status}</div>
                <div class="course--description">
                    <div class="course--title">${data.courses[i].title}</div>
                    <div class="course--summary">${data.courses[i].description}</div>
                </div>`;
            for (var j = 0; j < detailsArray; j++) {
                js2Details.insertAdjacentHTML('beforeend', `<li>${data.courses[i].details[j]}</li>`);
            }
        } else {
            css.innerHTML = `
                <div class="course--header"><img src="svgs/css.svg" alt="HTML 5 Logo" class="course--logo"></div>
                <div class="course--status">${courseStatusIcon}${data.courses[i].status}</div>
                <div class="course--description">
                    <div class="course--title">${data.courses[i].title}</div>
                    <div class="course--summary">${data.courses[i].description}</div>
                </div>`;
            for (var j = 0; j < detailsArray; j++) {
                cssDetails.insertAdjacentHTML('beforeend', `<li>${data.courses[i].details[j]}</li>`);
            }
        }
    }
});