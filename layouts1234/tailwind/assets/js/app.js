
class App {
    constructor(mode)
    {
        this.mode = mode
        this.publicMethod(mode);
        
    }
    publicMethod (mode)
    {
        if(mode == 'debug_off'){
            console.log = function(){};
            console.clear();
        }
    }
    setLocalStorage(value)
    {
        localStorage.userMode = this.mode;
        localStorage.userValue = value;
    }
    getLocalStorage(value)
    {
        var mode = localStorage.getItem('userMode');
        var value = localStorage.getItem('userValue');
        return mode, value;
    }
    log(data, msg)
    {
        if(this.mode == 'debug_on'){
            if ( data.constructor == Array ){
                type_of = 'Array';
            }else if(data.constructor == Object){
                data = JSON.stringify(data);
                type_of = 'Object';
            }
            var callerFunc = arguments.callee.caller.toString();
            var callerFuncName = (callerFunc.substring(callerFunc.indexOf("function") + 9, callerFunc.indexOf("(")) || "anoynmous");
                console.log(callerFuncName)
            var colorbind = '%c Message : '+msg+'%c data : '+data+' %c type of : '+type_of+' %c function : '+callerFuncName;
                
            setTimeout(console.log.bind(console, colorbind,  "color:orange;padding:5px;border-radius: 5px;line-height: 26px;","color:#3469f8;padding:5px;border-radius: 5px;line-height: 26px;", "background: #17B6C8;color:#fff;padding:5px;border-radius: 5px;line-height: 26px;","color:#f00;padding:5px;border-radius: 5px;line-height: 26px;"));
        }
       
    }
}