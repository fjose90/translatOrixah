class Music {
    constructor(id, orixaIds, title, cover, file) {
        this.id = id;
        this.orixaIds = orixaIds; //chave estrangeira
        this.title = title;
        this.cover = cover;
        this.file = file;
    }
}
export default Music;
