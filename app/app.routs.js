function getRouts(navSelect) {
    var selected,
        navItems = [
            {
                feature: "home",
                path: "/",
                template: "<home-page></home-page>",
                navBar: true
            }
        ]
    
    if(!!navSelect) {
        selected = []
        for(var i = 0; i < navItems.length; i++) {
            if(navItems[i][navSelect]) {
                selected.push(navItems[i]);
            }
        }
    } else {
        selected = navItems;
    }
  return selected
}