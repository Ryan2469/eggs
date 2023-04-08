const sixComponent = {
    init: function(){
        var component = document.querySelectorAll('[data-component]')
        component.forEach(function(element){
            element.addEventListener('click', function(){
                const component = this.getAttribute('data-component');
                switch (this.getAttribute('data-component')){
                    case 'modal':
                        var target = this.getAttribute('data-target');
                        Modal.init(target);
                        break;
                    case 'dropdown':
                        console.log('dropdown');
                        break;
                    
                }
            });
        });
    }
}

const Modal = {
    init: function(args){
        const target_id = document.getElementById(args);
        Modal.open(target_id, args);
        
        // let target_id = document.getElementById(target);
        var close = target_id.querySelector('.modal-close');
        close.addEventListener('click', function(){
            Modal.close(target_id, args);
        });
    },
    open: function(target_id, args){
        console.log('open');
        document.querySelector('body').classList.add('overflow-hidden');
        document.querySelector('.modal-overlay').classList.remove('hidden')
        document.getElementById(args).classList.remove('invisible');
        document.getElementById(args).classList.remove('hidden');
        document.getElementById(args).classList.add('overflow-y-auto');
        // target_id.querySelector('.modal-content').classList.remove('-translate-y-full');
        target_id.querySelector('.modal-content').classList.remove('opacity-0');
        target_id.querySelector('.modal-content').classList.add('opacity-100');
    },
    close: function(target_id, args){
        
        // target_id.querySelector('.modal-content').classList.add('-translate-y-full');
        setTimeout(function() {
            document.getElementById(args).classList.add('invisible');
            document.getElementById(args).classList.add('hidden');
            document.getElementById(args).classList.remove('overflow-y-auto');
            document.querySelector('.modal-overlay').classList.add('hidden')
            document.querySelector('body').classList.remove('overflow-hidden')
            target_id.querySelector('.modal-content').classList.remove('opacity-100');
            target_id.querySelector('.modal-content').classList.add('opacity-0');
        }, 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    sixComponent.init()
});

// Side Nav
const LayoutActivity = {
    init: function(){
        var self = this;
        $('.sideNavBtn').on('click', function () {
			self.off_canvas_open();
		});
		$('#off-canvas-overlay').on('click', function () {
			self.off_canvas_close();
		});
    },
    off_canvas_open: function () {
        document.querySelector('.sideNavBtn').classList.add('active');
        document.querySelector('body').classList.add('overlay-on');
    },
    off_canvas_close: function () {
        document.querySelector('.sideNavBtn').classList.remove('active');
        document.querySelector('body').classList.remove('overlay-on');
    },
}
let Component = {
    init: function(){
        var component = document.querySelectorAll('[data-component]')

        component.forEach(function(element){
            element.addEventListener('click', function(){
                const component = this.getAttribute('data-component');
                switch (this.getAttribute('data-component')){
                    case 'sideNav':
                        Component.sideNav();
                        break;
                }
            });
        });
    },
    sideNav : function (args){
        console.log('sideNav');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    LayoutActivity.init();
    Component.init();
    $(document).bind('keydown',function(e){
        if ( e.keyCode == 123 /* F12 */) {
            e.preventDefault();
            e.returnValue = false;
        }
    });
});
