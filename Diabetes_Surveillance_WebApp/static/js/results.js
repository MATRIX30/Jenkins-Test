//start of by hiding the section of our page that shows the result
$('#searchResult').hide();
var candidateId;
function getCandidateInfo(candidate){
  candidateId=candidate.getAttribute("data-candidate");

   //set the studentId value to what ever value is the candidateId
   $('#studentId').val(candidateId);
   
  

}
(function($) {

  $('#reset').on('click', function(){
      $('#register-form').reset();
  });

})(jQuery);

(function($) {
  "use strict"; // Start of use strict

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict


$(document).ready(function(){

  

    //------Setting up initial conditions for page-----
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //the two instructions below will all work but i chose the second because of ease of reading the code
    //the lines are intended to set the progress bar values to 0

    //$('#progressbar').attr('aria-valuenow', 0).css('width', 0+"%");

    //setting the progress bar values to 0(initial values)
    $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);
    $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);

    
    
    $('#viewResultActionBtn').submit(function(){
      alert('hello');
      $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
      candidateId=this.getAttribute("data-candidate");
      
      
    });


    // this function should be commented when GCE Results is  Out and we want to 
    // display the user with a modal form to subscribe for notification
    $('#getResultForm').submit(function(event){
      
      //This is the core script that handles the user searching for result and getting back their results
  
    
      


      // Stop form from submitting normally inorder to do the submission with Ajax
      
      event.preventDefault();
    });
    

// this section of the code should be uncommented when the results are out



  //when the getResultForm is submited
  //   $('#getResultForm').submit(function(event){
      
  //     //This is the core script that handles the user searching for result and getting back their results
  
    
      


  //     // Stop form from submitting normally inorder to do the submission with Ajax
      
  //     event.preventDefault();

  //     //get the various values from the form and serialize it
  //     // var patt_centerNo=/\d{5}/i;
  //     // const centre_no_withName=$('#center').value();//the regex object can be compiled to speed the search operation
  //     // const centre_no=patt_centerNo.exec(centre_no_withName);
  //     // const candidate_name= $('#cand_name').value();
  //     resultData=$(this).serialize();
  //     //console.log(donationData['donor']);
      
  //     // resultData={"centre_no":centre_no,"candidate_name":candidate_name}
    

  //     //fire up an Ajax request to server
  //       $.ajax({

  //           //this the xhr function is only going to work with HTML5
  //         //   xhr: function() {
  //         //       var xhr = new window.XMLHttpRequest();
  //         //       xhr.upload.addEventListener("progress", function(evt) {
  //         //           if (evt.lengthComputable) {
  //         //               var percentComplete = (evt.loaded / evt.total)*100;
  //         //               //Do something with upload progress here
                        
  //         //               //when uploading of form data goes on the progress bar gets updated
  //         //               //the total progress of this upload operation is 50 perc of the total donation process so the percentComplete must be divided by 2
  //         //               $('#progressbar').width(percentComplete/2 + "%").attr('aria-valuenow', percentComplete/2);
                        
                        

  //         //           }
  //         //     }, false);

  //         //     xhr.addEventListener("progress", function(evt) {
  //         //         if (evt.lengthComputable) {
  //         //             var percentComplete = (evt.loaded / evt.total)*100;
  //         //             //Do something with download progress
  //         //             console.log(percentComplete)
  //         //             //when uploading of form data goes on the progress bar gets updated
  //         //             //the total progress of this upload operation is 50 perc of the total donation process so the percentComplete must be divided by 2
  //         //             $('#progressbar').width(50+(percentComplete/2) + "%").attr('aria-valuenow', 50+(percentComplete/2));
  //         //         }
  //         //     }, false);

  //         //     return xhr;
  //         //    },



  //           url:'displayCandidateSearch',
  //           type: 'POST',
  //           dataType:'json',
  //           data:resultData,
  //           success:function(data){
  //               //this function ensures the request got a response 
                
                
  //               var per_row=5;
  //               if (data["0"]==null){
  //                   html=`
  //                   <div class="container">
  //                     <div class="row text-center">
  //                       <div class="col-sm-12">
  //                         <h1 class="font-weight-light text-center mb-3">`+ 0 +` Result(s) Found</h1>
  //                         <hr class="divider">
  //                         <code class="highlighter-rouge"><strong>No results found</strong> make sure you spelled your name correctly and try again .</code>
  //                       </div>
  //                     </div>
  //                   </div>

  //                   `

  //               }
  //               else{

  //                 numResultItems=data[0][3]
  //                 html=`
  //                 <div class="container">
  //                   <div class="row">
  //                     <div class="col-sm-12">
  //                         <h2 class="font-weight-light text-center mb-3">`+ numResultItems +` Result(s) Found</h2>
  //                         <div class"table-responsive-xs">
  //                         <table class="table table-striped table-borderless ">
  //                           <thead class="thead-light text-center">
  //                             <tr>
  //                                 <th scope="col" ><h4>#</h4></th>
  //                                 <th scope="col" ><h4>Candidate Name</h4></th>
  //                                 <th scope="col" ><h4>Center Number</h4></th>
  //                                 <th scope="col" ><h4>Center Name</h4></th>
  //                                 <th scope="col" ><h4>Action</h4></th>
  //                             </tr>           
  //                           </thead>
  //                           <tbody>                            
                            
  //               `
                
                
  //               for (i = 0; i < numResultItems; i++) {
  //                 number=i+1;
  //                 html += `
  //               <tr class="text-center"  >
  //                 <th scope="row"><h5>`+ number +`</h5></th>` +
  //                 `<td  data-name="heloo"><h5>`+ data[""+ i ][2] +`</h5></td>`+
  //                 `<td><h5>`+ data[""+ i ][0] +`</h5></td>`+
  //                 `<td><h5>`+ data[""+ i ][1] +`</h5></td>`+
  //                 `<td><button onclick="getCandidateInfo(this)" data-candidate=`+ data[""+ i ][4] +`  id="viewResultActionBtn" class="btn btn-success btn-lg"  href="{% url 'payments/makePayments' %}" data-toggle="modal" data-target="#viewResultModal">View Result</button></td>
  //               </tr>`    
  //               number+=1;

  //             }
  //             html+=`</tbody> 
  //                  </table>
  //                  </div>
  //                </div>
  //               </div>
  //           </div>` 
            

  //               }

                
                

                
  //               $('#searchResult').show();
  //               // document.getElementById('#searchResult').innerHTML=html;
  //               $("#searchResult").html(html);
  //               window.location.hash="searchResult";
                
  //             },
  //           error:function(xhr,status,error){
  //               //This function will handle the situation where a user doesnot gets a response usually due to 
  //               //connection Error or server down

  //           }


            
      

  //   });
  // }
  // );

    //when the user want to make payements inorder to view results
    $('#makePaymentstoViewResultsForm').submit(function(event){
      
      //This is the core script that handles the user searching for result and getting back their results
  
      $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
      


      // Stop form from submitting normally inorder to do the submission with Ajax
      
      event.preventDefault();

      //get the various values from the form and serialize it
      $('#studentId').val(candidateId); //the student id is for that of the student who is about to carry out the transaction
      
      //serialize data in the makepayments form inorder to submit it  with ajax
      paymentData=$(this).serialize();

      
      //fire up an Ajax request to server
        $.ajax({

            //this the xhr function is only going to work with HTML5
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = (evt.loaded / evt.total)*100;
                        //Do something with upload progress here
                        
                        //when uploading of form data goes on the progress bar gets updated
                        //the total progress of this upload operation is 50 perc of the total donation process so the percentComplete must be divided by 2
                        $('#paymentprogressbar').width(percentComplete/2 + "%").attr('aria-valuenow', percentComplete/2);
                        
                        

                    }
              }, false);

              return xhr;
             },



            url:'payments/makePayments',
            type: 'POST',
            //dataType:'json',
            data:paymentData,
            success:function(data,status,xhr){
                //this function ensures the request got a response 
                var responseContentType=xhr.getResponseHeader("content-type"||"");
                
                
                console.log(data);
                
                // when the user has successfuly paid for their result
                //the  response from the server comes in html form instead of json form
                if (responseContentType.indexOf('html')>-1) {
                  //handles responses that come in html form
                  $('body').html(data);
                  $('body').removeClass("modal-open");
                  $('title').text("CGCE-Result view");
                  
                } else if(responseContentType.indexOf('json')>-1) {
                  //handles responses that come in json form
                  if (data.transactionStatusCode==01) {
                    contentSuccess= `<div class="alert alert-success">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Payment Successful! Thanks</strong> <br>
                     We have a gift for you Dial *159*239# to check Your gift
                  </div>`
  
                  //document.querySelector('#donatemsg').innerHTML=contentSuccess;
                  document.querySelector('#paymentmsg').innerHTML=contentSuccess;
                  //the total progress of this upload operation is 50 perc of the total donation process so the percentComplete must be divided by 2
                  $('#progressbar').width(100 + "%").attr('aria-valuenow', 100);
                    
                }else if (data.transactionStatusCode==515) {
  
                  contentFailure=`<div class="alert alert-danger ">
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                  <strong>Payment Unsuccesfull! The Number you Provided Doesnot Have a Mobile Money Account</strong><br> Please Try again.
                </div>`
                 
                document.querySelector('#paymentmsg').innerHTML=contentFailure;
                  $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
                  
                } else if (data.transactionStatusCode==529) {
  
                  contentFailure=`<div class="alert alert-danger">
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                  <strong>Payment Unsuccesfull! Insufficient Balance in Your MOMO Account</strong><br> Please  Refill your account and Try again.
                </div>`
                  document.querySelector('#paymentmsg').innerHTML=contentFailure;
                  $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
                  
                } else if (data.transactionStatusCode==400) {
  
                    contentFailure=`<div class="alert alert-danger">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Payment Unsuccesfull! Connection Error</strong><br> Please  check your internet connection and Try again.
                  </div>`
                    document.querySelector('#paymentmsg').innerHTML=contentFailure;
                    $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
                    
                } else if (data.transactionStatusCode==401) {
  
                  contentFailure=`<div class="alert alert-danger">
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                  <strong>Payment Unsuccesfull! Request Timeout</strong> Please Try again.
                </div>`
                  document.querySelector('#paymentmsg').innerHTML=contentFailure;
                  $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
                  
                } else if (data.transactionStatusCode==402) {
  
                contentFailure=`<div class="alert alert-danger">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Payment Unsuccesfull! An Error Occured</strong><br> Please Try again.
              </div>`
                document.querySelector('#paymentmsg').innerHTML=contentFailure;
                $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
                
                } else if (data.transactionStatusCode==403) {
  
              contentFailure=`<div class="alert alert-danger">
              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
              <strong>Payment Unsuccesfull! internal Database Error</strong><br> Please Try again.
            </div>`
              document.querySelector('#paymentmsg').innerHTML=contentFailure;
              $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
              
                } else {
  
            contentFailure=`<div class="alert alert-danger">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Payment Unsuccesfull! Critical Error</strong> Please   Try again.
          </div>`
            document.querySelector('#paymentmsg').innerHTML=contentFailure;
            $('#paymentprogressbar').width(0 + "%").attr('aria-valuenow', 0);
            
                }
                  
                } else{

                }
                
              //use many if's and else to handle all possible errors send by mtn momo Api and cameroonExamsDashboard server
                
             


 
            

                

                
                

            
              },
            error:function(xhr,status,error){
                //This function will handle the situation where a user doesnot gets a response usually due to 
                //connection Error or server down


            }


            
      

    });
  }
  );

    //When donation form get submitted
    $("#donateform").submit(function(event){
     


      // Stop form from submitting normally
      event.preventDefault();

      //get the various values from the form
      // const donor=$("#donor").value();
      // const amount=$("#amt").value();
      // const donorTel=$("#MoMoTel").value();
      donationData=$(this).serialize();
      //console.log(donationData['donor']);


        $.ajax({

            //this the xhr function is only going to work with HTML5
            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = (evt.loaded / evt.total)*100;
                        //Do something with upload progress here
                        
                        //when uploading of form data goes on the progress bar gets updated
                        //the total progress of this upload operation is 50 perc of the total donation process so the percentComplete must be divided by 2
                        $('#progressbar').width(percentComplete/2 + "%").attr('aria-valuenow', percentComplete/2);
                        
                        

                    }
              }, false);
              return xhr;
             },



            url:'payments/donate',
            type: 'POST',
            dataType:'json',
            data:donationData,
            success:function(data){
                //this function ensures the request got a response 
                // console.log(data.transactionStatusCode);
                //updating the alert div
                


                //use many if's and else to handle all possible errors send by mtn momo Api and cameroonExamsDashboard server
                
                if (data.transactionStatusCode==01) {
                    contentSuccess= `<div class="alert alert-success">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Donation Successful! Thanks</strong> <br>
                     We have a gift for you Dial *159*239# to check Your gift
                  </div>`

                  //document.querySelector('#donatemsg').innerHTML=contentSuccess;
                  $('#donateform').prepend(contentSuccess);
                  //the total progress of this upload operation is 50 perc of the total donation process so the percentComplete must be divided by 2
                  $('#progressbar').width(100 + "%").attr('aria-valuenow', 100);
                    
                }else if (data.transactionStatusCode==515) {

                  contentFailure=`<div class="alert alert-danger ">
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                  <strong>Donation Unsuccesfull! The Number you Provided Doesnot Have a Mobile Money Account</strong><br> Please Try again.
                </div>`
                 
                  $('#donateform').prepend(contentFailure);
                  $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);
                  
                } else if (data.transactionStatusCode==529) {

                  contentFailure=`<div class="alert alert-danger">
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                  <strong>Donation Unsuccesfull! Insufficient Balance in Your MOMO Account</strong><br> Please  Refill your account and Try again.
                </div>`
                  document.querySelector('#donatemsg').innerHTML=contentFailure;
                  $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);
                  
              } else if (data.transactionStatusCode==400) {

                    contentFailure=`<div class="alert alert-danger">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Donation Unsuccesfull! Connection Error</strong><br> Please  check your internet connection and Try again.
                  </div>`
                    document.querySelector('#donatemsg').innerHTML=contentFailure;
                    $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);
                    
                } else if (data.transactionStatusCode==401) {

                  contentFailure=`<div class="alert alert-danger">
                  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                  <strong>Donation Unsuccesfull! Request Timeout</strong> Please Try again.
                </div>`
                  document.querySelector('#donatemsg').innerHTML=contentFailure;
                  $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);
                  
                } else if (data.transactionStatusCode==402) {

                contentconnectionFailure=`<div class="alert alert-danger">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Donation Unsuccesfull! An Error Occured</strong><br> Please Try again.
              </div>`
                document.querySelector('#donatemsg').innerHTML=contentFailure;
                $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);
                
                } else if (data.transactionStatusCode==403) {

              contentconnectionFailure=`<div class="alert alert-danger">
              <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
              <strong>Donation Unsuccesfull! internal Database Error</strong><br> Please Try again.
            </div>`
              document.querySelector('#donatemsg').innerHTML=contentFailure;
              $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);
              
                } else {

            contentconnectionFailure=`<div class="alert alert-danger">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Donation Unsuccesfull! Critical Error</strong> Please   Try again.
          </div>`
            document.querySelector('#donatemsg').innerHTML=contentFailure;
            $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);
            
                }

              },
            error:function(xhr,status,error){
                //This function will handle the situation where a user doesnot gets a response usually due to 
                //connection Error or server down

                contentconnectionFailure=`<div class="alert alert-danger">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                <strong>Donation Unsuccesfull! No Response Received</strong><br> Please   Try again.
              </div>`
                document.querySelector('#donatemsg').innerHTML=contentFailure;
                $('#progressbar').width(0 + "%").attr('aria-valuenow', 0);

            }


            
      

    });
    }
    );
  });

