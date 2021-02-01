export class HeroeModel {

    id: string;
    name: string;
    bio: string;
    aparicion: string;
    casa: string;
    poder: string;
    vivo: boolean;
  
    constructor() {
      this.vivo = true;
    }
  }