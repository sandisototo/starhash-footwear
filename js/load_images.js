$(function(){
  var URL = window.location.pathname; // Gets page name
var page = URL.substring(URL.lastIndexOf('/') + 1);
var content = new Array() ;
  $.ajax({
            method: "POST",
            url: "./load_images.php",
            dataType: "json",
            data:{
              page:page
            },
            success: function (data) {
                var R_position;
                var price;
                var style_no;
                var loc = window.location.href;
                var category  = loc.split('/').pop().split('.').shift();
                var image_name;
                //console.log(data); return false;


                $.each(data, function(i,filename) {
                    //console.log(filename); return false;
                    image_name = filename.split('/').pop().split('.').shift();
                    R_position = image_name.lastIndexOf("R");
                    price = image_name.slice(R_position,R_position+4);
                    if(price.match(/\s/g)){
                      price +="00";
                    }

                    style_no = image_name.slice(0,R_position);
                    //console.log(style_no);
                     content = '					  <li class="last simpleCart_shelfItem">'+
                    						'	<a class="cbp-vm-image" href="'+filename+'" target="_blank"> ' +
                    						' <div class="view view-first"> ' +
                    					  ' 		  <div class="inner_content clearfix">' +
                    						'		<div class="product_image">' +
                    						'			<div class="mask1"><img src="'+filename+'" alt="image" class="img-responsive zoom-img"></div>' +
                    						'			<div class="mask">' +
                    			      '     </div>'+
                                '     <div class="mask"> '+
			                       		'        <div class="info">View</div>' +
					                      '     </div>'+
                    					  '    <div class="product_container"> ' +
                    						'			   <h4>'+style_no+'</h4> ' +
                    						'			   <p>'+category+'</p>' +
                    						'			   <div class="price mount item_price">'+price+'</div>' +
                    						'     </div> '+
                    						'    </div> ' +
                    			      '   </div> ' +
                    		        '  </div>' +
                    		        ' </a>' +
                    						'</li>';
                    if(page === "men.html"){
                      $('#men_all').prepend(content);
                    }else if (page === "women.html") {
                        $('#women_all').prepend(content);
                    }

                });
            }
        });
});

$(document).on('click','.category_class',function(evt){
  evt.preventDefault();
  var URL = window.location.pathname; // Gets page name
var page = URL.substring(URL.lastIndexOf('/') + 1);
var cat = $(this).attr("catname");
var oncategory = $(this).attr("oncategory");
$("#oncat").text(oncategory);
//alert(cat); return false;
var content = new Array() ;
  $.ajax({
            method: "POST",
            url: "./load_images.php",
            dataType: "json",
            data:{
              cat:cat
            },
            success: function (data) {
                var R_position;
                var price;
                var style_no;
                var loc = window.location.href;
                var category  = loc.split('/').pop().split('.').shift();
                var image_name;
                //console.log(output);

                  $('#men_all').empty();
                  $('#women_all').empty();
                $.each(data, function(i,filename) {
                    //console.log(filename); return false;
                    image_name = filename.split('/').pop().split('.').shift();
                    R_position = image_name.lastIndexOf("R");
                    price = image_name.slice(R_position,R_position+4);
                    if(price.match(/\s/g)){
                      price +="00";
                    }

                    style_no = image_name.slice(0,R_position);
                    //console.log(style_no);
                     content = '					  <li class="last simpleCart_shelfItem">'+
                    						'	<a class="cbp-vm-image" href="'+filename+'" target="_blank"> ' +
                    						' <div class="view view-first"> ' +
                    					  ' 		  <div class="inner_content clearfix">' +
                    						'		<div class="product_image">' +
                    						'			<div class="mask1"><img src="'+filename+'" alt="image" class="img-responsive zoom-img"></div>' +
                    						'			<div class="mask">' +
                    			      '     </div>'+
                                '     <div class="mask"> '+
			                       		'        <div class="info">View</div>' +
					                      '     </div>'+
                    					  '    <div class="product_container"> ' +
                    						'			   <h4>'+style_no+'</h4> ' +
                    						'			   <p>'+oncategory+'</p>' +
                    						'			   <div class="price mount item_price">'+price+'</div>' +
                    						'     </div> '+
                    						'    </div> ' +
                    			      '   </div> ' +
                    		        '  </div>' +
                    		        ' </a>' +
                    						'</li>';
                    if(page === "men.html"){
                      $('#men_all').prepend(content);
                    }else if (page === "women.html") {
                        $('#women_all').prepend(content);
                    }

                });
            }
        });
});
