import { Routes } from '@angular/router';

/* Components to route to */
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDetailComponent } from './components/gallery/images/image-detail/image-detail.component';

export const myRoutes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'image/:id',
        component: ImageDetailComponent
    },
    {
        path: '',
        redirectTo: '/gallery',
        pathMatch: 'full'
    }
]