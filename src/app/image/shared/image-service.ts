import { Injectable } from "@angular/core";

@Injectable()
export class ImageService{
    vidibleImages = [];
    getImages(){
        return this.vidibleImages = IMAGES.slice(0);
    }
    getImage(id:number){
        return IMAGES.slice(0).find(image => image.id == id);
    }    
}

const IMAGES = [
    {"id" : 1, "category" : "philosophy", "caption" : "Jedno ocko sem, druhe tam! Ja sa na Vas pozeram.", "url" : "assets/img/1.png"},
    {"id" : 2, "category" : "philosophy", "caption" : "One must imagine Sisyphus happy.", "url" : "assets/img/2.png"},
    {"id" : 3, "category" : "philosophy", "caption" : "God Is Dead and We Killed Him.", "url" : "assets/img/3.png"},
    {"id" : 4, "category" : "philosophy", "caption" : "To live alone is the fate of all great souls", "url" : "assets/img/4.png"},
    {"id" : 5, "category" : "movies", "caption" : "But inside doesnt matter!", "url" : "assets/img/5.png"},
    {"id" : 6, "category" : "movies", "caption" : "Time is a flat circle.", "url" : "assets/img/6.png"},
    {"id" : 7, "category" : "movies", "caption" : "Do you like our owl?", "url" : "assets/img/7.png"},
    {"id" : 8, "category" : "movies", "caption" : "I like working with you.", "url" : "assets/img/8.png"},
    {"id" : 9, "category" : "movies", "caption" : "Im lesbian with you.", "url" : "assets/img/9.png"},
    {"id" : 10, "category" : "science", "caption" : "Old1 Sagan was better.", "url" : "assets/img/10.png"},
    {"id" : 11, "category" : "science", "caption" : "Are you joking Mr.Feynman", "url" : "assets/img/11.png"},
    {"id" : 12, "category" : "science", "caption" : "Science is great and fuck off!", "url" : "assets/img/12.png"},
    {"id" : 13, "category" : "science", "caption" : "Obviously, Johny Walker Red", "url" : "assets/img/13.png"},
    {"id" : 14, "category" : "science", "caption" : "Lets meditate shit out of this!", "url" : "assets/img/14.png"},
    {"id" : 15, "category" : "retardedHorse", "caption" : "Picture of Retarded Horse", "url" : "assets/img/15.png"},
    {"id" : 16, "category" : "retardedHorse", "caption" : "Another Picture of Retarded Horse", "url" : "assets/img/16.png"}
]