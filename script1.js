
$(document).ready(function(){
 $('#button').on('click',function(){
        getdetails();
     });
     $("#delete").on('click',function(){
        deletedetails();
     });
     $("#add-doctor").on('click',function(){
         insertdetails();
     });
   
    });

    function getdetails(){
        var $id=$('#list');
        $.ajax({
            type:"GET",
            url:"http://localhost:8080/appoint/webresources/appoint/details",
            success:function (id){
                console.log(id);
                $.each(id.appointment,function(i,appointment){
                    $id.append('<li>Hospital:doctor:'+appointment.doctor+',Patient:'+appointment.patient+',Status:'+appointment.status+'</li>')
                });
            }


        });
    }

    function deletedetails(){
        var $detail = {

           doctorname: document.getElementById('deletedoctor').value,
     
             patient: document.getElementById('deletepatient').value,
     
             status:document.getElementById('deletestatus').value,
           
         };
     
        console.log(details);
        $.ajax({
        type:"DELETE",
        url:"http://localhost:8080/appoint/webresources/appoint/delete"+$detail,
        success:alert("patient deleted"+details)

        });
   }


 function insertdetails() {



    var appoint = {

       doctorname:document.getElementById('dname').value,

        patient: document.getElementById('patient').value,

        status:document.getElementById('status').value,
        
       

   
    };



    $.ajax({

        type: 'POST',

        url: 'http://localhost:8080/appoint/webresources/appoint/insert',

        data: appoint,

        success: function(appoint) {

            $appoint.append('<li>dname: '+ appoint.doctorname +', patient: '+appoint.patient + 'status'+appoint.status+'</li>');

        },

        error: function() {

            alert('error saving details');

        }

    });

};
