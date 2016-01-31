$(document).ready(function () {
    /* Update all the parameters for your API test*/

    function getResults(searchTerm) {

        var params = {
            "part": 'snippet',
            "key": 'AIzaSyD2PElSqrnBMpSMndsc7pTC2e-37fC_wEM',
            "q": searchTerm
        };

        var result = $.ajax({
                /* update API end point */
                url: "https://www.googleapis.com/youtube/v3/search",
                data: params,
                dataType: "jsonp",
                /*set the call type GET / POST*/
                type: "GET"
            })
            /* if the call is successful (status 200 OK) show results */
            .done(function (result) {
                /* if the results are meeningful, we can just console.log them */

                displayResult(result.items);
                /* if the results are not meeningful, it might help to convert them to string first
                        var displayStringifiedResults = JSON.stringify(result);
                        console.log(displayStringifiedResults);*/
                /* if the results contain invalid json, it might help to sanitize them first
                        var displaySanitizedResults = sanitizeJSON(result);
                        console.log(displaySanitizedResults);*/
            })
            /* if the call is NOT successful show errors */
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });

    }

    function displayResult(data) {

        var htmlOutput = "";

        $.each(data, function (key, value) {
            //console.log(value.snippet.title);
            //console.log(value.snippet.thumbnails.high.url);
            htmlOutput += '<li> <h3> ' + value.snippet.title + '</h3><img src="' + value.snippet.thumbnails.high.url + '"></li>';
        });
        $("#search-results ul").html(htmlOutput);
    }

    $('#myButton').on('click', function () {
        var searchTerm = $("#query").val();
        //alert("search term");
        getResults(searchTerm);
    });

});
