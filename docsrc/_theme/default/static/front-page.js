/**
 * Defines the most minimal Heron layout: just a Map with a zoomslider.
 *
 **/
Heron.layout = {
	xtype: 'window',
	title: "Hello Heron",
 	height: 280, width: 450,
	layout: "fit",
	closeAction: "hide",

	/** Below are Heron-specific settings for the Heron MapPanel (xtype: 'gx_mappanel') */
	items: [
		{
			xtype: "gx_mappanel",
			layers: [new OpenLayers.Layer.WMS("World",
					"http://www2.demis.nl/wms/wms.ashx?",
       		{layers: "BlueMarble"})],
			zoom: 1
		}
	]
};

Ext.onReady(function() {
    var block = Ext.Element.get(Ext.DomQuery.select("div.execute")[0]);
    var button = new Ext.Button({
        text: "Run it!",
        cls: "execute",
        handler: function() {
			Heron.App.create();
			Heron.App.show();
        }
    });
    var container = Ext.Element.get(Ext.DomHelper.append(block, {tag: "div"}));
    container.setHeight(35, {callback: function() {button.render(container)}});
});