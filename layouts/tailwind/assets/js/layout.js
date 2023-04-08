$("link[href='https://xeant.com/assets/vendor/bootstrap/css/bootstrap.min.css']").remove();
// $('.page-loader').css('display', 'block');
// var theme = document.cookie.match('(^|;) ?' + 'theme' + '=([^;]*)(;|$)');
// if (theme == 'Y') {
// 	// Create new link Element 
// 	console.log(theme);
// 	var link = document.createElement('link');
// 	// set the attributes for link element 
// 	link.rel = 'stylesheet';
// 	link.type = 'text/css';
// 	link.href = '/privates/gjworks/src/Themes/Gjworks/assets/css/theme.css';

// 	// Get HTML head element to append  
// 	// link element to it  
// 	document.getElementsByTagName('HEAD')[0].appendChild(link);
// }

window.mobilecheck = function () {
	var check = false;
	(function (a) {
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	})(navigator.userAgent || navigator.vendor || window.opera);

	if (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {
		check = true;
	}
	return check;
};
if (mobilecheck()) {

} else {
	// var tag = document.createElement('script');
	// tag.src = "https://www.youtube.com/iframe_api";
	// var firstScriptTag = document.getElementsByTagName('script')[0];
	// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// 페이지 로딩 완료 전 실행할 스크립트 (전역 함수 선언 등)


window.Runnable = (function (callback, delay) {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimaitonFrame ||
		function (callback) {
			window.setTimeout(callback, delay);
		};
})();

var Handler = {
	post: function (callback, delay) {
		setTimeout(function () {
			Runnable(callback, 0);
		}, delay);
	}
};
var GjworksActivity = {

	init: function () {
		var self = this;
		
		// const theButton = document.querySelectorAll('.dropdown-btn');
		// const theText = document.querySelectorAll('.dropdown-content');

		// theButton.onclick = function () { 
		// 	for(let x of theText) {
		// 		x.classList.toggle('hidden');
		// 	}
		// };
		
	
		$('.dropdown-btn').on('click', function(){
			$( '.dropdown-content' ).toggleClass( 'hidden' );
		});
		$('input[name=theme_change]').on('click', function () {
			// $('input:checkbox[name=theme_change]').prop('checked',function(){
			// 	$(this).prop("checked", !$(this).prop("checked"));
			// 	// return !$(this).prop('checked');
			// });

			// GjworksActivity.userTheme(true);
			if ($(this).is(":checked")) {
				// $('input:checkbox[name=theme_change]').addClass('active');
				// document.querySelector('input:checkbox[name=theme_change]').classList.add('active');
				// $('input:checkbox[name=theme_change]').attr('checked', 'checked');
				// var theme_chage = document.querySelector('input:checkbox[name=theme_change]');
				// theme_chage.setAttribute('checked', 'checked');
				self.setDarkTheme();
			} else {
				// $('input:checkbox[name=theme_change]').removeClass('active');
				// $('input:checkbox[name=theme_change]').removeAttr('checked');
				self.delDarkTheme();
			}
		});
		
		// $('.account li a[data-toggle=popover]').popover({
		// 	// container: 'body',
		// 	html: true,
		// 	sanitize: false,
		// 	content: function () {
		// 		var content = $(this).attr("data-popover-content");
		// 		return $(content).children(".popover-body").html();
		// 	},
		// 	title: function () {
		// 		var title = $(this).attr("data-popover-content");
		// 		return $(title).children(".popover-heading").html();
		// 	}
		// }).on('shown.bs.popover', function () {
		// 	// console.log(GjworksActivity.getDarkTheme('theme'));
		// 	// var chk = $('#theme_change').is(":checked");

		// 	// if($('input[name=theme_change]:checked')){
		// 	// 	console.log('true');
		// 	// 	GjworksActivity.setDarkTheme('theme', 'Y', 365);
		// 	// }else{
		// 	// 	console.log('false');
		// 	// 	GjworksActivity.delDarkTheme('theme');
		// 	// }
		// 	$('input[name=theme_change]').on('click', function () {
		// 		// $('input:checkbox[name=theme_change]').prop('checked',function(){
		// 		// 	$(this).prop("checked", !$(this).prop("checked"));
		// 		// 	// return !$(this).prop('checked');
		// 		// });

		// 		GjworksActivity.userTheme(true);
		// 		if ($(this).is(":checked")) {
		// 			// $('input:checkbox[name=theme_change]').addClass('active');
		// 			document.querySelector('input:checkbox[name=theme_change]').classList.add('active');
		// 			// $('input:checkbox[name=theme_change]').attr('checked', 'checked');
		// 			// var theme_chage = document.querySelector('input:checkbox[name=theme_change]');
		// 			// theme_chage.setAttribute('checked', 'checked');
		// 			GjworksActivity.setDarkTheme();
		// 		} else {
		// 			// $('input:checkbox[name=theme_change]').removeClass('active');
		// 			// $('input:checkbox[name=theme_change]').removeAttr('checked');
		// 			GjworksActivity.delDarkTheme();
		// 		}
		// 	});
		// });

		if (mobilecheck()) {
			// https://youtu.be/LcF6ut-1M94
			// lWgvuOuZHfg
		} else {

		}

	},
	setDarkTheme: function () {
		localStorage.userThemeMode = 'dark';
		console.log(localStorage.userThemeMode);
	},
	getDarkTheme: function () {
		console.log(localStorage.userThemeMode);

		return localStorage.getItem('userThemeMode');
	},
	delDarkTheme: function () {
		console.log(localStorage.userThemeMode);
		return localStorage.removeItem('userThemeMode');
	},
	initDarkTheme: function () {
		var theme = GjworksActivity.getDarkTheme('theme');
		console.log('initDarkTheme');
		console.log(theme);
		if (theme == 'dark') {
			$('.slide-toggle').addClass('active');
			// if(document.querySelector('.slide-toggle').classList.length){
			// 	document.querySelector('.slide-toggle').classList.add('active');
			// }
			$('header .logo img').attr('src', '/plugins/gjworks/src/Themes/Gjworks/assets/images/gjworks_white.svg');
			// var chk = $("input[name=theme_change]:checkbox").prop("checked", true);
			$('input:checkbox[name=theme_change]').attr('checked', 'checked');
		} else {
			$('.slide-toggle').removeClass('active');
			// var chk = $("input[name=theme_change]:checkbox").prop("checked", false);
			$('header .logo img').attr('src', '/plugins/gjworks/src/Themes/Gjworks/assets/images/gjworks.svg');
			$('input:checkbox[name=theme_change]').removeAttr('checked');
		}
	},
	userTheme: function (toggle = false) {
		console.log('userTheme');
		let userMode = localStorage.userThemeMode || 'auto';
		const osMode = !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
		if (toggle) {
			switch (userMode) {
				case 'auto':
					$('header .logo img').attr('src', '/plugins/gjworks/src/Themes/Gjworks/assets/images/gjworks_white.svg');
					userMode = 'dark';
					break;
				case 'dark':
					$('header .logo img').attr('src', '/plugins/gjworks/src/Themes/Gjworks/assets/images/gjworks.svg');
					userMode = 'light';
					break;
				default:
					userMode = 'auto';
			}
			localStorage.userThemeMode = userMode;
		}
		console.log(`current mode : ${userMode}`);
		window.__THEME_MODE = userMode === 'auto' ? osMode : userMode;
		document.getElementsByTagName('html')[0].classList[window.__THEME_MODE === 'dark' ? 'add' : 'remove']('darkmode');
	}
}
document.addEventListener('DOMContentLoaded', () => {
	// document.querySelector('img.lazyload').classList.lozyload();
	// if (!!window.matchMedia) {
	// 	['light', 'dark'].forEach(mode => {
	// 		window.matchMedia(`(prefers-color-scheme: ${mode})`).addListener(e => {
	// 			if (!!e.matches) {
	// 				GjworksActivity.userTheme();
	// 			}
	// 		});
	// 	});
	// }
	GjworksActivity.init();
	// GjworksActivity.initDarkTheme();
	// GjworksActivity.userTheme();

	// $('[data-toggle="tooltip"]').tooltip()
	// var elementsTooltip = document.querySelectorAll('[data-toggle="tooltip"]');
	var agent = navigator.userAgent.toLowerCase();
	if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
		setTimeout(function () {
			document.querySelector('.ie-browser-warring').classList.remove('hidden');
		}, 1000);
	}

	window.addEventListener('scroll', function(){
		// let scrollPosition = document.querySelector('html').scrollTop;
		// let headerContent = document.querySelector('header');
		// let promotionContent = document.querySelector('.promotion-content').offsetHeight;
		
		// if(scrollPosition >=28 && scrollPosition < promotionContent){
		// 	console.log(scrollPosition);
		// 	console.log(promotionContent);
		// 	headerContent.classList.add('header-dark');
		// 	$('header .logo img').attr('src', '/plugins/gjworks/src/Themes/Gjworks/assets/images/gjworks_white.svg');
		// }else{
		// 	headerContent.classList.remove('header-dark');
		// 	$('header .logo img').attr('src', '/plugins/gjworks/src/Themes/Gjworks/assets/images/gjworks.svg');
		// }
	});

	// var darkTheme = GjworksActivity.getDarkTheme('theme');
	// Handler.post(function () {
	// 	document.querySelector('.page-loader').classList.add('hidden');
	// 	// new WOW().init();
	// }, 300);
});