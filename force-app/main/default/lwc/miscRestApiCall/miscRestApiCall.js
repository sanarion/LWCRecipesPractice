import { LightningElement } from 'lwc';

const QUERY_URL = 'https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=';
export default class MiscRestApiCall extends LightningElement {
  searchKey = 'Harry Potter';
  books;
  error;

  handleSearchKeyChange(event) {
    this.searchKey = event.target.value;
  }

  handleSearchClick() {
    console.log('fetch');
    fetch(QUERY_URL + this.searchKey)
      .then(response => {
        console.log(response);
        if (!response.ok) {
          this.error = response;
        }
        return response.json();
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
        this.books = jsonResponse;
      })
      .catch(error => {
        this.error = error;
        this.books = undefined;
      });
  }
}