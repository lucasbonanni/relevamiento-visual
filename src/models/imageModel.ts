import { Component, OnInit } from '@angular/core';


export class ImageModel {
    displayName: string;
    image64Data: string;

    constructor() { 
        this.displayName = '';
        this.image64Data = '';
    }

}