///////
/// Cookies Notice Banner
//
function cookieNotice(){
  var cookieVal = 'cookieNoticeConfirm';

    // Check to see if cookie exists
    if (!JSCookies.hasItem(cookieVal) && !$('body').hasClass('finetune') && !$('html').hasClass('is-taking-screenshot')) {
		// banner styles
		var cnbStyle = '\
<style type="text/css">\ .cnb-wrap {\ width: 90%;\ max-width: 800px;\ min-height: 60px;\ background: rgba(35,35,36,.95);\ color: #fff;\ display: flex;\ align-items: center;\ font-weight: bold;\ padding: 1rem 4rem 1rem 1rem;\ position: fixed;\ bottom: 0;\ z-index: 1000;\ left: 50%;\ transform: translate(-50%,0);\ transition: all .3s ease;\ border-radius: 8px 8px 0 0;\ box-shadow: 0 0 2rem rgba(0,0,0,0.5), 0vw 0 30vw -30vw #20C188 inset;\ animation: hello .5s linear;\ }\ .cnb-wrap.confirmed {\ animation: goodbye .8s linear;\ transform: translate(-50%,100%);\ box-shadow: 0 0 2rem rgba(0,0,0,0.5), -160vw 0 30vw -30vw #c0c2c2 inset;\ }\ .cnb-content {\ width: 100%;\ font-size: .75rem;\ text-align: left;\ }\ .cnb-content a {\ color: #0377fc;\ }\ .cnb-content a:hover {\ text-decoration: underline;\ }\ .cnb-close {\ background: none;\ border: 1px solid #fff;\ color: #fff;\ border-radius: 100%;\ width: 2rem;\ height: 2rem;\ padding: 0 0 0 1px;\ font-size: 1rem;\ text-align: center;\ line-height: 1.9rem;\ position: absolute;\ top: 50%;\ right: 1rem;\ transform: translateY(-50%);\ margin-top: 0 !important;\ }\ .cnb-close:before {\ margin: 0 0 0 1px !important;\ position: absolute;\ top: 50%;\ left: 50%;\ transform: translate(-50%,-50%);\ }\ @keyframes hello {\ 0% { transform: translate(-50%,100%); }\ 50% { transform: translate(-50%,100%); }\ 100% { transform: translate(-50%,0%); }\ }\ @keyframes goodbye {\ 0% { transform: translate(-50%,0%); }\ 50% { transform: translate(-50%,0%); }\ 100% { transform: translate(-50%,100%); }\ }\ </style>\ ';
		// banner HTML
		var cnbHTML = '\
			<div class="cnb-wrap">\ <div class="cnb-content">\ <p>If you continue browsing this website, you agree that we may process your personal data through the use of cookies, and we and our technology partners may store and access cookies on your device to identify you and your device, as well as for website analytics, site improvement and advertising. Please see our <a href="https://drive.google.com/a/trilogyed.com/file/d/171qFfXpP9zH4TOWL8ECUt6bgQ9J6PTqL/view?usp=sharing" target="_blank">Cookie Policy</a> for more information.</p> \ <div class="cnb-close icon-f-check-2" sui-button="secondary outline"></div>\ </div>\ </div>\ ';

		// add CSS and HTML
		$('head').append(cnbStyle);
		$('body').prepend(cnbHTML);

	 // on click of "OKAY" set the cookie
		$('.cnb-close').on('click',function(){
			var $cnbWrap = $('.cnb-wrap');
      JSCookies.setItem(cookieVal);
      $cnbWrap.addClass('confirmed');
			setTimeout(function(){
        $cnbWrap.remove();
      },1000);
		});
  }
}

$(document).ready(function(){
	cookieNotice();
});
//\
//\\ End Cookies Notice