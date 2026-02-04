var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_BuenosAires_Ortho_1 = new ol.layer.Tile({
            'title': 'BuenosAires_Ortho',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://hicsuntdracone.github.io/BuenosAires//XYZTiles/BuenosAires_Ortho/{z}/{x}/{y}.png'
            })
        });

        var lyr_BuenosAires_NDVI_2 = new ol.layer.Tile({
            'title': 'BuenosAires_NDVI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://hicsuntdracone.github.io/BuenosAires/XYZTiles/BuenosAires_NDVI/{z}/{x}/{y}.png'
            })
        });

        var lyr_BuenosAires_NDRE_3 = new ol.layer.Tile({
            'title': 'BuenosAires_NDRE',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://hicsuntdracone.github.io/BuenosAires/XYZTiles/BuenosAires_NDRE/{z}/{x}/{y}.png'
            })
        });

        var lyr_BuenosAires_Crown_NDVI_4 = new ol.layer.Tile({
            'title': 'BuenosAires_Crown_NDVI',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://hicsuntdracone.github.io/BuenosAires/XYZTiles/BuenosAires_Crown_NDVI/{z}/{x}/{y}.png'
            })
        });
var format_BuenosAiresPalmPlantations_Contour_5 = new ol.format.GeoJSON();
var features_BuenosAiresPalmPlantations_Contour_5 = format_BuenosAiresPalmPlantations_Contour_5.readFeatures(json_BuenosAiresPalmPlantations_Contour_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuenosAiresPalmPlantations_Contour_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuenosAiresPalmPlantations_Contour_5.addFeatures(features_BuenosAiresPalmPlantations_Contour_5);
var lyr_BuenosAiresPalmPlantations_Contour_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuenosAiresPalmPlantations_Contour_5, 
                style: style_BuenosAiresPalmPlantations_Contour_5,
                popuplayertitle: 'Buenos Aires Palm Plantations_Contour',
                interactive: true,
                title: '<img src="styles/legend/BuenosAiresPalmPlantations_Contour_5.png" /> Buenos Aires Palm Plantations_Contour'
            });
var format_Block_Boundaries_6 = new ol.format.GeoJSON();
var features_Block_Boundaries_6 = format_Block_Boundaries_6.readFeatures(json_Block_Boundaries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Block_Boundaries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Block_Boundaries_6.addFeatures(features_Block_Boundaries_6);
var lyr_Block_Boundaries_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Block_Boundaries_6, 
                style: style_Block_Boundaries_6,
                popuplayertitle: 'Block_Boundaries',
                interactive: false,
                title: '<img src="styles/legend/Block_Boundaries_6.png" /> Block_Boundaries'
            });
var format_BuenosAires_Trees_7 = new ol.format.GeoJSON();
var features_BuenosAires_Trees_7 = format_BuenosAires_Trees_7.readFeatures(json_BuenosAires_Trees_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuenosAires_Trees_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuenosAires_Trees_7.addFeatures(features_BuenosAires_Trees_7);
var lyr_BuenosAires_Trees_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuenosAires_Trees_7, 
                style: style_BuenosAires_Trees_7,
                popuplayertitle: 'BuenosAires_Trees',
                interactive: true,
    title: 'BuenosAires_Trees<br />\
    <img src="styles/legend/BuenosAires_Trees_7_0.png" /> 0.1 - 0.5<br />\
    <img src="styles/legend/BuenosAires_Trees_7_1.png" /> 0.5 - 0.6<br />\
    <img src="styles/legend/BuenosAires_Trees_7_2.png" /> 0.6 - 0.8<br />\
    <img src="styles/legend/BuenosAires_Trees_7_3.png" /> 0.8 - 1<br />' });
var group_Vectors = new ol.layer.Group({
                                layers: [lyr_BuenosAiresPalmPlantations_Contour_5,lyr_Block_Boundaries_6,lyr_BuenosAires_Trees_7,],
                                fold: 'open',
                                title: 'Vectors'});
var group_Rasters = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_BuenosAires_Ortho_1,lyr_BuenosAires_NDVI_2,lyr_BuenosAires_NDRE_3,lyr_BuenosAires_Crown_NDVI_4,],
                                fold: 'open',
                                title: 'Rasters'});

lyr_GoogleSatellite_0.setVisible(true);lyr_BuenosAires_Ortho_1.setVisible(true);lyr_BuenosAires_NDVI_2.setVisible(false);lyr_BuenosAires_NDRE_3.setVisible(false);lyr_BuenosAires_Crown_NDVI_4.setVisible(false);lyr_BuenosAiresPalmPlantations_Contour_5.setVisible(true);lyr_Block_Boundaries_6.setVisible(true);lyr_BuenosAires_Trees_7.setVisible(true);
var layersList = [group_Rasters,group_Vectors];
lyr_BuenosAiresPalmPlantations_Contour_5.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', 'Length': 'Length', });
lyr_Block_Boundaries_6.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Block Name': 'Block Name', });
lyr_BuenosAires_Trees_7.set('fieldAliases', {'id': 'id', 'NDVI': 'NDVI', 'NDRE': 'NDRE', 'Elevation': 'Elevation', });
lyr_BuenosAiresPalmPlantations_Contour_5.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', 'Length': 'TextEdit', });
lyr_Block_Boundaries_6.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Block Name': 'TextEdit', });
lyr_BuenosAires_Trees_7.set('fieldImages', {'id': '', 'NDVI': 'TextEdit', 'NDRE': '', 'Elevation': '', });
lyr_BuenosAiresPalmPlantations_Contour_5.set('fieldLabels', {'ID': 'hidden field', 'ELEV': 'inline label - always visible', 'Length': 'hidden field', });
lyr_Block_Boundaries_6.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Block Name': 'no label', });
lyr_BuenosAires_Trees_7.set('fieldLabels', {'id': 'hidden field', 'NDVI': 'inline label - always visible', 'NDRE': 'inline label - always visible', 'Elevation': 'inline label - always visible', });
lyr_BuenosAires_Trees_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});