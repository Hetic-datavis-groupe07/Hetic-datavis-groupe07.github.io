
let map016 = document.getElementById('mapid2016')
let map017 = document.getElementById('mapid2017')
let map018 = document.getElementById('mapid2018')
let map019 = document.getElementById('mapid2019')
let map020 = document.getElementById('mapid2020')
let map021 = document.getElementById('mapid2021')


var     southWest = L.latLng(73.475739, -175.602017),
        northEast = L.latLng(-47.243230, 179.115442),
        bounds = L.latLngBounds(southWest, northEast);



function init016(){
    
  


    
// variables des pays
    //variable viewermax
    var france = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 118039
        })
        Usa = L.circle([39.74, -104.99],{
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1203495

        })
        Allemagne = L.circle([51.165691, 10.451526],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 130386
        })
        
        Italie = L.circle([41.871940, 12.567380],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 18132
        })

        Espagne = L.circle([40.463667, -3.749220],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 100179
        })
        Chine = L.circle([35.861660, 104.195397],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 139478
        })
        Japon = L.circle([35.6894, 139.692],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 33559

        })
        Corée = L.circle([35.9016955, 127.73588949999998],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 87018
        })


    var viewermax = L.layerGroup([france, Usa, Allemagne, Espagne, Chine, Japon, Corée, Italie]);

    france.bindPopup("Viewer Max : <br> 118.039");
    Usa.bindPopup("Viewer Max : <br> 1.203.495");
    Allemagne.bindPopup("Viewer Max : <br> 130.386");
    Italie.bindPopup("Viewer Max : <br> 18.132");
    Espagne.bindPopup("Viewer Max : <br> 100.179");
    Chine.bindPopup("Viewer Max : <br> 139.478");
    Japon.bindPopup("Viewer Max : <br> 33.559");
    Corée.bindPopup("Viewer Max : <br> 87.018");
    
    


    //variable viewer moyen
    var franceM = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 26887
 
        })

        UsaM = L.circle([39.74, -104.99],{
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 351937,

        })
        
        AllemagneM = L.circle([51.165691, 10.451526],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 27674
        })
        
        ItalieM = L.circle([41.871940, 12.567380],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 1596
        })

        EspagneM = L.circle([40.463667, -3.749220],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 9604
        })
        ChineM = L.circle([35.861660, 104.195397],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 22379
        })
        JaponM = L.circle([35.6894, 139.692],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 3355
        })
        CoréeM = L.circle([35.9016955, 127.73588949999998],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 8107
        })


    var viewermoyen = L.layerGroup([franceM, UsaM, AllemagneM, EspagneM, ChineM, JaponM, CoréeM, ItalieM]);
    
    franceM.bindPopup("Viewer Moyen : <br> 26.887");
    UsaM.bindPopup("Viewer Moyen : <br> 35.1937");
    AllemagneM.bindPopup("Viewer Moyen : <br> 27.674");
    ItalieM.bindPopup("Viewer Moyen : <br> 1.596");
    EspagneM.bindPopup("Viewer Moyen : <br> 9.604");
    ChineM.bindPopup("Viewer Moyen : <br> 22.379");
    JaponM.bindPopup("Viewer Moyen : <br> 3.355");
    CoréeM.bindPopup("Viewer Moyen : <br> 8.107");

    //map reviens au premier plan
    map016.style.display = "inline-block"
    map017.style.display = "none"
    map018.style.display = "none"
    map019.style.display = "none"
    map020.style.display = "none"
    map021.style.display = "none"

    
    const mainLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        maxZoom: 3,
        minZoom: 2.5,
        ext:'png'
        
    });



    const map2016 = L.map('mapid2016', {
        center: [48.85228013591876, 2.420564453968901],
        zoom: 0,
        maxBounds : bounds,
    })


    var overlayMaps = {
        "viewer max": viewermax,
        "viewer moyen": viewermoyen,
    };


    

    L.control.layers(overlayMaps).addTo(map2016);
    
    mainLayer.addTo(map2016);
}



function init017(){
    
    
    

// variables des pays

    //variable viewermax
    var france = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 172878 
        })
        Usa = L.circle([39.74, -104.99],{
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 1433438
        })
        Allemagne = L.circle([51.165691, 10.451526],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 170831
        })
        
        Italie = L.circle([41.871940, 12.567380],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 16298
        })

        Espagne = L.circle([40.463667, -3.749220],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 121727
        })
        Chine = L.circle([35.861660, 104.195397],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 138612
        })
        Japon = L.circle([35.6894, 139.692],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 60278
        })
        Corée = L.circle([35.9016955, 127.73588949999998],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 274667
        })


    var viewermax = L.layerGroup([france, Usa, Allemagne, Espagne, Chine, Japon, Corée, Italie]);


    france.bindPopup("Viewer Max : <br> 172.878");
    Usa.bindPopup("Viewer Max : <br> 1.433.438");
    Allemagne.bindPopup("Viewer Max : <br> 170.831");
    Italie.bindPopup("Viewer Max : <br> 16.298");
    Espagne.bindPopup("Viewer Max : <br> 121.727");
    Chine.bindPopup("Viewer Max : <br> 138.612");
    Japon.bindPopup("Viewer Max : <br> 60.278");
    Corée.bindPopup("Viewer Max : <br> 274.667");


    //variable viewer moyen



    var franceM = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 32075 
        })

        UsaM = L.circle([39.74, -104.99],{
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 395750

        })
        
        AllemagneM = L.circle([51.165691, 10.451526],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 33297
        })
        
        ItalieM = L.circle([41.871940, 12.567380],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 2423
        })

        EspagneM = L.circle([40.463667, -3.749220],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 15372
        })
        ChineM = L.circle([35.861660, 104.195397],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 28046
        })
        JaponM = L.circle([35.6894, 139.692],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 7231
        })
        CoréeM = L.circle([35.9016955, 127.73588949999998],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 40689
        })


    var viewermoyen = L.layerGroup([franceM, UsaM, AllemagneM, EspagneM, ChineM, JaponM, CoréeM, ItalieM]);


    franceM.bindPopup("Viewer Moyen : <br> 32.075");
    UsaM.bindPopup("Viewer Moyen : <br> 395.750");
    AllemagneM.bindPopup("Viewer Moyen : <br> 33.297");
    ItalieM.bindPopup("Viewer Moyen : <br> 2.423");
    EspagneM.bindPopup("Viewer Moyen : <br> 15.372");
    ChineM.bindPopup("Viewer Moyen : <br> 22.379");
    JaponM.bindPopup("Viewer Moyen : <br> 7.231");
    CoréeM.bindPopup("Viewer Moyen : <br> 40.689");


          // Variables chaines


    var franceC = L.circle([48.85228013591876, 2.420564453968901], {
        color: '#A970FF',
        fillColor: '#A970FF',
        fillOpacity: 0.5,
        radius: 23348
        })

        UsaC = L.circle([39.74, -104.99],{
        color: '#A970FF',
        fillColor: '#A970FF',
        fillOpacity: 0.5,
        radius: 378783
        })
        
        AllemagneC = L.circle([51.165691, 10.451526],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 31327
        })
        
        ItalieC = L.circle([41.871940, 12.567380],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 4150

        })

        EspagneC = L.circle([40.463667, -3.749220],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 21664
        })
        ChineC = L.circle([35.861660, 104.195397],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 9716
        })
        JaponC = L.circle([35.6894, 139.692],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 5764

        })
        CoréeC = L.circle([35.9016955, 127.73588949999998],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 8296
        })

        var Chaine = L.layerGroup([franceC, UsaC, AllemagneC, EspagneC, ChineC, JaponC, CoréeC, ItalieC]);

        franceC.bindPopup("Nombre de streamer : <br> 233.480");
        UsaC.bindPopup("Nombre de streamer : <br> 3.787.830");
        AllemagneC.bindPopup("Nombre de streamer : <br> 313.270");
        ItalieC.bindPopup("Nombre de streamer : <br> 41.500");
        EspagneC.bindPopup("Nombre de streamer : <br> 216.640 ");
        ChineC.bindPopup("Nombre de streamer : <br> 97.160 ");
        JaponC.bindPopup("Nombre de streamer : <br> 57.640");
        CoréeC.bindPopup("Nombre de streamer : <br> 82.960");

    


    map016.style.display = "none"
    map017.style.display = "inline-block"
    map018.style.display = "none"
    map019.style.display = "none"
    map020.style.display = "none"
    map021.style.display = "none"

    
    const mainLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        maxZoom: 3,
        minZoom: 2.5,
        ext:'png'
    });

    const map2017 = L.map('mapid2017', {
        center: [39.73, -104.99],
        maxBounds: bounds,
        zoom: 0,
    })


    var overlayMaps = {
        "viewer max": viewermax,
        "viewer moyen": viewermoyen,
        "Chaines": Chaine
    };

    L.control.layers( overlayMaps).addTo(map2017);
    mainLayer.addTo(map2017);
}


function init018(){
    
// variables des pays



    //variable viewermax

    var france = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 401174 
        })
        Usa = L.circle([39.74, -104.99],{
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 2914726
        })
        Allemagne = L.circle([51.165691, 10.451526],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 467788
        })
        
        Italie = L.circle([41.871940, 12.567380],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50359
        })

        Espagne = L.circle([40.463667, -3.749220],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 636757
        })
        Chine = L.circle([35.861660, 104.195397],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 183721
        })
        Japon = L.circle([35.6894, 139.692],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 67319
        })
        Corée = L.circle([35.9016955, 127.73588949999998],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 246249
        })


    var viewermax = L.layerGroup([france, Usa, Allemagne, Espagne, Chine, Japon, Corée, Italie]);

    france.bindPopup("Viewer Max : <br> 401.174 ");
    Usa.bindPopup("Viewer Max : <br> 2.914.726");
    Allemagne.bindPopup("Viewer Max : <br> 467.788");
    Italie.bindPopup("Viewer Max : <br> 50.359");
    Espagne.bindPopup("Viewer Max : <br> 636757");
    Chine.bindPopup("Viewer Max : <br> 183.721");
    Japon.bindPopup("Viewer Max : <br> 67.319");
    Corée.bindPopup("Viewer Max : <br> 246.249");




    //variable viewer moyen



    var franceM = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 45836 
        })

        UsaM = L.circle([39.74, -104.99],{
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 586461
        })
        
        AllemagneM = L.circle([51.165691, 10.451526],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 45447

        })
        
        ItalieM = L.circle([41.871940, 12.567380],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 5892
        })

        EspagneM = L.circle([40.463667, -3.749220],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 29435
        })
        ChineM = L.circle([35.861660, 104.195397],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 31224
        })
        JaponM = L.circle([35.6894, 139.692],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 12021
        })
        CoréeM = L.circle([35.9016955, 127.73588949999998],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 63564
        })

        var viewermoyen = L.layerGroup([franceM, UsaM, AllemagneM, EspagneM, ChineM, JaponM, CoréeM, ItalieM]);


        franceM.bindPopup("Viewer Moyen : <br> 45.836 ");
        UsaM.bindPopup("Viewer Moyen : <br> 586.461");
        AllemagneM.bindPopup("Viewer Moyen : <br> 45.447");
        ItalieM.bindPopup("Viewer Moyen : <br> 5.892");
        EspagneM.bindPopup("Viewer Moyen : <br> 29.435");
        ChineM.bindPopup("Viewer Moyen : <br> 31.224");
        JaponM.bindPopup("Viewer Moyen : <br> 12.021");
        CoréeM.bindPopup("Viewer Moyen : <br> 63.564");

          // Variables chaines


    var franceC = L.circle([48.85228013591876, 2.420564453968901], {
        color: '#A970FF',
        fillColor: '#A970FF',
        fillOpacity: 0.5,
        radius: 30941 
        })

        UsaC = L.circle([39.74, -104.99],{
        color: '#A970FF',
        fillColor: '#A970FF',
        fillOpacity: 0.5,
        radius: 850238
        })
        
        AllemagneC = L.circle([51.165691, 10.451526],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 39561
        })
        
        ItalieC = L.circle([41.871940, 12.567380],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 7277
        })

        EspagneC = L.circle([40.463667, -3.749220],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 43471
        })
        ChineC = L.circle([35.861660, 104.195397],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 9166

        })
        JaponC = L.circle([35.6894, 139.692],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 7698
        })
        CoréeC = L.circle([35.9016955, 127.73588949999998],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 12928
        })

        var Chaine = L.layerGroup([franceC, UsaC, AllemagneC, EspagneC, ChineC, JaponC, CoréeC, ItalieC]);

        franceC.bindPopup("Nombre de streamer : <br> 30.941 ");
        UsaC.bindPopup("Nombre de streamer : <br> 8.502.380");
        AllemagneC.bindPopup("Nombre de streamer : <br> 395.610");
        ItalieC.bindPopup("Nombre de streamer : <br> 72.770");
        EspagneC.bindPopup("Nombre de streamer : <br> 434.710 ");
        ChineC.bindPopup("Nombre de streamer : <br> 91.660 ");
        JaponC.bindPopup("Nombre de streamer : <br> 76.980");
        CoréeC.bindPopup("Nombre de streamer : <br> 129.280");


    map016.style.display = "none"
    map017.style.display = "none"
    map018.style.display = "inline-block"
    map019.style.display = "none"
    map020.style.display = "none"
    map021.style.display = "none"

   
    

        

    const mainLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        maxZoom: 3,
        minZoom: 2.5,
        ext:'png'
    });

    const map2018 = L.map('mapid2018', {
        center: [39.73, -104.99],
        zoom: 0,
        maxBounds: bounds,
    })


    var overlayMaps = {
        "viewer max": viewermax,
        "viewer moyen": viewermoyen,
        "Chaines": Chaine
    };

    L.control.layers( overlayMaps).addTo(map2018);
   
    mainLayer.addTo(map2018);
}


function init019(){
    
// variables des pays


    //variable viewermax


    var france = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 571509 
        })
        Usa = L.circle([39.74, -104.99],{
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 2135875
        })
        Allemagne = L.circle([51.165691, 10.451526],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 304887
        })
        
        Italie = L.circle([41.871940, 12.567380],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 118274
        })

        Espagne = L.circle([40.463667, -3.749220],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 467178
        })
        Chine = L.circle([35.861660, 104.195397],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 134055
        })
        Japon = L.circle([35.6894, 139.692],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 85079
        })
        Corée = L.circle([35.9016955, 127.73588949999998],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 382407
        })


    var viewermax = L.layerGroup([france, Usa, Allemagne, Espagne, Chine, Japon, Corée, Italie]);


    france.bindPopup("Viewer Max : <br> 571.509  ");
    Usa.bindPopup("Viewer Max : <br> 2.135.875");
    Allemagne.bindPopup("Viewer Max : <br> 304.887");
    Italie.bindPopup("Viewer Max : <br> 118.274");
    Espagne.bindPopup("Viewer Max : <br> 467.178");
    Chine.bindPopup("Viewer Max : <br> 134.055");
    Japon.bindPopup("Viewer Max : <br> 85.079");
    Corée.bindPopup("Viewer Max : <br> 382.407");


    //variable viewer moyen


    var franceM = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 61771 
        })

        UsaM = L.circle([39.74, -104.99],{
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 659735
        })
        
        AllemagneM = L.circle([51.165691, 10.451526],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 62169
        })
        
        ItalieM = L.circle([41.871940, 12.567380],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 12084
        })

        EspagneM = L.circle([40.463667, -3.749220],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 39860
        })
        ChineM = L.circle([35.861660, 104.195397],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 33622
        })
        JaponM = L.circle([35.6894, 139.692],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 15176
        })
        CoréeM = L.circle([35.9016955, 127.73588949999998],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 81154
        })

        var viewermoyen = L.layerGroup([franceM, UsaM, AllemagneM, EspagneM, ChineM, JaponM, CoréeM, ItalieM]);

        franceM.bindPopup("Viewer Moyen : <br> 61.771 ");
        UsaM.bindPopup("Viewer Moyen : <br> 659.735");
        AllemagneM.bindPopup("Viewer Moyen : <br> 62.169");
        ItalieM.bindPopup("Viewer Moyen : <br> 12.084");
        EspagneM.bindPopup("Viewer Moyen : <br> 39.860");
        ChineM.bindPopup("Viewer Moyen : <br> 33.622");
        JaponM.bindPopup("Viewer Moyen : <br> 15.176");
        CoréeM.bindPopup("Viewer Moyen : <br> 81.154");


          // Variables chaines


    var franceC = L.circle([48.85228013591876, 2.420564453968901], {
        color: '#A970FF',
        fillColor: '#A970FF',
        fillOpacity: 0.5,
        radius: 35048
 
        })

        UsaC = L.circle([39.74, -104.99],{
        color: '#A970FF',
        fillColor: '#A970FF',
        fillOpacity: 0.5,
        radius: 735895
        })
        
        AllemagneC = L.circle([51.165691, 10.451526],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 45374
        })
        
        ItalieC = L.circle([41.871940, 12.567380],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 9742
        })

        EspagneC = L.circle([40.463667, -3.749220],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 54583
        })
        ChineC = L.circle([35.861660, 104.195397],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 8852

        })
        JaponC = L.circle([35.6894, 139.692],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 8302
        })
        CoréeC = L.circle([35.9016955, 127.73588949999998],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 17125
        })

        var Chaine = L.layerGroup([franceC, UsaC, AllemagneC, EspagneC, ChineC, JaponC, CoréeC, ItalieC]);

        franceC.bindPopup("Nombre de streamer : <br> 350.480 ");
        UsaC.bindPopup("Nombre de streamer : <br> 7.358.950");
        AllemagneC.bindPopup("Nombre de streamer : <br> 453.740");
        ItalieC.bindPopup("Nombre de streamer : <br> 97.420");
        EspagneC.bindPopup("Nombre de streamer : <br> 545.830 ");
        ChineC.bindPopup("Nombre de streamer : <br> 88.520 ");
        JaponC.bindPopup("Nombre de streamer : <br> 83.020");
        CoréeC.bindPopup("Nombre de streamer : <br> 171250");

    map016.style.display = "none"
    map017.style.display = "none"
    map018.style.display = "none"
    map019.style.display = "inline-block"
    map020.style.display = "none"
    map021.style.display = "none"


   
    const mainLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        maxZoom: 3,
        minZoom: 2.5,
        ext:'png'
    });

    const map2019 = L.map('mapid2019', {
        center: [39.73, -104.99],
        zoom: 0,
        maxBounds: bounds,
    })


    var overlayMaps = {
        "viewer max": viewermax,
        "viewer moyen": viewermoyen,
        "Chaines" : Chaine
    };

    L.control.layers( overlayMaps).addTo(map2019);
    mainLayer.addTo(map2019);
}


function init020(){
    
// variables des pays


    //variable viewermax

    var france = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 722131 
        })
        Usa = L.circle([39.74, -104.99],{
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 3029267
        })
        Allemagne = L.circle([51.165691, 10.451526],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 568521
        })
        
        Italie = L.circle([41.871940, 12.567380],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 247789
        })

        Espagne = L.circle([40.463667, -3.749220],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 837830
        })
        Chine = L.circle([35.861660, 104.195397],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 157167
        })
        Japon = L.circle([35.6894, 139.692],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 173689
        })
        Corée = L.circle([35.9016955, 127.73588949999998],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 542224,
           
        })


    var viewermax = L.layerGroup([france, Usa, Allemagne, Espagne, Chine, Japon, Corée, Italie]);

    france.bindPopup("Viewer Max : <br> 722.131  ");
    Usa.bindPopup("Viewer Max : <br> 3.029.267");
    Allemagne.bindPopup("Viewer Max : <br> 568.521");
    Italie.bindPopup("Viewer Max : <br> 247.789");
    Espagne.bindPopup("Viewer Max : <br> 837.830");
    Chine.bindPopup("Viewer Max : <br> 157.167");
    Japon.bindPopup("Viewer Max : <br> 173.689");
    Corée.bindPopup("Viewer Max : <br> 542.224");


    //variable viewer moyen
    var franceM = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 106101 
        })

        UsaM = L.circle([39.74, -104.99],{
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 991801
        })
        
        AllemagneM = L.circle([51.165691, 10.451526],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 108060

        })
        
        ItalieM = L.circle([41.871940, 12.567380],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 33921
        })

        EspagneM = L.circle([40.463667, -3.749220],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 179705
        })
        ChineM = L.circle([35.861660, 104.195397],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 40528
        })
        JaponM = L.circle([35.6894, 139.692],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 26745
        })
        CoréeM = L.circle([35.9016955, 127.73588949999998],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 112095
        })

        var viewermoyen = L.layerGroup([franceM, UsaM, AllemagneM, EspagneM, ChineM, JaponM, CoréeM, ItalieM]);


        franceM.bindPopup("Viewer Moyen : <br> 106.101 ");
        UsaM.bindPopup("Viewer Moyen : <br> 991.801");
        AllemagneM.bindPopup("Viewer Moyen : <br> 108.060");
        ItalieM.bindPopup("Viewer Moyen : <br>33.921");
        EspagneM.bindPopup("Viewer Moyen : <br> 179.705");
        ChineM.bindPopup("Viewer Moyen : <br> 40.528");
        JaponM.bindPopup("Viewer Moyen : <br> 26.745");
        CoréeM.bindPopup("Viewer Moyen : <br> 112.095");

          // Variables chaines


    var franceC = L.circle([48.85228013591876, 2.420564453968901], {
        color: '#A970FF',
        fillColor: '#A970FF',
        fillOpacity: 0.5,
        radius: 47138
        })

        UsaC = L.circle([39.74, -104.99],{
        color: '#A970FF',
        fillColor: '#A970FF',
        fillOpacity: 0.5,
        radius: 955443
        })
        
        AllemagneC = L.circle([51.165691, 10.451526],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 58741
        })
        
        ItalieC = L.circle([41.871940, 12.567380],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 19812
        })

        EspagneC = L.circle([40.463667, -3.749220],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 135282
        })
        ChineC = L.circle([35.861660, 104.195397],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 7458
        })
        JaponC = L.circle([35.6894, 139.692],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 10815

        })
        CoréeC = L.circle([35.9016955, 127.73588949999998],{
            color: '#A970FF',
            fillColor: '#A970FF',
            fillOpacity: 0.5,
            radius: 20916


        })

        var Chaine = L.layerGroup([franceC, UsaC, AllemagneC, EspagneC, ChineC, JaponC, CoréeC, ItalieC]);

        franceC.bindPopup("Nombre de streamer : <br> 471.380 ");
        UsaC.bindPopup("Nombre de streamer : <br> 9.554.430");
        AllemagneC.bindPopup("Nombre de streamer : <br> 587.410");
        ItalieC.bindPopup("Nombre de streamer : <br> 198.120");
        EspagneC.bindPopup("Nombre de streamer : <br> 1.352.820 ");
        ChineC.bindPopup("Nombre de streamer : <br> 74.580");
        JaponC.bindPopup("Nombre de streamer : <br> 108.150");
        CoréeC.bindPopup("Nombre de streamer : <br> 209.160");

    map016.style.display = "none"
    map017.style.display = "none"
    map018.style.display = "none"
    map019.style.display = "none"
    map020.style.display = "inline-block"
    map021.style.display = "none"
    


    
    
    const mainLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        maxZoom: 3,
        minZoom: 2.5,
        ext:'png'
    });

    const map2020 = L.map('mapid2020', {
        center: [39.73, -104.99],
        zoom: 0,
        maxBounds: bounds,
    })


    var overlayMaps = {
        "viewer max": viewermax,
        "viewer moyen": viewermoyen,
        "Chaines" : Chaine
    };

    L.control.layers( overlayMaps).addTo(map2020);
   
    mainLayer.addTo(map2020);
}


function init021(){

// variables des pays



    //variable viewermax

    var france = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 549365
        })
        Usa = L.circle([39.74, -104.99],{
        color: 'darkpurple',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 2541341
        })
        Allemagne = L.circle([51.165691, 10.451526],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 738498
        })
        
        Italie = L.circle([41.871940, 12.567380],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 280732
        })

        Espagne = L.circle([40.463667, -3.749220],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 2667338
        })
        Chine = L.circle([35.861660, 104.195397],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 176006
        })
        Japon = L.circle([35.6894, 139.692],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 201664
        })
        Corée = L.circle([35.9016955, 127.73588949999998],{
            color: 'darkpurple',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 469476
        })


    var viewermax = L.layerGroup([france, Usa, Allemagne, Espagne, Chine, Japon, Corée, Italie]);

    france.bindPopup("Viewer Max : <br> 549.365  ");
    Usa.bindPopup("Viewer Max : <br> 2.541.341");
    Allemagne.bindPopup("Viewer Max : <br> 738.498");
    Italie.bindPopup("Viewer Max : <br> 280.732");
    Espagne.bindPopup("Viewer Max : <br> 2.667.338");
    Chine.bindPopup("Viewer Max : <br> 176.006");
    Japon.bindPopup("Viewer Max : <br> 201.664");
    Corée.bindPopup("Viewer Max : <br> 469.476");



 
    //variable viewer moyen


    var franceM = L.circle([48.85228013591876, 2.420564453968901], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 50000 
        })

        UsaM = L.circle([39.74, -104.99],{
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5,
        radius: 500000
        })
        
        AllemagneM = L.circle([51.165691, 10.451526],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 50000
        })
        
        ItalieM = L.circle([41.871940, 12.567380],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 50000
        })

        EspagneM = L.circle([40.463667, -3.749220],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 50000
        })
        ChineM = L.circle([35.861660, 104.195397],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 500000
        })
        JaponM = L.circle([35.6894, 139.692],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 5000
        })
        CoréeM = L.circle([35.9016955, 127.73588949999998],{
            color: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.5,
            radius: 5000
        })

        var viewermoyen = L.layerGroup([franceM, UsaM, AllemagneM, EspagneM, ChineM, JaponM, CoréeM, ItalieM]);

        franceM.bindPopup("Viewer Moyen : <br> 156.011 ");
        UsaM.bindPopup("Viewer Moyen : <br>  1.402.491 ");
        AllemagneM.bindPopup("Viewer Moyen : <br> 177.208");
        ItalieM.bindPopup("Viewer Moyen : <br>68.632");
        EspagneM.bindPopup("Viewer Moyen : <br> 300.479");
        ChineM.bindPopup("Viewer Moyen : <br> 46.489");
        JaponM.bindPopup("Viewer Moyen : <br> 45.747");
        CoréeM.bindPopup("Viewer Moyen : <br> 134.842");
        
        

        


    map016.style.display = "none"
    map017.style.display = "none"
    map018.style.display = "none"
    map019.style.display = "none"
    map020.style.display = "none"
    map021.style.display = "inline-block"

   

    const mainLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
        maxZoom: 3,
        minZoom: 2.5,
        ext:'png'
    });

    const map2021 = L.map('mapid2021', {
        center: [39.73, -104.99],
        zoom: 0,
        maxBounds: bounds,
    })


    var overlayMaps = {
        "viewer max": viewermax,
        "viewer moyen": viewermoyen,
        
    };

    L.control.layers( overlayMaps).addTo(map2021);
   

    mainLayer.addTo(map2021);
}

function stat2016(str) {
    if (str == "") {
        document.getElementById("show").innerHTML = "";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("show").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET","data.php?q="+str,true);
        xmlhttp.send();
      }
}

function stat2017(str) {
    if (str == "") {
        document.getElementById("chiffre1").innerHTML = "";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("chiffre1").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET","data1.php?q="+str,true);
        xmlhttp.send();
      }
}
function stat2018(str) {
    if (str == "") {
        document.getElementById("chiffre1").innerHTML = "";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("chiffre1").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET","data2.php?q="+str,true);
        xmlhttp.send();
      }
}
function stat2019(str) {
    if (str == "") {
        document.getElementById("chiffre1").innerHTML = "";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("chiffre1").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET","data3.php?q="+str,true);
        xmlhttp.send();
      }
}

function stat2020(str) {
    if (str == "") {
        document.getElementById("chiffre1").innerHTML = "";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("chiffre1").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET","data4.php?q="+str,true);
        xmlhttp.send();
      }
}

function stat2021(str) {
    if (str == "") {
        document.getElementById("chiffre1").innerHTML = "";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("chiffre1").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET","data5.php?q="+str,true);
        xmlhttp.send();
      }
}



am4core.ready(function() {
 
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    
    // Add data
    chart.data = [ {
      "Media": "Youtube Live",
      "Média": 100
    }, {
      "Media": "Facebook Live",
      "Média": 350
    }, {
      "Media": "Twitch",
      "Média": 50
    }, {
      "Media": "TV",
      "Média": 500
    },  ];
    
    // Set inner radius
    chart.innerRadius = am4core.percent(50);
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Média";
    pieSeries.dataFields.category = "Media";
    pieSeries.slices.template.stroke = am4core.color("#0E0E10");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready()
   
   
   
   
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv2", am4charts.PieChart);
    
    // Add data
    chart.data = [ {
      "Media": "Youtube Live",
      "Média": 100
    }, {
      "Media": "Facebook Live",
      "Média": 350
    }, {
      "Media": "Twitch",
      "Média": 50
    }, {
      "Media": "TV",
      "Média": 500
    },  ];
    
    // Set inner radius
    chart.innerRadius = am4core.percent(50);
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Média";
    pieSeries.dataFields.category = "Media";
    pieSeries.slices.template.stroke = am4core.color("#0E0E10");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready()
   
   
   
   
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv3", am4charts.PieChart);
    
    // Add data
    chart.data = [ {
      "Media": "Youtube Live",
      "Média": 100
    }, {
      "Media": "Facebook Live",
      "Média": 350
    }, {
      "Media": "Twitch",
      "Média": 50
    }, {
      "Media": "TV",
      "Média": 500
    },  ];
    
    // Set inner radius
    chart.innerRadius = am4core.percent(50);
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "Média";
    pieSeries.dataFields.category = "Media";
    pieSeries.slices.template.stroke = am4core.color("#0E0E10");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready()