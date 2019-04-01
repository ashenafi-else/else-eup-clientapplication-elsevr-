import uuidv4 from 'uuid/v4';

const stores = [{
    code: "else_vr_predit_analytics_lab",
    id: 20,
    language: "en",
    name: "Predit Analytics Lab",
    website_id: 10
}];
const collections = [{
    active: true,
    id: "4f58f916-f4f3-4edc-a64c-abefd7ee7314",
    image: undefined,
    name: "MyStyle 3D",
}];
const products = [
    {
        uuid: "89b6f72a-0c01-46b7-b0cf-10878a5cd33c",
        name: "ELSEVR19 - Sneaker Model",
        gif: "https://elsedamstor.blob.core.windows.net/elsedefaultprivatestorage/private/BLEND4WB_JSON/0e2042a2-f457-4f60-9822-45c8f18a7707/frames.gif",
        img: "https://elsedamstor.blob.core.windows.net/elsedefaultprivatestorage/private/BLEND4WB_JSON/4f9a566a-7636-4676-8717-b27bebc6a149/frame_0001.png",
        image: "https://elsedamstor.blob.core.windows.net/elsedefaultprivatestorage/private/BLEND4WB_JSONundefined",
        fit_score: null,
        tour_360: null,
        video: null,
    },
    {
        uuid: "02776341-3bd3-4960-9c6c-a1b5e8776825",
        name: "ELSEVR19 - High Heel Model",
        gif: "https://elsedamstor.blob.core.windows.net/elsedefa…N/0e2042a2-f457-4f60-9822-45c8f18a7707/frames.gif",
        img: "https://elsedamstor.blob.core.windows.net/elsedefa…9a566a-7636-4676-8717-b27bebc6a149/frame_0001.png",
        image: "https://elsedamstor.blob.core.windows.net/elsedefaultprivatestorage/private/BLEND4WB_JSONundefined",
        fit_score: null,
        tour_360: null,
        video: null,
        configuration:
            {
                colors_count: 0,
                components_count: 6,
                configurations_count: 1,
                materials_count: 0,
            }
    }
];

const patchedSdk = {
    getStoreId: function () {
        return "20";
    },
};

const interval = setInterval(() => {
    let sdk = window.session ? window.session.sdk : null;

    if (sdk) {
        clearInterval(interval);
        window.session.sdk = Object.assign(sdk, patchedSdk);
        sdk = window.session.sdk;

        let state = sdk.getState(sdk.states.PRODUCT_LIST);
        state.products = products;

        sdk.product_list._getProducts = function () {
            console.log("run prdoicts list");
            this.set_products_list(products);
            let product = products[0];

            return sdk.product_list.setActiveProduct(product.uuid)
                .then(() => {
                    const res = Promise.all(products.map(sdk.product_list._getProductOptions));
                    console.log(res);
                    return res;
                });
        };

        sdk.collections.setActive = function (collectionId) {
            let collections = sdk.collections.setActiveCollection(collectionId);
            let state = sdk.getState(sdk.states.COLLECTION);
            state.collections = collections;

            return sdk.product_list.loadProductList();
        };
        sdk.product_configurator.getConfiguration = uuid => Promise.resolve(window.configuration);
        sdk.fitting.updateFittngValues = () => Promise.resolve();
        sdk.product_configurator.updatePrice = () => Promise.resolve(100);
        sdk.stores.setActiveStore = function() {
            let store = stores[0];
            const session = sdk.getSession();

            session.store_id = store.id;
            document.body.className =  `${document.body.className} store_${store.id}`;
            sdk.setLanguage(store.language);
            sdk.getElseSdk()._sessionUuid = uuidv4();

            return sdk.getElseSdk().initAPI()
                .then(() => sdk.getGateway().execute('pin_code', ['setCollectionView'], [null]))
                .catch(e => console.log(e));
        };

        state = sdk.getState(sdk.states.COLLECTION);
        state.collections = collections;
        sdk.enableLoader();
        document.getElementById('loader').style.backgroundColor = "black";
        sdk.setState(sdk.states.PRODUCT);
        sdk.stores.setActiveStore(stores[0].id, stores)
            .then(() => sdk.collections.setActive(collections[0].id))
            .then(() => sdk.product_list.continueAction())
    }

}, 0);
