function loadMenuItems(categoryShortName) {
    if (!categoryShortName) {
        var randomIndex=Math.floor(Math.random()*menuCategories.length);
        categoryShortName=menuCategories[randomIndex].short_name;
    }
    var categoryPromise=$http({
        method: "GET",
        url: (ApiBasePath+"/menu_items.json"),
        params: {
            category: categoryShortName
                }
    });
    categoryPromise.then(function(response) {
        var menuItems = response.data.menu_items;
        }).catch(function(error) {
                console.log("Error loading menu items:", error);
                 });
        }
