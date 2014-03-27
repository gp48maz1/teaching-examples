(function (N) {
    var $theForm;

    var subtract = function(a,b) {
        return a-b;
    };
    
    var handleFormSubmit = function() {
        var a = $theForm.children("input[name=a]").val();
        var b = $theForm.children("input[name=b]").val();
        alert(subtract(a, b));
        return false;
    }

    N.Diffr = function() {
    };

    N.Diffr.prototype.init = function(jqelem) {
        $theForm = jqelem;
        $theForm.on("submit", handleFormSubmit)
    };        
    
})(window);