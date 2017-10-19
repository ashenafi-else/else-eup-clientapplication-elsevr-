/*
* home_state: COLLECTION, PRODUCT_LIST
* */

window.config = {
    'default_camera': 'cameraLEFTp',
    'default_material_camera': 'cameraLEFTp',
    'default_part_camera': 'cameraLEFTp',
    'default_preview_camera': 'cameraLEFTp',
    'camera_animation_time': 1000,
    'default_language': 'en',
    'default_scanner': 'Dome000018',
    'default_scanners': {
        '18': 'Dome000018',
        '19': 'Dome000018'
    },
    'default_product_image_prefix': 'https://crm.else.shoes/pub/media/catalog/product',
    'default_collection_image_prefix': 'https://crm.else.shoes/pub/media/catalog/category/',
    'default_configuration': {

        'elsevr_men_1_1': [
            {
                'component': '1',
                'structure': '1',
                'element': '0',
                'active_material': 'nappa',
                'active_color': 'mat_nappa_red'
            }
        ],
        'elsevr_women_1_1_1': [
            {
                'component': '1',
                'structure': '1',
                'element': '0',
                'active_color': 'mat_nappa_red'
            }, {
                'component': '2',
                'structure': '1',
                'element': '1',
                'active_color': 'mat_plastic_red'
            }, {
                'component': '3',
                'structure': '1',
                'element': '2',
                'active_color': 'mat_plastic_red'
            }
        ],
        'elsevr_women_1_1_2': [
            {
                'component': '1',
                'structure': '1',
                'element': '0',
                'active_material': 'nappa',
                'active_color': 'mat_nappa_red'
            }
        ],

    },
    'product_tour_configuration': {
        'elsevr_women_1_1': {
        	'name': 'micam v2 model 1.2 (Product tour 122877)',
        	'interval': 50
        }
    },
    'component_cameras': {},
    'cameras_initial_settings': {},
    'home_state': 'PRODUCT_LIST',
    'render_quality': 'AUTO'
};