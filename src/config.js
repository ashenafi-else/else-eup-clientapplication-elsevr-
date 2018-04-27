/*
* home_state: COLLECTION, PRODUCT_LIST
* */

window.config = {
    'auto_rotate_settings': {
        'product_view': {
            'default_on': true,
            'speed': 0.5
        },
        'part_view': {
            'default_on': true,
            'speed': 0.5
        },
        'preview_view': {
            'default_on': true,
            'speed': 0.5
        },
        'material_view': {
            'default_on': true,
            'speed': 0.5
        },
        'components': [{
            'product_sku': 'elsevr_men_1_1',
            'component': '11',
            'settings': {
                'default_on': false
            }
        }],
    },
    'default_camera': 'cameraLEFTp',
    'default_material_camera': 'cameraLEFTp',
    'default_part_camera': 'cameraLEFTp',
    'default_preview_camera': 'cameraLEFTp',
    'default_fitting_camera': 'cameraLEFTp',
    'camera_animation_time': 0,
    'default_language': 'en',
    'default_scanner': 'Dome000018',
    'default_scanners': {
        '18': 'Dome000058',
        '19': 'Dome000018',
        '20': 'Dome000018',
        '23': 'Dome000018',
        '25': 'Dome000018',
        "22": 'Dome000018'
    },
    'product_tour_configuration': {
        'elsevr_men_1_1': {
            'type':'video',
            'src': './img/video/1-3-test.mp4'
        },
        'elsevr_women_1_1': {
            'type':'video',
            'src': './img/video/1-2-test.mp4'
        },
    },
    'default_product_image_prefix': 'https://crm.else.shoes/pub/media/catalog/product',
    'default_collection_image_prefix': 'https://crm.else.shoes/pub/media/catalog/category/',
    'default_configuration': {
        'elsevr_men_1_1': [{
            'component': '1',
            'structure': '1',
            'element': '0',
            'active_material': 'suede',
            'active_color': 'mat_suede_blue-electric'
        },{
            'component': '2',
            'structure': '1',
            'element': '0',
            'active_material': 'suede',
            'active_color': 'mat_suede_beige'
        }],
        'larusmiani_1': [{
            'component': '1',
            'structure': '1',
            'element': '0',
            'active_material': 'velvet',
            'active_color': 'mat_velvet_191A1B'
        },{
            'component': '5',
            'structure': '1',
            'element': '0',
            'active_material': 'velvet',
            'active_color': 'mat_velvet_191A1B'
        }]

    },

'update_last_scan_interval': 15,
    'component_cameras': {
    'elsevr_men_1_1': {
        '11': 'camera-for-monogram'
    },
    'larusmiani_1': {
        '7': 'cameraBOTTOM'
    }
    /* '1': 'prod_1_1cameraBODY',
     '2': 'prod_1_1cameraEMBROIDERY',
     '4': 'prod_1_1cameraLINING',
     '6': 'prod_1_1cameraOUTSOLE',
     '3': 'prod_1_1cameraTRIM_INSOLE',
     '5': 'prod_1_1cameraTRIM_INSOLE',*/
},
'cameras_initial_settings': {
    'cameraTOP':    {'scale': 0, 'rotate': {'phi': 45, 'theta': 45}},
    'camera-for-monogram':    {'scale': 0.9, 'rotate': {'phi': 45, 'theta': 0}},
},
    'home_state': 'COLLECTION',
    'render_quality': 'HIGH',
    'order_level': 'PRODUCT',
    'staff_login': false,
    'show_nfc_input': {
        'remotecontrol': true,
        'mainscreen': true
},

};