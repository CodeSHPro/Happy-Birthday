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
var MR06CDD1 = new Date("Oct 8, 2022 0:00:01").getTime();

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
            var MR06CDD2 = new Date("Oct 8, 2023 0:00:01").getTime();

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
                        var MR06CDD3 = new Date("Oct 8, 2024 0:00:01").getTime();

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
                                    var MR06CDD4 = new Date("Oct 8, 2025 0:00:01").getTime();

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
                                                var MR06CDD5 = new Date("Oct 8, 2026 0:00:01").getTime();

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
// Set the first date we're counting down to
var RS06CDD1 = new Date("Jun 21, 2022 0:00:01").getTime();

// Update the count down every 1 second
var RS06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var RS06distance1 = RS06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(RS06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((RS06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((RS06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((RS06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="RS06"
    document.getElementById("RS06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (RS06distance1 < 0) {
        clearInterval(RS06CDF1);
        if (RS06distance1 < 0 & RS06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("RS06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(RS06CDF1);
            // Set the second date we're counting down to
            var RS06CDD2 = new Date("Jun 21, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var RS06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var RS06distance2 = RS06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(RS06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((RS06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((RS06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((RS06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="RS06"
                document.getElementById("RS06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (RS06distance2 < 0) {
                    clearInterval(RS06CDF2);
                    if (RS06distance2 < 0 & RS06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("RS06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(RS06CDF2);
                        // Set the Third date we're counting down to
                        var RS06CDD3 = new Date("Jun 21, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var RS06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var RS06distance3 = RS06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(RS06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((RS06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((RS06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((RS06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="RS06"
                            document.getElementById("RS06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (RS06distance3 < 0) {
                                clearInterval(RS06CDF3);
                                if (RS06distance3 < 0 & RS06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("RS06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(RS06CDF3);
                                    // Set the fourth date we're counting down to
                                    var RS06CDD4 = new Date("Jun 21, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var RS06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var RS06distance4 = RS06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(RS06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((RS06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((RS06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((RS06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="RS06"
                                        document.getElementById("RS06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (RS06distance4 < 0) {
                                            clearInterval(RS06CDF4);
                                            if (RS06distance4 < 0 & RS06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("RS06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(RS06CDF4);
                                                // Set the fourth date we're counting down to
                                                var RS06CDD5 = new Date("Jun 21, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var RS06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var RS06distance5 = RS06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(RS06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((RS06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((RS06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((RS06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="RS06"
                                                    document.getElementById("RS06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (RS06distance5 < 0) {
                                                        clearInterval(RS06CDF5);
                                                        document.getElementById("RS06").innerHTML = "Happy Birthday!";
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
var SJ06CDD1 = new Date("Dec 8, 2022 0:00:01").getTime();

// Update the count down every 1 second
var SJ06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var SJ06distance1 = SJ06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(SJ06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((SJ06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((SJ06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((SJ06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="SJ06"
    document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (SJ06distance1 < 0) {
        clearInterval(SJ06CDF1);
        if (SJ06distance1 < 0 & SJ06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("SJ06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(SJ06CDF1);
            // Set the second date we're counting down to
            var SJ06CDD2 = new Date("Dec 8, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var SJ06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var SJ06distance2 = SJ06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(SJ06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((SJ06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((SJ06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((SJ06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="SJ06"
                document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (SJ06distance2 < 0) {
                    clearInterval(SJ06CDF2);
                    if (SJ06distance2 < 0 & SJ06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("SJ06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(SJ06CDF2);
                        // Set the Third date we're counting down to
                        var SJ06CDD3 = new Date("Dec 8, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var SJ06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var SJ06distance3 = SJ06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(SJ06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((SJ06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((SJ06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((SJ06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="SJ06"
                            document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (SJ06distance3 < 0) {
                                clearInterval(SJ06CDF3);
                                if (SJ06distance3 < 0 & SJ06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("SJ06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(SJ06CDF3);
                                    // Set the fourth date we're counting down to
                                    var SJ06CDD4 = new Date("Dec 8, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var SJ06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var SJ06distance4 = SJ06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(SJ06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((SJ06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((SJ06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((SJ06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="SJ06"
                                        document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (SJ06distance4 < 0) {
                                            clearInterval(SJ06CDF4);
                                            if (SJ06distance4 < 0 & SJ06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("SJ06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(SJ06CDF4);
                                                // Set the fourth date we're counting down to
                                                var SJ06CDD5 = new Date("Dec 8, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var SJ06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var SJ06distance5 = SJ06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(SJ06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((SJ06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((SJ06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((SJ06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="SJ06"
                                                    document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (SJ06distance5 < 0) {
                                                        clearInterval(SJ06CDF5);
                                                        document.getElementById("SJ06").innerHTML = "Happy Birthday!";
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
var SJ06CDD1 = new Date("Dec 8, 2022 0:00:01").getTime();

// Update the count down every 1 second
var SJ06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var SJ06distance1 = SJ06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(SJ06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((SJ06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((SJ06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((SJ06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="SJ06"
    document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (SJ06distance1 < 0) {
        clearInterval(SJ06CDF1);
        if (SJ06distance1 < 0 & SJ06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("SJ06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(SJ06CDF1);
            // Set the second date we're counting down to
            var SJ06CDD2 = new Date("Dec 8, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var SJ06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var SJ06distance2 = SJ06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(SJ06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((SJ06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((SJ06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((SJ06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="SJ06"
                document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (SJ06distance2 < 0) {
                    clearInterval(SJ06CDF2);
                    if (SJ06distance2 < 0 & SJ06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("SJ06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(SJ06CDF2);
                        // Set the Third date we're counting down to
                        var SJ06CDD3 = new Date("Dec 8, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var SJ06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var SJ06distance3 = SJ06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(SJ06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((SJ06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((SJ06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((SJ06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="SJ06"
                            document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (SJ06distance3 < 0) {
                                clearInterval(SJ06CDF3);
                                if (SJ06distance3 < 0 & SJ06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("SJ06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(SJ06CDF3);
                                    // Set the fourth date we're counting down to
                                    var SJ06CDD4 = new Date("Dec 8, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var SJ06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var SJ06distance4 = SJ06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(SJ06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((SJ06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((SJ06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((SJ06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="SJ06"
                                        document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (SJ06distance4 < 0) {
                                            clearInterval(SJ06CDF4);
                                            if (SJ06distance4 < 0 & SJ06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("SJ06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(SJ06CDF4);
                                                // Set the fourth date we're counting down to
                                                var SJ06CDD5 = new Date("Dec 8, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var SJ06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var SJ06distance5 = SJ06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(SJ06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((SJ06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((SJ06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((SJ06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="SJ06"
                                                    document.getElementById("SJ06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (SJ06distance5 < 0) {
                                                        clearInterval(SJ06CDF5);
                                                        document.getElementById("SJ06").innerHTML = "Happy Birthday!";
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
var SHA06CDD1 = new Date("Sep 8, 2022 0:00:01").getTime();

// Update the count down every 1 second
var SHA06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var SHA06distance1 = SHA06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(SHA06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((SHA06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((SHA06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((SHA06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="SHA06"
    document.getElementById("SHA06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (SHA06distance1 < 0) {
        clearInterval(SHA06CDF1);
        if (SHA06distance1 < 0 & SHA06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("SHA06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(SHA06CDF1);
            // Set the second date we're counting down to
            var SHA06CDD2 = new Date("Sep 8, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var SHA06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var SHA06distance2 = SHA06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(SHA06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((SHA06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((SHA06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((SHA06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="SHA06"
                document.getElementById("SHA06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (SHA06distance2 < 0) {
                    clearInterval(SHA06CDF2);
                    if (SHA06distance2 < 0 & SHA06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("SHA06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(SHA06CDF2);
                        // Set the Third date we're counting down to
                        var SHA06CDD3 = new Date("Sep 8, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var SHA06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var SHA06distance3 = SHA06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(SHA06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((SHA06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((SHA06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((SHA06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="SHA06"
                            document.getElementById("SHA06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (SHA06distance3 < 0) {
                                clearInterval(SHA06CDF3);
                                if (SHA06distance3 < 0 & SHA06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("SHA06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(SHA06CDF3);
                                    // Set the fourth date we're counting down to
                                    var SHA06CDD4 = new Date("Sep 8, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var SHA06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var SHA06distance4 = SHA06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(SHA06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((SHA06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((SHA06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((SHA06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="SHA06"
                                        document.getElementById("SHA06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (SHA06distance4 < 0) {
                                            clearInterval(SHA06CDF4);
                                            if (SHA06distance4 < 0 & SHA06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("SHA06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(SHA06CDF4);
                                                // Set the fourth date we're counting down to
                                                var SHA06CDD5 = new Date("Sep 8, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var SHA06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var SHA06distance5 = SHA06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(SHA06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((SHA06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((SHA06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((SHA06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="SHA06"
                                                    document.getElementById("SHA06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (SHA06distance5 < 0) {
                                                        clearInterval(SHA06CDF5);
                                                        document.getElementById("SHA06").innerHTML = "Happy Birthday!";
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
var UD06CDD1 = new Date("Jul 22, 2022 0:00:01").getTime();

// Update the count down every 1 second
var UD06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var UD06distance1 = UD06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(UD06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((UD06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((UD06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((UD06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="UD06"
    document.getElementById("UD06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (UD06distance1 < 0) {
        clearInterval(UD06CDF1);
        if (UD06distance1 < 0 & UD06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("UD06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(UD06CDF1);
            // Set the second date we're counting down to
            var UD06CDD2 = new Date("Jul 22, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var UD06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var UD06distance2 = UD06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(UD06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((UD06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((UD06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((UD06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="UD06"
                document.getElementById("UD06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (UD06distance2 < 0) {
                    clearInterval(UD06CDF2);
                    if (UD06distance2 < 0 & UD06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("UD06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(UD06CDF2);
                        // Set the Third date we're counting down to
                        var UD06CDD3 = new Date("Jul 22, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var UD06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var UD06distance3 = UD06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(UD06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((UD06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((UD06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((UD06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="UD06"
                            document.getElementById("UD06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (UD06distance3 < 0) {
                                clearInterval(UD06CDF3);
                                if (UD06distance3 < 0 & UD06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("UD06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(UD06CDF3);
                                    // Set the fourth date we're counting down to
                                    var UD06CDD4 = new Date("Jul 22, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var UD06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var UD06distance4 = UD06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(UD06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((UD06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((UD06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((UD06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="UD06"
                                        document.getElementById("UD06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (UD06distance4 < 0) {
                                            clearInterval(UD06CDF4);
                                            if (UD06distance4 < 0 & UD06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("UD06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(UD06CDF4);
                                                // Set the fourth date we're counting down to
                                                var UD06CDD5 = new Date("Jul 22, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var UD06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var UD06distance5 = UD06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(UD06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((UD06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((UD06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((UD06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="UD06"
                                                    document.getElementById("UD06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (UD06distance5 < 0) {
                                                        clearInterval(UD06CDF5);
                                                        document.getElementById("UD06").innerHTML = "Happy Birthday!";
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
var SA06CDD1 = new Date("Sep 26, 2022 0:00:01").getTime();

// Update the count down every 1 second
var SA06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var SA06SA06distance1 = SA06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(SA06SA06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((SA06SA06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((SA06SA06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((SA06SA06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="SA06"
    document.getElementById("SA06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (SA06SA06distance1 < 0) {
        clearInterval(SA06CDF1);
        if (SA06SA06distance1 < 0 & SA06SA06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("SA06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(SA06CDF1);
            // Set the second date we're counting down to
            var SA06CDD2 = new Date("Sep 26, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var SA06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var SA06distance2 = SA06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(SA06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((SA06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((SA06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((SA06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="SA06"
                document.getElementById("SA06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (SA06distance2 < 0) {
                    clearInterval(SA06CDF2);
                    if (SA06distance2 < 0 & SA06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("SA06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(SA06CDF2);
                        // Set the Third date we're counting down to
                        var SA06CDD3 = new Date("Sep 26, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var SA06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var SA06distance3 = SA06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(SA06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((SA06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((SA06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((SA06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="SA06"
                            document.getElementById("SA06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (SA06distance3 < 0) {
                                clearInterval(SA06CDF3);
                                if (SA06distance3 < 0 & SA06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("SA06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(SA06CDF3);
                                    // Set the fourth date we're counting down to
                                    var SA06CDD4 = new Date("Sep 26, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var SA06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var SA06distance4 = SA06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(SA06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((SA06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((SA06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((SA06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="SA06"
                                        document.getElementById("SA06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (SA06distance4 < 0) {
                                            clearInterval(SA06CDF4);
                                            if (SA06distance4 < 0 & SA06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("SA06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(SA06CDF4);
                                                // Set the fourth date we're counting down to
                                                var SA06CDD5 = new Date("Sep 26, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var SA06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var SA06distance5 = SA06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(SA06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((SA06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((SA06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((SA06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="SA06"
                                                    document.getElementById("SA06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (SA06distance5 < 0) {
                                                        clearInterval(SA06CDF5);
                                                        document.getElementById("SA06").innerHTML = "Happy Birthday!";
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
var XB06CDD1 = new Date("Oct 6, 2022 0:00:01").getTime();

// Update the count down every 1 second
var XB06CDF1 = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var XB06distance1 = XB06CDD1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(XB06distance1 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((XB06distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((XB06distance1 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((XB06distance1 % (1000 * 60)) / 1000);

    // Output the result in an element with id="XB06"
    document.getElementById("XB06").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (XB06distance1 < 0) {
        clearInterval(XB06CDF1);
        if (XB06distance1 < 0 & XB06distance1 > (-1000 * 24 * 60 * 60))
            document.getElementById("XB06").innerHTML = "Happy Birthday!";
        else {
            clearInterval(XB06CDF1);
            // Set the second date we're counting down to
            var XB06CDD2 = new Date("Oct 6, 2023 0:00:01").getTime();

            // Update the count down every 1 second
            var XB06CDF2 = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var XB06distance2 = XB06CDD2 - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(XB06distance2 / (1000 * 60 * 60 * 24));
                var hours = Math.floor((XB06distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((XB06distance2 % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((XB06distance2 % (1000 * 60)) / 1000);

                // Output the result in an element with id="XB06"
                document.getElementById("XB06").innerHTML = days + "d " + hours + "h " +
                    minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (XB06distance2 < 0) {
                    clearInterval(XB06CDF2);
                    if (XB06distance2 < 0 & XB06distance2 > (-1000 * 24 * 60 * 60))
                        document.getElementById("XB06").innerHTML = "Happy Birthday!";
                    else {
                        clearInterval(XB06CDF2);
                        // Set the Third date we're counting down to
                        var XB06CDD3 = new Date("Oct 6, 2024 0:00:01").getTime();

                        // Update the count down every 1 second
                        var XB06CDF3 = setInterval(function() {

                            // Get todays date and time
                            var now = new Date().getTime();

                            // Find the distance between now an the count down date
                            var XB06distance3 = XB06CDD3 - now;

                            // Time calculations for days, hours, minutes and seconds
                            var days = Math.floor(XB06distance3 / (1000 * 60 * 60 * 24));
                            var hours = Math.floor((XB06distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                            var minutes = Math.floor((XB06distance3 % (1000 * 60 * 60)) / (1000 * 60));
                            var seconds = Math.floor((XB06distance3 % (1000 * 60)) / 1000);

                            // Output the result in an element with id="XB06"
                            document.getElementById("XB06").innerHTML = days + "d " + hours + "h " +
                                minutes + "m " + seconds + "s ";

                            // If the count down is over, write some text 
                            // If the count down is over, write some text 
                            if (XB06distance3 < 0) {
                                clearInterval(XB06CDF3);
                                if (XB06distance3 < 0 & XB06distance3 > (-1000 * 24 * 60 * 60))
                                    document.getElementById("XB06").innerHTML = "Happy Birthday!";
                                else {
                                    clearInterval(XB06CDF3);
                                    // Set the fourth date we're counting down to
                                    var XB06CDD4 = new Date("Oct 6, 2025 0:00:01").getTime();

                                    // Update the count down every 1 second
                                    var XB06CDF4 = setInterval(function() {

                                        // Get todays date and time
                                        var now = new Date().getTime();

                                        // Find the distance between now an the count down date
                                        var XB06distance4 = XB06CDD4 - now;

                                        // Time calculations for days, hours, minutes and seconds
                                        var days = Math.floor(XB06distance4 / (1000 * 60 * 60 * 24));
                                        var hours = Math.floor((XB06distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                        var minutes = Math.floor((XB06distance4 % (1000 * 60 * 60)) / (1000 * 60));
                                        var seconds = Math.floor((XB06distance4 % (1000 * 60)) / 1000);

                                        // Output the result in an element with id="XB06"
                                        document.getElementById("XB06").innerHTML = days + "d " + hours + "h " +
                                            minutes + "m " + seconds + "s ";

                                        // If the count down is over, write some text 
                                        if (XB06distance4 < 0) {
                                            clearInterval(XB06CDF4);
                                            if (XB06distance4 < 0 & XB06distance4 > (-1000 * 24 * 60 * 60))
                                                document.getElementById("XB06").innerHTML = "Happy Birthday!";
                                            else {
                                                clearInterval(XB06CDF4);
                                                // Set the fourth date we're counting down to
                                                var XB06CDD5 = new Date("Oct 6, 2026 0:00:01").getTime();

                                                // Update the count down every 1 second
                                                var XB06CDF5 = setInterval(function() {

                                                    // Get todays date and time
                                                    var now = new Date().getTime();

                                                    // Find the distance between now an the count down date
                                                    var XB06distance5 = XB06CDD5 - now;

                                                    // Time calculations for days, hours, minutes and seconds
                                                    var days = Math.floor(XB06distance5 / (1000 * 60 * 60 * 24));
                                                    var hours = Math.floor((XB06distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    var minutes = Math.floor((XB06distance5 % (1000 * 60 * 60)) / (1000 * 60));
                                                    var seconds = Math.floor((XB06distance5 % (1000 * 60)) / 1000);

                                                    // Output the result in an element with id="XB06"
                                                    document.getElementById("XB06").innerHTML = days + "d " + hours + "h " +
                                                        minutes + "m " + seconds + "s ";

                                                    // If the count down is over, write some text 
                                                    if (XB06distance5 < 0) {
                                                        clearInterval(XB06CDF5);
                                                        document.getElementById("XB06").innerHTML = "Happy Birthday!";
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
