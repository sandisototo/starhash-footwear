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

                $.each(data, function(i,filename) {
                    //console.log(filename); return false;
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
                    						'			   <h4>Style no</h4> ' +
                    						'			   <p>Category</p>' +
                    						'			   <div class="price mount item_price">R99.00</div>' +
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
