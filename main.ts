import { RegistroAutomotor } from "./RegistroAutomotor";
import { Auto } from "./Autos";
import { Moto } from "./Motos";
import { Camion } from "./Camion";

const registroAutomotor1 = new RegistroAutomotor("Olavarría", 1);
const auto1 = new Auto("Fiesta", "SE", 2020, "OPQ050");
const auto2 = new Auto("207", "Allure", 2018, "AC075BC");

const moto1 = new Moto("Tornado", "XS", 2022, "AG101BA");
const moto2 = new Moto("XR", "BA", 2021, "AF099AB");

const camion1 = new Camion("Atego", "2736", 2020, "AE015CA");
const camion2 = new Camion("IVECO", "Tractor", 2018, "AC356GF");

registroAutomotor1.cargarAutos(auto1);
registroAutomotor1.cargarAutos(auto2);

registroAutomotor1.cargarMotos(moto1);
registroAutomotor1.cargarMotos(moto2);

registroAutomotor1.cargarCamiones(camion1);
registroAutomotor1.cargarCamiones(camion2);

//Lista de autos que están inscriptos en el Registro Automotor N°1
console.log(registroAutomotor1.listadoAutos().map((auto) => auto.getDominio()));

//Lista de motos que están inscriptos en el Registro Automotor N°1
console.log(registroAutomotor1.listadoMotos().map((moto) => moto.getDominio()));

//Lista de camiones que están inscriptos en el Registro Automotor N°1
console.log(
  registroAutomotor1.listadoCamiones().map((camion) => camion.getDominio())
);

//Modificar una propeiedad de una instancia y registrarselo al registro automotor
auto1.setDominio("AAA965");
registroAutomotor1.modificarAuto(auto1);
console.log(registroAutomotor1.listadoAutos());

