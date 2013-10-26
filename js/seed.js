define(['foliage'], function(f) {
    var seed = {
        template: {
            simple: function(content) {
                return f.all(
                    f.p(f.h1(content.header)),
                    f.p(content.content)
                );
            }
        },
        render: function(runner) {
            console.log("Doing stuff!");
            runner();
        }
    };
    return seed;
});
