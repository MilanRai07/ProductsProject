import { configureStore } from '@reduxjs/toolkit';
import { ProductApi } from './services/ProductApi';
import { CategoryApi } from './services/CategoryApi';
import { DesignerApi } from './services/DesignerApi';
import { BrandApi } from './services/BrandApi';
import { LocationApi } from './services/LocationApi';
import { BlogsApi } from './services/BlogsApi';
import { AwardsApi } from './services/Awards';
import { CatalogApi } from './services/Catalog';
import { GalleryApi } from './services/GalleryApi';
import { PopUpApi } from './services/PopUpApi';
import { SubscribePostApi } from './services/SubscribePost';
import { TestimonialApi } from './services/Testimonials';

export const Store = configureStore({
    reducer: {
        [ProductApi.reducerPath]: ProductApi.reducer,
        [CategoryApi.reducerPath]: CategoryApi.reducer,
        [DesignerApi.reducerPath]: DesignerApi.reducer,
        [BrandApi.reducerPath]: BrandApi.reducer,
        [LocationApi.reducerPath]: LocationApi.reducer,
        [BlogsApi.reducerPath]: BlogsApi.reducer,
        [AwardsApi.reducerPath]: AwardsApi.reducer,
        [CatalogApi.reducerPath]: CatalogApi.reducer,
        [GalleryApi.reducerPath]: GalleryApi.reducer,
        [PopUpApi.reducerPath]: PopUpApi.reducer,
        [SubscribePostApi.reducerPath]: SubscribePostApi.reducer,
        [TestimonialApi.reducerPath]: TestimonialApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductApi.middleware, CategoryApi.middleware,
            DesignerApi.middleware, BrandApi.middleware, LocationApi.middleware, BlogsApi.middleware,
            AwardsApi.middleware, CatalogApi.middleware, GalleryApi.middleware, PopUpApi.middleware,
            SubscribePostApi.middleware, TestimonialApi.middleware
        ),
});

export default Store;
