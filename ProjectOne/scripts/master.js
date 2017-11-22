

var currentTabIndex = "0";

$(document).ready(function () 
{
    $("img[title]").tooltip();

    $tab = $("#tabs").tabs(
	{
        activate: function (e, ui) 
		{
            currentTabIndex = ui.newTab.index().toString();
            sessionStorage.setItem('tab-index', currentTabIndex);
        }
    });

    if (sessionStorage.getItem('tab-index') != null) 
	{
        currentTabIndex = sessionStorage.getItem('tab-index');
        console.log(currentTabIndex);
        $tab.tabs('option', 'active', currentTabIndex);
    } 
});