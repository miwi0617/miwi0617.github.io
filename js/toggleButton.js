$(document).on('click', '#show_button', function() {
    var $this = $(this);
    $this.prop('id', 'hide_button');
    $this.val("Show Root");
    d3.json("json/programmingLanguages.json", function(json) {
        root = json;
        root.x0 = h / 2;
        root.y0 = 0;
        // Initialize the display to show a few nodes.
        root;
        update(root);
    });
});
$(document).on('click', '#hide_button', function() {
    var $this = $(this);
    $this.prop('id', 'show_button');
    $this.val("Show All");
    d3.json("json/programmingLanguages.json", function(json) {
        root = json;
        root.x0 = h / 2;
        root.y0 = 0;

        function toggleAll(d) {
                if (d.children) {
                    d.children.forEach(toggleAll);
                    toggle(d);
                }
            }
            // Initialize the display to show a few nodes.
        root.children.forEach(toggleAll);
        update(root);
    });
});