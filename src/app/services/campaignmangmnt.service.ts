import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CampaignmangmntService {

  API_URL = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) { }

  getAllCampaigns() {
    return this.httpClient.get(`${this.API_URL}/contacts`);
  }

  editCampagin() {
    var contact
    return  this.httpClient.post(`${this.API_URL}/contacts/`,contact);
  }

  deleteCampaign() {
    return this.httpClient.get(`${this.API_URL}/contacts`);
  }
}
