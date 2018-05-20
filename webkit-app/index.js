var menu = new nw.Menu({
  type: 'menubar'
});
var menuItems = new nw.Menu();

menuItems.append(
  new nw.MenuItem({
    label: 'Surf Google',
    click: function() {
      window.location.href = 'https://google.com';
    }
  })
);

menuItems.append(
  new nw.MenuItem({
    label: 'Surf Github',
    click: function() {
      window.location.href = 'https://github.com';
    }
  })
);

menu.append(
  new nw.MenuItem({
    label: "The Menu",
    submenu: menuItems
  })
);

var w = nw.Window.get();

w.menu = menu

