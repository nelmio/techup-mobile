/**
*
* @copyright (c) 2011 Nelmio
* @license http://opensource.org/licenses/gpl-3.0.html GNU Public License, version 3
*
*/

Ext.regApplication({
    name: 'techup',
    launch: function () {

        this.views.viewport = new this.views.Viewport();

        Ext.getStore('techup.Events').load();

        techup.views.viewport.setActiveItem(
            techup.views.eventsList
        );
    }
});