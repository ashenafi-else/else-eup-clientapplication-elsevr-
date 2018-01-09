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
        }
    },
    'default_camera': 'cameraLEFTp',
    'default_material_camera': 'cameraLEFTp',
    'default_part_camera': 'cameraLEFTp',
    'default_preview_camera': 'cameraLEFTp',
    'default_fitting_camera': 'cameraLEFTp',
    'camera_animation_time': 1000,
    'default_language': 'en',
    'default_scanner': 'Dome000018',
    'default_scanners': {
        '18': 'Dome000018',
        '19': 'Dome000018',
        '20': 'Dome000018',
        '23': 'Dome000018',
        '25': 'Dome000058',
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

    },

    'update_last_scan_interval': 15,
    'component_cameras': {},
    'cameras_initial_settings': {},
    'home_state': 'PRODUCT_LIST',
    'render_quality': 'AUTO'
};