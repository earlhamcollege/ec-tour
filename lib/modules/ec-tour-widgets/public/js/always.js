jQuery.expr[":"].contains = function (a, i, m) {
            return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;};

var $spans = $("[data-ec-tour-list] li");

$('#buildingSearch').keyup(function() {
    var val = this.value;
    if (val) {
        $spans.filter(':contains(' + val + ')').show();
        $spans.filter(':not(:contains(' + val + '))').hide();
    } else {
        $spans.show();
    }
});

$('[data-ec-tour-search] .search-button').on('click', function(){
	$('#buildingSearch').val('');
	$spans.show();
	$('#buildingSearch').focus();
});

