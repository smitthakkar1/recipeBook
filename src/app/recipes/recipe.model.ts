/**
 * Created by smitt on 30/05/2017.
 */
export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc:string, imagePath:string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
