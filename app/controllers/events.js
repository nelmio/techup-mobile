/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

// TODO (a.k.a. never gonna happen): replace the "event" terms by "meetup"

app.controllers.events = new Ext.Controller(
    {
        index: function(options) {
            app.views.viewport.setActiveItem(
                app.views.upcomingEventsList, options.animation
            );
        },
        show: function(options) {
            var id = parseInt(options.id),
                event = app.stores.upcomingEvents.getById(id);
            if (event) {
                app.views.eventDetail.updateWithRecord(event);
                app.views.viewport.setActiveItem(
                    app.views.eventDetail,
                    options.animation
                );
            }
        },
        edit: function(options) {
        },
        description: function(options) {
            var id = parseInt(options.id),
                event = app.stores.upcomingEvents.getById(id);
            if (event) {
                app.views.eventDescription.updateWithRecord(event);
                app.views.viewport.setActiveItem(
                    app.views.eventDescription,
                    options.animation
                );
            }
        },
        attendees: function(options) {
            var id = parseInt(options.id),
                event = app.stores.upcomingEvents.getById(id);
            if (event) {
                app.views.eventAttendees.updateWithRecord(event);
                app.views.viewport.setActiveItem(
                    app.views.eventAttendees,
                    options.animation
                );
            }
        },
        map: function(options) {
            var id = parseInt(options.id),
                event = app.stores.upcomingEvents.getById(id);
            if (event) {
                app.views.eventMap.updateWithRecord(event);
                app.views.viewport.setActiveItem(
                    app.views.eventMap,
                    options.animation
                );
            }
        }
    }
);