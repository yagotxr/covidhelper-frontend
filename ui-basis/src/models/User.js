export default class User {
    constructor(
      id: string,
      name: string,
      email: string,
      imageUrl: Blob | string
    ) {
      this.id = id || '';
      this.name = name || '';
      this.email = email || '';
      this.imageUrl = imageUrl || '';
    }
  
    name: string;
    
    email: string;
  
    id: string;
  
    imageUrl: Blob | string;
  }
  