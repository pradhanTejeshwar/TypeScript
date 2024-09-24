export class myClass1
{
    id:number;
    name:String;
    constructor(i:number,n:String)
    {
        this.id=i;
        this.name=n;
    }

    display():void
    {
        console.log(this.id+"\t"+this.name);
    }
}

var obj=new myClass1(101,"Ronit");
obj.display();