class item {
    itemid:number;
    itemname:string;
    itemprice: number;
    category:number;

    constructor(id:number, name:string, price:number, category:number){
        this.itemid = id;
        this.itemname = name;
        this.itemprice = price;
        this.category = category;

    }
    showDetail = ()=> console.log("itenid:" + this.itemid, "itenname:" + this.itemname, "itemprice:" + this.itemprice, "itemcategory:"+ this.category)
}
let ite = new item(1,'Mouse',100,1);
ite.showDetail();