// Set the first date we're counting down to
var QM06CDD1 = new Date("May 1, 2022 0:00:00").getTime();

// Update the count down every 1 second
var QM06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var QM06distance1 = QM06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(QM06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((QM06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((QM06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((QM06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("QM06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (QM06distance1 < 0) {
        clearInterval(QM06CDF1);
        if (QM06distance1 < 0 & QM06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("QM06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(QM06CDF1);
            // Set the second date we're counting down to
            var QM06CDD2 = new Date("May 1, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var QM06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var QM06distance2 = QM06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(QM06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((QM06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((QM06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((QM06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById("QM06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (QM06distance2 < 0) {
                    clearInterval(QM06CDF2);
                    if (QM06distance2 < 0 & QM06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("QM06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(QM06CDF2);
                        // Set the Third date we're counting down to
                        var QM06CDD3 = new Date("May 1, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var QM06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var QM06distance3 = QM06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(QM06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((QM06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((QM06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((QM06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="demo"
                            document.getElementById("QM06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (QM06distance3 < 0) {
                                clearInterval(QM06CDF3);
                                if (QM06distance3 < 0 & QM06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("QM06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(QM06CDF3);
                                    // Set the fourth date we're counting down to
                                    var QM06CDD4 = new Date("May 1, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var QM06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var QM06distance4 = QM06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(QM06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((QM06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((QM06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((QM06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="demo"
                                        document.getElementById("QM06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (QM06distance4 < 0) {
                                            clearInterval(QM06CDF4);
                                            if (QM06distance4 < 0 & QM06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("QM06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(QM06CDF4);
                                                // Set the fourth date we're counting down to
                                                var QM06CDD5 = new Date("May 1, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var QM06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var QM06distance5 = QM06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(QM06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((QM06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((QM06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((QM06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="demo"
                                                    document.getElementById("QM06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (QM06distance5 < 0) {
                                                        clearInterval(QM06CDF5);
                                                        document.getElementById("QM06").innerHTML = "Happy Birthday!";
                                                    }
                                                }, 1000);
                                            }
                                        }
                                    }, 1000);
                                }
                            }
                        }, 1000);
                    }
                }
            }, 1000);
        }
    }
}, 1000);
// Set the first date we're counting down to
var SHO07CCD1 = new Date("Mar 1, 2022 00:00:01").getTime();

// Update the count down every 1 second
var SHO07CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var SHO07distance1 = SHO07CCD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(SHO07distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((SHO07distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((SHO07distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((SHO07distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="SHO07"
    document.getElementById("SHO07").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (SHO07distance1 < 0) {
        clearInterval(SHO07CDF1);
        if (SHO07distance1 < 0 & SHO07distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("SHO07").innerHTML = "Happy Birthday!";
        else {
            clearInterval(SHO07CDF1);
            // Set the second date we're counting down to
            var countDownDate2 = new Date("Mar 1, 2023 00:00:01").getTime();

            // Update the count down every 1 second
            var countdownfunction2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var SHO07distance2 = countDownDate2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(SHO07distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((SHO07distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((SHO07distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((SHO07distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="SHO07"
                document.getElementById("SHO07").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (SHO07distance2 < 0) {
                    clearInterval(countdownfunction2);
                    if (SHO07distance2 < 0 & SHO07distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("SHO07").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(countdownfunction2);
                        // Set the Third date we're counting down to
                        var countDownDate3 = new Date("Mar 1, 2024 00:00:01").getTime();

                        // Update the count down every 1 second
                        var countdownfunction3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var SHO07distance3 = countDownDate3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(SHO07distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((SHO07distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((SHO07distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((SHO07distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="SHO07"
                            document.getElementById("SHO07").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (SHO07distance3 < 0) {
                                clearInterval(countdownfunction3);
                                if (SHO07distance3 < 0 & SHO07distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("SHO07").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(countdownfunction3);
                                    // Set the fourth date we're counting down to
                                    var countDownDate4 = new Date("Mar 1, 2025 00:00:01").getTime();

                                    // Update the count down every 1 second
                                    var countdownfunction4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var SHO07distance4 = countDownDate4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(SHO07distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((SHO07distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((SHO07distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((SHO07distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="SHO07"
                                        document.getElementById("SHO07").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (SHO07distance4 < 0) {
                                            clearInterval(countdownfunction4);
                                            if (SHO07distance4 < 0 & SHO07distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("SHO07").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(countdownfunction4);
                                                // Set the fourth date we're counting down to
                                                var countDownDate5 = new Date("Mar 1, 2026 00:00:01").getTime();

                                                // Update the count down every 1 second
                                                var countdownfunction5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var SHO07distance5 = countDownDate5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(SHO07distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((SHO07distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((SHO07distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((SHO07distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="SHO07"
                                                    document.getElementById("SHO07").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (SHO07distance5 < 0) {
                                                        clearInterval(countdownfunction5);
                                                        document.getElementById("SHO07").innerHTML = "Happy Birthday!";
                                                    }
                                                }, 1000);
                                            }
                                        }
                                    }, 1000);
                                }
                            }
                        }, 1000);
                    }
                }
            }, 1000);
        }
    }
}, 1000);
// Set the first date we're counting down to
var AD06CDD1 = new Date("Dec 2, 2022 0:00:01").getTime();

// Update the count down every 1 second
var AD06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var AD06distance1 = AD06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(AD06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((AD06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((AD06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((AD06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="AD06"
    document.getElementById("AD06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (AD06distance1 < 0) {
        clearInterval(AD06CDF1);
        if (AD06distance1 < 0 & AD06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("AD06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(AD06CDF1);
            // Set the second date we're counting down to
            var AD06CDD2 = new Date("Dec 2, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var AD06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var AD06distance2 = AD06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(AD06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((AD06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((AD06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((AD06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="AD06"
                document.getElementById("AD06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (AD06distance2 < 0) {
                    clearInterval(AD06CDF2);
                    if (AD06distance2 < 0 & AD06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("AD06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(AD06CDF2);
                        // Set the Third date we're counting down to
                        var AD06CDD3 = new Date("Dec 2, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var AD06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var AD06distance3 = AD06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(AD06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((AD06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((AD06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((AD06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="AD06"
                            document.getElementById("AD06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (AD06distance3 < 0) {
                                clearInterval(AD06CDF3);
                                if (AD06distance3 < 0 & AD06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("AD06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(AD06CDF3);
                                    // Set the fourth date we're counting down to
                                    var AD06CDD4 = new Date("Dec 2, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var AD06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var AD06distance4 = AD06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(AD06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((AD06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((AD06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((AD06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="AD06"
                                        document.getElementById("AD06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (AD06distance4 < 0) {
                                            clearInterval(AD06CDF4);
                                            if (AD06distance4 < 0 & AD06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("AD06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(AD06CDF4);
                                                // Set the fourth date we're counting down to
                                                var AD06CDD5 = new Date("Dec 2, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var AD06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var AD06distance5 = AD06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(AD06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((AD06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((AD06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((AD06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="AD06"
                                                    document.getElementById("AD06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (AD06distance5 < 0) {
                                                        clearInterval(AD06CDF5);
                                                        document.getElementById("AD06").innerHTML = "Happy Birthday!";
                                                    }
                                                }, 1000);
                                            }
                                        }
                                    }, 1000);
                                }
                            }
                        }, 1000);
                    }
                }
            }, 1000);
        }
    }
}, 1000);
// Set the first date we're counting down to
var BG06CDD1 = new Date("Dec 3, 2022 0:00:01").getTime();

// Update the count down every 1 second
var BG06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var BG06distance1 = BG06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(BG06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((BG06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((BG06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((BG06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="BG06"
    document.getElementById("BG06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (BG06distance1 < 0) {
        clearInterval(BG06CDF1);
        if (BG06distance1 < 0 & BG06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("BG06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(BG06CDF1);
            // Set the second date we're counting down to
            var BG06CDD2 = new Date("Dec 3, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var BG06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var BG06distance2 = BG06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(BG06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((BG06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((BG06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((BG06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="BG06"
                document.getElementById("BG06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (BG06distance2 < 0) {
                    clearInterval(BG06CDF2);
                    if (BG06distance2 < 0 & BG06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("BG06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(BG06CDF2);
                        // Set the Third date we're counting down to
                        var BG06CDD3 = new Date("Dec 3, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var BG06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var BG06distance3 = BG06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(BG06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((BG06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((BG06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((BG06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="BG06"
                            document.getElementById("BG06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (BG06distance3 < 0) {
                                clearInterval(BG06CDF3);
                                if (BG06distance3 < 0 & BG06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("BG06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(BG06CDF3);
                                    // Set the fourth date we're counting down to
                                    var BG06CDD4 = new Date("Dec 3, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var BG06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var BG06distance4 = BG06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(BG06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((BG06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((BG06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((BG06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="BG06"
                                        document.getElementById("BG06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (BG06distance4 < 0) {
                                            clearInterval(BG06CDF4);
                                            if (BG06distance4 < 0 & BG06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("BG06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(BG06CDF4);
                                                // Set the fourth date we're counting down to
                                                var BG06CDD5 = new Date("Dec 3, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var BG06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var BG06distance5 = BG06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(BG06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((BG06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((BG06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((BG06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="BG06"
                                                    document.getElementById("BG06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (BG06distance5 < 0) {
                                                        clearInterval(BG06CDF5);
                                                        document.getElementById("BG06").innerHTML = "Happy Birthday!";
                                                    }
                                                }, 1000);
                                            }
                                        }
                                    }, 1000);
                                }
                            }
                        }, 1000);
                    }
                }
            }, 1000);
        }
    }
}, 1000);
// Set the first date we're counting down to
var MR06CDD1 = new Date("Aug 10, 2022 0:00:01").getTime();

// Update the count down every 1 second
var MR06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var MR06distance1 = MR06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(MR06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((MR06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((MR06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((MR06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="MR06"
    document.getElementById("MR06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (MR06distance1 < 0) {
        clearInterval(MR06CDF1);
        if (MR06distance1 < 0 & MR06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("MR06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(MR06CDF1);
            // Set the second date we're counting down to
            var MR06CDD2 = new Date("Aug 10, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var MR06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var MR06distance2 = MR06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(MR06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((MR06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((MR06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((MR06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="MR06"
                document.getElementById("MR06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (MR06distance2 < 0) {
                    clearInterval(MR06CDF2);
                    if (MR06distance2 < 0 & MR06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("MR06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(MR06CDF2);
                        // Set the Third date we're counting down to
                        var MR06CDD3 = new Date("Aug 10, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var MR06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var MR06distance3 = MR06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(MR06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((MR06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((MR06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((MR06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="MR06"
                            document.getElementById("MR06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (MR06distance3 < 0) {
                                clearInterval(MR06CDF3);
                                if (MR06distance3 < 0 & MR06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("MR06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(MR06CDF3);
                                    // Set the fourth date we're counting down to
                                    var MR06CDD4 = new Date("Aug 10, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var MR06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var MR06distance4 = MR06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(MR06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((MR06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((MR06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((MR06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="MR06"
                                        document.getElementById("MR06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (MR06distance4 < 0) {
                                            clearInterval(MR06CDF4);
                                            if (MR06distance4 < 0 & MR06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("MR06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(MR06CDF4);
                                                // Set the fourth date we're counting down to
                                                var MR06CDD5 = new Date("Aug 10, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var MR06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var MR06distance5 = MR06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(MR06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((MR06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((MR06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((MR06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="MR06"
                                                    document.getElementById("MR06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (MR06distance5 < 0) {
                                                        clearInterval(MR06CDF5);
                                                        document.getElementById("MR06").innerHTML = "Happy Birthday!";
                                                    }
                                                }, 1000);
                                            }
                                        }
                                    }, 1000);
                                }
                            }
                        }, 1000);
                    }
                }
            }, 1000);
        }
    }
}, 1000);
// Set the first date we're counting down to
var NS07CDD1 = new Date("Feb 14, 2023 0:00:01").getTime();

// Update the count down every 1 second
var NS07CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var NS07distance1 = NS07CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(NS07distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((NS07distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((NS07distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((NS07distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="NS07"
    document.getElementById("NS07").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (NS07distance1 < 0) {
        clearInterval(NS07CDF1);
        if (NS07distance1 < 0 & NS07distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("NS07").innerHTML = "Happy Birthday!";
        else {
            clearInterval(NS07CDF1);
            // Set the second date we're counting down to
            var NS07CDD2 = new Date("Feb 14, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var NS07CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var NS07distance2 = NS07CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(NS07distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((NS07distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((NS07distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((NS07distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="NS07"
                document.getElementById("NS07").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (NS07distance2 < 0) {
                    clearInterval(NS07CDF2);
                    if (NS07distance2 < 0 & NS07distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("NS07").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(NS07CDF2);
                        // Set the Third date we're counting down to
                        var NS07CDD3 = new Date("Feb 14, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var NS07CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var NS07distance3 = NS07CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(NS07distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((NS07distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((NS07distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((NS07distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="NS07"
                            document.getElementById("NS07").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (NS07distance3 < 0) {
                                clearInterval(NS07CDF3);
                                if (NS07distance3 < 0 & NS07distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("NS07").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(NS07CDF3);
                                    // Set the fourth date we're counting down to
                                    var NS07CDD4 = new Date("Feb 14, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var NS07CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var NS07distance4 = NS07CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(NS07distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((NS07distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((NS07distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((NS07distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="NS07"
                                        document.getElementById("NS07").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (NS07distance4 < 0) {
                                            clearInterval(NS07CDF4);
                                            if (NS07distance4 < 0 & NS07distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("NS07").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(NS07CDF4);
                                                // Set the fourth date we're counting down to
                                                var NS07CDD5 = new Date("Feb 14, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var NS07CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var NS07distance5 = NS07CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(NS07distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((NS07distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((NS07distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((NS07distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="NS07"
                                                    document.getElementById("NS07").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (NS07distance5 < 0) {
                                                        clearInterval(NS07CDF5);
                                                        document.getElementById("NS07").innerHTML = "Happy Birthday!";
                                                    }
                                                }, 1000);
                                            }
                                        }
                                    }, 1000);
                                }
                            }
                        }, 1000);
                    }
                }
            }, 1000);
        }
    }
}, 1000);