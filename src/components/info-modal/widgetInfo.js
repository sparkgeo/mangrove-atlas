const widgetInfo = {
  mangrove_extent: {
    Title: '<h1>Global extent of mangroves for select years from 1996 to 2016.</h1>',
    Overview: '<p>This data set shows the the areal extent of mangrove habitat (km<sup>2</sup>) in a specific location between at different times. Where location is a defined geometry; such as a country, protected area or custom area-of-interest. The data set was generated by Aberystwyth University and soloEO within the framework of the Global Mangrove Watch (GMW) project, which is a part of the Japan Aerospace Exploration Agency’s (JAXA) Kyoto & Carbon Initiative and the Mangrove Capital Africa Programme coordinated by Wetlands International and financed by DOB Ecology. The map (v2.0) depicts the global extent of mangrove forests for the year 2010, derived by Random Forest Classification of a combination of L-band radar (ALOS PALSAR) and optical (Landsat-5, -7) satellite data. All satellite data and software used to derive the GMW mangrove maps are available in the public domain. Approximately 15,000 Landsat scenes and 1,500 ALOS PALSAR (1 x 1 degree) mosaic tiles were used to create optical and radar image composites covering the coastlines along the tropical and sub-tropical coastlines in the Americas, Africa, Asia and Oceania. The classification was confined using a mangrove habitat mask, which defined regions where mangrove ecosystems can be expected to exist. The mangrove habitat definition was based on geographical parameters such as latitude, elevation and distance from ocean water. Training for the habitat mask and classification of the 2010 mangrove mask was based on randomly sampling 38 million points using the mangrove masks (for the year 2000) of Giri et al. (2011) and Spalding et al. (2010) and the water occurrence layer defined by Pekel et al. (2017). The data set is available for download at, <a href="http://data.unep-wcmc.org/datasets/45" target="_blank">http://data.unep-wcmc.org/datasets/45</a></p>',
    Reference: '<p>Bunting P., Rosenqvist A., Lucas R., Rebelo L-M., Hilarides L., Thomas N., Hardy A., Itoh T., Shimada M. and Finlayson C.M. (2018). <a href="https://www.mdpi.com/2072-4292/10/10/1669 target="_blank">The Global Mangrove Watch – a New 2010 Global Baseline of Mangrove Extent.</a> Remote Sensing, 2018, 10, 1669; doi:10.3390/rs10101669</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"></p>',
  },
  mangrove_net_change: {
    Title: '<h1>Global change in extent of mangroves for select years from 1996 to 2016.</h1>',
    Overview: '<p>This data set shows the the change in areal extent of mangrove habitat in a specific location between different time-periods. Where location is a defined geometry; such as a country, protected area or custom area-of-interest. The difference in habitat extent was calculated between 2 consecutive time-periods (t1 and t2); gain and loss are defined as the increase and decrease in extent (km<sup>2</sup>) between t1 and t2, respectively. Net change (km<sup>2</sup>) for the period t1-t2 is the sum of gain and loss. Data on the areal extent of mangrove habitat was generated by Aberystwyth University and soloEO within the framework of the Global Mangrove Watch (GMW) project, which is a part of the Japan Aerospace Exploration Agency’s (JAXA) Kyoto & Carbon Initiative and the Mangrove Capital Africa Programme coordinated by Wetlands International and financed by DOB Ecology. The map (v2.0) depicts the global extent of mangrove forests for the year 2010, derived by Random Forest Classification of a combination of L-band radar (ALOS PALSAR) and optical (Landsat-5, -7) satellite data. All satellite data and software used to derive the GMW mangrove maps are available in the public domain. Approximately 15,000 Landsat scenes and 1,500 ALOS PALSAR (1 x 1 degree) mosaic tiles were used to create optical and radar image composites covering the coastlines along the tropical and sub-tropical coastlines in the Americas, Africa, Asia and Oceania. The classification was confined using a mangrove habitat mask, which defined regions where mangrove ecosystems can be expected to exist. The mangrove habitat definition was based on geographical parameters such as latitude, elevation and distance from ocean water. Training for the habitat mask and classification of the 2010 mangrove mask was based on randomly sampling 38 million points using the mangrove masks (for the year 2000) of Giri et al. (2011) and Spalding et al. (2010) and the water occurrence layer defined by Pekel et al. (2017). The data set is available for download at, <a href="http://data.unep-wcmc.org/datasets/45" target="_blank">http://data.unep-wcmc.org/datasets/45</a></p>',
    Reference: '<p>Bunting P., Rosenqvist A., Lucas R., Rebelo L-M., Hilarides L., Thomas N., Hardy A., Itoh T., Shimada M. and Finlayson C.M. (2018). <a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">The Global Mangrove Watch – a New 2010 Global Baseline of Mangrove Extent.</a> Remote Sensing, 2018, 10, 1669; doi:10.3390/rs10101669</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">https://creativecommons.org/licenses/by/4.0/</a></p>',
  },
  mangrove_coverage: {
    Title: '<h1>Proportion of coastline covered by mangrove forest</h1>',
    Overview: '<p>This data set shows the proportional length of coastline occupied by mangrove habitat in a specific location at different times”. Where location is a defined geometry; such as a country, protected area or area-of-interest. This was calculated by intersecting a polygon of the areal extent of mangrove habitat (<a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">Bunting et al. (2018)</a>) with a multi-line represention of the global coastline (<a href="https://www.naturalearthdata.com/downloads/10m-physical-vectors/10m-coastline/">Natural Earth coastline version 4.1.0</a>) within each geometry. The percentage (%) covered was then calculated as the sum of the length of coastline occupied by mangrove habitat (km) divided by the total length of coastline (km) within the geometry multiplied by 100. Note this calculation is in development as 1) the length of a fractal-like coastlines depend on the measurement scale, and 2) defining when a 1D coast-line is occupied by 2D mangrove habitat vectors is open to interpretation, i.e., does the habitat need to intersect the coast line, a buffered distance etc.</p>',
    Reference: '<p>Proportion of coastline covered by mangrove forest. Mangrove Atlas. Wetlands International and partners.</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">https://creativecommons.org/licenses/by/4.0/</a></p>',
  },
  mangrove_biomass: {
    Title: '<h1>Global mangrove aboveground biomass density for selected years between 1997 and 2016</h1>',
    Overview: '<p>This data set shows the aboveground biomass (AGB) density (mg ha<sup>-1</sup>) of mangrove habitat  in a specific location at different times. It is based on the global extent of mangroves for select years from 1996 to 2016 (<a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">Bunting et al. (2018)</a>) combined with the canopy height and allometric relationships of <a href= https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1665>Simard et al</a>. They measured AGB and canopy height at 331 plots between 26°S and 25°N. They used those measurements to create global and three regional allometric models relating AGB to basal area weighted height and maximum canopy height. To map AGB across the tropics, they applied the regional allometric models to a map of basal area weighted height. The map of basal area weighted height was derived from ground elevation from the Shuttle Radio Topography Mission (SRTM) (2000) and canopy elevation from ICESat/GLAS spaceborne lidar (2003-2009).</p>',
    Reference: '<p>More info available soon</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p>More info available soon</p>',
  },
  mangrove_height: {
    Title: '<h1>Global mangrove canopy height for selected years between 1997 and 2016</h1>',
    Overview: '<p>This data set shows the maximum and basal-weighted area canopy height (m) of mangrove habitat  in a specific location at different times. It is based on the global extent of mangroves for select years from 1996 to 2016 (<a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">Bunting et al. (2018)</a>) combined with the canopy height and allometric relationships of <a href= https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1665>Simard et al</a>. They measured AGB and canopy height at 331 plots between 26°S and 25°N. They used those measurements to create global and three regional allometric models relating AGB to basal area weighted height and maximum canopy height. To map AGB across the tropics, they applied the regional allometric models to a map of basal area weighted height. The map of basal area weighted height was derived from ground elevation from the Shuttle Radio Topography Mission (SRTM) (2000) and canopy elevation from ICESat/GLAS spaceborne lidar (2003-2009).</p>',
    Reference: '<p>More info available soon</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p>More info available soon</p>',
  },
  mangrove_alerts: {
    Title: '<h1>Disturbance alerts for mangrove habitat in Rufiji Delta</h1>',
    Overview: '<p>This is experimental data set being developed by Aberystwyth University aims to provide near real-time notifications of change in mangrove extent, similar to the UMD-GLADS forest disturbance product. Note at present only a place-holder dataset is show for a small region.</p>',
    DataLink: '<p>More info available soon</p>',
    Reference: '<p>More info available soon</p>',
    'Date of content': '<p>More info available soon</p>',
    License: '<p>More info available soon</p>',
  },
  conservation_hotspots: {
    Title: '<h1>Conservation status advice for mangrove habitat in Africa for 2010</h1>',
    Overview: '<p>This data set shows categorical conservation advice at different time scales for mangrove habitat in Africa. This was derived from a muli-parameter index taking into account many physical (storm and drought frequency, change in climate, mudflat extension), biological (mangrove biomass, changes in extent) and socio-economic factors (population density, fishing volume, ect.). Using different weighting for each time scale this index was translated into categoriesl of conservation advice relevant at short-, medium- and long- term time scales. Data sources used in the index pertain to various time periods between 1996 and 2016.</p>',
    DataLink: '<p>More info available soon</p>',
    Reference: '<p>More info available soon</p>',
    'Date of content': '<p>2010</p>',
    License: '<p>More info available soon</p>',
  },
  mangrove_activity: {
    Title: '<h1>Ranking of change in extent of mangroves for select years from 1996 to 2016.</h1>',
    Overview: '<p>This data set shows a ranking of locations with the largest change in areal extent of mangrove habitat between different times. Where location is a defined geometry, such as a country, protected area or area-of-interest. The difference in mangrove habitat extent was calculated between 2 consecutive time periods (t1 and t2); gain and loss are defined as the increase and decrease in extent between t1 and t2, respectively. Net change for the period t1-t2 is the sum of gain and loss. Locations are then ranked by their total gain or loss (km<sup>2</sup>) within the specified time-period.Data on the areal extent of mangrove habitat was generated by Aberystwyth University and soloEO within the framework of the Global Mangrove Watch (GMW) project, which is a part of the Japan Aerospace Exploration Agency’s (JAXA) Kyoto & Carbon Initiative and the Mangrove Capital Africa Programme coordinated by Wetlands International and financed by DOB Ecology. The map (v2.0) depicts the global extent of mangrove forests for the year 2010, derived by Random Forest Classification of a combination of L-band radar (ALOS PALSAR) and optical (Landsat-5, -7) satellite data. All satellite data and software used to derive the GMW mangrove maps are available in the public domain. Approximately 15,000 Landsat scenes and 1,500 ALOS PALSAR (1 x 1 degree) mosaic tiles were used to create optical and radar image composites covering the coastlines along the tropical and sub-tropical coastlines in the Americas, Africa, Asia and Oceania. The classification was confined using a mangrove habitat mask, which defined regions where mangrove ecosystems can be expected to exist. The mangrove habitat definition was based on geographical parameters such as latitude, elevation and distance from ocean water. Training for the habitat mask and classification of the 2010 mangrove mask was based on randomly sampling 38 million points using the mangrove masks (for the year 2000) of Giri et al. (2011) and Spalding et al. (2010) and the water occurrence layer defined by Pekel et al. (2017). The data set is available for download at, <a href="http://data.unep-wcmc.org/datasets/45" target="_blank">http://data.unep-wcmc.org/datasets/45</a></p>',
    Reference: '<p>Bunting P., Rosenqvist A., Lucas R., Rebelo L-M., Hilarides L., Thomas N., Hardy A., Itoh T., Shimada M. and Finlayson C.M. (2018). <a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">The Global Mangrove Watch – a New 2010 Global Baseline of Mangrove Extent.</a> Remote Sensing, 2018, 10, 1669; doi:10.3390/rs10101669</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">https://creativecommons.org/licenses/by/4.0/</a></p>',
  }
};

export default widgetInfo;
