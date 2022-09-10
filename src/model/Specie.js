/**
 * Esta clase es el modelo de cada especie que trabaja en el sitio, contiene los
 * atributos que se han considerado necesario para los procesos de divulgación y filtrado
 * 
 * Contiene un método que permite transformar la información de la clase en objeto Json
 */
export class Specie{
    #id;
    #commonName;
    #scientificName;
    #className;
    #genus;
    #description;
    #habitat;
    #state;
    #mapUrl;
    #skinColor;
    #size;
    #food;
    #images;
    #sound;
    #srcSound;
    #inaturalistUrl;

    /**
     * Constructor de la clase
     * @param {string} commonName Nombre común de la especie
     * @param {string} scientificName Nombre científico de la especie
     * @param {string[]} images Conjunto de urls de las imágenes asociadas a la especie
     * @param {string} sound Url del sonido asociado a la especie
     */
    constructor(commonName, scientificName, images, sound){
        this.#commonName = commonName;
        this.#scientificName = scientificName;
        this.#images = images;
        this.#sound = sound;
        this.#id = "";
        this.#className = "";
        this.#genus = "";
        this.#description = "";
        this.#habitat = "";
        this.#state = "";
        this.#mapUrl = "";
        this.#skinColor = "";
        this.#size = "";
        this.#food = "";
        this.#inaturalistUrl = "";
        this.#srcSound = "";
    }

    /**Getters and setters */
    get id(){
        return(this.#id);
    }

    set id(id){
        this.#id = id;
    }
    
    get commonName(){
        return(this.#commonName);
    }

    set commonName(commonName){
        this.#commonName = commonName;
    }
    
    get scientificName(){
        return(this.#scientificName);
    }

    set scientificName(scientificName){
        this.#scientificName = scientificName;
    }
    
    get className(){
        return(this.#className);
    }

    set className(className){
        this.#className = className;
    }
    
    get genus(){
        return(this.#genus);
    }

    set genus(genus){
        this.#genus = genus;
    }
    
    get description(){
        return(this.#description);
    }

    set description(description){
        this.#description = description;
    }
    
    get habitat(){
        return(this.#habitat);
    }

    set habitat(habitat){
        this.#habitat = habitat;
    }
    
    get state(){
        return(this.#state);
    }

    set state(state){
        this.#state = state;
    }
    
    get mapUrl(){
        return(this.#mapUrl);
    }

    set mapUrl(mapUrl){
        this.#mapUrl = mapUrl;
    }
    
    get skinColor(){
        return(this.#skinColor);
    }

    set skinColor(skinColor){
        this.#skinColor = skinColor;
    }
    
    get size(){
        return(this.#size);
    }

    set size(size){
        this.#size = size;
    }
    
    get food(){
        return(this.#food);
    }

    set food(food){
        this.#food = food;
    }
    
    get images(){
        return(this.#images);
    }

    set images(images){
        this.#images = images;
    }
    
    get sound(){
        return(this.#sound);
    }

    set sound(sound){
        this.#sound = sound;
    }
    
    get inaturalistUrl(){
        return(this.#inaturalistUrl);
    }

    set inaturalistUrl(inaturalistUrl){
        this.#inaturalistUrl = inaturalistUrl;
    }
    
    get srcSound(){
        return(this.#srcSound);
    }

    set srcSound(srcSound){
        this.#srcSound = srcSound;
    }

    /**
     * Este método permite consolidar la información de la clase en un objeto Json
     * @returns objeto Json con la información de la especie
     */
    toJson(){
        const obj = {
            id: this.#id,
            commonName: this.#commonName,
            scientificName: this.#scientificName,
            className: this.#className,
            genus: this.#genus,
            description: this.#description,
            habitat: this.#habitat,
            state: this.#state,
            mapUrl: this.#mapUrl,
            skinColor: this.#skinColor,
            size: this.#size,
            food: this.#food,
            images: this.#images,
            sound: this.#sound,
            inaturalistUrl:  this.#inaturalistUrl,
            srcSound: this.#srcSound
        }

        return obj;
    }

}