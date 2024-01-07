export const theme2 = [
  {
    "id": "gl-draw-polygon-fill-inactive",
    "type": "fill",
    "filter": [
      "all",
      [
        "==",
        "active",
        "false"
      ],
      [
        "==",
        "$type",
        "Polygon"
      ],
      [
        "!=",
        "mode",
        "static"
      ]
    ],
    "paint": {
      "fill-color": "#E1361B",
      "fill-outline-color": "#E1361B",
      "fill-opacity": 0.1
    }
  },
  {
    "id": "gl-draw-polygon-fill-active",
    "type": "fill",
    "filter": [
      "all",
      [
        "==",
        "active",
        "true"
      ],
      [
        "==",
        "$type",
        "Polygon"
      ]
    ],
    "paint": {
      "fill-color": "#E1361B",
      "fill-outline-color": "#E1361B",
      "fill-opacity": 0.1
    }
  },
  {
    "id": "gl-draw-polygon-midpoint",
    "type": "circle",
    "filter": [
      "all",
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "==",
        "meta",
        "midpoint"
      ]
    ],
    "paint": {
      "circle-radius": 3,
      "circle-color": "#E1361B"
    }
  },
  {
    "id": "gl-draw-polygon-stroke-inactive",
    "type": "line",
    "filter": [
      "all",
      [
        "==",
        "active",
        "false"
      ],
      [
        "==",
        "$type",
        "Polygon"
      ],
      [
        "!=",
        "mode",
        "static"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#E1361B",
      "line-width": 2
    }
  },
  {
    "id": "gl-draw-polygon-stroke-active",
    "type": "line",
    "filter": [
      "all",
      [
        "==",
        "active",
        "true"
      ],
      [
        "==",
        "$type",
        "Polygon"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#FFCF56",
      "line-width": 2,
      "line-dasharray": [
        4,
        3
      ]
    }
  },
  {
    "id": "gl-draw-line-inactive",
    "type": "line",
    "filter": [
      "all",
      [
        "==",
        "active",
        "false"
      ],
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "!=",
        "mode",
        "static"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#E1361B",
      "line-width": 2
    }
  },
  {
    "id": "gl-draw-line-active",
    "type": "line",
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "==",
        "active",
        "true"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#FFCF56",
      "line-width": 2,
      "line-dasharray": [
        4,
        3
      ]
    }
  },
  {
    "id": "gl-draw-polygon-and-line-vertex-stroke-ringlike-symbol-inactive",
    "type": "symbol",
    "filter": [
      "all",
      [
        "==",
        "meta",
        "vertex"
      ],
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "!=",
        "mode",
        "static"
      ]
    ],
    "layout": {
      "icon-anchor": "bottom",
      "icon-image": "gl-draw-icon3",
      "icon-size": 0.45,
      "icon-offset": [
        0,
        16
      ],
      "icon-allow-overlap": true,
      "text-ignore-placement": true,
      "icon-ignore-placement": true
    }
  },
  {
    "id": "gl-draw-polygon-and-line-vertex-stroke-symbol-inactive",
    "type": "symbol",
    "filter": [
      "all",
      [
        "==",
        "meta",
        "vertex"
      ],
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "!=",
        "mode",
        "static"
      ]
    ],
    "layout": {
      "icon-anchor": "bottom",
      "icon-image": "gl-draw-icon3",
      "icon-size": 0.45,
      "icon-offset": [
        0,
        16
      ],
      "icon-allow-overlap": true,
      "text-ignore-placement": true,
      "icon-ignore-placement": true
    }
  },

  {
    "id": "gl-draw-polygon-and-line-vertex-symbol-inactive",
    "type": "symbol",
    "filter": [
      "all",
      [
        "==",
        "meta",
        "vertex"
      ],
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "!=",
        "mode",
        "static"
      ]
    ],
    "layout": {
      "icon-anchor": "bottom",
      "icon-image": "gl-draw-icon3",
      "icon-size": 0.45,
      "icon-offset": [
        0,
        16
      ],
      "icon-allow-overlap": true,
      "text-ignore-placement": true,
      "icon-ignore-placement": true
    }
  },
  {
    "id": "gl-draw-point-point-stroke-inactive",
    "type": "circle",
    "filter": [
      "all",
      [
        "==",
        "active",
        "false"
      ],
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "==",
        "meta",
        "feature"
      ],
      [
        "!=",
        "mode",
        "static"
      ]
    ],
    "paint": {
      "circle-radius": 5,
      "circle-opacity": 1,
      "circle-color": "#fff"
    }
  },
  {
    "id": "gl-draw-point-inactive",
    "type": "circle",
    "filter": [
      "all",
      [
        "==",
        "active",
        "false"
      ],
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "==",
        "meta",
        "feature"
      ],
      [
        "!=",
        "mode",
        "static"
      ]
    ],
    "paint": {
      "circle-radius": 5,
      "circle-color": "#E1361B"
    }
  },
  {
    "id": "gl-draw-point-stroke-ringlike-active",
    "type": "circle",
    "filter": [
      "all",
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "==",
        "active",
        "true"
      ],
      [
        "!=",
        "meta",
        "midpoint"
      ],
      [
        "!has",
        "user__edit-point"
      ]
    ],
    "paint": {
      "circle-radius": 9,
      "circle-color": "#E1361B"
    }
  },
  {
    "id": "gl-draw-point-stroke-active",
    "type": "circle",
    "filter": [
      "all",
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "==",
        "active",
        "true"
      ],
      [
        "!=",
        "meta",
        "midpoint"
      ],
      [
        "!has",
        "user__edit-point"
      ]
    ],
    "paint": {
      "circle-radius": 7,
      "circle-color": "#fff"
    }
  },
  {
    "id": "gl-draw-point-active",
    "type": "circle",
    "filter": [
      "all",
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "!=",
        "meta",
        "midpoint"
      ],
      [
        "==",
        "active",
        "true"
      ],
      [
        "!has",
        "user__edit-point"
      ]
    ],
    "paint": {
      "circle-radius": 5,
      "circle-color": "#E1361B"
    }
  },
  {
    "id": "gl-draw-polygon-fill-static",
    "type": "fill",
    "filter": [
      "all",
      [
        "==",
        "mode",
        "static"
      ],
      [
        "==",
        "$type",
        "Polygon"
      ]
    ],
    "paint": {
      "fill-color": "#404040",
      "fill-outline-color": "#404040",
      "fill-opacity": 0.1
    }
  },
  {
    "id": "gl-draw-polygon-stroke-static",
    "type": "line",
    "filter": [
      "all",
      [
        "==",
        "mode",
        "static"
      ],
      [
        "==",
        "$type",
        "Polygon"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#404040",
      "line-width": 2
    }
  },
  {
    "id": "gl-draw-line-static",
    "type": "line",
    "filter": [
      "all",
      [
        "==",
        "mode",
        "static"
      ],
      [
        "==",
        "$type",
        "LineString"
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
    "paint": {
      "line-color": "#404040",
      "line-width": 2
    }
  },
  {
    "id": "gl-draw-point-static",
    "type": "circle",
    "filter": [
      "all",
      [
        "==",
        "mode",
        "static"
      ],
      [
        "==",
        "$type",
        "Point"
      ]
    ],
    "paint": {
      "circle-radius": 5,
      "circle-color": "#404040"
    }
  },
  {
    "id": "gl-draw-point-symbol-active",
    "type": "symbol",
    "filter": [
      "all",
      [
        "==",
        "$type",
        "Point"
      ],
      [
        "!=",
        "meta",
        "midpoint"
      ],
      [
        "==",
        "active",
        "true"
      ],
      [
        "==",
        "user__edit-point",
        "true"
      ]
    ],
    "layout": {
      "icon-anchor": [
        "coalesce",
        [
          "get",
          "user__edit-point-icon-anchor"
        ],
        "bottom"
      ],
      "icon-image": [
        "coalesce",
        [
          "get",
          "user__edit-point-icon-image"
        ],
        "_edit-point-icon-image"
      ],
      "icon-allow-overlap": true,
      "text-ignore-placement": true,
      "icon-ignore-placement": true,
      "icon-size": [
        "coalesce",
        [
          "get",
          "user__edit-point-icon-size"
        ],
        1
      ],
      "icon-offset": [
        "coalesce",
        [
          "get",
          "user__edit-point-icon-offset"
        ],
        [
          0,
          4
        ]
      ]
    }
  }
];
