(function (global) {

var homeHtml = "snippets/home-snippet.html";
var aboutHtml = "snippets/about-snippet.html";
var contactHtml = "snippets/contact-snippet.html";
var jobsHtml = "snippets/jobs-snippet.html";
var servicesHtml = "snippets/services-snippet.html";
var supplyChainHtml = "snippets/supply-chain.html";
var manufactureManagementHtml = "snippets/manufacture-management-snippet.html";
var productAndservicesHtml = "snippets/productAndservices-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='img/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


// // Remove the class 'active' from home
// var switchMenuToActive = function () {
//   // Remove 'active' from home button
//   var classes = document.querySelector("#navHomeButton").className;
//   classes = classes.replace(new RegExp("active", "g"), "");
//   document.querySelector("#navHomeButton").className = classes;
// };

global.soloCollapse = function (element) {
  var collapsed = $("div.in");
  var collapsedId = collapsed.attr("id");
  if(collapsed.length !==0 && collapsed.attr("id").replace(/content/, "control") !== $(element).attr("id")){ 
      collapsed.collapse('hide');
  } 
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

    //On first load, show home view
    showLoading("#main-content");
    $.ajax({
              type: "GET",
              url: homeHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                          $("#collapsable-nav li.active").removeClass("active");
                          $('#navHomeButton').addClass("active");
                          $('#myCarousel').carousel();
                       }
            });

    $("#collapsable-nav a").click(function(){
        var ele= $(this);
        var screenWidth = window.innerWidth;
        if (screenWidth < 768 && $(this).parent().attr("id")!=="manufactureButton") {
            $("#collapsable-nav").collapse('hide');
        }
        if($(this).parent().attr("id") === "navAboutButton"){
            $.ajax({
              type: "GET",
              url: aboutHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                       }
            });
        }
        // else if($(this).parent().attr("id") === "manufactureButton"){
        //     $.ajax({
        //       type: "GET",
        //       url: manufactureManagementHtml,
        //       dataType: "html",
        //       success: function(responseText){
        //                   document.querySelector("#main-content")
        //                   .innerHTML = responseText;
        //                    $("#collapsable-nav li.active").removeClass("active");
        //                    $("#manufactureButton").addClass("active");
        //                    $("#supplyChainTitle a").click(function () {
        //                         var ele= $(this);
        //                         if($(this).attr("id") === "material") {
        //                             $("#supplyChain-content img").attr("src", "img/material.png");
        //                         }
        //                         else if($(this).attr("id") === "plan") {
        //                             $("#supplyChain-content img").attr("src", "img/plan.png");
        //                         }
        //                         else if($(this).attr("id") === "part") {
        //                             $("#supplyChain-content img").attr("src", "img/part.png");
        //                         }
        //                         else if($(this).attr("id") === "capacity") {
        //                             $("#supplyChain-content img").attr("src", "img/capacity.png");
        //                         }
        //                         else{
        //                             $("#supplyChain-content img").attr("src", "img/quality.png");
        //                         }
        //                     });
        //                }
        //     });
        // }
        else if($(this).parent().attr("id") === "manufactureChainButton"){
            $.ajax({
              type: "GET",
              url: supplyChainHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           $("#manufactureButton").addClass("active");
                           $("#supplyChain-material").hide();
                           $("#supplyChain-part").hide();
                           $("#supplyChain-capacity").hide();
                           $("#supplyChain-quality").hide();
                           $("#supplyChain-pilot").hide();
                           $("#supplyChain-batch").hide();
                           $("#supplyChainTitle a").click(function () {
                                var ele= $(this);
                                if($(this).attr("id") === "material") {
                                    $("#supplyChain-content").hide();
                                    $("#supplyChain-part").hide();
                                    $("#supplyChain-capacity").hide();
                                    $("#supplyChain-quality").hide();
                                    $("#supplyChain-pilot").hide();
                                    $("#supplyChain-batch").hide();
                                    $("#supplyChain-material").show();
                                }
                                else if($(this).attr("id") === "plan") {
                                    $("#supplyChain-content img").attr("src", "img/plan.png");
                                }
                                else if($(this).attr("id") === "part") {
                                  console.log("df");
                                    $("#supplyChain-content").hide();
                                    $("#supplyChain-material").hide();
                                    $("#supplyChain-capacity").hide();
                                    $("#supplyChain-quality").hide();
                                    $("#supplyChain-pilot").hide();
                                    $("#supplyChain-batch").hide();
                                    $("#supplyChain-part").show();
                                }
                                else if($(this).attr("id") === "capacity") {
                                    $("#supplyChain-content").hide();
                                    $("#supplyChain-material").hide();
                                    $("#supplyChain-part").hide();
                                    $("#supplyChain-quality").hide();
                                    $("#supplyChain-pilot").hide();
                                    $("#supplyChain-batch").hide();
                                    $("#supplyChain-capacity").show();
                                }
                                else if($(this).attr("id") === "quality") {
                                    $("#supplyChain-content").hide();
                                    $("#supplyChain-material").hide();
                                    $("#supplyChain-part").hide();
                                    $("#supplyChain-capacity").hide();
                                    $("#supplyChain-pilot").hide();
                                    $("#supplyChain-batch").hide();
                                    $("#supplyChain-quality").show();
                                }
                                else if($(this).attr("id") === "pilot") {
                                    $("#supplyChain-content").hide();
                                    $("#supplyChain-material").hide();
                                    $("#supplyChain-part").hide();
                                    $("#supplyChain-capacity").hide();
                                    $("#supplyChain-quality").hide();
                                    $("#supplyChain-batch").hide();
                                    $("#supplyChain-pilot").show();
                                }
                                else {
                                    $("#supplyChain-content").hide();
                                    $("#supplyChain-material").hide();
                                    $("#supplyChain-part").hide();
                                    $("#supplyChain-capacity").hide();
                                    $("#supplyChain-quality").hide();
                                    $("#supplyChain-pilot").hide();
                                    $("#supplyChain-batch").show();
                                }
                            });
                       }
            });
        }
        else if($(this).parent().attr("id") === "manufactureServiceButton"){
            $.ajax({
              type: "GET",
              url: servicesHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           $("#manufactureButton").addClass("active");
                       }
            });
        }
        else if($(this).parent().attr("id") === "navJobsButton"){
            $.ajax({
              type: "GET",
              url: jobsHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                       }
            });
        }
        else if($(this).parent().attr("id") === "navHomeButton"){
            $.ajax({
              type: "GET",
              url: homeHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                       }
            });
        } 
        else if($(this).parent().attr("id") === "navServicesButton") {
            $.ajax({
              type: "GET",
              url: productAndservicesHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           ele.parent().addClass("active");
                           $('#myCarousel').carousel();
                       }
            });
        }
        else{
            $("#collapsable-nav li.active").removeClass("active");
            $("#manufactureButton").addClass("active");
        }
    })


});

})(window);


