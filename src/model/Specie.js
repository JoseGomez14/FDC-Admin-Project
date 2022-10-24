/**
 * Esta clase es el modelo de cada especie que trabaja en el sitio, contiene los
 * atributos que se han considerado necesario para los procesos de divulgación y filtrado
 * 
 * Contiene un método que permite transformar la información de la clase en objeto Json
 */
export class Specie {
    #commonName;
    #scientificName;
    #kingdom;
    #className;
    #genus;
    #description;
    #habitat;
    #state;
    #mapUrl;
    #skinColor;
    #size;
    #food;
    #phylum;
    #subphylum;
    #order;
    #family;
    #images;
    #srcImage;
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
    constructor(commonName, scientificName, kingdom, className, genus, description, habitat, state, mapUrl,
        skinColor, size, food, images, sound, srcSound, inaturalistUrl, phylum, subphylum, order, family, srcImage) {
        this.#commonName = commonName;
        this.#scientificName = scientificName;
        this.#kingdom = kingdom || "";
        this.#className = className;
        this.#genus = genus || "";
        this.#description = description || "";
        this.#habitat = habitat || "";
        this.#state = state || "";
        this.#mapUrl = mapUrl || "";
        this.#skinColor = skinColor;
        this.#size = size || 0;
        this.#food = food || "";
        this.#images = images;
        this.#sound = sound;
        this.#inaturalistUrl = inaturalistUrl || "";
        this.#srcSound = srcSound || "";
        this.#phylum = phylum || "";
        this.#subphylum = subphylum || "";
        this.#order = order || "";
        this.#family = family || "";
        this.#srcImage = srcImage || "";
    }

    /**Getters and setters */
    get commonName() {
        return (this.#commonName);
    }

    set commonName(commonName) {
        this.#commonName = commonName;
    }

    get scientificName() {
        return (this.#scientificName);
    }

    set scientificName(scientificName) {
        this.#scientificName = scientificName;
    }

    get className() {
        return (this.#className);
    }

    set className(className) {
        this.#className = className;
    }

    get kingdom() {
        return (this.#kingdom);
    }

    set kingdom(kingdom) {
        this.#kingdom = kingdom;
    }

    get genus() {
        return (this.#genus);
    }

    set genus(genus) {
        this.#genus = genus;
    }

    get description() {
        return (this.#description);
    }

    set description(description) {
        this.#description = description;
    }

    get habitat() {
        return (this.#habitat);
    }

    set habitat(habitat) {
        this.#habitat = habitat;
    }

    get state() {
        return (this.#state);
    }

    set state(state) {
        this.#state = state;
    }

    get mapUrl() {
        return (this.#mapUrl);
    }

    set mapUrl(mapUrl) {
        this.#mapUrl = mapUrl;
    }

    get skinColor() {
        return (this.#skinColor);
    }

    set skinColor(skinColor) {
        this.#skinColor = skinColor;
    }

    get size() {
        return (this.#size);
    }

    set size(size) {
        this.#size = size;
    }

    get food() {
        return (this.#food);
    }

    set food(food) {
        this.#food = food;
    }

    get images() {
        return (this.#images);
    }

    set images(images) {
        this.#images = images;
    }

    get sound() {
        return (this.#sound);
    }

    set sound(sound) {
        this.#sound = sound;
    }

    get inaturalistUrl() {
        return (this.#inaturalistUrl);
    }

    set inaturalistUrl(inaturalistUrl) {
        this.#inaturalistUrl = inaturalistUrl;
    }

    get srcSound() {
        return (this.#srcSound);
    }

    set srcSound(srcSound) {
        this.#srcSound = srcSound;
    }

    get phylum() {
        return (this.#phylum);
    }

    set phylum(phylum) {
        this.#phylum = phylum;
    }

    get subphylum() {
        return (this.#subphylum);
    }

    set subphylum(subphylum) {
        this.#subphylum = subphylum;
    }

    get order() {
        return (this.#order);
    }

    set order(order) {
        this.#order = order;
    }

    get family() {
        return (this.#family);
    }

    set family(family) {
        this.#family = family;
    }

    get srcImage() {
        return (this.#srcImage);
    }

    set srcImage(srcImage) {
        this.#srcImage = srcImage;
    }

    /**
     * Este método permite consolidar la información de la clase en un objeto Json
     * @returns objeto Json con la información de la especie
     */
    toJson() {
        const obj = {
            commonName: this.#commonName,
            scientificName: this.#scientificName,
            kingdom: this.#kingdom,
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
            inaturalistUrl: this.#inaturalistUrl,
            srcSound: this.#srcSound,
            phylum: this.#phylum,
            subphylum: this.#subphylum,
            order: this.#order,
            family: this.#family,
            srcImage: this.#srcImage
        }

        return obj;
    }

}