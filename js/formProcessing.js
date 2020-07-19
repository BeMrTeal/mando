$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var profileForm = $( this ).serializeArray();
    var profileName = profileForm[0].value;
    profileUsername = profileName.toLowerCase().replace(" ", "").split("").reverse().join("");
    var randomNumber = Math.floor(Math.random() * (99999 - 0 + 1)) + 0;
    var profileBio = profileForm[1].value;
    var updateProfileName = document.getElementById("profileName");
    var updateProfileBio = document.getElementById("bio");

    updateProfileName.innerHTML = `${profileName}<span class="username" id="username">(Your username: ${(profileUsername + randomNumber)})</span>`;
    updateProfileBio.innerHTML = profileBio;

    var clearForm = document.getElementById("updateForm");
    clearForm.reset();
});