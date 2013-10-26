define(['seed'], function(seed){

    seed.render(function() {
        seed.template.simple({
            header: "hej",
            content: "Text"
        })("body");
    });
});
