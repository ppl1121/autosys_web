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


// Remove the class 'active' from home
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;
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
        else if($(this).parent().attr("id") === "manufactureButton"){
            $.ajax({
              type: "GET",
              url: manufactureManagementHtml,
              dataType: "html",
              success: function(responseText){
                          document.querySelector("#main-content")
                          .innerHTML = responseText;
                           $("#collapsable-nav li.active").removeClass("active");
                           $("#manufactureButton").addClass("active");
                           $("#supplyChainTitle a").click(function () {
                                var ele= $(this);
                                if($(this).attr("id") === "material") {
                                    $("#supplyChain-content img").attr("src", "img/material.png");
                                }
                                else if($(this).attr("id") === "plan") {
                                    $("#supplyChain-content img").attr("src", "img/plan.png");
                                }
                                else if($(this).attr("id") === "part") {
                                    $("#supplyChain-content img").attr("src", "img/part.png");
                                }
                                else if($(this).attr("id") === "capacity") {
                                    $("#supplyChain-content img").attr("src", "img/capacity.png");
                                }
                                else{
                                    $("#supplyChain-content img").attr("src", "img/quality.png");
                                }
                            })
                       }
            });
        }
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
                           $("#supplyChainTitle a").click(function () {
                                var ele= $(this);
                                if($(this).attr("id") === "material") {
                                    $("#supplyChain-content img").attr("src", "img/material.png");
                                }
                                else if($(this).attr("id") === "plan") {
                                    $("#supplyChain-content img").attr("src", "img/plan.png");
                                }
                                else if($(this).attr("id") === "part") {
                                    $("#supplyChain-content img").attr("src", "img/part.png");
                                }
                                else if($(this).attr("id") === "capacity") {
                                    $("#supplyChain-content img").attr("src", "img/capacity.png");
                                }
                                else{
                                    $("#supplyChain-content img").attr("src", "img/quality.png");
                                }
                            })
                       }
            });
        }
        else if($(this).parent().attr("id") === "manufactureServiceButton"){
            console.log("sd");
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
        else{
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
    })


});

})(window);
