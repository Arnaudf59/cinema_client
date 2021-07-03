import { Cinema } from "./cinema";
import { Film } from "./film";
import { Salle } from "./salle";

export class Seance {

    public _id : String;
    public date : Date;
    public numSalles : Salle;
    public cinema : Cinema;
    public Film : Film;
}