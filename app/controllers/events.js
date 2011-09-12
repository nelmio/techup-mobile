/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

// TODO (a.k.a. never gonna happen): replace the "event" terms by "meetup"
Ext.regController(
    'events',
    (function () {
        var that, eventList, loadStore;
        
        loadStore = function (store, callback) {
            if (typeof callback !== 'function') {
                callback = function () {};
            }
            
            if (store.data.length === 0) {
                store.load(callback);
            } else {
                callback();
            }
        };
        
        setEventList = function (options, store) {

            loadStore(store, function () {
                app.views.eventsList.bindStore(store);

                app.views.viewport.setActiveItem(
                    app.views.eventsList, options.animation
                );
            });

        }
        
        that = {
            upcoming: function(options) {
                setEventList(options, app.stores.upcomingEvents);
            },
            past: function(options) {
                setEventList(options, app.stores.pastEvents);
            },
            show: function(options) {

                var event, store;
                
                store = app.stores[options.store + 'Events'];


                if (!store) {
                    // TODO
                }
                
                loadStore(
                    store,
                    function () {
                        event = store.getById(parseInt(options.id));


                        if (!event) {
                            // possibilities:
                            // * try other store
                            // * redirect home
                        }

                        //event = options.record;
                        if (event) {
                            app.views.eventDetail.updateWithRecord(event);
                            app.views.viewport.setActiveItem(
                                app.views.eventDetail,
                                options.animation
                            );
                        }
                    }
                );
                
                
            },
            edit: function(options) {
            },
            description: function(options) {
                var event = options.record;

                if (event) {
                    app.views.eventDescription.updateWithRecord(event);
                    app.views.viewport.setActiveItem(
                        app.views.eventDescription,
                        options.animation
                    );
                }
            },
            attendees: function(options) {
                var event = options.record;

                if (event) {
                    app.views.eventAttendees.updateWithRecord(event);
                    app.views.viewport.setActiveItem(
                        app.views.eventAttendees,
                        options.animation
                    );
                }
            },
            map: function(options) {
                var event = options.record;

                if (event) {
                    app.views.eventMap.updateWithRecord(event);
                    app.views.viewport.setActiveItem(
                        app.views.eventMap,
                        options.animation
                    );
                }
            }
        };
        return that;
    }())
);