(function(){
    var script = {
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B5224BE_10DA_53D7_414E_8F059420628A_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 95.81,
   "yaw": -78.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233"
  },
  {
   "backwardYaw": 102.86,
   "yaw": -70.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3"
  },
  {
   "backwardYaw": -79.5,
   "yaw": -130,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA"
  },
  {
   "backwardYaw": -35.28,
   "yaw": -38.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P - L - 002",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_t.jpg",
 "id": "panorama_1B51549C_10DA_33DB_41A3_18B80815D45D",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1F063014_10DA_72AB_41A9_CDD1181E49A6",
  "this.overlay_00853D21_10DB_D2EC_41A1_B7B347253174",
  "this.overlay_057D5E13_10F6_4EAD_41A7_497142832CE4",
  "this.overlay_06C69F70_10FA_CD6B_41A5_FB5DE85FD410"
 ]
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "P - MD - 01",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_t.jpg",
 "partial": false,
 "id": "panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A",
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B5224BE_10DA_53D7_414E_8F059420628A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B5224BE_10DA_53D7_414E_8F059420628A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B516469_10DA_337D_41AC_3DCF7444486D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B516469_10DA_337D_41AC_3DCF7444486D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B510C92_10DA_33AF_41A8_439AD4B65857",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B511149_10DB_F2BD_4105_9FE493F595B0",
   "camera": "this.panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 95.3,
   "yaw": -39.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B510C92_10DA_33AF_41A8_439AD4B65857"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P _ F _ 001",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_t.jpg",
 "id": "panorama_1B516469_10DA_337D_41AC_3DCF7444486D",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_04FE7350_10EF_D6AB_4161_0C31A93504C8"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -78.77,
   "yaw": 95.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D"
  },
  {
   "backwardYaw": -90.58,
   "yaw": 85.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3"
  },
  {
   "backwardYaw": -160.42,
   "yaw": -25.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P - L - 003",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_t.jpg",
 "id": "panorama_1B552CB4_10DA_33EB_41A3_F70992C03233",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0058F709_10DA_3EBD_41B0_A72D8B779B36",
  "this.overlay_0022B37A_10DA_355F_419A_219FDDB8130E",
  "this.overlay_08B0B6E7_10FE_7F75_4165_1EE5F280CE5A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -39.86,
   "yaw": 95.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B516469_10DA_337D_41AC_3DCF7444486D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P _ F _ 002",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_t.jpg",
 "id": "panorama_1B510C92_10DA_33AF_41A8_439AD4B65857",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_05BC6E77_10EE_4F55_4190_0B5947A6458F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 19.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0CCA80E7_112A_D3E4_4163_016F03B807CF",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 144.09,
   "yaw": 50.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B511149_10DB_F2BD_4105_9FE493F595B0"
  },
  {
   "panorama": "this.panorama_1B516469_10DA_337D_41AC_3DCF7444486D",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P _ F _ 003",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_t.jpg",
 "id": "panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_047D63AE_10EA_D5F7_41AD_9A455D225D9C",
  "this.overlay_083A4F3C_10F5_CEDB_419D_D4BDAFDE0E53"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F32E157_112A_D224_4187_0C82D337DF6E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 141.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F06B125_112A_D265_4184_755BA636880A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 109.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F600188_112A_D22B_41AA_188D40717CFA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0C903099_112A_D22D_41B0_12E32E88982C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -163.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F8F81BC_112A_D26B_41AE_2D4F7CFD7E5D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "P - M - 01",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_t.jpg",
 "partial": false,
 "id": "panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2",
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 70.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F7E71AB_112A_D26D_41A1_7A8EC54DA60A",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -130,
   "yaw": -79.5,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P - GM - 000",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_t.jpg",
 "id": "panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_06E52A7A_10FB_D75F_4165_C62E970CD100"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_camera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "items": [
  {
   "media": "this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B5224BE_10DA_53D7_414E_8F059420628A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B5224BE_10DA_53D7_414E_8F059420628A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B522CA3_10DA_53ED_41A1_68EBD46DA13A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B516469_10DA_337D_41AC_3DCF7444486D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B516469_10DA_337D_41AC_3DCF7444486D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B510C92_10DA_33AF_41A8_439AD4B65857",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1B511149_10DB_F2BD_4105_9FE493F595B0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0C73B050_112A_D23B_41A1_F11F1DC12E78",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_camera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_0F440DBE_10DE_CD82_41AC_390BC6C54868.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_0F440DBE_10DE_CD82_41AC_390BC6C54868.ogg"
 },
 "id": "audio_0F440DBE_10DE_CD82_41AC_390BC6C54868",
 "data": {
  "label": "y2mate.com - mohamud ahmed instrumental"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0CBE20D8_112A_D22B_419D_3E03A635DCD7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F71A198_112A_D22B_4180_938B54E58504",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 50,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0C7EE079_112A_D2ED_4157_E1D54A107FE2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 100.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F42E168_112A_D2EC_41AC_BF6CDE3DF91C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F9C41CC_112A_D22B_41A9_6A1BA86C0563",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.15,
   "yaw": -170.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "A - 000",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_t.jpg",
 "id": "panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09AFE6EC_10FA_7F74_419E_3CFFD338410C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 25.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F177135_112A_D265_41AB_55724C223784",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 16.55,
   "yaw": -168.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P - B - 001",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_t.jpg",
 "id": "panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_095B0CF4_10F6_D36B_41AE_4A777C74E06A"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -25.76,
   "yaw": -160.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233"
  },
  {
   "backwardYaw": -168.68,
   "yaw": 16.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3"
  },
  {
   "backwardYaw": -170.44,
   "yaw": -8.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P - L - 004",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_t.jpg",
 "id": "panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_07332307_10FA_56B5_41AF_E959FCFA2815",
  "this.overlay_086E5748_10FA_5EBB_41AD_C0829C84E9F7",
  "this.overlay_08829236_10FA_56D7_41AA_611AC1E769B5"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 101.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0CB270C7_112A_D225_41B0_E130EC011A7B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -38.05,
   "yaw": -35.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D"
  },
  {
   "backwardYaw": -154.36,
   "yaw": -157.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P - M - 001",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_t.jpg",
 "id": "panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_05943971_10F6_D56D_41B0_517C4179AACC",
  "this.overlay_06C62D63_10FA_CD6D_4187_C98FB319E3EA"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0CF92115_112A_D225_4195_B2D6D5D204B3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "pitch": -90
 }
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -157.63,
   "yaw": -154.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "C _ 000",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_t.jpg",
 "id": "panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_02B3B95D_10EA_5555_417F_4627BF68ADC2",
  "this.overlay_088CC1EE_10F5_D577_4175_E4214EEAFFE0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B516469_10DA_337D_41AC_3DCF7444486D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 154.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0CDA00F7_112A_D3E5_417A_AEB7DE814150",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0C886089_112A_D22D_4195_CD3B564C816C",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "P - M - 02",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B5224BE_10DA_53D7_414E_8F059420628A_t.jpg",
 "partial": false,
 "id": "panorama_1B5224BE_10DA_53D7_414E_8F059420628A",
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 171.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0C9D40A8_112A_D26B_41B0_20A05AB9CCAA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0C796068_112A_D2EB_41B0_8D55B649FEC4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 11.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0CE85106_112A_D227_41A0_73361A915D34",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 50.13,
   "yaw": 144.09,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P _ F _ 004",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_t.jpg",
 "id": "panorama_1B511149_10DB_F2BD_4105_9FE493F595B0",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_090BFE2F_10EA_CEF5_41B0_A9576801CC5F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -84.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F248148_112A_D22B_41AC_7D0A2BB35201",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B51AB71_10DA_756D_4161_D6C9A432E9E2_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -70.48,
   "yaw": 102.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D"
  },
  {
   "panorama": "this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 85.77,
   "yaw": -90.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233"
  },
  {
   "backwardYaw": -109.65,
   "yaw": -47.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "P - L - 001",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_t.jpg",
 "id": "panorama_1B531C95_10DA_D3D5_4190_74338AE981E3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1EE6E2C8_10DE_57BB_414E_21B824603A08",
  "this.overlay_01E71E96_10DA_4FD7_4180_BB442BBD8F04",
  "this.overlay_076F5548_10FE_D2BB_41B0_25D9B054BEB8",
  "this.overlay_0F507901_10DD_D29A_4149_EF7EEAF2168A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0F50C178_112A_D2EC_4161_62EDB0558546",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -47.83,
   "yaw": -109.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "AD - 000",
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_t.jpg",
 "id": "panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0BDDFBDF_10D6_3555_4198_B9537B23B392"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 140.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_0CA7B0B8_112A_D26B_4192_1FB88F0E36AC",
 "automaticZoomSpeed": 10
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "left": 0,
 "toolTipOpacity": 0.5,
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "transitionMode": "blending",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "transitionDuration": 500,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "minWidth": 100,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "paddingLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "minHeight": 50,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF"
},
{
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "class": "Container",
 "left": 70,
 "width": 550,
 "layout": "absolute",
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "creationPolicy": "inAdvance",
 "top": 34,
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 98,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "right": "1.27%",
 "borderSize": 0,
 "width": 58,
 "shadow": false,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "bottom": "2.51%",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "propagateClick": true,
 "maxHeight": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "right": "0%",
 "width": 115.05,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 641,
 "paddingBottom": 0,
 "data": {
  "name": "-- SETTINGS"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "class": "Container",
 "left": "0%",
 "width": 330,
 "layout": "absolute",
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_50F91F27_424B_0C40_41C3_4AC948480017",
  "this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
 "left": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "3.14%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "5.247%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "43.457%",
 "paddingBottom": 0,
 "data": {
  "name": "Container7538"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
  "this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_58B883FD_4396_7C5F_41B3_61F626F14414",
 "left": "7.24%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "3.04%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "76.357%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "76.859%",
 "paddingBottom": 0,
 "data": {
  "name": "Container4248"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "minWidth": 1,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "minWidth": 1,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3, this.camera_0F32E157_112A_D224_4187_0C82D337DF6E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09307513_10EE_52AE_419F_642C92B22DBA",
   "pitch": -12.01,
   "yaw": -70.48,
   "distance": 100
  }
 ],
 "id": "overlay_1F063014_10DA_72AB_41A9_CDD1181E49A6",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.41,
   "yaw": -70.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233, this.camera_0F248148_112A_D22B_41AC_7D0A2BB35201); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09379513_10EE_52AE_41AD_5655AB4423D6",
   "pitch": -7.39,
   "yaw": -78.77,
   "distance": 100
  }
 ],
 "id": "overlay_00853D21_10DB_D2EC_41A1_B7B347253174",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.46,
   "yaw": -78.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7, this.camera_0F50C178_112A_D2EC_4161_62EDB0558546); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0937B514_10EE_52AA_419A_517EC184EBE0",
   "pitch": -4.32,
   "yaw": -38.05,
   "distance": 100
  }
 ],
 "id": "overlay_057D5E13_10F6_4EAD_41A7_497142832CE4",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.41,
   "yaw": -38.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA, this.camera_0F42E168_112A_D2EC_41AC_BF6CDE3DF91C); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0937C514_10EE_52AA_41A3_FFC4FA7D122C",
   "pitch": -1.56,
   "yaw": -130,
   "distance": 100
  }
 ],
 "id": "overlay_06C69F70_10FA_CD6B_41A5_FB5DE85FD410",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": -130,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B510C92_10DA_33AF_41A8_439AD4B65857, this.camera_0C903099_112A_D22D_41B0_12E32E88982C); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0935E518_10EE_52DA_4154_CDED83143CE0",
   "pitch": -16.32,
   "yaw": -39.86,
   "distance": 100
  }
 ],
 "id": "overlay_04FE7350_10EF_D6AB_4161_0C31A93504C8",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.55,
   "yaw": -39.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3, this.camera_0CBE20D8_112A_D22B_419D_3E03A635DCD7); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0937E514_10EE_52AA_41A8_8C541B32D9D6",
   "pitch": -12.3,
   "yaw": 85.77,
   "distance": 100
  }
 ],
 "id": "overlay_0058F709_10DA_3EBD_41B0_A72D8B779B36",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.41,
   "yaw": 85.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D, this.camera_0CB270C7_112A_D225_41B0_E130EC011A7B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.47,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09370515_10EE_52AA_41B0_C323A691A15E",
   "pitch": -6.47,
   "yaw": 95.81,
   "distance": 100
  }
 ],
 "id": "overlay_0022B37A_10DA_355F_419A_219FDDB8130E",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.47,
   "yaw": 95.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3, this.camera_0CCA80E7_112A_D3E4_4163_016F03B807CF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09372515_10EE_52AA_41AC_9E5881066B61",
   "pitch": -24.7,
   "yaw": -25.76,
   "distance": 100
  }
 ],
 "id": "overlay_08B0B6E7_10FE_7F75_4165_1EE5F280CE5A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.17,
   "yaw": -25.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B516469_10DA_337D_41AC_3DCF7444486D, this.camera_0CA7B0B8_112A_D26B_4192_1FB88F0E36AC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09350519_10EE_52DA_416C_BE610B921DB0",
   "pitch": -15.32,
   "yaw": 95.3,
   "distance": 100
  }
 ],
 "id": "overlay_05BC6E77_10EE_4F55_4190_0B5947A6458F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.58,
   "yaw": 95.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09352519_10EE_52DA_414A_9F0910F26DF4",
   "pitch": -12.3,
   "yaw": -81.56,
   "distance": 100
  }
 ],
 "id": "overlay_047D63AE_10EA_D5F7_41AD_9A455D225D9C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -81.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B511149_10DB_F2BD_4105_9FE493F595B0, this.camera_0C796068_112A_D2EB_41B0_8D55B649FEC4); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09354519_10EE_52DA_4190_AA3305CC22EE",
   "pitch": -14.54,
   "yaw": 50.13,
   "distance": 100
  }
 ],
 "id": "overlay_083A4F3C_10F5_CEDB_419D_D4BDAFDE0E53",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.2,
   "yaw": 50.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D, this.camera_0C7EE079_112A_D2ED_4157_E1D54A107FE2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09359517_10EE_52D6_41AE_E82F5498A234",
   "pitch": -25.92,
   "yaw": -79.5,
   "distance": 100
  }
 ],
 "id": "overlay_06E52A7A_10FB_D75F_4165_C62E970CD100",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.69,
   "yaw": -79.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.92
  }
 ]
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "minWidth": 1,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton HS "
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "width": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 58,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "minWidth": 1,
 "height": 58,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton GYRO"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 58
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3, this.camera_0C9D40A8_112A_D26B_41B0_20A05AB9CCAA); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09362517_10EE_52D6_41A1_8003BEB8F611",
   "pitch": -7.26,
   "yaw": -170.44,
   "distance": 100
  }
 ],
 "id": "overlay_09AFE6EC_10FA_7F74_419E_3CFFD338410C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.37,
   "yaw": -170.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3, this.camera_0F8F81BC_112A_D26B_41AE_2D4F7CFD7E5D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.41,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09364517_10EE_52D6_41A2_334C382879C7",
   "pitch": -4.75,
   "yaw": -168.68,
   "distance": 100
  }
 ],
 "id": "overlay_095B0CF4_10F6_D36B_41AE_4A777C74E06A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.41,
   "yaw": -168.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233, this.camera_0CDA00F7_112A_D3E5_417A_AEB7DE814150); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.21,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09377515_10EE_52AA_4199_EBCA3F24D491",
   "pitch": -23.19,
   "yaw": -160.42,
   "distance": 100
  }
 ],
 "id": "overlay_07332307_10FA_56B5_41AF_E959FCFA2815",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.21,
   "yaw": -160.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3, this.camera_0CF92115_112A_D225_4195_B2D6D5D204B3); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09369515_10EE_52AA_41AC_FF51F324289B",
   "pitch": -2.24,
   "yaw": -8.15,
   "distance": 100
  }
 ],
 "id": "overlay_086E5748_10FA_5EBB_41AD_C0829C84E9F7",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": -8.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3, this.camera_0CE85106_112A_D227_41A0_73361A915D34); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.36,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0936A516_10EE_52D7_4198_1B34FC7AFC4B",
   "pitch": -8.15,
   "yaw": 16.55,
   "distance": 100
  }
 ],
 "id": "overlay_08829236_10FA_56D7_41AA_611AC1E769B5",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.36,
   "yaw": 16.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D, this.camera_0F06B125_112A_D265_4184_755BA636880A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0935B518_10EE_52DA_41A2_B92CBFCF7EB5",
   "pitch": -19.65,
   "yaw": -35.28,
   "distance": 100
  }
 ],
 "id": "overlay_05943971_10F6_D56D_41B0_517C4179AACC",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7,
   "yaw": -35.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5, this.camera_0F177135_112A_D265_41AB_55724C223784); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0935D518_10EE_52DA_4177_148EA6B4E7ED",
   "pitch": -21.4,
   "yaw": -157.63,
   "distance": 100
  }
 ],
 "id": "overlay_06C62D63_10FA_CD6D_4187_C98FB319E3EA",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.92,
   "yaw": -157.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0936F516_10EE_52D7_41AB_4EEEB0CE2DDC",
   "pitch": -13.27,
   "yaw": 109.67,
   "distance": 100
  }
 ],
 "id": "overlay_02B3B95D_10EA_5555_417F_4627BF68ADC2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.13,
   "yaw": 109.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7, this.camera_0F9C41CC_112A_D22B_41A9_6A1BA86C0563); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09360516_10EE_52D7_41A8_AB190DBE4088",
   "pitch": -3.82,
   "yaw": -154.36,
   "distance": 100
  }
 ],
 "id": "overlay_088CC1EE_10F5_D577_4175_E4214EEAFFE0",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.42,
   "yaw": -154.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB, this.camera_0C73B050_112A_D23B_41A1_F11F1DC12E78); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0934951A_10EE_52DE_419C_465194A78868",
   "pitch": -7.76,
   "yaw": 144.09,
   "distance": 100
  }
 ],
 "id": "overlay_090BFE2F_10EA_CEF5_41B0_A9576801CC5F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.37,
   "yaw": 144.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B51549C_10DA_33DB_41A3_18B80815D45D, this.camera_0F600188_112A_D22B_41AA_188D40717CFA); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09313512_10EE_52AE_41A6_161D2CA49A14",
   "pitch": -17.04,
   "yaw": 102.86,
   "distance": 100
  }
 ],
 "id": "overlay_1EE6E2C8_10DE_57BB_414E_21B824603A08",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.34,
   "yaw": 102.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B552CB4_10DA_33EB_41A3_F70992C03233, this.camera_0F71A198_112A_D22B_4180_938B54E58504); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0930F513_10EE_52AE_419A_E86E01D7B12D",
   "pitch": -13.4,
   "yaw": -90.58,
   "distance": 100
  }
 ],
 "id": "overlay_01E71E96_10DA_4FD7_4180_BB442BBD8F04",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.4,
   "yaw": -90.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E, this.camera_0F7E71AB_112A_D26D_41A1_7A8EC54DA60A); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 02b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_09301513_10EE_52AE_418C_660530DBBE3B",
   "pitch": -25.48,
   "yaw": -47.83,
   "distance": 100
  }
 ],
 "id": "overlay_076F5548_10FE_D2BB_41B0_25D9B054BEB8",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.15,
   "yaw": -47.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0C516016_112A_D227_41A9_07E406CBBACD",
   "pitch": -6.76,
   "yaw": 70.48,
   "distance": 100
  }
 ],
 "id": "overlay_0F507901_10DD_D29A_4149_EF7EEAF2168A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.38,
   "yaw": 70.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1B531C95_10DA_D3D5_4190_74338AE981E3, this.camera_0C886089_112A_D22D_4195_CD3B564C816C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.39,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_0A091E6C_10D6_CF7A_41A8_B24AFA690A77",
   "pitch": -6.25,
   "yaw": -109.65,
   "distance": 100
  }
 ],
 "id": "overlay_0BDDFBDF_10D6_3555_4198_B9537B23B392",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.39,
   "yaw": -109.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.25
  }
 ]
},
{
 "children": [
  "this.Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38"
 ],
 "class": "Container",
 "left": "0.18%",
 "width": 314,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": 0,
 "contentOpaque": false,
 "shadowBlurRadius": 7,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadowVerticalLength": 0,
 "height": 42,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "white block"
 }
},
{
 "children": [
  "this.Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
  "this.Image_588A0363_41A0_877B_41C3_5D919767CB3D",
  "this.Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
  "this.Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
  "this.Image_5B84D225_41A1_80FE_4182_5744BD082173",
  "this.Image_5BF1307D_41E0_814E_41C3_7BE679482BFB"
 ],
 "class": "Container",
 "left": 0,
 "width": 314,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": 1,
 "shadowBlurRadius": 7,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadowVerticalLength": 0,
 "height": 53,
 "visible": false,
 "backgroundColorRatios": [
  0.01
 ],
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "blue block"
 }
},
{
 "fontFamily": "Oswald",
 "class": "Label",
 "left": 10,
 "width": 391,
 "fontColor": "#000000",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "text": "LOREM IPSUM",
 "top": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "fontSize": 61,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 75,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "textDecoration": "none",
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "bold",
 "minHeight": 1,
 "data": {
  "name": "text 1"
 }
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "right": "0%",
 "width": 110,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 110,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
  "this.Image_5244FDC1_4259_0FC1_416D_239F8C833A78"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "center",
 "width": "91.304%",
 "gap": 3,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "85.959%",
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "class": "Container",
 "left": "0%",
 "width": 66,
 "layout": "absolute",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
  "this.HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "right": 0,
 "width": 330,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadowOpacity": 0.3,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "Global"
 }
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "vertical",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadowOpacity": 0.3,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "data": {
  "name": "Global"
 }
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadowOpacity": 0.3,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "Global"
 }
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "vertical",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadowOpacity": 0.3,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "data": {
  "name": "Global"
 }
},
{
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadowOpacity": 0.3,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "data": {
  "name": "Global"
 }
},
{
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": true,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "10%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadowOpacity": 0.3,
 "gap": 10,
 "backgroundOpacity": 1,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "shadowSpread": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowVerticalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "Global"
 }
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "class": "Container",
 "left": "15%",
 "layout": "vertical",
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "scrollBarColor": "#000000",
 "right": "15%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "top": "10%",
 "contentOpaque": false,
 "bottom": "80%",
 "paddingRight": 20,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "scrollBarWidth": 10
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_50F91F27_424B_0C40_41C3_4AC948480017",
 "left": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "21.928%",
 "paddingBottom": 0,
 "data": {
  "name": "Container8437"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
  "this.Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_546964AC_4259_1C47_41B4_89BC8EEE450A",
 "left": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "23.39%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "71.91%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "48.2%",
 "paddingBottom": 0,
 "data": {
  "name": "Container9886"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_4DF6648C_43C9_009F_41B4_06D470FF1669",
 "left": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "66.351%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container3396"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_4D37021E_43C9_03B8_41CC_28E8F98A7511",
 "left": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "77.883%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "98.501%",
 "paddingBottom": 0,
 "data": {
  "name": "Container3434"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09307513_10EE_52AE_419F_642C92B22DBA",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09379513_10EE_52AE_41AD_5655AB4423D6",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0937B514_10EE_52AA_419A_517EC184EBE0",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B51549C_10DA_33DB_41A3_18B80815D45D_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0937C514_10EE_52AA_41A3_FFC4FA7D122C",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B516469_10DA_337D_41AC_3DCF7444486D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0935E518_10EE_52DA_4154_CDED83143CE0",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0937E514_10EE_52AA_41A8_8C541B32D9D6",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09370515_10EE_52AA_41B0_C323A691A15E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B552CB4_10DA_33EB_41A3_F70992C03233_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09372515_10EE_52AA_41AC_9E5881066B61",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B510C92_10DA_33AF_41A8_439AD4B65857_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09350519_10EE_52DA_416C_BE610B921DB0",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09352519_10EE_52DA_414A_9F0910F26DF4",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B52753E_10DB_D2D7_41AF_19C1BD8707FB_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09354519_10EE_52DA_4190_AA3305CC22EE",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B51E4CB_10DA_D3BD_419B_09EBD0C8A6EA_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09359517_10EE_52D6_41AE_E82F5498A234",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1CAE7F95_10DA_CDD5_41AC_20DB66776AA3_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09362517_10EE_52D6_41A1_8003BEB8F611",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B492CF4_10DA_F36B_41A1_7DDBF82452A3_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09364517_10EE_52D6_41A2_334C382879C7",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09377515_10EE_52AA_4199_EBCA3F24D491",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09369515_10EE_52AA_41AC_FF51F324289B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B5037DE_10DA_5D57_4195_9F033860BCC3_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0936A516_10EE_52D7_4198_1B34FC7AFC4B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0935B518_10EE_52DA_41A2_B92CBFCF7EB5",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B5F628D_10DA_77B5_41AA_7DBD3E7AAFD7_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0935D518_10EE_52DA_4177_148EA6B4E7ED",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0936F516_10EE_52D7_41AB_4EEEB0CE2DDC",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B50A445_10DA_F2B5_41A8_5B00A41507E5_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09360516_10EE_52D7_41A8_AB190DBE4088",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B511149_10DB_F2BD_4105_9FE493F595B0_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0934951A_10EE_52DE_419C_465194A78868",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09313512_10EE_52AE_41A6_161D2CA49A14",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0930F513_10EE_52AE_419A_E86E01D7B12D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09301513_10EE_52AE_418C_660530DBBE3B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B531C95_10DA_D3D5_4190_74338AE981E3_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0C516016_112A_D227_41A9_07E406CBBACD",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1B5FEBC0_10DA_D5AB_4196_042C7BE7F70E_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0A091E6C_10D6_CF7A_41A8_B24AFA690A77",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_4EE5F6BF_41A0_81CB_41B1_1DE1A6565D38.png",
 "verticalAlign": "middle",
 "width": "100%",
 "bottom": "8.75%",
 "paddingRight": 0,
 "maxWidth": 635,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "67.391%",
 "paddingBottom": 0,
 "maxHeight": 59,
 "data": {
  "name": "ministry of revenue"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_4ED9537E_41A1_874A_41C1_08E8B3C9B069.png",
 "verticalAlign": "middle",
 "top": "19.43%",
 "width": "32.903%",
 "paddingRight": 0,
 "maxWidth": 167,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "60.377%",
 "paddingBottom": 0,
 "maxHeight": 59,
 "data": {
  "name": "Image5496"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_588A0363_41A0_877B_41C3_5D919767CB3D",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_588A0363_41A0_877B_41C3_5D919767CB3D.png",
 "verticalAlign": "middle",
 "top": "0%",
 "width": "79.355%",
 "paddingRight": 0,
 "maxWidth": 469,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "98.113%",
 "paddingBottom": 0,
 "maxHeight": 59,
 "data": {
  "name": "Image11167"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_5963ECFE_41A7_814A_41B1_28ADA8FA79F2.png",
 "verticalAlign": "middle",
 "top": "0%",
 "width": "100%",
 "paddingRight": 0,
 "maxWidth": 880,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "94.34%",
 "paddingBottom": 0,
 "maxHeight": 59,
 "data": {
  "name": "Image11246"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_59FD31E7_41A1_837B_41CA_5FDA1A844094",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_59FD31E7_41A1_837B_41CA_5FDA1A844094.png",
 "verticalAlign": "middle",
 "top": "20.75%",
 "width": "46.774%",
 "paddingRight": 0,
 "maxWidth": 321,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "47.17%",
 "paddingBottom": 0,
 "maxHeight": 59,
 "data": {
  "name": "Image11319"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_5B84D225_41A1_80FE_4182_5744BD082173",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_5B84D225_41A1_80FE_4182_5744BD082173.png",
 "verticalAlign": "middle",
 "top": "16.98%",
 "width": "50.645%",
 "paddingRight": 0,
 "maxWidth": 395,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "49.057%",
 "paddingBottom": 0,
 "maxHeight": 59,
 "data": {
  "name": "Image11499"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_5BF1307D_41E0_814E_41C3_7BE679482BFB",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_5BF1307D_41E0_814E_41C3_7BE679482BFB.png",
 "verticalAlign": "middle",
 "top": "11.32%",
 "width": "53.226%",
 "paddingRight": 0,
 "maxWidth": 396,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "62.264%",
 "paddingBottom": 0,
 "maxHeight": 59,
 "data": {
  "name": "Image11621"
 },
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "width": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "minWidth": 1,
 "height": 60,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 60
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_4D3870DF_4257_15C2_41C3_D3DCF8869E88.png",
 "verticalAlign": "middle",
 "width": "45.71%",
 "paddingRight": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.openLink('http://https://www.instagram.com/mellacreatives/', '_blank')",
 "minWidth": 1,
 "height": "10.163%",
 "paddingBottom": 0,
 "maxHeight": 58,
 "data": {
  "name": "Image5138"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_5244FDC1_4259_0FC1_416D_239F8C833A78",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_5244FDC1_4259_0FC1_416D_239F8C833A78.png",
 "verticalAlign": "middle",
 "width": "100%",
 "paddingRight": 0,
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.openLink('http://https://www.linkedin.com/company/mella-creative-studio/', '_blank')",
 "minWidth": 1,
 "height": "8.167%",
 "paddingBottom": 0,
 "maxHeight": 58,
 "data": {
  "name": "Image4905"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "left": "0%",
 "width": 36,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "top": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.4,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container black"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "left": 10,
 "width": 50,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "verticalAlign": "middle",
 "top": "40%",
 "horizontalAlign": "center",
 "bottom": "40%",
 "paddingRight": 0,
 "maxWidth": 80,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "propagateClick": true,
 "maxHeight": 80,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "width": "90%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "data": {
  "name": "Container"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "right": 9,
 "borderSize": 0,
 "width": 50,
 "shadow": false,
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "verticalAlign": "middle",
 "top": "40%",
 "horizontalAlign": "center",
 "bottom": "40%",
 "paddingRight": 0,
 "maxWidth": 50,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "propagateClick": true,
 "maxHeight": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:0.86vmin;\"><BR STYLE=\"letter-spacing:0vmin;color:#000000;font-size:0.86vmin;font-family:'Segoe UI';\"/></p></div>",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "id": "HTMLText_4E82D1A1_41A0_83F6_41C1_8F0D3A250167",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "top": "5.97%",
 "width": "30.303%",
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingTop": 10,
 "minWidth": 1,
 "height": "5.236%",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText5367"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "width": "85%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "class": "Container",
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.51,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 50,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "width": "50%",
 "gap": 0,
 "paddingLeft": 50,
 "paddingTop": 20,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "minWidth": 50,
 "height": "75%",
 "paddingBottom": 0,
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 140,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "itemMaxWidth": 1000,
 "class": "ThumbnailGrid",
 "scrollBarColor": "#04A3E1",
 "itemLabelHorizontalAlign": "center",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "italic",
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "itemLabelFontFamily": "Oswald",
 "itemMode": "normal",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemThumbnailOpacity": 1,
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "width": "100%",
 "verticalAlign": "middle",
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemOpacity": 1,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "height": "92%",
 "itemHorizontalAlign": "center",
 "backgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "itemThumbnailBorderRadius": 0,
 "minWidth": 1,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemWidth": 220,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "propagateClick": true,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadow": true,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "shadow": false,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "itemHeight": 160,
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "itemThumbnailWidth": 220,
 "itemThumbnailScaleMode": "fit_outside",
 "itemThumbnailHeight": 125,
 "gap": 26,
 "paddingLeft": 70,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "borderRadius": 5,
 "paddingBottom": 70,
 "itemBackgroundColorDirection": "vertical",
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "minHeight": 1,
 "itemPaddingBottom": 3
},
{
 "class": "WebFrame",
 "backgroundColorDirection": "vertical",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "borderSize": 0,
 "width": "100%",
 "shadow": false,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "scrollEnabled": true,
 "paddingRight": 0,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame"
 },
 "height": "100%",
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "minWidth": 50,
 "height": "75%",
 "paddingBottom": 0,
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "left": 0,
 "toolTipOpacity": 1,
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "transitionMode": "blending",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "transitionDuration": 500,
 "playbackBarBorderRadius": 0,
 "height": "99.975%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "paddingLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 },
 "minHeight": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF"
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 140,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%",
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "width": "55%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "class": "Container",
 "scrollBarColor": "#0069A3",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.51,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 60,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "width": "45%",
 "gap": 0,
 "paddingLeft": 60,
 "paddingTop": 20,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "verticalAlign": "middle",
 "width": "25%",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "minWidth": 50,
 "height": "75%",
 "paddingBottom": 0,
 "maxHeight": 60,
 "data": {
  "name": "X"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "left": "7.87%",
 "width": 71,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "bottom": "1.5%",
 "paddingRight": 0,
 "maxWidth": 101,
 "mode": "toggle",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A.get('visible')){ this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_546964AC_4259_1C47_41B4_89BC8EEE450A, false, 0, null, null, false) }",
 "minWidth": 1,
 "height": 61,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Info"
 },
 "propagateClick": true,
 "maxHeight": 101,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518",
 "right": "3.13%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_4D3C7CFD_4392_045F_41BD_B71D1DBE1518.png",
 "verticalAlign": "middle",
 "top": "3.5%",
 "width": "60.938%",
 "paddingRight": 0,
 "maxWidth": 84,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.openLink('http://mella@mella-cs.com', '_blank')",
 "minWidth": 1,
 "height": "42.529%",
 "paddingBottom": 0,
 "maxHeight": 84,
 "data": {
  "name": "Image2783"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_4D2F7E58_4392_07A5_41C0_C535119A8467",
 "right": "4.69%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_4D2F7E58_4392_07A5_41C0_C535119A8467.png",
 "verticalAlign": "middle",
 "width": "57.813%",
 "bottom": "30.53%",
 "paddingRight": 0,
 "maxWidth": 84,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.openLink('http://mella-cs.com', '_blank')",
 "minWidth": 1,
 "height": "28.5%",
 "paddingBottom": 0,
 "maxHeight": 84,
 "data": {
  "name": "Image2877"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "right": "0%",
 "borderSize": 0,
 "width": 44,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "bottom": "4.5%",
 "paddingRight": 0,
 "maxWidth": 101,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false); this.openLink('http://https://maps.google.com/maps?q=8.998697,38.747010&ll=8.998697,38.747010&z=16', '_blank')",
 "minWidth": 1,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Location"
 },
 "propagateClick": false,
 "maxHeight": 101,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_5617B085_43AE_1CAE_41CC_8FF53A5EBA65.png",
 "verticalAlign": "middle",
 "width": "6.786%",
 "bottom": "1.63%",
 "paddingRight": 0,
 "maxWidth": 1202,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "if(!this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511.get('visible')){ this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false) }",
 "minWidth": 1,
 "height": "5.865%",
 "paddingBottom": 0,
 "maxHeight": 998,
 "data": {
  "name": "Image3661"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_58A0CA8B_4392_0CBA_41A3_BAE15310237F.png",
 "verticalAlign": "middle",
 "top": "0%",
 "width": "100%",
 "paddingRight": 0,
 "maxWidth": 1012,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_4D37021E_43C9_03B8_41CC_28E8F98A7511, false, 0, null, null, false)",
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "maxHeight": 1185,
 "data": {
  "name": "Image4301"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "paddingRight": 40,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.7,
 "backgroundColor": [
  "#000000"
 ],
 "width": "100%",
 "gap": 10,
 "paddingLeft": 40,
 "paddingTop": 40,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 40,
 "data": {
  "name": "- Buttons set"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "scaleMode": "fit_outside",
 "class": "Image",
 "left": "0%",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "verticalAlign": "middle",
 "top": "0%",
 "width": "100%",
 "paddingRight": 0,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "maxHeight": 1000,
 "data": {
  "name": "Image"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 0,
 "paddingLeft": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "height": 60,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "class": "Container",
 "scrollBarColor": "#E73B2C",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.79,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "scrollBarColor": "#000000",
 "width": 370,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "minWidth": 50,
 "height": "36.14%",
 "paddingBottom": 0,
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "100%",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "minWidth": 50,
 "height": "36.14%",
 "paddingBottom": 0,
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "left": "0%",
 "toolTipOpacity": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "transitionMode": "blending",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "transitionDuration": 500,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "minWidth": 1,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipDisplayTime": 600,
 "paddingLeft": 0,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "minHeight": 1,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF"
},
{
 "cursor": "hand",
 "class": "IconButton",
 "left": 10,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "minWidth": 50,
 "paddingBottom": 0,
 "maxHeight": 60,
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 50
},
{
 "cursor": "hand",
 "class": "IconButton",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "verticalAlign": "middle",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "minWidth": 50,
 "paddingBottom": 0,
 "maxHeight": 60,
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 50
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "verticalAlign": "top",
 "top": 20,
 "width": "10%",
 "paddingRight": 0,
 "maxWidth": 60,
 "mode": "push",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "minWidth": 50,
 "height": "10%",
 "paddingBottom": 0,
 "maxHeight": 60,
 "data": {
  "name": "IconButton X"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 50,
 "cursor": "hand"
},
{
 "scaleMode": "fit_outside",
 "class": "Image",
 "left": "0%",
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "verticalAlign": "bottom",
 "top": "0%",
 "width": "100%",
 "paddingRight": 0,
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "maxHeight": 1000,
 "data": {
  "name": "Image40635"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 0,
 "paddingLeft": 0,
 "paddingTop": 20,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": "5%",
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "class": "Container",
 "scrollBarColor": "#E73B2C",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.79,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "scrollBarColor": "#000000",
 "width": 370,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 40,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "left": "0%",
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.png",
 "verticalAlign": "top",
 "top": "0%",
 "width": "100%",
 "paddingRight": 0,
 "maxWidth": 1095,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 40,
 "height": "25%",
 "paddingBottom": 0,
 "maxHeight": 1095,
 "data": {
  "name": "Image Company"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 30
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "middle",
 "top": "26%",
 "contentOpaque": false,
 "bottom": "26%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "width": "100%",
 "gap": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 1"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "vertical",
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 5,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 130,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "vertical",
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-1"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "vertical",
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-2"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "vertical",
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-3"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "vertical",
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-4"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "vertical",
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-5"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "class": "Container",
 "left": "0%",
 "layout": "vertical",
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "shadow": false,
 "creationPolicy": "inAdvance",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "middle",
 "top": "25%",
 "contentOpaque": false,
 "bottom": "25%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "-Level 2-6"
 },
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll"
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.22vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.38vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.51vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.7vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 20,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false
},
{
 "textDecoration": "none",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "width": 180,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "horizontalAlign": "center",
 "iconHeight": 32,
 "shadowColor": "#000000",
 "shadow": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "fontSize": "2.39vh",
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingRight": 0,
 "iconBeforeLabel": true,
 "gap": 5,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingTop": 0,
 "label": "LOREM IPSUM",
 "minWidth": 1,
 "height": 50,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "shadowSpread": 1,
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "borderRadius": 50,
 "fontWeight": "bold",
 "minHeight": 1,
 "cursor": "hand",
 "data": {
  "name": "Button"
 }
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.22vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.76vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "46%",
 "paddingBottom": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false
},
{
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "75%",
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button Tour Info"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "RECEPTION >",
 "minWidth": 1,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button Panorama List"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 23,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "ROOMS >",
 "minWidth": 1,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "pressedLabel": "Inserdt Text",
 "data": {
  "name": "Button Location"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "AMENITIES >",
 "minWidth": 1,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button Floorplan"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "SPORTS AREA >",
 "minWidth": 1,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button Photoalbum"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "SWIMMING POOL >",
 "minWidth": 1,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button Contact"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "RESTAURANTS >",
 "minWidth": 1,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "class": "Container",
 "scrollBarColor": "#000000",
 "width": 40,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 2,
 "paddingBottom": 0,
 "data": {
  "name": "blue line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0
 ]
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 78,
 "paddingBottom": 0,
 "data": {
  "name": "HTMLText47602"
 },
 "visible": false,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true
},
{
 "children": [
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 7,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 56,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false
},
{
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "horizontal",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 7,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "propagateClick": false
},
{
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "paddingLeft": 5,
 "paddingTop": 0,
 "label": "BACK",
 "minWidth": 1,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Main Entrance",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 23,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lobby",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "pressedLabel": "Reception",
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Reception",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Meeting Area 1",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Meeting Area 2",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Bar",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Chill Out",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Terrace",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 9"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 0,
 "paddingTop": 0,
 "label": "Garden",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 10"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 0,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "paddingLeft": 5,
 "paddingTop": 0,
 "label": "BACK",
 "minWidth": 1,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 23,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 9"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 10"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "paddingLeft": 5,
 "paddingTop": 0,
 "label": "BACK",
 "minWidth": 1,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 23,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 9"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 10"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "paddingLeft": 5,
 "paddingTop": 0,
 "label": "BACK",
 "minWidth": 1,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 23,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 9"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 10"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "paddingLeft": 5,
 "paddingTop": 0,
 "label": "BACK",
 "minWidth": 1,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 23,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 9"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 10"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "data": {
  "name": "Button <BACK"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 30,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "verticalAlign": "middle",
 "rollOverFontSize": 18,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "paddingLeft": 5,
 "paddingTop": 0,
 "label": "BACK",
 "minWidth": 1,
 "height": 50,
 "gap": 5,
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 30,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "backgroundOpacity": 0.5,
 "paddingRight": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 1,
 "paddingBottom": 0,
 "data": {
  "name": "line"
 },
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "class": "Container",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 8,
 "paddingBottom": 0,
 "data": {
  "name": "line separator"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverShadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 2"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 23,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "pressedLabel": "Lorem Ipsum",
 "data": {
  "name": "Button text 3"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 4"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 5"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 6"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 7"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 8"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 9"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundOpacity": 0,
 "width": "100%",
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "textDecoration": "none",
 "data": {
  "name": "Button text 10"
 },
 "pressedBackgroundOpacity": 1,
 "shadowSpread": 1,
 "class": "Button",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "horizontalAlign": "left",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false,
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "paddingRight": 0,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "mode": "push",
 "fontSize": 18,
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "gap": 5,
 "paddingLeft": 10,
 "paddingTop": 0,
 "label": "Lorem Ipsum",
 "minWidth": 1,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "iconBeforeLabel": true,
 "paddingBottom": 0,
 "fontStyle": "italic",
 "iconWidth": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "propagateClick": true,
 "borderRadius": 0,
 "fontWeight": "normal",
 "minHeight": 1,
 "cursor": "hand",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "scaleMode": "fit_inside",
 "class": "Image",
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "25%",
 "shadow": false,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "verticalAlign": "top",
 "paddingRight": 0,
 "maxWidth": 200,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 0,
 "maxHeight": 200,
 "data": {
  "name": "agent photo"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1
},
{
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.38vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.51vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.51vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.51vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.51vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.86vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "scrollBarMargin": 2,
 "width": "75%",
 "paddingRight": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "paddingTop": 0,
 "minWidth": 1,
 "height": "100%",
 "paddingBottom": 10,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "width": 44,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 101,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "minWidth": 1,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Thumblist"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 101
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "width": 44,
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 101,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "minWidth": 1,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 101
},
{
 "transparencyActive": true,
 "class": "IconButton",
 "width": 44,
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 101,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "minWidth": 1,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 101
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "width": 44,
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 101,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "minWidth": 1,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Realtor"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand",
 "maxHeight": 101
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "width": 44,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 101,
 "mode": "push",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 1,
 "height": 44,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Video"
 },
 "propagateClick": false,
 "maxHeight": 101,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "class": "IconButton",
 "width": 50,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "borderSize": 0,
 "shadow": false,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "maxWidth": 101,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "minWidth": 1,
 "height": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "propagateClick": false,
 "maxHeight": 101,
 "borderRadius": 0,
 "minHeight": 1,
 "cursor": "hand"
}],
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.Container_50E57579_424B_1CC1_41C7_2A7D7DE232E6",
  "this.Container_58B883FD_4396_7C5F_41B3_61F626F14414"
 ],
 "class": "Player",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 1,
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.playAudioList([this.audio_0F440DBE_10DE_CD82_41AC_390BC6C54868]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "existsKey": function(key){  return key in window; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "paddingLeft": 0,
 "paddingTop": 0,
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": true,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "visible",
 "data": {
  "name": "Player468"
 },
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
