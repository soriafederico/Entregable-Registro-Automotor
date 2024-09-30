import { Auto } from "./Autos";
import { Moto } from "./Motos";
import { Camion } from "./Camion";

export class RegistroAutomotor {
  private nombre: string;
  private numeroDeRegistro: number;
  private autos: Auto[];
  private motos: Moto[];
  private camiones: Camion[];

  public constructor(
    nombre: string,
    numeroDeRegistro: number,
    listaDeAuotos?: Auto[],
    listaDeMotos?: Moto[],
    listaDeCamiones?: Camion[]
  ) {
    this.nombre = nombre;
    this.numeroDeRegistro = numeroDeRegistro;
    if (listaDeAuotos !== undefined) {
      this.autos = listaDeAuotos;
    } else {
      this.autos = [];
    }
    if (listaDeMotos !== undefined) {
      this.motos = listaDeMotos;
    } else {
      this.motos = [];
    }
    if (listaDeCamiones !== undefined) {
      this.camiones = listaDeCamiones;
    } else {
      this.camiones = [];
    }
  }
  getNombre(): string {
    return this.nombre;
  }

  getNumeroDeRegistro(): number {
    return this.numeroDeRegistro;
  }
  cargarAutos(auto: Auto): void {
    this.autos.push(auto);
  }
  cargarMotos(moto: Moto): void {
    this.motos.push(moto);
  }
  cargarCamiones(camion: Camion): void {
    this.camiones.push(camion);
  }

  darDeBajaAutos(nombre: string): void {
    this.autos = this.autos.filter((auto) => auto.getNombre() !== nombre);
  }
  darDeBajaMotos(nombre: string): void {
    this.motos = this.motos.filter((moto) => moto.getNombre() !== nombre);
  }
  darDeBajaCamiones(nombre:string): void {
    this.camiones = this.camiones.filter(
      (camion) => camion.getNombre() !== nombre
    );
  }

public listadoAutos():Auto[]{
  return this.autos
}
public listadoMotos():Moto[]{
  return this.motos
}
public listadoCamiones():Camion[]{
  return this.camiones
}
modificarAuto(auto:Auto):void{
  const index = this.autos.indexOf(auto) 
  this.autos[index]=auto 
}
modificarMoto(moto:Moto):void{
  const index = this.motos.indexOf(moto) 
  this.motos[index]=moto
}
modificarCamion(camion:Camion):void{
  const index = this.camiones.indexOf(camion) 
  this.camiones[index]=camion
}
}
