import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore'
import { BannerPhotos } from '../models/banner_photos.model';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    bannerPhotos: BannerPhotos;

    constructor(private firestore: AngularFirestore) {

    }


    getAllCountries() {
        return [
            { value: 'spain', viewValue: 'España' }
        ]
    }

    getAllStates() {
        return [
            {
                value: "andalucia",
                viewValue: "Andalucía"
            },
            {
                value: "aragon",
                viewValue: "Aragón"
            },
            {
                value: "asturias",
                viewValue: "Principado de Asturias"
            },
            {
                value: "balears",
                viewValue: "Illes Balears"
            },
            {
                value: "canarias",
                viewValue: "Canarias"
            },
            {
                value: "cantabria",
                viewValue: "Cantabria"
            },
            {
                value: "castillayleón",
                viewValue: "Castilla y León"
            },
            {
                value: "castillalamancha",
                viewValue: "Castilla - La Mancha"
            },
            {
                value: "catalunya",
                viewValue: "Catalunya"
            },
            {
                value: "comunitatvalenciana",
                viewValue: "Comunitat Valenciana"
            },
            {
                value: "extremadura",
                viewValue: "Extremadura"
            },
            {
                value: "galicia",
                viewValue: "Galicia"
            },
            {
                value: "madrid",
                viewValue: "Comunidad de Madrid"
            },
            {
                value: "murcia",
                viewValue: "Región de Murcia"
            },
            {
                value: "navarra",
                viewValue: "Comunidad Foral de Navarra"
            },
            {
                value: "paisvasco",
                viewValue: "País Vasco"
            },
            {
                value: "rioja",
                viewValue: "La Rioja"
            },
            {
                value: "ceuta",
                viewValue: "Ceuta"
            },
            {
                value: "melilla",
                viewValue: "Melilla"
            }
        ]
    }

    getAllCities() {
        return [
            {
                value: "andalucia",
                viewValue: "Andalucía"
            },
            {
                value: "aragon",
                viewValue: "Aragón"
            },
            {
                value: "asturias",
                viewValue: "Principado de Asturias"
            },
            {
                value: "balears",
                viewValue: "Illes Balears"
            },
            {
                value: "canarias",
                viewValue: "Canarias"
            },
            {
                value: "cantabria",
                viewValue: "Cantabria"
            },
            {
                value: "castillayleón",
                viewValue: "Castilla y León"
            },
            {
                value: "castillalamancha",
                viewValue: "Castilla - La Mancha"
            },
            {
                value: "catalunya",
                viewValue: "Catalunya"
            },
            {
                value: "comunitatvalenciana",
                viewValue: "Comunitat Valenciana"
            },
            {
                value: "extremadura",
                viewValue: "Extremadura"
            },
            {
                value: "galicia",
                viewValue: "Galicia"
            },
            {
                value: "madrid",
                viewValue: "Comunidad de Madrid"
            },
            {
                value: "murcia",
                viewValue: "Región de Murcia"
            },
            {
                value: "navarra",
                viewValue: "Comunidad Foral de Navarra"
            },
            {
                value: "paisvasco",
                viewValue: "País Vasco"
            },
            {
                value: "rioja",
                viewValue: "La Rioja"
            },
            {
                value: "ceuta",
                viewValue: "Ceuta"
            },
            {
                value: "melilla",
                viewValue: "Melilla"
            }
        ]
    }
}
