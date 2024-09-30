export class Auto {
  private nombre: string;
  private modelo: string;
  private año: number;
  private dominio: string;

  public constructor(
    nombre: string,
    modelo: string,
    año: number,
    dominio: string
  ) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.año = año;
    this.dominio = dominio;
  }
  public getNombre(): string {
    return this.nombre;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public getAño(): number {
    return this.año;
  }
  public getDominio(): string {
    return this.dominio;
  }
  public setNombre(nuevonombre: string): void {
    this.nombre = nuevonombre;
  }
  public setModelo(nuevomodelo: string): void {
    this.modelo = nuevomodelo;
  }
  public setAño(nuevoAño: number): void {
    this.año = nuevoAño;
  }
  public setDominio(nuevoDominio: string): void {
    this.dominio = nuevoDominio;
  }

}
