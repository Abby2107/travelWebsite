function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    // $("#name").text(profile.getName());
    // $("#email").text(profile.getEmail());
    // $("#image").attr('src', profile.getImageUrl());
    $(".data1").css("display", "block");
    $(".g-signin2").css("display", "none");
    document.getElementById("homepage").style.display="none";
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        $(".data1").css("display", "none");
        $(".g-signin2").css("display", "block");
        $(".homepage").css("display","block");
        document.getElementById("homepage").style.display="block";
    });
    alert("You have been signed out successfully");
}

