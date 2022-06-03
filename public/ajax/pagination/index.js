$('#btn_next').click(function (e) {
    //alert("NEXT ARRAY--"+JSON.stringify(chkArray))  
    let offset = parseInt($('#offset_value').val(), 10);
    let indexCount;
    offset += 10;
    indexCount = offset;

    var body_data = {

        "offset": offset,

    }
    console.log(body_data);

    $.ajax({
        type: 'POST',
        url: '/pagination/fetchNextData' + offset + '/',
        headers: {
            'Content-Type': "application/json",
        },
        success: function (data) {
            if (data) {
                data = data.result;
                if (data.length > 0) {
                    let bodyData;
                   
                    $('#btn_previous').removeAttr("disabled");
                    $('#offset_value').val(offset);
                    $('#branchListing tbody').empty();

                    for (var i = 0; i < data.length; i++) {
                     bodyData = <tr id=' + Data[i].id + '><th scope="row"> ' + (indexCount + 1) + '</th> <td style="word-break: break-all;">'+ Data[i].pname + ''</td><td style="word-break: break-all;">' + pcname+ '</td></tr>
                        $("#branchListing").append(bodyData + '</tbody>');
                        indexCount++;
                    }

                    if (data.length < 10) {
                       $('#btn_next').attr("disabled", "disabled");
                      
                        
                    } else {
                        $('#btn_next').removeAttr("disabled");
                    }
                } else {
                    alert("No more results to show.");
                    $('#btn_next').attr("disabled", "disabled");
                   
                }
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            alert('ERROR' + JSON.stringify(xhr));
        }
    })
    e.preventDefault();
});
$('#btn_previous').click(function (e) {
    let offset = parseInt($('#offset_value').val(), 10);
    var indexCount;
    offset -= 10;
    indexCount = offset;
    $('#btn_next').removeAttr("disabled");
    var body_data = {
        "offset": offset,
      
    }
    console.log(body_data);
    $.ajax({
        type: 'POST',
        url: '/pagination/fetchPreviousData' + offset +'/',
        headers: {
            'Content-Type': "application/json",
        },
        success: function (data) {

            if (data) {
                data = data.result;
                if (data.length > 0) {
                    let bodyData;
                    $('#btn_previous').removeAttr("disabled");
                    $('#offset_value').val(offset);
                    $('#branchListing tbody').remove();
                    $("#branchListing").append('<tbody class="select_All_row">');
                    for (var i = 0; i < data.length; i++) {
                        bodyData = <tr id=' + Data[i].id + '><th scope="row"> ' + (indexCount + 1) + '</th> <td style="word-break: break-all;">'+ Data[i].pname + ''</td><td style="word-break: break-all;">' + pcname+ '</td></tr>
                            
                        $("#branchListing").append(bodyData + '</tbody>');
                        indexCount++;
                    }
                    if (offset == 0 ) {
                        $('#btn_previous').attr("disabled", "disabled");
                        
                    }
                } else {
                    alert("No more results to show.");
                    $('#btn_next').attr("disabled", "disabled");
                }
            } else { }
        },
        error: function (xhr, textStatus, errorThrown) {
            alert('AJAX ERROR ' + JSON.stringify(xhr));
        }
    })
    e.preventDefault();

});