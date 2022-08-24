const widgetInfo = {
  mangrove_extent: {
    Title: '<h1>Global extent of mangroves for select years from 1996 to 2016.</h1>',
    Overview: '<p>This data set shows the the areal extent of mangrove habitat (km<sup>2</sup>) and the length of coast with mangrove forests, in a specific location at different times.</p><p>The data set was generated by Aberystwyth University and soloEO within the framework of the Global Mangrove Watch (GMW) project, which is a part of the Japan Aerospace Exploration Agency’s (JAXA) Kyoto & Carbon Initiative and the Mangrove Capital Africa Programme coordinated by Wetlands International and financed by DOB Ecology. The map (v2.0) depicts the global extent of mangrove forests for the year 2010, derived by Random Forest Classification of a combination of L-band radar (ALOS PALSAR) and optical (Landsat-5, and Landsat-7) satellite data. All data and software used to derive the GMW mangrove maps are available in the public domain. Approximately 15,000 Landsat scenes and 1,500 ALOS PALSAR (1 x 1 degree) mosaic tiles were used to create optical and radar image composites covering the coastlines along the tropical and sub-tropical coastlines in the Americas, Africa, Asia and Oceania. The classification was constrained using a mangrove habitat mask, which defined regions where mangrove ecosystems likely exist. The mangrove habitat definition was based on geographical parameters such as latitude, elevation and distance from ocean water. Training for the habitat mask and classification of the 2010 mangrove mask was based on randomly sampling 38 million points using the mangrove masks (for the year 2000) of Giri et al. (2011) and Spalding et al. (2010) and the water occurrence layer defined by Pekel et al. (2017). The data set is available for download at <a href="http://data.unep-wcmc.org/datasets/45" target="_blank">http://data.unep-wcmc.org/datasets/45</a></p><p>The proportional length of coastline occupied by mangrove habitat was calculated by intersecting a polygon of the areal extent of mangrove habitat (<a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">Bunting et al. (2018)</a>) buffered by 200 m, with a multi-line represention of the global coastline (<a href="https://osmdata.openstreetmap.de/">OSM coastlines version 2020-06-29 </a>) within each geometry. The percentage (%) covered was then calculated as the sum of the length of coastline occupied by mangrove habitat (km) divided by the total length of coastline (km) within the geometry multiplied by 100. The calculations were carried out at 30 m or 300 m scale, depending on the size of the geometry. Note coverage length calculations are still under validation.</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a></p>',
  },
  mangrove_net_change: {
    Title: '<h1>Global change in extent of mangroves for select years from 1996 to 2016.</h1>',
    Overview: '<p>This data set shows the the change in areal extent of mangrove habitat in a specific location between different time-periods. The locations are defined geometries such as countries, protected areas or custom areas-of-interest. The difference in habitat extent was calculated between 2 consecutive time-periods (t1 and t2); gain and loss are defined as the increase and decrease in extent (km<sup>2</sup>) between t1 and t2, respectively. Net change (km<sup>2</sup>) for the period t1-t2 is the sum of gain and loss. Data on the areal extent of mangrove habitat was generated by Aberystwyth University and soloEO within the framework of the Global Mangrove Watch (GMW) project, which is a part of the Japan Aerospace Exploration Agency’s (JAXA) Kyoto & Carbon Initiative and the Mangrove Capital Africa Programme coordinated by Wetlands International and financed by DOB Ecology. The map (v2.0) depicts the global extent of mangrove forests for the year 2010, derived by Random Forest Classification of a combination of L-band radar (ALOS PALSAR) and optical (Landsat-5 and Landsat-7) satellite data. All satellite data and software used to derive the GMW mangrove maps are available in the public domain. Approximately 15,000 Landsat scenes and 1,500 ALOS PALSAR (1 x 1 degree) mosaic tiles were used to create optical and radar image composites covering the coastlines along the tropical and sub-tropical coastlines in the Americas, Africa, Asia and Oceania. The classification was confined using a mangrove habitat mask, which defined regions where mangrove ecosystems can be expected to exist. The mangrove habitat definition was based on geographical parameters such as latitude, elevation and distance from ocean water. Training for the habitat mask and classification of the 2010 mangrove mask was based on randomly sampling 38 million points using the mangrove masks (for the year 2000) of Giri et al. (2011) and Spalding et al. (2010) and the water occurrence layer defined by Pekel et al. (2017). The data set is available for download at, <a href="http://data.unep-wcmc.org/datasets/45" target="_blank">http://data.unep-wcmc.org/datasets/45</a></p>',
    Reference: '<p>Bunting P., Rosenqvist A., Lucas R., Rebelo L-M., Hilarides L., Thomas N., Hardy A., Itoh T., Shimada M. and Finlayson C.M. (2018). <a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">The Global Mangrove Watch – a New 2010 Global Baseline of Mangrove Extent.</a> Remote Sensing, 2018, 10, 1669; doi:10.3390/rs10101669</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a></p></p>',
  },
  mangrove_coverage: {
    Title: '<h1>Proportion of coastline covered by mangrove forest</h1>',
    Overview: '<p>This data set shows the proportional length of coastline occupied by mangrove habitat in a specific location at different times. The locations are defined geometries such as a countries, protected areas or areas-of-interest. This was calculated by intersecting a polygon of the areal extent of mangrove habitat (<a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">Bunting et al. (2018)</a>) with a multi-line represention of the global coastline (<a href="https://www.naturalearthdata.com/downloads/10m-physical-vectors/10m-coastline/">Natural Earth coastline version 4.1.0</a>) within each geometry. The percentage (%) covered was then calculated as the sum of the length of coastline occupied by mangrove habitat (km) divided by the total length of coastline (km) within the geometry multiplied by 100. Note this calculation is in development as the length of a fractal-like coastlines depend on the measurement scale, and defining when a 1D coast-line is occupied by 2D mangrove habitat vectors is open to interpretation.</p>',
    Reference: '<p>Proportion of coastline covered by mangrove forest. Global Mangrove Watch. Wetlands International and partners.</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a></p>',
  },
  mangrove_biomass: {
    Title: '<h1>Global mangrove aboveground biomass density for selected years between 1997 and 2016</h1>',
    Overview: '<p>This data set shows the aboveground biomass (AGB) density (t ha<sup>-1</sup>) of mangrove habitat  in a specific location at different times. It is based on the global extent of mangroves for select years from 1996 to 2016 (<a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">Bunting et al. (2018)</a>) combined with the canopy height and allometric relationships of <a href= https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1665>Simard et al</a>. They measured AGB and canopy height at 331 plots between 26°S and 25°N. They used those measurements to create global and three regional allometric models relating AGB to basal area weighted height and maximum canopy height. To map AGB across the tropics, they applied the regional allometric models to a map of basal area weighted height. The map of basal area weighted height was derived from ground elevation from the Shuttle Radio Topography Mission (SRTM) (2000) and canopy elevation from ICESat/GLAS spaceborne lidar (2003–2009).</p>',
    Reference: '<p>Simard, M., T. Fatoyinbo, C. Smetanka, V.H. Rivera-monroy, E. Castaneda-mova, N. Thomas, and T. Van der stocken. (2019) Global Mangrove Distribution, Aboveground Biomass, and Canopy Height. ORNL DAAC, Oak Ridge, Tennessee, USA. https://doi.org/10.3334/ORNLDAAC/1665</p></p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p>NASAs Earth Science program Data and Information Policy</p>',
  },
  mangrove_height: {
    Title: '<h1>Global mangrove canopy height for selected years between 1997 and 2016</h1>',
    Overview: '<p>This data set shows the maximum and basal-weighted area canopy height (m) of mangrove habitat  in a specific location at different times. It is based on the global extent of mangroves for select years from 1996 to 2016 (<a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">Bunting et al. (2018)</a>) combined with the canopy height and allometric relationships of <a href= https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1665>Simard et al</a>. They measured AGB and canopy height at 331 plots between 26°S and 25°N. They used those measurements to create global and three regional allometric models relating AGB to basal area weighted height and maximum canopy height. To map AGB across the tropics, they applied the regional allometric models to a map of basal area weighted height. The map of basal area weighted height was derived from ground elevation from the Shuttle Radio Topography Mission (SRTM) (2000) and canopy elevation from ICESat/GLAS spaceborne lidar (2003–2009).</p>',
    Reference: '<p>Simard, M., T. Fatoyinbo, C. Smetanka, V.H. Rivera-monroy, E. Castaneda-mova, N. Thomas, and T. Van der stocken. (2019) Global Mangrove Distribution, Aboveground Biomass, and Canopy Height. ORNL DAAC, Oak Ridge, Tennessee, USA. https://doi.org/10.3334/ORNLDAAC/1665</p></p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p>NASAs Earth Science program Data and Information Policy</p>',
  },
  restoration_sites: {
    Title: '<h2>Restoration Sites</h2>',
    Overview: '<p>placeholder</p>',
    DataLink: '<p>placeholder</p>',
    Reference: '<p>placeholder</p>',
    License: '<p>placeholder</p>',
    ['Some Other Heading']: '<p>some more html as a string</p>'
  },
  mangrove_alerts: {
    Title: '<h1>Mangrove deforestation alerts</h1>',
    Overview: '<p>This data set shows a heatmap representing points were there is high confidence of a change in mangrove forest cover. Note this is an experimental layer, presently only available for Africa, under going validation, and will be updated in the future. Changes in mangrove coverage were identified using a combination of USGS Landsat 8 (LS8), ESA Sentinel-1 (S1) and ESA Sentinel-2 (S2) data. For the optical S2 and LS8 sensors, only scenes where cloud cover is less than 20 % were used. In general scenes were avalaible about every 14-16 days. However, for the optical sensors, cloud cover can substantially reduce data availability in some regions. Potential change features were identified within pixels masked by the 2016 GMW mangrove extent layer; where NDVI values were < 0.2, and backscatering values were < -18 dB for the VV and < -23 dB for the VH polarisation channels, respectively. To combine the scene based potential change features and to filter false positives a scoring system was used where pixels were scored based on the number of times they have been identified as a change. Where S1 identifies a change 1 is added to the score, if LS8 or S2 identify a change then 2 is added to the score. Changes identified within the LS8 and S2 sensors were considered to be more reliable and less frequent (due to cloud cover). If no change was identified for a pixel, which was previously identified as a change, and has a score > 0, then 1 was removed from the score. If the score has a value of 5 or greater then the pixel was deemed to be a ‘True’ change.  The score cannot go below 0 or above 5. Processing was undertaken on a 20 m pixel grid, and then resampled to 60 m for presentation.</p>',
    DataLink: '<p>More info available soon</p>',
    Reference: '<p>Bunting et al., (2020). In Prep. Code is available at https://github.com/globalmangrovewatch/gmw_monitoring_demo</p>',
    'Date of content': '<p>January 2020 – present</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a></p>',
  },
  conservation_hotspots: {
    Title: '<h1>Conservation status advice for mangrove habitat in Africa for 2010</h1>',
    Overview: '<p>This data set shows categorical conservation advice at different time scales for mangrove habitat in Africa. This was derived from a muli-parameter index taking into account many physical (storm and drought frequency, change in climate, mudflat extension), biological (mangrove biomass, changes in extent) and socio-economic factors (population density, fishing volume, ect.). Using different weighting for each time scale this index was translated into categories of conservation advice relevant at short-, medium- and long-term time scales. Data sources used in the index pertain to various time periods between 1996 and 2016.</p>',
    DataLink: '<p>More info available soon</p>',
    Reference: '<p>More info available soon</p>',
    'Date of content': '<p>2010</p>',
    License: '<p>More info available soon</p>',
  },
  mangrove_activity: {
    Title: '<h1>Ranking of change in extent of mangroves for select years from 1996 to 2016.</h1>',
    Overview: '<p>This data set shows a ranking of locations with the largest change in areal extent of mangrove habitat between different times. Where location is a defined geometry, such as a country, protected area or area-of-interest. The difference in mangrove habitat extent was calculated between 2 consecutive time periods (t1 and t2); gain and loss are defined as the increase and decrease in extent between t1 and t2, respectively. Net change for the period t1-t2 is the sum of gain and loss. Locations are then ranked by their total gain or loss (km<sup>2</sup>) within the specified time-period. Data on the areal extent of mangrove habitat was generated by Aberystwyth University and soloEO within the framework of the Global Mangrove Watch (GMW) project, which is a part of the Japan Aerospace Exploration Agency’s (JAXA) Kyoto & Carbon Initiative and the Mangrove Capital Africa Programme coordinated by Wetlands International and financed by DOB Ecology. The map (v2.0) depicts the global extent of mangrove forests for the year 2010, derived by Random Forest Classification of a combination of L-band radar (ALOS PALSAR) and optical (Landsat-5, -7) satellite data. All satellite data and software used to derive the GMW mangrove maps are available in the public domain. Approximately 15,000 Landsat scenes and 1,500 ALOS PALSAR (1 x 1 degree) mosaic tiles were used to create optical and radar image composites covering the coastlines along the tropical and sub-tropical coastlines in the Americas, Africa, Asia and Oceania. The classification was confined using a mangrove habitat mask, which defined regions where mangrove ecosystems can be expected to exist. The mangrove habitat definition was based on geographical parameters such as latitude, elevation and distance from oceans. Training for the habitat mask and classification of the 2010 mangrove mask was based on randomly sampling 38 million points using the mangrove masks (for the year 2000) of Giri et al. (2011) and Spalding et al. (2010) and the water occurrence layer defined by Pekel et al. (2017). The data set is available for download at, <a href="http://data.unep-wcmc.org/datasets/45" target="_blank">http://data.unep-wcmc.org/datasets/45</a></p>',
    Reference: '<p>Bunting P., Rosenqvist A., Lucas R., Rebelo L-M., Hilarides L., Thomas N., Hardy A., Itoh T., Shimada M. and Finlayson C.M. (2018). <a href="https://www.mdpi.com/2072-4292/10/10/1669" target="_blank">The Global Mangrove Watch – a New 2010 Global Baseline of Mangrove Extent.</a> Remote Sensing, 2018, 10, 1669; doi:10.3390/rs10101669</p>',
    'Date of content': '<p>1996, 2007, 2008, 2009, 2010, 2015, 2016</p>',
    License: '<p><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a></p>',
  },
  mangrove_blue_carbon: {
    Title: '<h1>Mangrove Blue Carbon</h1>',
    Overview: '<p>This dataset shows the amount and density of carbon stored in mangrove biomass and soil. Total values represent the sum of aboveground carbon, and the soil organic carbon values, attributed to mangrove forests. Total values are expressed in Megatonnes of carbon dioxide equivalents (Mt CO<sub>2</sub>e), while mapped carbon density values are depicted as metric tonnes of CO2 equivalents per hectare (t CO<sub>2</sub>e / ha). Above-ground estimates of mangrove carbon were obtained from [Simard et al. 2019](https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1665). The data were derived from remotely-sensed canopy height measurements and region-specific allometric models validated using in-situ measurements in field plots across three continents. This was converted to mean AGB carbon using the stoichiometric factor of 0.451 ([Simard et al. 2019](https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1665)). Soil Organic Carbon (SOC) estimates of the top meter of mangrove soils  based on a methodology developed by Sanderman et al. (2018) were overlaid with 2016 mangrove extent maps from Bunting et al. 2018  to produce a global map of soil organic carbon at a 30 m spatial resolution. Aboveground and soil carbon values originally expressed in metric tonnes (megagrams) of carbon per hectare were converted to total carbon using the Bunting et al. (2018) mangrove extent for each country and converted to MtCO2e using a conversion factor of 3.67 (Howard et al. 2014).</p>',
    Reference: '<p><p>Bunting, P., Rosenqvist, A., Lucas, R. M., Rebelo, L. M., Hilarides, L., Thomas, N., … Finlayson, C. M. (2018). The global mangrove watch - A new 2010 global baseline of mangrove extent. Remote Sensing, 10(10). https://doi.org/10.3390/rs10101669 </p><p>Giri, C., Ochieng, E., Tieszen, L. L., Zhu, Z., Singh, A., Loveland, T., … Duke, N. (2011). Status and distribution of mangrove forests of the world using earth observation satellite data. Global Ecology and Biogeography, 20(1), 154–159. https://doi.org/10.1111/j.1466-8238.2010.00584.x </p><p>Sanderman J, Hengl T, Fiske G et al. (2018) A global map of mangrove forest soil carbon at 30 m spatial resolution. Environmental Research Letters 13: 055002. doi: 10.1088/1748-9326/aabe1c </p><p>Simard, M., T. Fatoyinbo, C. Smetanka, V.H. Rivera-monroy, E. Castaneda-mova, N. Thomas, and T. Van der stocken. (2019) Global Mangrove Distribution, Aboveground Biomass, and Canopy Height. ORNL DAAC, Oak Ridge, Tennessee, USA. https://doi.org/10.3334/ORNLDAAC/1665</p></p>',
    'Date of content': '<p>2000, 2016</p>',
    License: '<p>NASAs Earth Science program Data and Information Policy (Aboveground biomass), [CC4-BY](https://creativecommons.org/licenses/by/4.0/) (Soil organic carbon)</p>',
  },
  mangrove_protection: {
    Title: '<h1>Mangrove Protection</h1>',
    Overview: '<p>Pending</p>',
    Reference: '<p>Pending</p>',
    License: '<p>Pending</p>',
  },
  mangrove_species: {
    Title: '<h2>Mangrove Species</h2>',
    Overview: '<p>Species lists by country were compiled by the authors of the World Atlas of Mangroves (Spalding 2010) and verified by further expert and literature review. In 2022, hybrids were removed from the list, and the list was again cross checked against the IUCN Red List, and verified by a specialist group at IUCN. The status from the IUCN Red List was then assigned to each species. The number of threatened species reflects the number of endangered and critically endangered mangrove species. The data included are based on public literature and expert consultation and review; however, it cannot be assumed that species-level field verification has occurred consistently across every country or region, and may not incorporate temporal changes in species distribution.</p>',
    Reference: '<p>Spalding, M. (2010). World atlas of mangroves. Routledge.</p><p><a href="https://www.iucnredlist.org" target="_blank">IUCN. 2022. The IUCN Red List of Threatened Species. Version 2022-1.</a></p>',
    'Date of content': '<p>2022</p>',
    License: '<p>N/A</p>',
  },
  mangrove_restoration: {
    Title: '<h1>Mangrove Restoration</h1>',
    Overview: '<p>Pending</p>',
    Reference: '<p>Pending</p>',
    License: '<p>Pending</p>',
  },
  mangrove_emissions_mitigation: {
    Title: '<h1>Mangrove Emissions Mitigation</h1>',
    Overview: '<p>Estimates of emissions mitigation potential for mangrove interventions (e.g., protection or restoration) compared to other selected mitigation interventions. For these interventions, the total carbon mitigation opportunity is adjusted by the estimated area of the mitigation opportunity. The mitigation potential values used supplementary data from Roe et al. (2021), which aggregated mitigation potentials from a variety of individual and sectoral studies and datasets. For the purposes of this tool, we chose to include land-based mitigation measures that focused on forests and other ecosystems (e.g., grasslands, peatlands), and did not include values related to agriculture, bioenergy, or demand-side measures (e.g., food waste). Where multiple values for a single mitigation measure were reported (e.g., Reduce Deforestation), this tool used the average value reported in the supplementary data table. The source data contained both technical and cost-effective values. Here, only the technical values are reported. We updated the mitigation potential for mangrove restoration to newly calculated values from Worthington et al. (in prep).</p>',
  },
  mangrove_international_status: {
    Title: '<h1>Mangrove International Status</h1>',
    Overview: '<p><span>Nationally determined contributions (NDCs)</span> reflect a country’s proposed actions under the Paris Climate Agreement to cut emissions and adapt to climate change. Data used in this tool to describe a country’s NDC comes from Global <a href="https://www.climatewatchdata.org/" target="_blank">Climate Watch</a> (WRI 2022), or directly from the text of the country’s NDC.</p><p>Information on whether a country’s NDC includes coastal and marine NBS (Nature-Based Solutions) comes from a policy brief <a href="https://ocean-climate.org/wp-content/uploads/2021/06/coastal-and-marine-ecosystem-2806.pdf" target="_blank">(Lecerf et al. 2021)</a> developed in anticipation of the UNFCCC COP26 (United Nations Framework Convention on Climate Change Convention of the Parties, held in Glasgow in November 2021). NBS are actions to protect, sustainably manage and restore natural and modified ecosystems in ways that address societal challenges effectively and adaptively, to provide both human well-being and biodiversity benefits. In this context, mitigation measures aim to avoid and reduce emissions of GHGs into the atmosphere to prevent further warming. In the context of coastal and marine NBS, mitigation measures can include reducing loss of natural habitats that store carbon (e.g., mangroves and seagrasses), or restoring natural habitats that capture carbon. Adaptation measures aim to alter behavior, systems, and ways of life to protect people, economies and the environment from climate change impact. In the context of coastal and marine NBS, these can include improve resilience of coastal ecosystems. Coastal and marine NBS provide important opportunities for responding to climate change and achieving national climate policy goals. The data presented here offer a chance to better understand where countries are already using coastal and marine NBS, and where there might be opportunities to enhance the use of NBS in future NDC revisions.</p><p><a href="https://www.ipcc-nggip.iges.or.jp/public/wetlands/" target="_blank">The wetlands supplement</a> is a methodology report adopted by the IPCC (International Panel on Climate Change), which contains guidelines for countries on improving their inventorying and reporting of GHGs from wetlands, with the goal of providing a pathway for countries to reduce agricultural emissions from peatlands and mangroves.</p><p><a href="https://www.forestcarbonpartnership.org/forest-reference-emission-levels" target="_blank">FRELs (Forest Reference Emission Level)</a> is a benchmark for emissions exclusively from deforestation and forest degradation. Setting a FREL is a necessary first step for countries to benefit from the REDD+ (Reducing Emissions from Deforestation and forest Degradation) program. If mangroves are included in a country’s definition of a forest, they are eligible under the REDD+ program for climate credits.</p>'
  },
  mangrove_investment_potential: {
    Title: '<h1>Mangrove Investible Blue Carbon</h1>',
    Overview: '<p>Estimates of mangrove forest area that can qualify for blue carbon financing that is financially sustainable over 30 years, based on prices of $5/ton and $10/ton based on <a href="https://ap5.fas.nus.edu.sg/fass/geofd/zeng%20et%20al%202021%20return%20on%20investment%20mangrove%20blue%20carbon.pdf" target="_blank">Zeng et al. (2021)</a>. These investible carbon areas are mangrove forests that can be protected through carbon financing. Areas of investible mangrove are defined as those under imminent threat of loss or decline if left unprotected by a conservation intervention. The estimate also accounts for carbon from above and below ground biomass, as well as soil carbon. Profitability of projects was based on average costs of project establishment and annual maintenance, weighted by the country’s GDP. Investible areas are rounded to the nearest 1,000</p><p>Estimates of mangroves in protected areas are based on the World Database of Protected Areas (July 2022). Calculations of remaining mangroves (i.e. mangroves that are not within protected areas and not considered investible) are based on GMW extent v 3.14.</p><p>These data can be used to better understand, at a national scale, the potential of blue carbon finance that can be used towards climate mitigation goals, including nationally determined contributions specified under the Paris Climate Agreement.</p>'
  }
};

export default widgetInfo;

