function setupCollapsible() {
    $("div.CollapsedTitle").on("click", toggleCollapsible);
    $("div.ExpandedTitle").on("click", toggleCollapsible);
}

function toggleCollapsible() {
    collapsible = $(this).parent().find("div.Collapsible");
    if (collapsible.css("display") == "none") {
        collapsible.css("display", "block");
        $(this).parent().find("div.CollapsedTitle").css("display", "none");
        $(this).parent().find("div.ExpandedTitle").css("display", "block");
    }
    else {
        collapsible.css("display", "none");
        $(this).parent().find("div.CollapsedTitle").css("display", "block");
        $(this).parent().find("div.ExpandedTitle").css("display", "none");
    }
}

$(window).load(setupCollapsible);