class Music {
    constructor(id, orixaIds, name, cover, file) {
        this.id = id;
        this.orixaIds = orixaIds; //chave estrangeira
        this.name = name;
        this.cover = cover;
        this.file = file;
    }
}
export default Music;
