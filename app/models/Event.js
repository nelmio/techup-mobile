/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

app.models.Event = Ext.regModel("app.models.Event", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: 'dateFrom', type: 'date', dateFormat: 'c'},
        {name: 'dateTo', type: 'date', dateFormat: 'c'},
        {
            name: 'dateFromShort',
            convert: function(value, record) {
                return record.get('dateFrom').format('d.m. Y, h:i');
            }
        },
        {
            name: 'dateToShort',
            convert: function(value, record) {
                return record.get('dateTo').format('d.m. Y, h:i');
            }
        },
        {
            name: 'dateFromToLine1',
            convert: function(value, record) {
                var dateFrom, dateTo, dateFromFormated, dateToFormated, hourFrom, hourTo;
                dateFrom = record.get('dateFrom');
                dateTo = record.get('dateTo');
                dateFromFormated = dateFrom.format('d.m.Y');
                dateToFormated = dateTo.format('d.m.Y');
                hourFrom = dateFrom.format('h:i'); 
                hourTo = dateTo.format('h:i'); 
                
                if (dateToFormated === dateFromFormated) {
                    return dateFromFormated;
                } else {
                    return dateFromFormated + ' ' + hourFrom;
                }
            }
        },
        {
            name: 'dateFromToLine2',
            convert: function(value, record) {
                var dateFrom, dateTo, dateFromFormated, dateToFormated, hourFrom, hourTo;
                dateFrom = record.get('dateFrom');
                dateTo = record.get('dateTo');
                dateFromFormated = dateFrom.format('d.m.Y');
                dateToFormated = dateTo.format('d.m.Y');
                hourFrom = dateFrom.format('h:i'); 
                hourTo = dateTo.format('h:i'); 
                
                if (dateToFormated === dateFromFormated) {
                    return hourFrom + ' - ' + hourTo;
                } else {
                    return dateToFormated + ' ' + hourTo;
                }
            }
        },
        {name: "location", type: "string"},
        {name: "city", type: "string"},
        {name: "canton", type: "string"},
        {name: "lat", type: "float"},
        {name: "lon", type: "float"},
        {name: "description", type: "string"},
        {name: "price", type: "string"},
        {name: "link", type: "string"},
        {name: "twitter_handle", type: "string"},
        {name: "attendees", type: "auto"},
        {name: "dateGroup", type: "string"},
        
    ]
});

app.models.Attendee = Ext.regModel("app.models.Attendee", {
    fields: [
        {name: "fullname", type: "string"},
        {name: "twitter_handle", type: "string"}
    ]
});

var createEventsListStore = function (name, url) {
    app.stores[name + 'Events'] = new Ext.data.Store({
        // you need the complete namespace of the model
        model : 'app.models.Event',
        proxy : {
            type : 'ajax',
            url : url,
            reader : {
                type : 'json',
                root : 'events'
            }
        },
        getGroupString : function (record) {

            return record.get('dateGroup');
        },
        controllerAction: name
    });

}

createEventsListStore('upcoming', 'http://techup.ch/api/events/upcoming.json');
createEventsListStore('past', 'http://techup.ch/api/events/past.json');
