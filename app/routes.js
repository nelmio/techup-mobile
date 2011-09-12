Ext.Router.draw(function(map) {
    map.connect(':controller/:action');
    map.connect(':controller/:store/:id', {action: 'show'});
});