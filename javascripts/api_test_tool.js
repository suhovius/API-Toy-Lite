$(document).ready(function(){
        $("#json_submit").click(function() {
                $("img#waiting").removeClass("hidden");
                $("#server_response").html("");
                rest_method = $("#rest_method").val();
                rest_url = $("#rest_url").val();
                request_data = $("#request_data").val();
                json_data = jQuery.parseJSON(request_data);
                //console.log(rest_method);
                //console.log(rest_url);
                //console.log(request_data);
                //console.log(json_data);
                jQuery.ajax({
                          url: rest_url,
                          type: rest_method,
                          data: json_data,
                          dataType: "json",
                          beforeSend: function(x) {
                            if (x && x.overrideMimeType) {
                              x.overrideMimeType("application/json;charset=UTF-8");
                            }
                          },
                          success: function(result) {
                 	     //console.log(JSON.stringify(result));
                             $("img#waiting").addClass("hidden");
                             $("#server_response").html(JSON.stringify(result)).effect("highlight", {color: 'green'}, 3000);

                          },
                          error: function (xhr, ajaxOptions, thrownError){
                             //console.log(xhr.responseText);
                             $("img#waiting").addClass("hidden");
                             $("#server_response").html(xhr.responseText).effect("highlight", {color: 'red'}, 3000);;
                          }

                });

        });

});

