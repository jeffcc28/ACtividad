import { Injectable } from '@angular/core';

@Injectable()

export class VillanosService {

    private villanos: Villano[] =[
        {
            nombre: "Black Manta (David Hyde)",
            bio: "Es un despiadado mercenario y asesino subacuático que se suele representar como el archienemigo del superhéroe Aquaman. Su Fuerza mejorada; Capacidad de respirar en el agua (a través de branquias artificiales); equipo de alta tecnología, rayos láser",
            img: "assets/img/Black_Manta.png",
            aparicion: "Septiembre de 1967",
            casa:"DC"
          },
          {
            nombre: "Joker",
            bio: "El Joker es uno de los villanos más influyentes en la historia de los cómics, y uno de los mejor reconocidos a nivel masivo. Una amenaza para héroes y villanos, es uno de los antagonistas más siniestros y peligrosos del Universo DC. Su nombre en español quiere decir El Bromista. sus especialidades Coeficiente intelectual de genio, Especialista en sustancias tóxicas, Experto en combate cuerpo a cuerpo, Experto en ingeniería y química, Especialista en explosivos",
            img: "assets/img/joker.png",
            aparicion: "abril de 1940",
            casa:"DC"
          },
          {
            nombre: "Kingpin",
            bio: "El personaje es retratado como uno de los señores del crimen más temidos y poderosos en el Universo Marvel, que normalmente ocupa el puesto de líder supremo de la ciudad de Nueva York. El aspecto característico de Kingpin es su apariencia extraordinariamente robusta, con la mayor parte de su masa compuesta de músculo. Por lo general, usa una chaqueta blanca y lleva un bastón, que puntea con diamantes u otras sustancias duras según sea necesario para ayudarlo en su combate físico. El nombre Kingpin es una referencia al señor del crimen del título en la nomenclatura de la jerga de la mafia. Cerebro del crimen; no tiene habilidades especiales, solo su intelecto y tiene una fuerza y agilidad casi atléticas a pesar de su gran tamaño.",
            img: "assets/img/Kingpin.png",
            aparicion: "julio de 1967",
            casa: "Marvel"
          },
          {
            nombre: "Abominación",
            bio: "Es uno de los principales enemigos del superhéroe Hulk. Abominación es similar a Hulk en términos de fuerza, resistencia, velocidad, durabilidad y capacidad de regeneración lo que lo hace ser inmortal. En contraste con Hulk, él conserva su intelecto después de su transformación, y no puede volver a su forma humana. También posee branquias, las cuales le permiten respirar bajo el agua, y puede entrar en un estado de animación suspendida cuando carece de oxígeno durante largos períodos. Originalmente, la Abominación era dos veces más fuerte que Hulk, pero a diferencia de Hulk su fuerza no aumenta/disminuye en proporción a su nivel de ira, con el resultado de que Hulk tenga una ventaja sobre Blonsky si la pelea dura lo suficiente para que su ira aumente.",
            img: "assets/img/Abominación.png",
            aparicion: "abril de 1967",
            casa:"Marvel"
          },
          {
            nombre: "Sinestro",
            bio: "Sinestro es un exmiembro del Green Lantern Corps que fue dado de baja deshonrosamente por abusar de su poder. Es el archienemigo de Hal Jordan (Literna Verde). posee habilidades similares a los Green Lantern, pero en su caso es con el Miedo y no con la Voluntad.",
            img: "assets/img/Sinestro.png",
            aparicion: "agosto de 1961",
            casa: "DC"
          },
          {
            nombre: "GreenGoblin",
            bio: "El Duende Verde es un supervillano con temática de Halloween cuyas armas se asemejan a murciélagos, fantasmas y linternas. sus Habilidades son Fuerza sobrehumana, resistencia, durabilidad, agilidad y reflejos debido a la ingesta de la Fórmula Duende, Factor de curación regenerativa, Intelecto a nivel de genio ,Habilidad en combate cuerpo a cuerpo y artes marciales.",
            img: "assets/img/Duende_Verde.png",
            aparicion: "Julio 1964",
            casa: "Marvel"
          },
          {
            nombre: "Wolverine",
            bio: "es un mutante que posee unas capacidades físicas sobrehumanas mezcladas con las de una bestia, cuyas más notables son el tiempo de recuperación superior y sentidos muy agudizados. Tiene tendencias homicidas y sociopatía. Ha pertenecido a la Hermandad de Mutantes, a los Merodeadores, los X-Men y Factor X.",
            img: "assets/img/Dientes_sable.png",
            aparicion: "agosto de 1977",
            casa: "Marvel"
          }


    ];
      constructor(){
        console.log("Servicio listo para usar!!!");
      }
      getVillanos():Villano[] {
        return this.villanos;
      }
    
      getVillano(idx: string) {
       return this.villanos[idx];
      }
      
    buscarVilanos( termino:string ):Villano[]{

    let villanosArr:Villano[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.villanos.length; i ++ ){

      let villano = this.villanos[i];

      let nombre = villano.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        villano.idx = i;
        villanosArr.push( villano )
      }

    }

    return villanosArr;

  }

}

export interface Villano{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
  
  }