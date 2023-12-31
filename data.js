var APP_DATA = {
  "scenes": [
    {
      "id": "0-cielo",
      "name": "Desde el cielo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8773277079222996,
        "pitch": 0.5605681926250448,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": -0.7320064325877187,
          "pitch": 1.0322516547023248,
          "rotation": 10.995574287564278,
          "target": "3-taller"
        },
        {
          "yaw": 1.1308629177793232,
          "pitch": 0.8997560814749104,
          "rotation": 0.7853981633974483,
          "target": "2-obra"
        },
        {
          "yaw": -0.308515101848176,
          "pitch": 0.4243831407055012,
          "rotation": 3.141592653589793,
          "target": "1-huerta"
        },
        {
          "yaw": -2.7186653253434514,
          "pitch": 1.0814740613605593,
          "rotation": 4.71238898038469,
          "target": "4-casa_retro"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.921150484404592,
          "pitch": 0.9078822549261805,
          "title": "Techo Verde",
          "text": "La casa no se nota desde el cielo porqué tiene un techo vivo de plantas."
        },
        {
          "yaw": -0.1943032567012888,
          "pitch": 0.0263052759251791,
          "title": "Panoramica en vuelo",
          "text": "<iframe width=\"100%\" style=\"min-height:280px;\" src=\"https://www.youtube.com/embed/videoseries?list=PLau0K75XyhPacJE3ygMX0MAFoqBeGLEpR&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe><br> Hacer click en la icona <img width=20px height=auto src=\"img/youtube_fullscreen.png\"> para ver el video en pantalla completa. <br> Una vez terminado hacer click en la icona <img width=20px height=auto src=\"img/youtube_resize.png\"> o presionar ESC para volver a la vista actual."
        },
        {
          "yaw": 1.9369546665250095,
          "pitch": -0.08125975294094445,
          "title": "<span style=\"font-weight: bold; color: rgb(95, 99, 104); font-family: arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">Cerro Kõi</span>",
          "text": "Fue declarado como patrimonio natural en 1993 debido a la forma de sus piedras (octogonales) que solamente existen tres en el mundo; en Sudáfrica Canadá&nbsp;y en&nbsp;<a href=\"https://es.wikipedia.org/wiki/Paraguay\" style=\"color: rgb(255, 233, 0); overflow-wrap: break-word; font-weight: 400;\">Paraguay</a>&nbsp;(este mismo)."
        }
      ]
    },
    {
      "id": "1-huerta",
      "name": "La huerta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.7762247082139453,
        "pitch": 0.4869572193127176,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": 0.4064027557239971,
          "pitch": 0.2196591055582804,
          "rotation": 0,
          "target": "3-taller"
        },
        {
          "yaw": -0.7660430696617766,
          "pitch": -0.2932501690742466,
          "rotation": 0,
          "target": "0-cielo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0535138709768006,
          "pitch": 0.5449655560387683,
          "title": "La huerta",
          "text": "<iframe width=\"100%\" style=\"min-height:280px;\" src=\"https://www.youtube.com/embed/videoseries?list=PLau0K75XyhPZ-Ko4KgrTXdRlhMsNUEeFW&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe><br> Hacer click en la icona <img width=20px height=auto src=\"img/youtube_fullscreen.png\"> para ver el video en pantalla completa. <br> Una vez terminado hacer click en la icona <img width=20px height=auto src=\"img/youtube_resize.png\"> o presionar ESC para volver a la vista actual."
        },
        {
          "yaw": -0.024253407601758425,
          "pitch": 0.41237728679105956,
          "title": "El vivero",
          "text": "<iframe width=\"100%\" style=\"min-height:280px;\" src=\"https://www.youtube.com/embed/videoseries?list=PLau0K75XyhPa9AEI46g2MPv3t-89JWd39&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe><br> Hacer click en la icona <img width=20px height=auto src=\"img/youtube_fullscreen.png\"> para ver el video en pantalla completa. <br> Una vez terminado hacer click en la icona <img width=20px height=auto src=\"img/youtube_resize.png\"> o presionar ESC para volver a la vista actual."
        }/*,
        {
          "yaw": 0.5022539795221252,
          "pitch": 0.1226820296719282,
          "title": "Volver al taller",
          "text": ""
        },
        {
          "yaw": -0.5789614107691747,
          "pitch": -0.27183227676044375,
          "title": "Volver a la foto aerea",
          "text": ""
        }*/
      ]
    },
    {
      "id": "2-obra",
      "name": "Obra en construccion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2688,
      "initialViewParameters": {
        "yaw": 2.594589491416297,
        "pitch": 0.4454280647063271,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": -2.9462082650862147,
          "pitch": 0.18464778790202452,
          "rotation": 0,
          "target": "3-taller"
        },
        {
          "yaw": -2.6948529442591482,
          "pitch": -0.7782247439505081,
          "rotation": 0,
          "target": "0-cielo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.83456436088768,
          "pitch": 0.2576834594756452,
          "title": "Arquitectura natural",
          "text": "La bioconstruccion es un sistema de edificacion mucho mas antiguo de lo que se cree y se ha transmitido por siglos en las culturas originarias y tambien entre los campesinos. "
        }/*,
        {
          "yaw": -2.7684959637057993,
          "pitch": 0.08101208660497505,
          "title": "Volver al taller",
          "text": ""
        }*/
      ]
    },
    {
      "id": "3-taller",
      "name": "El taller",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5469260329667964,
        "pitch": 0.3267967281168449,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": -1.8635486684223892,
          "pitch": 0.1581461250032632,
          "rotation": 0,
          "target": "4-casa_retro"
        },
        {
          "yaw": 1.590817815505253,
          "pitch": 0.23688397410856155,
          "rotation": 0,
          "target": "1-huerta"
        },
        {
          "yaw": 3.1330449368433726,
          "pitch": 0.31016995618518806,
          "rotation": 0,
          "target": "2-obra"
        },
        {
          "yaw": -3.04461681875169,
          "pitch": -0.5616632517284472,
          "rotation": 0,
          "target": "0-cielo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7258370758265293,
          "pitch": 0.18113987840973778,
          "title": "Bloques de tierra comprimida",
          "text": "El taller ha sido construido con BTC (bloques de tierra comprimida). Se trata de bloques constructivos fabricados a base de una mezcla de tierra, arena y arcilla, pudiendo contener tambien cal aerea o hidraulica como estabilizante. Tras preparar la mezcla adecuada se moldea y comprime en una prensa mecanica. Los muros de tierra presentan una ventaja y es que regulan de manera natural la humedad y la temperatura de la vivienda."
        },
        {
          "yaw": -1.7047180572796364,
          "pitch": -0.005683144653247041,
          "title": "Hacia la casa principal",
          "text": "<iframe width=\"100%\" style=\"min-height:280px;\" src=\"https://www.youtube.com/embed/videoseries?list=PLau0K75XyhPYgO7Wh1wDgpBZ2H5mgNRs7&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe><br> Hacer click en la icona <img width=20px height=auto src=\"img/youtube_fullscreen.png\"> para ver el video en pantalla completa. <br> Una vez terminado hacer click en la icona <img width=20px height=auto src=\"img/youtube_resize.png\"> o presionar ESC para volver a la vista actual."
        }/*,
        {
          "yaw": -2.902249357730163,
          "pitch": -0.6169479418227937,
          "title": "Volver a la vista aerea",
          "text": "Volver a la vista con el drone"
        }*/
      ]
    },
    {
      "id": "4-casa_retro",
      "name": "Casa principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.3925404313558172,
        "pitch": 0.534132965168503,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": -0.4878909773347573,
          "pitch": 0.8340067120911918,
          "rotation": 0,
          "target": "5-cocina"
        },
        {
          "yaw": -2.8429543672558886,
          "pitch": 0.16778489344177672,
          "rotation": 0,
          "target": "3-taller"
        },
        {
          "yaw": -1.8179538454148165,
          "pitch": -1.1164246766186263,
          "rotation": 0,
          "target": "0-cielo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2315938937714296,
          "pitch": 0.3857505482898436,
          "title": "Frente de la casa",
          "text": "<iframe width=\"100%\" style=\"min-height:280px;\" src=\"https://www.youtube.com/embed/videoseries?list=PLau0K75XyhPYy4ICehLY0RzyBJGlshFVI&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe><br> Hacer click en la icona <img width=20px height=auto src=\"img/youtube_fullscreen.png\"> para ver el video en pantalla completa. <br> Una vez terminado hacer click en la icona <img width=20px height=auto src=\"img/youtube_resize.png\"> o presionar ESC para volver a la vista actual."
        },
        {
          "yaw": -1.5841829249992774,
          "pitch": 0.4224050130834538,
          "title": "El Patio",
          "text": "<iframe width=\"100%\" style=\"min-height:280px;\" src=\"https://www.youtube.com/embed/videoseries?list=PLau0K75XyhPbMaZGx-pno7r2_pLjLgXoH&rel=0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe><br> Hacer click en la icona <img width=20px height=auto src=\"img/youtube_fullscreen.png\"> para ver el video en pantalla completa. <br> Una vez terminado hacer click en la icona <img width=20px height=auto src=\"img/youtube_resize.png\"> o presionar ESC para volver a la vista actual."
        }
      ]
    },
    {
      "id": "5-cocina",
      "name": "Interior de la casa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.0406375626063262,
        "pitch": 0.45781689870269204,
        "fov": 3.0
      },
      "linkHotspots": [
        {
          "yaw": 1.4598248771620854,
          "pitch": 0.764559991006946,
          "rotation": 0,
          "target": "4-casa_retro"
        }
      ],
      "infoHotspots": [
        /*{
          "yaw": 2.8228853475167845,
          "pitch": 0.3966238488714531,
          "title": "Baño",
          "text": ""
        },*/
        {
          "yaw": -0.43177370560372985,
          "pitch": 0.30017962223704053,
          "title": "Cocina",
          "text": ""
        }/*,
        {
          "yaw": 1.5956069249469982,
          "pitch": 0.5788322541691109,
          "title": "Volver a salir",
          "text": ""
        }*/
      ]
    }
  ],
  "name": "Itaugua Poty",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
